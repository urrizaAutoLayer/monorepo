import { providers } from "ethers";
import { BaseLogger } from "pino";
import { getUuid } from "@connext/nxtp-utils";

import { DEFAULT_CONFIG } from "./config";
import { ChainRpcProvider } from "./provider";
import { FullTransaction, GasPrice, WriteTransaction } from "./types";
import { AlreadyMined, TransactionReplaced, TransactionReverted, TransactionServiceFailure } from "./error";

/**
 * @classdesc Handles the sending of a single transaction and making it easier to monitor the execution/rebroadcast
 */
export class Transaction {
  // We use a unique ID to internally track a transaction through logs.
  public id: string = getUuid();
  // Response that was accepted on-chain (this reference will be used in the event that replacements are made).
  private response: providers.TransactionResponse | null = null;
  // Responses, in the order of attempts made for this tx.
  public responses: providers.TransactionResponse[] = [];
  // Receipt that we received for the on-chain transaction that was mined with
  // the desired number of confirmations.
  public receipt?: providers.TransactionReceipt;

  // TODO: private setter
  // Timestamp initially set on creation, but will be updated each time submit() is called.
  public timestamp: number = Date.now();

  // This error will be set in the instance of a failure.
  private _error: Error | null = null;
  public get error(): Error | null {
    return this._error;
  }

  // Which transaction attempt we are on.
  private _attempt = 0;
  /**
   * Getter to return the internal attempt
   * @returns The attempt # of the transction
   */
  public get attempt(): number {
    return this._attempt;
  }

  // Whether this transaction has been validated (received at least 1 confirmation).
  // This flag will be flipped once validate() is called and validation is successful.
  private _validated = false;
  public get validated(): boolean {
    return this._validated;
  }

  /**
   * Specifies whether the transaction has been submitted.
   * @returns boolean indicating whether the transaction is submitted.
   */
  public get didSubmit(): boolean {
    return this.responses.length > 0;
  }

  /**
   * Specifies whether the transaction has been completed - meaning that it's been
   * mined and has received the target number of confirmations.
   * @returns boolean indicating whether the transaction is completed.
   */
  public get didFinish(): boolean {
    return !!this.receipt && this.receipt.confirmations >= this.provider.confirmationsRequired;
  }

  /**
   * Retrieves all data needed to format a full transaction, including current gas price set, nonce, etc.
   */
  public get data(): FullTransaction {
    return {
      ...this.minTx,
      gasPrice: this.gasPrice.get(),
      nonce: this.nonce,
      gasLimit: this.gasPrice.limit,
    };
  }

  /**
   * A data structure used for management of the lifecycle of one on-chain transaction.
   *
   * @param logger The pino.BaseLogger instance we use for logging.
   * @param provider The ChainRpcProvider instance we use for interfacing with the chain.
   * @param minTx The minimum transaction data required to send a transaction.
   * @param nonce Assigned nonce number for this transaction.
   * @param gasPrice The GasPrice tracker instance.
   */
  constructor(
    private readonly logger: BaseLogger,
    private readonly provider: ChainRpcProvider,
    public readonly minTx: WriteTransaction,
    public readonly nonce: number,
    public readonly gasPrice: GasPrice,
  ) {
    this.logger.debug(
      {
        id: this.id,
        data: this.data,
        timestamp: this.timestamp,
      },
      "New transaction created.",
    );
  }

  /**
   * Makes a single attempt to send this transaction based on its current data.
   *
   * @returns A TransactionResponse once the transaction has been mined
   */
  public async submit(): Promise<providers.TransactionResponse> {
    const method = this.submit.name;

    // Check to make sure that, if this is a replacement tx, the replacement gas is higher.
    if (this.responses.length > 0) {
      // NOTE: There *should* always be a gasPrice in every response, but it is
      // defined as optional. Handle that case?
      // If there isn't a lastPrice, we're going to skip this validation step.
      const lastPrice = this.responses[this.responses.length - 1].gasPrice;
      if (lastPrice && this.gasPrice.get().lte(lastPrice)) {
        // NOTE: We do not set this._error here, as the transaction hasn't failed - just the txservice.
        throw new TransactionServiceFailure("Gas price was not incremented from last transaction.", { method });
      }
    }

    // Check to make sure we haven't already mined this transaction.
    if (this.didFinish) {
      // NOTE: We do not set this._error here, as the transaction hasn't failed - just the txservice.
      throw new TransactionServiceFailure("Submit was called but transaction is already completed.", { method });
    }

    // Increment transaction attempts made.
    this._attempt++;
    this.timestamp = Date.now();

    // Send the tx.
    let result = await this.provider.sendTransaction(this.data);

    // If the error is a NonceExpired error and we haven't submitted yet, we want to keep
    // trying to send here. Reason being that it may take a few tries to get the correct
    // transaction count back from the provider.
    if (!this.didSubmit) {
      let nonceErrorCount = 0;
      while (
        result.isErr() &&
        result.error instanceof AlreadyMined &&
        result.error.reason === AlreadyMined.reasons.NonceExpired &&
        // TODO: Hardcoded maxNonceErrorCount
        nonceErrorCount < 10
      ) {
        nonceErrorCount++;
        this.logger.warn({ id: this.id, nonceErrorCount }, "Received nonce expired error.");
        result = await this.provider.sendTransaction(this.data);
      }
    }

    // If we end up with a different error, it should be thrown here.
    if (result.isErr()) {
      this._error = result.error;
      throw result.error;
    }

    const response = result.value;

    // Add this response to our local response history.
    this.responses.push(response);
    return response;
  }

  public async validate() {
    const method = this.validate.name;

    // Ensure we've submitted at least 1 tx.
    if (!this.didSubmit) {
      throw new TransactionServiceFailure("Transaction validate was called, but no transaction has been sent.", {
        method,
        id: this.id,
      });
    }

    // Ensure we don't already have a receipt.
    if (this.receipt != null) {
      throw new TransactionServiceFailure("Transaction validate was called, but we already have receipt.", {
        method,
        id: this.id,
      });
    }

    // Now we attempt to confirm the first response among our attempts. If it fails due to replacement,
    // we'll get back the replacement's receipt from confirmTransaction.
    this.response = this.response ?? this.responses[0];

    // Get receipt for tx with at least 1 confirmation. If it times out (using default, configured timeout),
    // it will throw a TransactionTimeout error.
    const result = await this.provider.confirmTransaction(this.response, 1, this.timeUntilExpiry());
    if (result.isErr()) {
      const { error } = result;
      if (error instanceof TransactionReplaced) {
        // TODO: #150 Should we handle error.reason?:
        // error.reason - a string reason; one of "repriced", "cancelled" or "replaced"
        // error.receipt - the receipt of the replacement transaction (a TransactionReceipt)
        this.receipt = error.receipt;
        // error.replacement - the replacement transaction (a TransactionResponse)
        this.response = error.replacement;
        this._validated = true;
      } else if (error instanceof TransactionReverted) {
        // NOTE: This is the official receipt with status of 0, so it's safe to say the
        // transaction was in fact reverted and we should throw here.
        this.receipt = error.receipt;
        this._validated = true;
        this._error = error;
        throw error;
      } else {
        this._error = error;
        throw error;
      }
    } else {
      this.receipt = result.value;
      this._validated = true;
      // Sanity checks.
      if (this.receipt == null) {
        // Receipt is undefined or null. This normally should never occur.
        throw new TransactionServiceFailure("Unable to obtain receipt: ethers responded with null.", {
          method,
          receipt: this.receipt,
          hash: this.response.hash,
          id: this.id,
        });
      } else if (this.receipt.status === 0) {
        // This should never occur. We should always get a TransactionReverted error in this event.
        throw new TransactionServiceFailure("Transaction was reverted but TransactionReverted error was not thrown.", {
          method,
          receipt: this.receipt,
          hash: this.response.hash,
          id: this.id,
        });
      } else if (this.receipt.confirmations < 1) {
        // Again, should never occur.
        throw new TransactionServiceFailure("Receipt did not have any confirmations, should have timed out!", {
          method,
          receipt: this.receipt,
          hash: this.response.hash,
          id: this.id,
        });
      }
    }
  }

  /**
   * Bump the gas price for this tx up by the configured percentage.
   */
  public bumpGasPrice() {
    const currentPrice = this.gasPrice.get();
    // Scale up gas by percentage as specified by config.
    // TODO: Replace with actual config.
    const bumpedGasPrice = currentPrice.add(currentPrice.mul(DEFAULT_CONFIG.gasReplacementBumpPercent).div(100)).add(1);
    this.gasPrice.set(bumpedGasPrice);
    this.logger.info(
      {
        method: this.bumpGasPrice.name,
        previousGasPrice: currentPrice.toString(),
        newGasPrice: bumpedGasPrice.toString(),
      },
      "Bumping tx gas price for reattempt.",
    );
  }

  private timeUntilExpiry(): number {
    const expiry = this.timestamp + this.provider.confirmationTimeout;
    return expiry - Date.now();
  }

  /**
   * Makes an attempt to confirm this transaction, waiting up to a designated period to achieve
   * a desired number of confirmation blocks. If confirmation times out, throws TimeoutError.
   * If all txs, including replacements, are reverted, throws TransactionReverted.
   *
   * @privateRemarks
   *
   * Ultimately, we should see 1 tx accepted and confirmed, and the rest - if any - rejected (due to
   * replacement) and confirmed. If at least 1 tx has been accepted and received 1 confirmation, we will
   * wait an extended period for the desired number of confirmations. If no further confirmations appear
   * (which is extremely unlikely), we throw a TransactionServiceFailure.NotEnoughConfirmations.
   *
   * @returns A TransactionReceipt (or undefined if it did not confirm).
   */
  public async confirm(): Promise<providers.TransactionReceipt> {
    const method = this.confirm.name;

    // Ensure we've submitted at least 1 tx.
    if (!this.didSubmit) {
      throw new TransactionServiceFailure("Transaction confirm was called, but no transaction has been sent.", {
        method,
        id: this.id,
      });
    }

    // Ensure we've been validated.
    if (!this.validated || this.receipt == null || this.response == null) {
      throw new TransactionServiceFailure("Transaction confirm was called, but transaction has not been validated.", {
        method,
        receipt: this.receipt ? this.receipt.transactionHash : null,
        response: this.response ? this.response.hash : null,
        id: this.id,
      });
    }

    const response = this.response;
    if (this.receipt.confirmations < this.provider.confirmationsRequired) {
      // Now we'll wait (up until an absurd amount of time) to receive all confirmations needed.
      // TODO: #151 Maybe set timeout to confirmationsRequired * confirmationTimeout...?
      const result = await this.provider.confirmTransaction(response, undefined, 60_000 * 20);
      if (result.isErr()) {
        // No errors should occur during this confirmation attempt.
        throw new TransactionServiceFailure(TransactionServiceFailure.reasons.NotEnoughConfirmations, {
          method,
          receipt: this.receipt,
          error: result.error,
          hash: response.hash,
          id: this.id,
        });
      }
      this.receipt = result.value;
    }

    return this.receipt;
  }
}

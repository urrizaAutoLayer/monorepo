import { Signer, providers, BigNumber, utils } from "ethers";
import { BaseLogger } from "pino";
import { Evt } from "evt";
import { delay, getUuid, RequestContext } from "@connext/nxtp-utils";

import { TransactionServiceConfig, validateTransactionServiceConfig, DEFAULT_CONFIG, ChainConfig } from "./config";
import { ReadTransaction, WriteTransaction } from "./types";
import { ChainRpcProvider } from "./provider";
import { Transaction } from "./transaction";
import { TransactionDispatch } from "./dispatch";
import {
  RpcError,
  TransactionError,
  TransactionReverted,
  TransactionServiceFailure,
} from "./error";

export type TxServiceSubmittedEvent = {
  response: providers.TransactionResponse;
};

export type TxServiceConfirmedEvent = {
  receipt: providers.TransactionReceipt;
};

export type TxServiceFailedEvent = {
  error: TransactionError;
  receipt?: providers.TransactionReceipt;
};

export const NxtpTxServiceEvents = {
  TransactionAttemptSubmitted: "TransactionAttemptSubmitted",
  TransactionConfirmed: "TransactionConfirmed",
  TransactionFailed: "TransactionFailed",
} as const;
export type NxtpTxServiceEvent = typeof NxtpTxServiceEvents[keyof typeof NxtpTxServiceEvents];

export interface NxtpTxServiceEventPayloads {
  [NxtpTxServiceEvents.TransactionAttemptSubmitted]: TxServiceSubmittedEvent;
  [NxtpTxServiceEvents.TransactionConfirmed]: TxServiceConfirmedEvent;
  [NxtpTxServiceEvents.TransactionFailed]: TxServiceFailedEvent;
}

/**
 * @classdesc Handles submitting, confirming, and bumping gas of arbitrary transactions onchain. Also performs onchain reads with embedded retries
 */
export class TransactionService {
  // TODO: #152 Add an object/dictionary statically to the class prototype mapping the
  // signer to a flag indicating whether there is an instance using that signer.
  // This will prevent two queue instances using the same signer and therefore colliding.
  // Idea is to have essentially a modified 'singleton'-like pattern.
  // private static _instances: Map<string, TransactionService> = new Map();

  /// Events emitted in lifecycle of TransactionService's sendTx.
  private evts: { [K in NxtpTxServiceEvent]: Evt<NxtpTxServiceEventPayloads[K]> } = {
    [NxtpTxServiceEvents.TransactionAttemptSubmitted]: Evt.create<TxServiceSubmittedEvent>(),
    [NxtpTxServiceEvents.TransactionConfirmed]: Evt.create<TxServiceConfirmedEvent>(),
    [NxtpTxServiceEvents.TransactionFailed]: Evt.create<TxServiceFailedEvent>(),
  };

  private config: TransactionServiceConfig;
  private providers: Map<number, ChainRpcProvider> = new Map();
  // TODO: Don't like this. Maybe we should replace above map with just this one,
  // and we could either grab the core provider from dispatch or just turn dispatch into ChainRpcProvider.
  private dispatches: Map<number, TransactionDispatch> = new Map();

  /**
   * A singleton-like interface for handling all logic related to conducting on-chain transactions.
   *
   * @remarks
   * Using the Signer instance passed into this constructor outside of the context of this
   * class is not recommended, and may cause issues with nonce being tracked improperly
   * due to the caching mechanisms used here.
   *
   * @param logger The pino.BaseLogger used for logging.
   * @param signer The Signer or Wallet instance, or private key, for signing transactions.
   * @param config At least a partial configuration used by TransactionService for chains,
   * providers, etc.
   */
  constructor(private readonly logger: BaseLogger, signer: string | Signer, config: Partial<TransactionServiceConfig>) {
    // TODO: #152 See above TODO. Should we have a getInstance() method and make constructor private ??
    // const _signer: string = typeof signer === "string" ? signer : signer.getAddress();
    // if (TransactionService._instances.has(_signer)) {}

    // Set up the config.
    this.config = Object.assign(DEFAULT_CONFIG, config);
    validateTransactionServiceConfig(this.config);
    // For each chain ID / provider, map out all the utils needed for each chain.
    const chains = this.config.chains;
    Object.keys(chains).forEach((chainId) => {
      // Get this chain's config.
      const chain: ChainConfig = chains[chainId];
      // Ensure at least one provider is configured.
      if (chain.providers.length === 0) {
        const error = `Provider configurations not found for chainID: ${chainId}`;
        this.logger.error({ chainId, providers }, error);
        throw new TransactionServiceFailure(error);
      }
      const chainIdNumber = parseInt(chainId);
      const provider = new ChainRpcProvider(this.logger, signer, chainIdNumber, chain, this.config);
      this.providers.set(chainIdNumber, provider);
      this.dispatches.set(chainIdNumber, new TransactionDispatch(this.logger, provider));
    });
  }

  /**
   * Send specified transaction on specified chain and wait for the configured number of confirmations.
   * Will emit events throughout its lifecycle.
   *
   * @param tx - Tx to send
   * @param tx.chainId - Chain to send transaction on
   * @param tx.to - Address to send tx to
   * @param tx.value - Value to send tx with
   * @param tx.data - Calldata to execute
   * @param tx.from - (optional) Account to send tx from
   *
   * @returns TransactionReceipt once the tx is mined if the transaction was successful.
   *
   * @throws TransactionError with one of the reasons specified in ValidSendErrors. If another error occurs,
   * something went wrong within TransactionService process.
   * @throws TransactionServiceFailure, which indicates something went wrong with the service logic.
   */
  public async sendTx(tx: WriteTransaction, requestContext: RequestContext): Promise<providers.TransactionReceipt> {
    const method = this.sendTx.name;
    const methodId = getUuid();
    this.logger.info({ method, methodId, requestContext, tx }, "Method start");

    // TODO: GetDispatch function!
    const dispatch = this.dispatches.get(tx.chainId);
    if (!dispatch) {
      throw new Error("Blah blah no dispatch for chain ID wow");
    }

    const transaction = await dispatch.submit(tx);
    // -> TX SUBMITTED. TODO: emit
    try {
      // TODO: Hardcoding final expiry as 30 minutes from now.
      const finalExpiry = Date.now() + 30 * 60 * 1000;
      // wait and listen for transaction.validated (poll/check the stack every 1s).
      while (!transaction.validated) {
        delay(1000);
        if (transaction.error) {
          throw transaction.error;
        } else if (Date.now() > finalExpiry) {
          // TODO: If this occurrs, it may indicate we have lost connection with providers and we ought to shut down the system until
          // connection is regained.
          throw new TransactionServiceFailure("Final expiry occurred.", { transaction: transaction.data });
        }
      }

      await this.confirmTransaction(transaction, requestContext);
      // -> TX CONFIRMED. TODO: emit
    } catch (error) {
      this.handleFail(error, transaction, requestContext);
      // Check to see if we have a normal error here.
      const acceptableErrors = [TransactionReverted, RpcError, TransactionServiceFailure];
      if (acceptableErrors.some((e) => error instanceof e)) {
        // If it is a normal error, we throw as is.
        throw error;
      }
      // If we didn't get back a normal error, wrap it in a TransactionServiceFailure.
      throw new TransactionServiceFailure(error.message, error);
    }

    return transaction.receipt!;
  }

  /**
   * Create a non-state changing contract call. Returns hexdata that needs to be decoded.
   *
   * @param tx - ReadTransaction to create contract call
   * @param tx.chainId - Chain to read transaction on
   * @param tx.to - Address to execute read on
   * @param tx.data - Calldata to send
   *
   * @returns Encoded hexdata representing result of the read from the chain.
   */
  public async readTx(tx: ReadTransaction): Promise<string> {
    const result = await this.getProvider(tx.chainId).readTransaction(tx);
    if (result.isErr()) {
      throw result.error;
    } else {
      return result.value;
    }
  }

  /**
   * Gets the native asset balance for an address
   *
   * @param chainId - The ID of the chain for which this call is related.
   * @param address - The hexadecimal string address whose balance we are getting.
   * @returns BigNumber representing the current value held by the wallet at the
   * specified address.
   */
  public async getBalance(chainId: number, address: string): Promise<BigNumber> {
    const result = await this.getProvider(chainId).getBalance(address);
    if (result.isErr()) {
      throw result.error;
    } else {
      return result.value;
    }
  }

  /**
   * Gets the decimals for an asset by chainId
   *
   * @param chainId - The ID of the chain for which this call is related.
   * @param assetId - The hexadecimal string address whose decimals we are getting.
   * @returns number representing the decimals of the asset
   */
  public async getDecimalsForAsset(chainId: number, assetId: string): Promise<number> {
    const result = await this.getProvider(chainId).getDecimalsForAsset(assetId);
    if (result.isErr()) {
      throw result.error;
    } else {
      return result.value;
    }
  }

  /**
   * Cets the current blocktime
   *
   * @param chainId - The ID of the chain for which this call is related.
   * @returns number representing the current blocktime
   */
  public async getBlockTime(chainId: number): Promise<number> {
    const result = await this.getProvider(chainId).getBlockTime();
    if (result.isErr()) {
      throw result.error;
    } else {
      return result.value;
    }
  }

  /// LISTENER METHODS
  /**
   * Attaches a callback to the emitted event
   *
   * @param event - The event name to attach a handler for
   * @param callback - The callback to invoke on event emission
   * @param filter - (optional) A filter where callbacks are only invoked if the filter returns true
   * @param timeout - (optional) A timeout to detach the handler within. I.e. if no events fired within the timeout, then the handler is detached
   */
  public attach<T extends NxtpTxServiceEvent>(
    event: T,
    callback: (data: NxtpTxServiceEventPayloads[T]) => void,
    filter: (data: NxtpTxServiceEventPayloads[T]) => boolean = (_data: NxtpTxServiceEventPayloads[T]) => true,
    timeout?: number,
  ): void {
    const args = [timeout, callback].filter((x) => !!x);
    this.evts[event].pipe(filter).attach(...(args as [number, any]));
  }

  /**
   * Attaches a callback to the emitted event that will be executed one time and then detached.
   *
   * @param event - The event name to attach a handler for
   * @param callback - The callback to invoke on event emission
   * @param filter - (optional) A filter where callbacks are only invoked if the filter returns true
   * @param timeout - (optional) A timeout to detach the handler within. I.e. if no events fired within the timeout, then the handler is detached
   *
   */
  public attachOnce<T extends NxtpTxServiceEvent>(
    event: T,
    callback: (data: NxtpTxServiceEventPayloads[T]) => void,
    filter: (data: NxtpTxServiceEventPayloads[T]) => boolean = (_data: NxtpTxServiceEventPayloads[T]) => true,
    timeout?: number,
  ): void {
    const args = [timeout, callback].filter((x) => !!x);
    this.evts[event].pipe(filter).attachOnce(...(args as [number, any]));
  }

  /**
   * Removes all attached handlers from the given event.
   *
   * @param event - (optional) The event name to remove handlers from. If not provided, will detach handlers from *all* subgraph events
   */
  public detach<T extends NxtpTxServiceEvent>(event?: T): void {
    if (event) {
      this.evts[event].detach();
      return;
    }
    Object.values(this.evts).forEach((evt) => evt.detach());
  }

  /**
   * Returns a promise that resolves when the event matching the filter is emitted
   *
   * @param event - The event name to wait for
   * @param timeout - The ms to continue waiting before rejecting
   * @param filter - (optional) A filter where the promise is only resolved if the filter returns true
   *
   * @returns Promise that will resolve with the event payload once the event is emitted, or rejects if the timeout is reached.
   *
   */
  public waitFor<T extends NxtpTxServiceEvent>(
    event: T,
    timeout: number,
    filter: (data: NxtpTxServiceEventPayloads[T]) => boolean = (_data: NxtpTxServiceEventPayloads[T]) => true,
  ): Promise<NxtpTxServiceEventPayloads[T]> {
    return this.evts[event].pipe(filter).waitFor(timeout) as Promise<NxtpTxServiceEventPayloads[T]>;
  }

  /// HELPERS
  /**
   * Helper to wrap getting provider for specified chain ID.
   * @param chainId The ID of the chain for which we want a provider.
   * @returns The ChainRpcProvider for that chain.
   * @throws TransactionError.reasons.ProviderNotFound if provider is not configured for
   * that ID.
   */
  private getProvider(chainId: number): ChainRpcProvider {
    // Ensure that a signer, provider, etc are present to execute on this chainId.
    if (!this.providers.has(chainId)) {
      throw new TransactionServiceFailure(
        `No provider was found for chain ${chainId}! Make sure this chain's providers are configured.`,
      );
    }
    return this.providers.get(chainId)!;
  }

  /**
   * Handle logging and event emitting on tx submit attempt.
   * @param response The transaction response received back from that attempt.
   */
  private async submitTransaction(transaction: Transaction, context: RequestContext) {
    const method = this.sendTx.name;
    this.logger.debug({ method, context, id: transaction.id, attempt: transaction.attempt }, "Submitting tx...");
    const response = await transaction.submit();
    const gas = response.gasPrice ?? transaction.data.gasPrice;
    this.logger.info(
      {
        method,
        context,
        id: transaction.id,
        attempt: transaction.attempt,
        hash: response.hash,
        gas: `${utils.formatUnits(gas, "gwei")} gwei`,
        gasLimit: transaction.data.gasLimit.toString(),
        nonce: response.nonce,
      },
      "Tx submitted.",
    );
    this.evts[NxtpTxServiceEvents.TransactionAttemptSubmitted].post({ response });
  }

  /**
   * Handle logging and event emitting on tx confirmation.
   * @param receipt The transaction receipt received back.
   */
  private async confirmTransaction(transaction: Transaction, context: RequestContext) {
    const method = this.sendTx.name;

    this.logger.debug({ method, context, id: transaction.id, attempt: transaction.attempt }, "Confirming tx...");
    const receipt = await transaction.confirm();
    this.logger.info(
      {
        method,
        context,
        id: transaction.id,
        attempt: transaction.attempt,
        receipt: {
          gasUsed: receipt.gasUsed.toString(),
          transactionHash: receipt.transactionHash,
          blockHash: receipt.blockHash,
        },
      },
      "Tx mined.",
    );
    this.evts[NxtpTxServiceEvents.TransactionConfirmed].post({ receipt });
  }

  /**
   * Handle logging and event emitting on tx failure.
   * @param error The TransactionError that occurred during the transaction lifecycle.
   * @param receipt The transaction receipt received back from reverted tx, if
   * applicable.
   */
  private handleFail(error: TransactionError, transaction: Transaction, context: RequestContext) {
    const method = this.sendTx.name;
    const receipt = transaction.receipt;
    this.logger.error({ method, id: transaction.id, receipt, context, error }, "Tx failed.");
    this.evts[NxtpTxServiceEvents.TransactionFailed].post({ error, receipt });
  }
}

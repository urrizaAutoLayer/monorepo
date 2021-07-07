/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TransactionManagerInterface extends ethers.utils.Interface {
  functions: {
    "MIN_TIMEOUT()": FunctionFragment;
    "activeTransactionBlocks(address,uint256)": FunctionFragment;
    "addLiquidity(uint256,address)": FunctionFragment;
    "cancel(tuple,uint256,bytes)": FunctionFragment;
    "chainId()": FunctionFragment;
    "fulfill(tuple,uint256,bytes,bytes)": FunctionFragment;
    "prepare(tuple,uint256,uint256,bytes,bytes,bytes)": FunctionFragment;
    "removeLiquidity(uint256,address,address)": FunctionFragment;
    "routerBalances(address,address)": FunctionFragment;
    "variantTransactionData(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MIN_TIMEOUT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "activeTransactionBlocks",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "cancel",
    values: [
      {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fulfill",
    values: [
      {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "prepare",
    values: [
      {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        callDataHash: BytesLike;
        transactionId: BytesLike;
      },
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [BigNumberish, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "routerBalances",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "variantTransactionData",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "MIN_TIMEOUT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activeTransactionBlocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fulfill", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prepare", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "routerBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "variantTransactionData",
    data: BytesLike
  ): Result;

  events: {
    "LiquidityAdded(address,address,uint256)": EventFragment;
    "LiquidityRemoved(address,address,uint256,address)": EventFragment;
    "TransactionCancelled(address,address,bytes32,tuple,uint256,address)": EventFragment;
    "TransactionFulfilled(address,address,bytes32,tuple,uint256,bytes,address)": EventFragment;
    "TransactionPrepared(address,address,bytes32,tuple,address,bytes,bytes,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "LiquidityAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LiquidityRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionFulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransactionPrepared"): EventFragment;
}

export class TransactionManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TransactionManagerInterface;

  functions: {
    MIN_TIMEOUT(overrides?: CallOverrides): Promise<[BigNumber]>;

    activeTransactionBlocks(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    addLiquidity(
      amount: BigNumberish,
      assetId: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancel(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    chainId(overrides?: CallOverrides): Promise<[BigNumber]>;

    fulfill(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      callData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    prepare(
      invariantData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        callDataHash: BytesLike;
        transactionId: BytesLike;
      },
      amount: BigNumberish,
      expiry: BigNumberish,
      encryptedCallData: BytesLike,
      encodedBid: BytesLike,
      bidSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLiquidity(
      amount: BigNumberish,
      assetId: string,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    routerBalances(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    variantTransactionData(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  MIN_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>;

  activeTransactionBlocks(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  addLiquidity(
    amount: BigNumberish,
    assetId: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancel(
    txData: {
      user: string;
      router: string;
      sendingAssetId: string;
      receivingAssetId: string;
      sendingChainFallback: string;
      receivingAddress: string;
      callTo: string;
      callDataHash: BytesLike;
      transactionId: BytesLike;
      sendingChainId: BigNumberish;
      receivingChainId: BigNumberish;
      amount: BigNumberish;
      expiry: BigNumberish;
      preparedBlockNumber: BigNumberish;
    },
    relayerFee: BigNumberish,
    signature: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  chainId(overrides?: CallOverrides): Promise<BigNumber>;

  fulfill(
    txData: {
      user: string;
      router: string;
      sendingAssetId: string;
      receivingAssetId: string;
      sendingChainFallback: string;
      receivingAddress: string;
      callTo: string;
      callDataHash: BytesLike;
      transactionId: BytesLike;
      sendingChainId: BigNumberish;
      receivingChainId: BigNumberish;
      amount: BigNumberish;
      expiry: BigNumberish;
      preparedBlockNumber: BigNumberish;
    },
    relayerFee: BigNumberish,
    signature: BytesLike,
    callData: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  prepare(
    invariantData: {
      user: string;
      router: string;
      sendingAssetId: string;
      receivingAssetId: string;
      sendingChainFallback: string;
      receivingAddress: string;
      callTo: string;
      sendingChainId: BigNumberish;
      receivingChainId: BigNumberish;
      callDataHash: BytesLike;
      transactionId: BytesLike;
    },
    amount: BigNumberish,
    expiry: BigNumberish,
    encryptedCallData: BytesLike,
    encodedBid: BytesLike,
    bidSignature: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLiquidity(
    amount: BigNumberish,
    assetId: string,
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  routerBalances(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  variantTransactionData(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    MIN_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>;

    activeTransactionBlocks(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addLiquidity(
      amount: BigNumberish,
      assetId: string,
      overrides?: CallOverrides
    ): Promise<void>;

    cancel(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: string;
        transactionId: string;
        sendingChainId: BigNumber;
        receivingChainId: BigNumber;
        amount: BigNumber;
        expiry: BigNumber;
        preparedBlockNumber: BigNumber;
      }
    >;

    chainId(overrides?: CallOverrides): Promise<BigNumber>;

    fulfill(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      callData: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: string;
        transactionId: string;
        sendingChainId: BigNumber;
        receivingChainId: BigNumber;
        amount: BigNumber;
        expiry: BigNumber;
        preparedBlockNumber: BigNumber;
      }
    >;

    prepare(
      invariantData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        callDataHash: BytesLike;
        transactionId: BytesLike;
      },
      amount: BigNumberish,
      expiry: BigNumberish,
      encryptedCallData: BytesLike,
      encodedBid: BytesLike,
      bidSignature: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: string;
        transactionId: string;
        sendingChainId: BigNumber;
        receivingChainId: BigNumber;
        amount: BigNumber;
        expiry: BigNumber;
        preparedBlockNumber: BigNumber;
      }
    >;

    removeLiquidity(
      amount: BigNumberish,
      assetId: string,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    routerBalances(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    variantTransactionData(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    LiquidityAdded(
      router?: null,
      assetId?: null,
      amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { router: string; assetId: string; amount: BigNumber }
    >;

    LiquidityRemoved(
      router?: null,
      assetId?: null,
      amount?: null,
      recipient?: null
    ): TypedEventFilter<
      [string, string, BigNumber, string],
      { router: string; assetId: string; amount: BigNumber; recipient: string }
    >;

    TransactionCancelled(
      user?: null,
      router?: null,
      transactionId?: null,
      txData?: null,
      relayerFee?: null,
      caller?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          user: string;
          router: string;
          sendingAssetId: string;
          receivingAssetId: string;
          sendingChainFallback: string;
          receivingAddress: string;
          callTo: string;
          callDataHash: string;
          transactionId: string;
          sendingChainId: BigNumber;
          receivingChainId: BigNumber;
          amount: BigNumber;
          expiry: BigNumber;
          preparedBlockNumber: BigNumber;
        },
        BigNumber,
        string
      ],
      {
        user: string;
        router: string;
        transactionId: string;
        txData: [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          user: string;
          router: string;
          sendingAssetId: string;
          receivingAssetId: string;
          sendingChainFallback: string;
          receivingAddress: string;
          callTo: string;
          callDataHash: string;
          transactionId: string;
          sendingChainId: BigNumber;
          receivingChainId: BigNumber;
          amount: BigNumber;
          expiry: BigNumber;
          preparedBlockNumber: BigNumber;
        };
        relayerFee: BigNumber;
        caller: string;
      }
    >;

    TransactionFulfilled(
      user?: null,
      router?: null,
      transactionId?: null,
      txData?: null,
      relayerFee?: null,
      signature?: null,
      caller?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          user: string;
          router: string;
          sendingAssetId: string;
          receivingAssetId: string;
          sendingChainFallback: string;
          receivingAddress: string;
          callTo: string;
          callDataHash: string;
          transactionId: string;
          sendingChainId: BigNumber;
          receivingChainId: BigNumber;
          amount: BigNumber;
          expiry: BigNumber;
          preparedBlockNumber: BigNumber;
        },
        BigNumber,
        string,
        string
      ],
      {
        user: string;
        router: string;
        transactionId: string;
        txData: [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          user: string;
          router: string;
          sendingAssetId: string;
          receivingAssetId: string;
          sendingChainFallback: string;
          receivingAddress: string;
          callTo: string;
          callDataHash: string;
          transactionId: string;
          sendingChainId: BigNumber;
          receivingChainId: BigNumber;
          amount: BigNumber;
          expiry: BigNumber;
          preparedBlockNumber: BigNumber;
        };
        relayerFee: BigNumber;
        signature: string;
        caller: string;
      }
    >;

    TransactionPrepared(
      user?: null,
      router?: null,
      transactionId?: null,
      txData?: null,
      caller?: null,
      encryptedCallData?: null,
      encodedBid?: null,
      bidSignature?: null
    ): TypedEventFilter<
      [
        string,
        string,
        string,
        [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          user: string;
          router: string;
          sendingAssetId: string;
          receivingAssetId: string;
          sendingChainFallback: string;
          receivingAddress: string;
          callTo: string;
          callDataHash: string;
          transactionId: string;
          sendingChainId: BigNumber;
          receivingChainId: BigNumber;
          amount: BigNumber;
          expiry: BigNumber;
          preparedBlockNumber: BigNumber;
        },
        string,
        string,
        string,
        string
      ],
      {
        user: string;
        router: string;
        transactionId: string;
        txData: [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber
        ] & {
          user: string;
          router: string;
          sendingAssetId: string;
          receivingAssetId: string;
          sendingChainFallback: string;
          receivingAddress: string;
          callTo: string;
          callDataHash: string;
          transactionId: string;
          sendingChainId: BigNumber;
          receivingChainId: BigNumber;
          amount: BigNumber;
          expiry: BigNumber;
          preparedBlockNumber: BigNumber;
        };
        caller: string;
        encryptedCallData: string;
        encodedBid: string;
        bidSignature: string;
      }
    >;
  };

  estimateGas: {
    MIN_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>;

    activeTransactionBlocks(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addLiquidity(
      amount: BigNumberish,
      assetId: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancel(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    chainId(overrides?: CallOverrides): Promise<BigNumber>;

    fulfill(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      callData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    prepare(
      invariantData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        callDataHash: BytesLike;
        transactionId: BytesLike;
      },
      amount: BigNumberish,
      expiry: BigNumberish,
      encryptedCallData: BytesLike,
      encodedBid: BytesLike,
      bidSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLiquidity(
      amount: BigNumberish,
      assetId: string,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    routerBalances(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    variantTransactionData(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MIN_TIMEOUT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    activeTransactionBlocks(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addLiquidity(
      amount: BigNumberish,
      assetId: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancel(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    chainId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fulfill(
      txData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        callDataHash: BytesLike;
        transactionId: BytesLike;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        amount: BigNumberish;
        expiry: BigNumberish;
        preparedBlockNumber: BigNumberish;
      },
      relayerFee: BigNumberish,
      signature: BytesLike,
      callData: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    prepare(
      invariantData: {
        user: string;
        router: string;
        sendingAssetId: string;
        receivingAssetId: string;
        sendingChainFallback: string;
        receivingAddress: string;
        callTo: string;
        sendingChainId: BigNumberish;
        receivingChainId: BigNumberish;
        callDataHash: BytesLike;
        transactionId: BytesLike;
      },
      amount: BigNumberish,
      expiry: BigNumberish,
      encryptedCallData: BytesLike,
      encodedBid: BytesLike,
      bidSignature: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidity(
      amount: BigNumberish,
      assetId: string,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    routerBalances(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    variantTransactionData(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

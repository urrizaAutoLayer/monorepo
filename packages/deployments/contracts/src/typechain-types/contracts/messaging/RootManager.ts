/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface RootManagerInterface extends utils.Interface {
  functions: {
    "MERKLE()": FunctionFragment;
    "acceptProposedOwner()": FunctionFragment;
    "addConnector(uint32,address)": FunctionFragment;
    "aggregate(uint32,bytes32)": FunctionFragment;
    "connectors(uint256)": FunctionFragment;
    "connectorsHash()": FunctionFragment;
    "delay()": FunctionFragment;
    "delayBlocks()": FunctionFragment;
    "domains(uint256)": FunctionFragment;
    "domainsHash()": FunctionFragment;
    "getConnectorForDomain(uint32)": FunctionFragment;
    "getDomainIndex(uint32)": FunctionFragment;
    "getPendingInboundRootsCount()": FunctionFragment;
    "isDomainSupported(uint32)": FunctionFragment;
    "owner()": FunctionFragment;
    "pause()": FunctionFragment;
    "paused()": FunctionFragment;
    "pendingInboundRoots()": FunctionFragment;
    "propagate(uint32[],address[])": FunctionFragment;
    "proposeNewOwner(address)": FunctionFragment;
    "proposed()": FunctionFragment;
    "proposedTimestamp()": FunctionFragment;
    "removeConnector(uint32)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "renounced()": FunctionFragment;
    "setDelayBlocks(uint256)": FunctionFragment;
    "setWatcherManager(address)": FunctionFragment;
    "unpause()": FunctionFragment;
    "validateDomains(uint32[],address[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MERKLE"
      | "acceptProposedOwner"
      | "addConnector"
      | "aggregate"
      | "connectors"
      | "connectorsHash"
      | "delay"
      | "delayBlocks"
      | "domains"
      | "domainsHash"
      | "getConnectorForDomain"
      | "getDomainIndex"
      | "getPendingInboundRootsCount"
      | "isDomainSupported"
      | "owner"
      | "pause"
      | "paused"
      | "pendingInboundRoots"
      | "propagate"
      | "proposeNewOwner"
      | "proposed"
      | "proposedTimestamp"
      | "removeConnector"
      | "renounceOwnership"
      | "renounced"
      | "setDelayBlocks"
      | "setWatcherManager"
      | "unpause"
      | "validateDomains"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "MERKLE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "acceptProposedOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addConnector",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "aggregate",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "connectors",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "connectorsHash",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "delay", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "delayBlocks",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "domains",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "domainsHash",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getConnectorForDomain",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getDomainIndex",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingInboundRootsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isDomainSupported",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingInboundRoots",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "propagate",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "proposeNewOwner",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "proposed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposedTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeConnector",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "renounced", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setDelayBlocks",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setWatcherManager",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "unpause", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "validateDomains",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<string>[]]
  ): string;

  decodeFunctionResult(functionFragment: "MERKLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "acceptProposedOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addConnector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "aggregate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "connectors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "connectorsHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "delayBlocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "domains", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "domainsHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getConnectorForDomain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDomainIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingInboundRootsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isDomainSupported",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingInboundRoots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "propagate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposeNewOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposedTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeConnector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "renounced", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDelayBlocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWatcherManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validateDomains",
    data: BytesLike
  ): Result;

  events: {
    "ConnectorAdded(uint32,address)": EventFragment;
    "ConnectorRemoved(uint32,address)": EventFragment;
    "OwnershipProposed(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Paused(address)": EventFragment;
    "RootAggregated(uint32,bytes32,uint256)": EventFragment;
    "RootPropagated(bytes32,uint32[],uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
    "WatcherManagerChanged(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ConnectorAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ConnectorRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipProposed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RootAggregated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RootPropagated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WatcherManagerChanged"): EventFragment;
}

export interface ConnectorAddedEventObject {
  domain: number;
  connector: string;
}
export type ConnectorAddedEvent = TypedEvent<
  [number, string],
  ConnectorAddedEventObject
>;

export type ConnectorAddedEventFilter = TypedEventFilter<ConnectorAddedEvent>;

export interface ConnectorRemovedEventObject {
  domain: number;
  connector: string;
}
export type ConnectorRemovedEvent = TypedEvent<
  [number, string],
  ConnectorRemovedEventObject
>;

export type ConnectorRemovedEventFilter =
  TypedEventFilter<ConnectorRemovedEvent>;

export interface OwnershipProposedEventObject {
  proposedOwner: string;
}
export type OwnershipProposedEvent = TypedEvent<
  [string],
  OwnershipProposedEventObject
>;

export type OwnershipProposedEventFilter =
  TypedEventFilter<OwnershipProposedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface PausedEventObject {
  account: string;
}
export type PausedEvent = TypedEvent<[string], PausedEventObject>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export interface RootAggregatedEventObject {
  domain: number;
  receivedRoot: string;
  index: BigNumber;
}
export type RootAggregatedEvent = TypedEvent<
  [number, string, BigNumber],
  RootAggregatedEventObject
>;

export type RootAggregatedEventFilter = TypedEventFilter<RootAggregatedEvent>;

export interface RootPropagatedEventObject {
  aggregate: string;
  domains: number[];
  count: BigNumber;
}
export type RootPropagatedEvent = TypedEvent<
  [string, number[], BigNumber],
  RootPropagatedEventObject
>;

export type RootPropagatedEventFilter = TypedEventFilter<RootPropagatedEvent>;

export interface UnpausedEventObject {
  account: string;
}
export type UnpausedEvent = TypedEvent<[string], UnpausedEventObject>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface WatcherManagerChangedEventObject {
  watcherManager: string;
}
export type WatcherManagerChangedEvent = TypedEvent<
  [string],
  WatcherManagerChangedEventObject
>;

export type WatcherManagerChangedEventFilter =
  TypedEventFilter<WatcherManagerChangedEvent>;

export interface RootManager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RootManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    MERKLE(overrides?: CallOverrides): Promise<[string]>;

    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addConnector(
      _domain: PromiseOrValue<BigNumberish>,
      _connector: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    aggregate(
      _domain: PromiseOrValue<BigNumberish>,
      _inbound: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    connectors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    connectorsHash(overrides?: CallOverrides): Promise<[string]>;

    delay(overrides?: CallOverrides): Promise<[BigNumber]>;

    delayBlocks(overrides?: CallOverrides): Promise<[BigNumber]>;

    domains(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    domainsHash(overrides?: CallOverrides): Promise<[string]>;

    getConnectorForDomain(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getDomainIndex(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPendingInboundRootsCount(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isDomainSupported(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    pendingInboundRoots(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { first: BigNumber; last: BigNumber }>;

    propagate(
      _domains: PromiseOrValue<BigNumberish>[],
      _connectors: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proposed(overrides?: CallOverrides): Promise<[string]>;

    proposedTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    removeConnector(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounced(overrides?: CallOverrides): Promise<[boolean]>;

    setDelayBlocks(
      _delayBlocks: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setWatcherManager(
      _watcherManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validateDomains(
      _domains: PromiseOrValue<BigNumberish>[],
      _connectors: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  MERKLE(overrides?: CallOverrides): Promise<string>;

  acceptProposedOwner(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addConnector(
    _domain: PromiseOrValue<BigNumberish>,
    _connector: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  aggregate(
    _domain: PromiseOrValue<BigNumberish>,
    _inbound: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  connectors(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  connectorsHash(overrides?: CallOverrides): Promise<string>;

  delay(overrides?: CallOverrides): Promise<BigNumber>;

  delayBlocks(overrides?: CallOverrides): Promise<BigNumber>;

  domains(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  domainsHash(overrides?: CallOverrides): Promise<string>;

  getConnectorForDomain(
    _domain: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getDomainIndex(
    _domain: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPendingInboundRootsCount(overrides?: CallOverrides): Promise<BigNumber>;

  isDomainSupported(
    _domain: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  pendingInboundRoots(
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { first: BigNumber; last: BigNumber }>;

  propagate(
    _domains: PromiseOrValue<BigNumberish>[],
    _connectors: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposeNewOwner(
    newlyProposed: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proposed(overrides?: CallOverrides): Promise<string>;

  proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  removeConnector(
    _domain: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounced(overrides?: CallOverrides): Promise<boolean>;

  setDelayBlocks(
    _delayBlocks: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setWatcherManager(
    _watcherManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validateDomains(
    _domains: PromiseOrValue<BigNumberish>[],
    _connectors: PromiseOrValue<string>[],
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    MERKLE(overrides?: CallOverrides): Promise<string>;

    acceptProposedOwner(overrides?: CallOverrides): Promise<void>;

    addConnector(
      _domain: PromiseOrValue<BigNumberish>,
      _connector: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    aggregate(
      _domain: PromiseOrValue<BigNumberish>,
      _inbound: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    connectors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    connectorsHash(overrides?: CallOverrides): Promise<string>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    delayBlocks(overrides?: CallOverrides): Promise<BigNumber>;

    domains(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    domainsHash(overrides?: CallOverrides): Promise<string>;

    getConnectorForDomain(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getDomainIndex(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPendingInboundRootsCount(overrides?: CallOverrides): Promise<BigNumber>;

    isDomainSupported(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    pendingInboundRoots(
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { first: BigNumber; last: BigNumber }>;

    propagate(
      _domains: PromiseOrValue<BigNumberish>[],
      _connectors: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    proposed(overrides?: CallOverrides): Promise<string>;

    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    removeConnector(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    renounced(overrides?: CallOverrides): Promise<boolean>;

    setDelayBlocks(
      _delayBlocks: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setWatcherManager(
      _watcherManager: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unpause(overrides?: CallOverrides): Promise<void>;

    validateDomains(
      _domains: PromiseOrValue<BigNumberish>[],
      _connectors: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ConnectorAdded(uint32,address)"(
      domain?: null,
      connector?: null
    ): ConnectorAddedEventFilter;
    ConnectorAdded(domain?: null, connector?: null): ConnectorAddedEventFilter;

    "ConnectorRemoved(uint32,address)"(
      domain?: null,
      connector?: null
    ): ConnectorRemovedEventFilter;
    ConnectorRemoved(
      domain?: null,
      connector?: null
    ): ConnectorRemovedEventFilter;

    "OwnershipProposed(address)"(
      proposedOwner?: PromiseOrValue<string> | null
    ): OwnershipProposedEventFilter;
    OwnershipProposed(
      proposedOwner?: PromiseOrValue<string> | null
    ): OwnershipProposedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "RootAggregated(uint32,bytes32,uint256)"(
      domain?: null,
      receivedRoot?: null,
      index?: null
    ): RootAggregatedEventFilter;
    RootAggregated(
      domain?: null,
      receivedRoot?: null,
      index?: null
    ): RootAggregatedEventFilter;

    "RootPropagated(bytes32,uint32[],uint256)"(
      aggregate?: null,
      domains?: null,
      count?: null
    ): RootPropagatedEventFilter;
    RootPropagated(
      aggregate?: null,
      domains?: null,
      count?: null
    ): RootPropagatedEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "WatcherManagerChanged(address)"(
      watcherManager?: null
    ): WatcherManagerChangedEventFilter;
    WatcherManagerChanged(
      watcherManager?: null
    ): WatcherManagerChangedEventFilter;
  };

  estimateGas: {
    MERKLE(overrides?: CallOverrides): Promise<BigNumber>;

    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addConnector(
      _domain: PromiseOrValue<BigNumberish>,
      _connector: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    aggregate(
      _domain: PromiseOrValue<BigNumberish>,
      _inbound: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    connectors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    connectorsHash(overrides?: CallOverrides): Promise<BigNumber>;

    delay(overrides?: CallOverrides): Promise<BigNumber>;

    delayBlocks(overrides?: CallOverrides): Promise<BigNumber>;

    domains(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    domainsHash(overrides?: CallOverrides): Promise<BigNumber>;

    getConnectorForDomain(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getDomainIndex(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPendingInboundRootsCount(overrides?: CallOverrides): Promise<BigNumber>;

    isDomainSupported(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    pendingInboundRoots(overrides?: CallOverrides): Promise<BigNumber>;

    propagate(
      _domains: PromiseOrValue<BigNumberish>[],
      _connectors: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proposed(overrides?: CallOverrides): Promise<BigNumber>;

    proposedTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    removeConnector(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounced(overrides?: CallOverrides): Promise<BigNumber>;

    setDelayBlocks(
      _delayBlocks: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setWatcherManager(
      _watcherManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validateDomains(
      _domains: PromiseOrValue<BigNumberish>[],
      _connectors: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MERKLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptProposedOwner(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addConnector(
      _domain: PromiseOrValue<BigNumberish>,
      _connector: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    aggregate(
      _domain: PromiseOrValue<BigNumberish>,
      _inbound: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    connectors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    connectorsHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    delay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    delayBlocks(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    domains(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    domainsHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getConnectorForDomain(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDomainIndex(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPendingInboundRootsCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isDomainSupported(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingInboundRoots(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    propagate(
      _domains: PromiseOrValue<BigNumberish>[],
      _connectors: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposeNewOwner(
      newlyProposed: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proposed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposedTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeConnector(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounced(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setDelayBlocks(
      _delayBlocks: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setWatcherManager(
      _watcherManager: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validateDomains(
      _domains: PromiseOrValue<BigNumberish>[],
      _connectors: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

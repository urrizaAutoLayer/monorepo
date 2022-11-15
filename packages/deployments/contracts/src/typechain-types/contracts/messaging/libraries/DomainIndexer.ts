/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export interface DomainIndexerInterface extends utils.Interface {
  functions: {
    "MAX_DOMAINS()": FunctionFragment;
    "connectors(uint256)": FunctionFragment;
    "connectorsHash()": FunctionFragment;
    "domains(uint256)": FunctionFragment;
    "domainsHash()": FunctionFragment;
    "getConnectorForDomain(uint32)": FunctionFragment;
    "getDomainIndex(uint32)": FunctionFragment;
    "isDomainSupported(uint32)": FunctionFragment;
    "validateConnectors(address[])": FunctionFragment;
    "validateDomains(uint32[],address[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MAX_DOMAINS"
      | "connectors"
      | "connectorsHash"
      | "domains"
      | "domainsHash"
      | "getConnectorForDomain"
      | "getDomainIndex"
      | "isDomainSupported"
      | "validateConnectors"
      | "validateDomains"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MAX_DOMAINS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "connectors",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "connectorsHash",
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
    functionFragment: "isDomainSupported",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "validateConnectors",
    values: [PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "validateDomains",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<string>[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_DOMAINS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "connectors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "connectorsHash",
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
    functionFragment: "isDomainSupported",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateConnectors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateDomains",
    data: BytesLike
  ): Result;

  events: {};
}

export interface DomainIndexer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DomainIndexerInterface;

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
    MAX_DOMAINS(overrides?: CallOverrides): Promise<[BigNumber]>;

    connectors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    connectorsHash(overrides?: CallOverrides): Promise<[string]>;

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

    isDomainSupported(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    validateConnectors(
      _connectors: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<[void]>;

    validateDomains(
      _domains: PromiseOrValue<BigNumberish>[],
      _connectors: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<[void]>;
  };

  MAX_DOMAINS(overrides?: CallOverrides): Promise<BigNumber>;

  connectors(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  connectorsHash(overrides?: CallOverrides): Promise<string>;

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

  isDomainSupported(
    _domain: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  validateConnectors(
    _connectors: PromiseOrValue<string>[],
    overrides?: CallOverrides
  ): Promise<void>;

  validateDomains(
    _domains: PromiseOrValue<BigNumberish>[],
    _connectors: PromiseOrValue<string>[],
    overrides?: CallOverrides
  ): Promise<void>;

  callStatic: {
    MAX_DOMAINS(overrides?: CallOverrides): Promise<BigNumber>;

    connectors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    connectorsHash(overrides?: CallOverrides): Promise<string>;

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

    isDomainSupported(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    validateConnectors(
      _connectors: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    validateDomains(
      _domains: PromiseOrValue<BigNumberish>[],
      _connectors: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    MAX_DOMAINS(overrides?: CallOverrides): Promise<BigNumber>;

    connectors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    connectorsHash(overrides?: CallOverrides): Promise<BigNumber>;

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

    isDomainSupported(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateConnectors(
      _connectors: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateDomains(
      _domains: PromiseOrValue<BigNumberish>[],
      _connectors: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_DOMAINS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    connectors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    connectorsHash(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    isDomainSupported(
      _domain: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateConnectors(
      _connectors: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateDomains(
      _domains: PromiseOrValue<BigNumberish>[],
      _connectors: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

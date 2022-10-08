/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "../../../../../../common";

export interface IGovernanceInterface extends utils.Interface {
  functions: {
    "acceptGovernor()": FunctionFragment;
    "setPendingGovernor(address)": FunctionFragment;
    "setValidator(address,bool)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptGovernor"
      | "setPendingGovernor"
      | "setValidator"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setPendingGovernor",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setValidator",
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPendingGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setValidator",
    data: BytesLike
  ): Result;

  events: {
    "NewGovernor(address)": EventFragment;
    "NewPendingGovernor(address,address)": EventFragment;
    "ValidatorStatusUpdate(address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewGovernor"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPendingGovernor"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ValidatorStatusUpdate"): EventFragment;
}

export interface NewGovernorEventObject {
  newGovernor: string;
}
export type NewGovernorEvent = TypedEvent<[string], NewGovernorEventObject>;

export type NewGovernorEventFilter = TypedEventFilter<NewGovernorEvent>;

export interface NewPendingGovernorEventObject {
  oldPendingGovernor: string;
  newPendingGovernor: string;
}
export type NewPendingGovernorEvent = TypedEvent<
  [string, string],
  NewPendingGovernorEventObject
>;

export type NewPendingGovernorEventFilter =
  TypedEventFilter<NewPendingGovernorEvent>;

export interface ValidatorStatusUpdateEventObject {
  validatorAddress: string;
  isActive: boolean;
}
export type ValidatorStatusUpdateEvent = TypedEvent<
  [string, boolean],
  ValidatorStatusUpdateEventObject
>;

export type ValidatorStatusUpdateEventFilter =
  TypedEventFilter<ValidatorStatusUpdateEvent>;

export interface IGovernance extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGovernanceInterface;

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
    acceptGovernor(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setPendingGovernor(
      _newPendingGovernor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setValidator(
      _validator: PromiseOrValue<string>,
      _active: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptGovernor(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setPendingGovernor(
    _newPendingGovernor: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setValidator(
    _validator: PromiseOrValue<string>,
    _active: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptGovernor(overrides?: CallOverrides): Promise<void>;

    setPendingGovernor(
      _newPendingGovernor: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    setValidator(
      _validator: PromiseOrValue<string>,
      _active: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NewGovernor(address)"(
      newGovernor?: PromiseOrValue<string> | null
    ): NewGovernorEventFilter;
    NewGovernor(
      newGovernor?: PromiseOrValue<string> | null
    ): NewGovernorEventFilter;

    "NewPendingGovernor(address,address)"(
      oldPendingGovernor?: PromiseOrValue<string> | null,
      newPendingGovernor?: PromiseOrValue<string> | null
    ): NewPendingGovernorEventFilter;
    NewPendingGovernor(
      oldPendingGovernor?: PromiseOrValue<string> | null,
      newPendingGovernor?: PromiseOrValue<string> | null
    ): NewPendingGovernorEventFilter;

    "ValidatorStatusUpdate(address,bool)"(
      validatorAddress?: PromiseOrValue<string> | null,
      isActive?: null
    ): ValidatorStatusUpdateEventFilter;
    ValidatorStatusUpdate(
      validatorAddress?: PromiseOrValue<string> | null,
      isActive?: null
    ): ValidatorStatusUpdateEventFilter;
  };

  estimateGas: {
    acceptGovernor(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setPendingGovernor(
      _newPendingGovernor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setValidator(
      _validator: PromiseOrValue<string>,
      _active: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptGovernor(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setPendingGovernor(
      _newPendingGovernor: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setValidator(
      _validator: PromiseOrValue<string>,
      _active: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

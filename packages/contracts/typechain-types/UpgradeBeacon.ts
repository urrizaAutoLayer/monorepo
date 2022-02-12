/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { BaseContract, Signer, utils } from "ethers";
import { EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface UpgradeBeaconInterface extends utils.Interface {
  contractName: "UpgradeBeacon";
  functions: {};

  events: {
    "Upgrade(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Upgrade"): EventFragment;
}

export type UpgradeEvent = TypedEvent<[string], { implementation: string }>;

export type UpgradeEventFilter = TypedEventFilter<UpgradeEvent>;

export interface UpgradeBeacon extends BaseContract {
  contractName: "UpgradeBeacon";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UpgradeBeaconInterface;

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

  functions: {};

  callStatic: {};

  filters: {
    "Upgrade(address)"(implementation?: string | null): UpgradeEventFilter;
    Upgrade(implementation?: string | null): UpgradeEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, PayableOverrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type { UpgradeBeacon, UpgradeBeaconInterface } from "../../../../contracts/shared/upgrade/UpgradeBeacon";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_initialImplementation",
        type: "address",
      },
      {
        internalType: "address",
        name: "_controller",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgrade",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
];

const _bytecode =
  "0x60a06040526040516103283803806103288339810160408190526100229161015c565b61002b8261003d565b6001600160a01b03166080525061018f565b6000546001600160a01b0380831691160361008a5760405162461bcd60e51b8152602060048201526008602482015267217570677261646560c01b60448201526064015b60405180910390fd5b61009d8161013160201b61013a1760201c565b6100e95760405162461bcd60e51b815260206004820152601860248201527f696d706c656d656e746174696f6e2021636f6e747261637400000000000000006044820152606401610081565b600080546001600160a01b0319166001600160a01b038316908117825560405190917ff78721226efe9a1bb678189a16d1554928b9f2192e2cb93eeda83b79fa40007d91a250565b6001600160a01b03163b151590565b80516001600160a01b038116811461015757600080fd5b919050565b6000806040838503121561016f57600080fd5b61017883610140565b915061018660208401610140565b90509250929050565b60805161017f6101a96000396000600f015261017f6000f3fe6080604052336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146100405760005460005260206000f35b60003561004c8161004e565b005b6000546001600160a01b0380831691160361009b5760405162461bcd60e51b8152602060048201526008602482015267217570677261646560c01b60448201526064015b60405180910390fd5b6001600160a01b0381163b6100f25760405162461bcd60e51b815260206004820152601860248201527f696d706c656d656e746174696f6e2021636f6e747261637400000000000000006044820152606401610092565b600080546001600160a01b0319166001600160a01b038316908117825560405190917ff78721226efe9a1bb678189a16d1554928b9f2192e2cb93eeda83b79fa40007d91a250565b6001600160a01b03163b15159056fea2646970667358221220fb0c7101249c089fabeb9ebf869ee15e35a429555e8362692275ab9c41a4cb5664736f6c634300080f0033";

type UpgradeBeaconConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (xs: UpgradeBeaconConstructorParams): xs is ConstructorParameters<typeof ContractFactory> =>
  xs.length > 1;

export class UpgradeBeacon__factory extends ContractFactory {
  constructor(...args: UpgradeBeaconConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _initialImplementation: PromiseOrValue<string>,
    _controller: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
  ): Promise<UpgradeBeacon> {
    return super.deploy(_initialImplementation, _controller, overrides || {}) as Promise<UpgradeBeacon>;
  }
  override getDeployTransaction(
    _initialImplementation: PromiseOrValue<string>,
    _controller: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(_initialImplementation, _controller, overrides || {});
  }
  override attach(address: string): UpgradeBeacon {
    return super.attach(address) as UpgradeBeacon;
  }
  override connect(signer: Signer): UpgradeBeacon__factory {
    return super.connect(signer) as UpgradeBeacon__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradeBeaconInterface {
    return new utils.Interface(_abi) as UpgradeBeaconInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): UpgradeBeacon {
    return new Contract(address, _abi, signerOrProvider) as UpgradeBeacon;
  }
}

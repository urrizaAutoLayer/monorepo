/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  AssetLogic,
  AssetLogicInterface,
} from "../../../../../contracts/core/connext/libraries/AssetLogic";

const _abi = [
  {
    inputs: [],
    name: "AssetLogic__getConfig_notRegistered",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetLogic__getTokenIndexFromStableSwapPool_notExist",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetLogic__handleIncomingAsset_feeOnTransferNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetLogic__handleIncomingAsset_nativeAssetNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetLogic__handleOutgoingAsset_notNative",
    type: "error",
  },
  {
    inputs: [],
    name: "AssetLogic__swapAsset_externalStableSwapPoolDoesNotExist",
    type: "error",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220ef1411bde6ad537606073dcaf3fee60d7d4117e25b502ad5041219c569eb9e9b64736f6c63430008110033";

type AssetLogicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssetLogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssetLogic__factory extends ContractFactory {
  constructor(...args: AssetLogicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssetLogic> {
    return super.deploy(overrides || {}) as Promise<AssetLogic>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AssetLogic {
    return super.attach(address) as AssetLogic;
  }
  override connect(signer: Signer): AssetLogic__factory {
    return super.connect(signer) as AssetLogic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssetLogicInterface {
    return new utils.Interface(_abi) as AssetLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetLogic {
    return new Contract(address, _abi, signerOrProvider) as AssetLogic;
  }
}

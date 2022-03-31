/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AmplificationUtils,
  AmplificationUtilsInterface,
} from "../../../../contracts/lib/StableSwap/AmplificationUtils";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "initialTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "futureTime",
        type: "uint256",
      },
    ],
    name: "RampA",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "currentA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "StopRampA",
    type: "event",
  },
  {
    inputs: [],
    name: "A_PRECISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_A",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6105f761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061006c5760003560e01c8063396984151461007157806358fdd79b1461008d578063b0a14cfc146100af578063c9b64dcb146100c2578063d011f918146100d5578063f14e211e146100dd575b600080fd5b61007b620f424081565b60405190815260200160405180910390f35b81801561009957600080fd5b506100ad6100a83660046104f6565b6100fd565b005b61007b6100bd366004610522565b61034a565b61007b6100d0366004610522565b610366565b61007b606481565b8180156100e957600080fd5b506100ad6100f8366004610522565b610371565b600283015461010f906201518061042e565b4210156101635760405162461bcd60e51b815260206004820152601f60248201527f57616974203120646179206265666f7265207374617274696e672072616d700060448201526064015b60405180910390fd5b610170426212750061042e565b8110156101b85760405162461bcd60e51b8152602060048201526016602482015275496e73756666696369656e742072616d702074696d6560501b604482015260640161015a565b6000821180156101ca5750620f424082105b6102165760405162461bcd60e51b815260206004820181905260248201527f667574757265415f206d757374206265203e203020616e64203c204d41585f41604482015260640161015a565b600061022184610441565b905060006102308460646104d2565b90508181101561029157816102468260026104d2565b101561028c5760405162461bcd60e51b8152602060048201526015602482015274199d5d1d5c995057c81a5cc81d1bdbc81cdb585b1b605a1b604482015260640161015a565b6102e3565b61029c8260026104d2565b8111156102e35760405162461bcd60e51b8152602060048201526015602482015274667574757265415f20697320746f6f206c6172676560581b604482015260640161015a565b8185556001850181905542600286018190556003860184905560408051848152602081018490528082019290925260608201859052517fa2b71ec6df949300b59aab36b55e189697b750119dd349fcfa8c0f779e83c2549181900360800190a15050505050565b6000610360606461035a84610441565b906104de565b92915050565b600061036082610441565b428160030154116103c45760405162461bcd60e51b815260206004820152601760248201527f52616d7020697320616c72656164792073746f70706564000000000000000000604482015260640161015a565b60006103cf82610441565b808355600183018190554260028401819055600384018190556040519192507f46e22fb3709ad289f62ce63d469248536dbc78d82b84a3d7e74ad606dc2019389161042291848252602082015260400190565b60405180910390a15050565b600061043a8284610551565b9392505050565b60038101546001820154600091904282111561043a5760028401548454808311156104a45761049a61049361047686856104ea565b61035a61048342876104ea565b61048d88876104ea565b906104d2565b829061042e565b9695505050505050565b61049a6104cb6104b486856104ea565b61035a6104c142876104ea565b61048d86896104ea565b82906104ea565b600061043a8284610569565b600061043a8284610588565b600061043a82846105aa565b60008060006060848603121561050b57600080fd5b505081359360208301359350604090920135919050565b60006020828403121561053457600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156105645761056461053b565b500190565b60008160001904831182151516156105835761058361053b565b500290565b6000826105a557634e487b7160e01b600052601260045260246000fd5b500490565b6000828210156105bc576105bc61053b565b50039056fea2646970667358221220333c4774ade4a2eeafcd5b970ab96f98835f58e69a8ddd8f4a292697aa19f48b64736f6c634300080b0033";

type AmplificationUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AmplificationUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AmplificationUtils__factory extends ContractFactory {
  constructor(...args: AmplificationUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AmplificationUtils> {
    return super.deploy(overrides || {}) as Promise<AmplificationUtils>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AmplificationUtils {
    return super.attach(address) as AmplificationUtils;
  }
  override connect(signer: Signer): AmplificationUtils__factory {
    return super.connect(signer) as AmplificationUtils__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AmplificationUtilsInterface {
    return new utils.Interface(_abi) as AmplificationUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AmplificationUtils {
    return new Contract(address, _abi, signerOrProvider) as AmplificationUtils;
  }
}

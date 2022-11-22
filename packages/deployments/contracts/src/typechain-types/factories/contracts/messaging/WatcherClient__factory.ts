/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  WatcherClient,
  WatcherClientInterface,
} from "../../../contracts/messaging/WatcherClient";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcherManager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__ownershipDelayElapsed_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposedOwner",
        type: "address",
      },
    ],
    name: "OwnershipProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "watcherManager",
        type: "address",
      },
    ],
    name: "WatcherManagerChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newlyProposed",
        type: "address",
      },
    ],
    name: "proposeNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposed",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposedTimestamp",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounced",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcherManager",
        type: "address",
      },
    ],
    name: "setWatcherManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "watcherManager",
    outputs: [
      {
        internalType: "contract WatcherManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516107ea3803806107ea83398101604081905261002f91610059565b600380546001600160a01b03909216610100026001600160a81b0319909216919091179055610089565b60006020828403121561006b57600080fd5b81516001600160a01b038116811461008257600080fd5b9392505050565b610752806100986000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638da5cb5b1161008c578063c5b350df11610066578063c5b350df14610175578063d1851c921461017d578063d232c2201461018e578063d2a3cc71146101a057600080fd5b80638da5cb5b14610125578063a792c29b1461014a578063b1f8100d1461016257600080fd5b80633cf52ffb146100d45780633f4ba83a146100eb5780635c975abb146100f55780636a42b8f81461010c578063715018a6146101155780638456cb591461011d575b600080fd5b6002545b6040519081526020015b60405180910390f35b6100f36101b3565b005b60035460ff165b60405190151581526020016100e2565b62093a806100d8565b6100f36101f0565b6100f361021b565b6000546001600160a01b03165b6040516001600160a01b0390911681526020016100e2565b6003546101329061010090046001600160a01b031681565b6100f36101703660046106a3565b6102d7565b6100f3610378565b6001546001600160a01b0316610132565b6000546001600160a01b0316156100fc565b6100f36101ae3660046106a3565b6103e8565b6000546001600160a01b031633146101de576040516311a8a1bb60e31b815260040160405180910390fd5b6101e66104d2565b6101ee61051b565b565b6000546001600160a01b031633146101ee576040516311a8a1bb60e31b815260040160405180910390fd5b6003546040516384785ecd60e01b81523360048201526101009091046001600160a01b0316906384785ecd90602401602060405180830381865afa158015610267573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028b91906106d3565b6102c75760405162461bcd60e51b815260206004820152600860248201526710bbb0ba31b432b960c11b60448201526064015b60405180910390fd5b6102cf61056d565b6101ee6105b3565b6000546001600160a01b03163314610302576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b038281169116148015610320575060025415155b1561033e576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831691160361036c57604051634a2fb73f60e11b815260040160405180910390fd5b610375816105f0565b50565b6001546001600160a01b031633146103a3576040516311a7f27160e11b815260040160405180910390fd5b62093a80600254426103b591906106f5565b116103d3576040516324e0285f60e21b815260040160405180910390fd5b6001546101ee906001600160a01b031661063e565b6000546001600160a01b03163314610413576040516311a8a1bb60e31b815260040160405180910390fd5b6003546001600160a01b036101009091048116908216036104765760405162461bcd60e51b815260206004820152601760248201527f616c72656164792077617463686572206d616e6167657200000000000000000060448201526064016102be565b60038054610100600160a81b0319166101006001600160a01b038416908102919091179091556040519081527fc16d059e43d7f8e29ccb4e001a2f249d3c59e274925d6a6bc3912943441d9f6c9060200160405180910390a150565b60035460ff166101ee5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016102be565b6105236104d2565b6003805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b60035460ff16156101ee5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016102be565b6105bb61056d565b6003805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586105503390565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b6000602082840312156106b557600080fd5b81356001600160a01b03811681146106cc57600080fd5b9392505050565b6000602082840312156106e557600080fd5b815180151581146106cc57600080fd5b8181038181111561071657634e487b7160e01b600052601160045260246000fd5b9291505056fea26469706673582212205dad7e55590d5c9f6bd14327180ecc8a887f81e769ffce4c1aa5a1ecabd21bce64736f6c63430008110033";

type WatcherClientConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WatcherClientConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WatcherClient__factory extends ContractFactory {
  constructor(...args: WatcherClientConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _watcherManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WatcherClient> {
    return super.deploy(
      _watcherManager,
      overrides || {}
    ) as Promise<WatcherClient>;
  }
  override getDeployTransaction(
    _watcherManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_watcherManager, overrides || {});
  }
  override attach(address: string): WatcherClient {
    return super.attach(address) as WatcherClient;
  }
  override connect(signer: Signer): WatcherClient__factory {
    return super.connect(signer) as WatcherClient__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WatcherClientInterface {
    return new utils.Interface(_abi) as WatcherClientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WatcherClient {
    return new Contract(address, _abi, signerOrProvider) as WatcherClient;
  }
}

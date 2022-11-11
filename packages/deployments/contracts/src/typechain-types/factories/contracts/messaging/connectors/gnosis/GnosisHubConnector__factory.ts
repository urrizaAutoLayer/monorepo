/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  GnosisHubConnector,
  GnosisHubConnectorInterface,
} from "../../../../../contracts/messaging/connectors/gnosis/GnosisHubConnector";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_mirrorDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_amb",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rootManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_mirrorGas",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ProposedOwnable__acceptProposedOwner_delayNotElapsed",
    type: "error",
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
    name: "ProposedOwnable__renounceOwnership_delayNotElapsed",
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
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageProcessed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "MessageSent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "current",
        type: "address",
      },
    ],
    name: "MirrorConnectorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "current",
        type: "uint256",
      },
    ],
    name: "MirrorGasUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "uint32",
        name: "mirrorDomain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "amb",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "rootManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "mirrorConnector",
        type: "address",
      },
    ],
    name: "NewConnector",
    type: "event",
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
    inputs: [],
    name: "AMB",
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
    name: "DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIRROR_DOMAIN",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ROOT_MANAGER",
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
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_signatures",
        type: "bytes",
      },
    ],
    name: "executeSignatures",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mirrorConnector",
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
    name: "mirrorGas",
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
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "processMessage",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_mirrorConnector",
        type: "address",
      },
    ],
    name: "setMirrorConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mirrorGas",
        type: "uint256",
      },
    ],
    name: "setMirrorGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_expected",
        type: "address",
      },
    ],
    name: "verifySender",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b506040516200137b3803806200137b8339810160408190526200003591620002d8565b8585858585858585858585856200004c336200019d565b8563ffffffff16600003620000975760405162461bcd60e51b815260206004820152600c60248201526b32b6b83a3c903237b6b0b4b760a11b60448201526064015b60405180910390fd5b6001600160a01b038316620000e35760405162461bcd60e51b815260206004820152601160248201527032b6b83a3c903937b7ba26b0b730b3b2b960791b60448201526064016200008e565b63ffffffff8087166080526001600160a01b0380861660a05284811660c05290861660e0528216156200011b576200011b82620001fc565b80156200012d576200012d8162000265565b604080516001600160a01b0386811682528581166020830152841681830152905163ffffffff87811692908916917f4f9c27c2fe3f84576ea469d367d044da53c45e951617e8389f2b5ed8db9d25f09181900360600190a350505050505050505050505050505050505062000350565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f34b09b90f4cfa8747776f5cffd7d53ce7863a9b1f1fc8121903d22543a256511910160405180910390a1600455565b805163ffffffff81168114620002bb57600080fd5b919050565b80516001600160a01b0381168114620002bb57600080fd5b60008060008060008060c08789031215620002f257600080fd5b620002fd87620002a6565b95506200030d60208801620002a6565b94506200031d60408801620002c0565b93506200032d60608801620002c0565b92506200033d60808801620002c0565b915060a087015190509295509295509295565b60805160a05160c05160e051610fb9620003c260003960008181610136015261089c0152600081816101eb0152818161057501526108750152600081816102d8015281816103240152818161039c0152818161076f01528181610a770152610b9e015260006101b10152610fb96000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806382646a58116100ad578063cf796c7511610071578063cf796c751461029b578063d1851c92146102a4578063d232c220146102b5578063d69f9d61146102d3578063db1b7659146102fa57600080fd5b806382646a58146102495780638da5cb5b1461025c578063b1f8100d1461026d578063c5b350df14610280578063cc3942831461028857600080fd5b80635bd11efc116100f45780635bd11efc146101d35780635f61e3ec146101e65780636a42b8f8146102255780636eb67a511461022e578063715018a61461024157600080fd5b806314168416146101315780633cf52ffb146101725780633f7658fd146101845780634ff746f61461019957806352a9674b146101ac575b600080fd5b6101587f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020015b60405180910390f35b6002545b604051908152602001610169565b610197610192366004610d22565b61030d565b005b6101976101a7366004610d86565b610391565b6101587f000000000000000000000000000000000000000000000000000000000000000081565b6101976101e1366004610dd8565b610440565b61020d7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610169565b62093a80610176565b61019761023c366004610dfc565b610477565b6101976104ab565b610197610257366004610d86565b61056a565b6000546001600160a01b031661020d565b61019761027b366004610dd8565b61060b565b6101976106b0565b60035461020d906001600160a01b031681565b61017660045481565b6001546001600160a01b031661020d565b6000546001600160a01b0316155b6040519015158152602001610169565b61020d7f000000000000000000000000000000000000000000000000000000000000000081565b6102c3610308366004610dd8565b61070b565b604051633f7658fd60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690633f7658fd9061035b9085908590600401610e62565b600060405180830381600087803b15801561037557600080fd5b505af1158015610389573d6000803e3d6000fd5b505050505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103fb5760405162461bcd60e51b81526004016103f29060208082526004908201526310a0a6a160e11b604082015260600190565b60405180910390fd5b6104048161071c565b7fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced8133604051610435929190610e90565b60405180910390a150565b6000546001600160a01b0316331461046b576040516311a8a1bb60e31b815260040160405180910390fd5b61047481610923565b50565b6000546001600160a01b031633146104a2576040516311a8a1bb60e31b815260040160405180910390fd5b6104748161098c565b6000546001600160a01b031633146104d6576040516311a8a1bb60e31b815260040160405180910390fd5b6002546000036104f957604051630e4b303f60e21b815260040160405180910390fd5b62093a806002544261050b9190610eba565b11610529576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b031615610553576040516323295ef960e01b815260040160405180910390fd5b600154610568906001600160a01b03166109cd565b565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105d15760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b60448201526064016103f2565b6105da81610a2c565b7fa69577a1e55dd0712044e7078b408c39fadff8b3e1b334b202ff17e70eda9fdc8133604051610435929190610e90565b6000546001600160a01b03163314610636576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b03828116911614801561065b57506001600160a01b03811615155b15610679576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b038083169116036106a757604051634a2fb73f60e11b815260040160405180910390fd5b61047481610b49565b6001546001600160a01b031633146106db576040516311a7f27160e11b815260040160405180910390fd5b62093a80600254426106ed9190610eba565b116105535760405163d39c12bb60e01b815260040160405180910390fd5b600061071682610b97565b92915050565b600354610731906001600160a01b0316610b97565b61076c5760405162461bcd60e51b815260206004820152600c60248201526b10b61921b7b73732b1ba37b960a11b60448201526064016103f2565b467f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316631544298e6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107ef9190610edf565b146108305760405162461bcd60e51b815260206004820152601160248201527010b232b9ba34b730ba34b7b721b430b4b760791b60448201526064016103f2565b805160201461086b5760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b60448201526064016103f2565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016638e7d93fa7f00000000000000000000000000000000000000000000000000000000000000006108c484610ef8565b6040516001600160e01b031960e085901b16815263ffffffff9290921660048301526024820152604401600060405180830381600087803b15801561090857600080fd5b505af115801561091c573d6000803e3d6000fd5b5050505050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f34b09b90f4cfa8747776f5cffd7d53ce7863a9b1f1fc8121903d22543a256511910160405180910390a1600455565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8051602014610a675760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b60448201526064016103f2565b6003546040516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169263dc8601b3929116906327fba37b60e11b90610ab9908690602401610f1f565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b031994851617905260048054915160e087901b9094168452610b02949301610f32565b6020604051808303816000875af1158015610b21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b459190610edf565b5050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b60006107167f0000000000000000000000000000000000000000000000000000000000000000836000336001600160a01b03841614610c025760405162461bcd60e51b81526020600482015260076024820152662162726964676560c81b60448201526064016103f2565b816001600160a01b0316836001600160a01b031663d67bdd256040518163ffffffff1660e01b8152600401602060405180830381865afa158015610c4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6e9190610f66565b6001600160a01b0316149392505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610ca657600080fd5b813567ffffffffffffffff80821115610cc157610cc1610c7f565b604051601f8301601f19908116603f01168101908282118183101715610ce957610ce9610c7f565b81604052838152866020858801011115610d0257600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215610d3557600080fd5b823567ffffffffffffffff80821115610d4d57600080fd5b610d5986838701610c95565b93506020850135915080821115610d6f57600080fd5b50610d7c85828601610c95565b9150509250929050565b600060208284031215610d9857600080fd5b813567ffffffffffffffff811115610daf57600080fd5b610dbb84828501610c95565b949350505050565b6001600160a01b038116811461047457600080fd5b600060208284031215610dea57600080fd5b8135610df581610dc3565b9392505050565b600060208284031215610e0e57600080fd5b5035919050565b6000815180845260005b81811015610e3b57602081850181015186830182015201610e1f565b81811115610e4d576000602083870101525b50601f01601f19169290920160200192915050565b604081526000610e756040830185610e15565b8281036020840152610e878185610e15565b95945050505050565b604081526000610ea36040830185610e15565b905060018060a01b03831660208301529392505050565b600082821015610eda57634e487b7160e01b600052601160045260246000fd5b500390565b600060208284031215610ef157600080fd5b5051919050565b80516020808301519190811015610f19576000198160200360031b1b821691505b50919050565b602081526000610df56020830184610e15565b6001600160a01b0384168152606060208201819052600090610f5690830185610e15565b9050826040830152949350505050565b600060208284031215610f7857600080fd5b8151610df581610dc356fea26469706673582212204d9a7a5d6d84bd480559632d25734f3a8cec7e0b44db4af6bea77ae01fa6ae1f64736f6c634300080f0033";

type GnosisHubConnectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GnosisHubConnectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GnosisHubConnector__factory extends ContractFactory {
  constructor(...args: GnosisHubConnectorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _mirrorGas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GnosisHubConnector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorGas,
      overrides || {}
    ) as Promise<GnosisHubConnector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _mirrorGas: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorGas,
      overrides || {}
    );
  }
  override attach(address: string): GnosisHubConnector {
    return super.attach(address) as GnosisHubConnector;
  }
  override connect(signer: Signer): GnosisHubConnector__factory {
    return super.connect(signer) as GnosisHubConnector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GnosisHubConnectorInterface {
    return new utils.Interface(_abi) as GnosisHubConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GnosisHubConnector {
    return new Contract(address, _abi, signerOrProvider) as GnosisHubConnector;
  }
}

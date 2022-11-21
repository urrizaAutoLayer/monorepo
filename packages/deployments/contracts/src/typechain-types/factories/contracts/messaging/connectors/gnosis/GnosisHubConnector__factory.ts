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
        name: "_gasCap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_mirrorChainId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Connector__processMessage_notUsed",
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
        indexed: false,
        internalType: "uint256",
        name: "_previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_updated",
        type: "uint256",
      },
    ],
    name: "GasCapUpdated",
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
        internalType: "bytes",
        name: "encodedData",
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
    name: "MIRROR_CHAIN_ID",
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
      {
        internalType: "bytes",
        name: "_encodedData",
        type: "bytes",
      },
    ],
    name: "sendMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gasCap",
        type: "uint256",
      },
    ],
    name: "setGasCap",
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
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6101206040523480156200001257600080fd5b506040516200166b3803806200166b8339810160408190526200003591620002e4565b818181898989898984848484846200004d33620001a3565b8463ffffffff16600003620000985760405162461bcd60e51b815260206004820152600c60248201526b32b6b83a3c903237b6b0b4b760a11b60448201526064015b60405180910390fd5b6001600160a01b038216620000e45760405162461bcd60e51b815260206004820152601160248201527032b6b83a3c903937b7ba26b0b730b3b2b960791b60448201526064016200008f565b63ffffffff8086166080526001600160a01b0380851660a05283811660c05290851660e0528116156200011c576200011c8162000208565b604080516001600160a01b0385811682528481166020830152831681830152905163ffffffff86811692908816917f4f9c27c2fe3f84576ea469d367d044da53c45e951617e8389f2b5ed8db9d25f09181900360600190a3505050505050505050506200018f816200027160201b60201c565b506101005250620003679650505050505050565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f877a02cb809da0364d23adca3cd50c451b53f279d3df632e1fc11eb66335bce5910160405180910390a1600455565b805163ffffffff81168114620002c757600080fd5b919050565b80516001600160a01b0381168114620002c757600080fd5b600080600080600080600060e0888a0312156200030057600080fd5b6200030b88620002b2565b96506200031b60208901620002b2565b95506200032b60408901620002cc565b94506200033b60608901620002cc565b93506200034b60808901620002cc565b925060a0880151915060c0880151905092959891949750929550565b60805160a05160c05160e05161010051611279620003f2600039600081816103410152610e210152600081816101410152610aeb015260008181610257015281816104af0152610ac40152600081816103de015281816104370152818161056401528181610888015281816109be01528181610cd60152610cf80152600061020301526112796000f3fe6080604052600436106101235760003560e01c80637850b020116100a0578063cc39428311610064578063cc39428314610363578063d1851c9214610383578063d232c220146103a1578063d69f9d61146103cc578063db1b76591461040057600080fd5b80637850b020146102bc5780638da5cb5b146102dc578063b1f8100d146102fa578063c5b350df1461031a578063c8a4d6901461032f57600080fd5b806352a9674b116100e757806352a9674b146101f15780635bd11efc146102255780635f61e3ec146102455780636a42b8f814610291578063715018a6146102a757600080fd5b8063141684161461012f5780633cf52ffb1461017d5780633f7658fd1461019c57806348e6fa23146101be5780634ff746f6146101d157600080fd5b3661012a57005b600080fd5b34801561013b57600080fd5b506101637f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020015b60405180910390f35b34801561018957600080fd5b506002545b604051908152602001610174565b3480156101a857600080fd5b506101bc6101b7366004610faf565b610420565b005b6101bc6101cc366004610faf565b6104a4565b3480156101dd57600080fd5b506101bc6101ec366004611013565b610559565b3480156101fd57600080fd5b506101637f000000000000000000000000000000000000000000000000000000000000000081565b34801561023157600080fd5b506101bc610240366004611065565b6105ff565b34801561025157600080fd5b506102797f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610174565b34801561029d57600080fd5b5062093a8061018e565b3480156102b357600080fd5b506101bc610636565b3480156102c857600080fd5b506101bc6102d7366004611089565b6106ea565b3480156102e857600080fd5b506000546001600160a01b0316610279565b34801561030657600080fd5b506101bc610315366004611065565b61071e565b34801561032657600080fd5b506101bc6107bc565b34801561033b57600080fd5b5061018e7f000000000000000000000000000000000000000000000000000000000000000081565b34801561036f57600080fd5b50600354610279906001600160a01b031681565b34801561038f57600080fd5b506001546001600160a01b0316610279565b3480156103ad57600080fd5b506000546001600160a01b0316155b6040519015158152602001610174565b3480156103d857600080fd5b506102797f000000000000000000000000000000000000000000000000000000000000000081565b34801561040c57600080fd5b506103bc61041b366004611065565b61082c565b604051633f7658fd60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690633f7658fd9061046e90859085906004016110e8565b600060405180830381600087803b15801561048857600080fd5b505af115801561049c573d6000803e3d6000fd5b505050505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105105760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b60448201526064015b60405180910390fd5b61051a828261083d565b7fdcaa37a042a0087de79018c629bbd29cee82ca80bd9be394e1696bf9e935507782823360405161054d93929190611116565b60405180910390a15050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105ba5760405162461bcd60e51b81526004016105079060208082526004908201526310a0a6a160e11b604082015260600190565b6105c38161096b565b7fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced81336040516105f4929190611154565b60405180910390a150565b6000546001600160a01b0316331461062a576040516311a8a1bb60e31b815260040160405180910390fd5b61063381610b72565b50565b6000546001600160a01b03163314610661576040516311a8a1bb60e31b815260040160405180910390fd5b62093a8060025442610673919061117e565b11610691576040516324e0285f60e21b815260040160405180910390fd5b6002546000036106b457604051630e4b303f60e21b815260040160405180910390fd5b6001546001600160a01b0316156106de576040516323295ef960e01b815260040160405180910390fd5b6106e86000610bdb565b565b6000546001600160a01b03163314610715576040516311a8a1bb60e31b815260040160405180910390fd5b61063381610c40565b6000546001600160a01b03163314610749576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b038281169116148015610767575060025415155b15610785576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b038083169116036107b357604051634a2fb73f60e11b815260040160405180910390fd5b61063381610c81565b6001546001600160a01b031633146107e7576040516311a7f27160e11b815260040160405180910390fd5b62093a80600254426107f9919061117e565b11610817576040516324e0285f60e21b815260040160405180910390fd5b6001546106e8906001600160a01b0316610bdb565b600061083782610ccf565b92915050565b81516020146108785760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b6044820152606401610507565b6003546040516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081169263dc8601b3929116906327fba37b60e11b906108ca90879060240161119f565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261090585610d7d565b6040518463ffffffff1660e01b8152600401610923939291906111b2565b6020604051808303816000875af1158015610942573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096691906111e6565b505050565b600354610980906001600160a01b0316610ccf565b6109bb5760405162461bcd60e51b815260206004820152600c60248201526b10b61921b7b73732b1ba37b960a11b6044820152606401610507565b467f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b07506116040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a1a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a3e91906111e6565b14610a7f5760405162461bcd60e51b815260206004820152601160248201527010b232b9ba34b730ba34b7b721b430b4b760791b6044820152606401610507565b8051602014610aba5760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b6044820152606401610507565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016638e7d93fa7f0000000000000000000000000000000000000000000000000000000000000000610b13846111ff565b6040516001600160e01b031960e085901b16815263ffffffff9290921660048301526024820152604401600060405180830381600087803b158015610b5757600080fd5b505af1158015610b6b573d6000803e3d6000fd5b5050505050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b60045460408051918252602082018390527f877a02cb809da0364d23adca3cd50c451b53f279d3df632e1fc11eb66335bce5910160405180910390a1600455565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b60006108377f0000000000000000000000000000000000000000000000000000000000000000837f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316631544298e6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610d54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d7891906111e6565b610ddb565b60008151602014610dbf5760405162461bcd60e51b815260206004820152600c60248201526b042c8c2e8c240d8cadccee8d60a31b6044820152606401610507565b61083782806020019051810190610dd691906111e6565b610ef6565b6000336001600160a01b03851614610e1f5760405162461bcd60e51b81526020600482015260076024820152662162726964676560c81b6044820152606401610507565b7f00000000000000000000000000000000000000000000000000000000000000008214610e785760405162461bcd60e51b815260206004820152600760248201526621736f7572636560c81b6044820152606401610507565b826001600160a01b0316846001600160a01b031663d67bdd256040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ec0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee49190611226565b6001600160a01b031614949350505050565b6000600454821115610f085760045491505b5090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610f3357600080fd5b813567ffffffffffffffff80821115610f4e57610f4e610f0c565b604051601f8301601f19908116603f01168101908282118183101715610f7657610f76610f0c565b81604052838152866020858801011115610f8f57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215610fc257600080fd5b823567ffffffffffffffff80821115610fda57600080fd5b610fe686838701610f22565b93506020850135915080821115610ffc57600080fd5b5061100985828601610f22565b9150509250929050565b60006020828403121561102557600080fd5b813567ffffffffffffffff81111561103c57600080fd5b61104884828501610f22565b949350505050565b6001600160a01b038116811461063357600080fd5b60006020828403121561107757600080fd5b813561108281611050565b9392505050565b60006020828403121561109b57600080fd5b5035919050565b6000815180845260005b818110156110c8576020818501810151868301820152016110ac565b506000602082860101526020601f19601f83011685010191505092915050565b6040815260006110fb60408301856110a2565b828103602084015261110d81856110a2565b95945050505050565b60608152600061112960608301866110a2565b828103602084015261113b81866110a2565b91505060018060a01b0383166040830152949350505050565b60408152600061116760408301856110a2565b905060018060a01b03831660208301529392505050565b8181038181111561083757634e487b7160e01b600052601160045260246000fd5b60208152600061108260208301846110a2565b6001600160a01b03841681526060602082018190526000906111d6908301856110a2565b9050826040830152949350505050565b6000602082840312156111f857600080fd5b5051919050565b80516020808301519190811015611220576000198160200360031b1b821691505b50919050565b60006020828403121561123857600080fd5b81516110828161105056fea2646970667358221220071f4e97ad49b8af531803099d09bfd3796a2f1bfb2a7a3a197a6e34707601ff64736f6c63430008110033";

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
    _gasCap: PromiseOrValue<BigNumberish>,
    _mirrorChainId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GnosisHubConnector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _gasCap,
      _mirrorChainId,
      overrides || {}
    ) as Promise<GnosisHubConnector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _gasCap: PromiseOrValue<BigNumberish>,
    _mirrorChainId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _gasCap,
      _mirrorChainId,
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

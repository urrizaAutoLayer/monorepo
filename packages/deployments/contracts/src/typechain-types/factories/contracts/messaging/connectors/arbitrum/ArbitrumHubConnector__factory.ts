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
  ArbitrumHubConnector,
  ArbitrumHubConnectorInterface,
} from "../../../../../contracts/messaging/connectors/arbitrum/ArbitrumHubConnector";

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
        internalType: "address",
        name: "_outbox",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxSubmissionCostCap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxGasCap",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gasPriceCap",
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
    name: "NotCrossChainCall",
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
    inputs: [],
    name: "TypedMemView__index_indexMoreThan32Bytes",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "loc",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "len",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "slice",
        type: "uint256",
      },
    ],
    name: "TypedMemView__index_overrun",
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
    name: "GasPriceCapUpdated",
    type: "event",
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
    name: "MaxGasCapUpdated",
    type: "event",
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
    name: "MaxSubmissionCapUpdated",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "ticketId",
        type: "uint256",
      },
    ],
    name: "RetryableTicketCreated",
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
    inputs: [],
    name: "gasPriceCap",
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
    name: "maxGasCap",
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
    name: "maxSubmissionCostCap",
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
    name: "outbox",
    outputs: [
      {
        internalType: "contract IArbitrumOutbox",
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
        internalType: "uint64",
        name: "_nodeNum",
        type: "uint64",
      },
      {
        internalType: "bytes32",
        name: "_sendRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_blockHash",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "_proof",
        type: "bytes32[]",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "l2Sender",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "l2Block",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "l1Block",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "l2Timestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct L2Message",
        name: "_message",
        type: "tuple",
      },
    ],
    name: "processMessageFromRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "processed",
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
    inputs: [],
    name: "rollup",
    outputs: [
      {
        internalType: "contract IArbitrumRollup",
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
        name: "_updated",
        type: "uint256",
      },
    ],
    name: "setGasPriceCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_updated",
        type: "uint256",
      },
    ],
    name: "setMaxGasCap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_updated",
        type: "uint256",
      },
    ],
    name: "setMaxSubmissionCostCap",
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
  "0x6101006040523480156200001257600080fd5b50604051620021f1380380620021f1833981016040819052620000359162000335565b888888888884848484846200004a3362000235565b8463ffffffff16600003620000955760405162461bcd60e51b815260206004820152600c60248201526b32b6b83a3c903237b6b0b4b760a11b60448201526064015b60405180910390fd5b6001600160a01b038216620000e15760405162461bcd60e51b815260206004820152601160248201527032b6b83a3c903937b7ba26b0b730b3b2b960791b60448201526064016200008c565b63ffffffff8086166080526001600160a01b0380851660a05283811660c05290851660e052811615620001195762000119816200029a565b604080516001600160a01b0385811682528481166020830152831681830152905163ffffffff86811692908816917f4f9c27c2fe3f84576ea469d367d044da53c45e951617e8389f2b5ed8db9d25f09181900360600190a35050600480546001600160a01b0319166001600160a01b038e1690811782556040805163cb23bcb560e01b81529051919a5063cb23bcb599508083019850602097509095508590030192508391508790505afa158015620001d6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001fc9190620003d5565b600580546001600160a01b0319166001600160a01b039290921691909117905560069290925560075560085550620003fa945050505050565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b805163ffffffff811681146200031857600080fd5b919050565b80516001600160a01b03811681146200031857600080fd5b60008060008060008060008060006101208a8c0312156200035557600080fd5b620003608a62000303565b98506200037060208b0162000303565b97506200038060408b016200031d565b96506200039060608b016200031d565b9550620003a060808b016200031d565b9450620003b060a08b016200031d565b935060c08a0151925060e08a015191506101008a015190509295985092959850929598565b600060208284031215620003e857600080fd5b620003f3826200031d565b9392505050565b60805160a05160c05160e051611d936200045e60003960008181610227015261095901526000818161032e015281816105da015261098a0152600081816104eb0152818161068f01528181610cc9015261130b015260006102da0152611d936000f3fe6080604052600436106101a05760003560e01c80639ab0563b116100ec578063ce11e6ab1161008a578063d69f9d6111610064578063d69f9d61146104d9578063db1b76591461050d578063e2ce3c641461052d578063fbd4006b1461054357600080fd5b8063ce11e6ab1461047c578063d1851c921461049c578063d232c220146104ba57600080fd5b8063b64d327e116100c6578063b64d327e14610411578063c5b350df14610427578063cb23bcb51461043c578063cc3942831461045c57600080fd5b80639ab0563b146103b15780639d4373a4146103d1578063b1f8100d146103f157600080fd5b80634ff746f6116101595780635f61e3ec116101335780635f61e3ec1461031c5780636a42b8f814610368578063715018a61461037e5780638da5cb5b1461039357600080fd5b80634ff746f6146102a857806352a9674b146102c85780635bd11efc146102fc57600080fd5b806305a79e06146101ac5780630fca49cd146101f157806314168416146102155780633327998d1461025e5780633cf52ffb1461028057806348e6fa231461029557600080fd5b366101a757005b600080fd5b3480156101b857600080fd5b506101dc6101c736600461170b565b60096020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b3480156101fd57600080fd5b5061020760065481565b6040519081526020016101e8565b34801561022157600080fd5b506102497f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020016101e8565b34801561026a57600080fd5b5061027e61027936600461170b565b610563565b005b34801561028c57600080fd5b50600254610207565b61027e6102a33660046117f1565b6105cf565b3480156102b457600080fd5b5061027e6102c3366004611855565b610684565b3480156102d457600080fd5b506102497f000000000000000000000000000000000000000000000000000000000000000081565b34801561030857600080fd5b5061027e6103173660046118a7565b61072a565b34801561032857600080fd5b506103507f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101e8565b34801561037457600080fd5b5062093a80610207565b34801561038a57600080fd5b5061027e610761565b34801561039f57600080fd5b506000546001600160a01b0316610350565b3480156103bd57600080fd5b5061027e6103cc36600461170b565b610815565b3480156103dd57600080fd5b5061027e6103ec3660046118f2565b610881565b3480156103fd57600080fd5b5061027e61040c3660046118a7565b610a50565b34801561041d57600080fd5b5061020760075481565b34801561043357600080fd5b5061027e610aee565b34801561044857600080fd5b50600554610350906001600160a01b031681565b34801561046857600080fd5b50600354610350906001600160a01b031681565b34801561048857600080fd5b50600454610350906001600160a01b031681565b3480156104a857600080fd5b506001546001600160a01b0316610350565b3480156104c657600080fd5b506000546001600160a01b0316156101dc565b3480156104e557600080fd5b506103507f000000000000000000000000000000000000000000000000000000000000000081565b34801561051957600080fd5b506101dc6105283660046118a7565b610b5e565b34801561053957600080fd5b5061020760085481565b34801561054f57600080fd5b5061027e61055e36600461170b565b610b6f565b6000546001600160a01b0316331461058e576040516311a8a1bb60e31b815260040160405180910390fd5b60065460408051918252602082018390527f8826388bbfa56ae5df40ee5607d9d354fa66549d854624242c77b5af2a5e4c3b910160405180910390a1600655565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461063b5760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b60448201526064015b60405180910390fd5b6106458282610bdb565b7fdcaa37a042a0087de79018c629bbd29cee82ca80bd9be394e1696bf9e935507782823360405161067893929190611a02565b60405180910390a15050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106e55760405162461bcd60e51b81526004016106329060208082526004908201526310a0a6a160e11b604082015260600190565b6106ee81610de4565b7fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced813360405161071f929190611a40565b60405180910390a150565b6000546001600160a01b03163314610755576040516311a8a1bb60e31b815260040160405180910390fd5b61075e81610dfd565b50565b6000546001600160a01b0316331461078c576040516311a8a1bb60e31b815260040160405180910390fd5b62093a806002544261079e9190611a80565b116107bc576040516324e0285f60e21b815260040160405180910390fd5b6002546000036107df57604051630e4b303f60e21b815260040160405180910390fd5b6001546001600160a01b031615610809576040516323295ef960e01b815260040160405180910390fd5b6108136000610e66565b565b6000546001600160a01b03163314610840576040516311a8a1bb60e31b815260040160405180910390fd5b60075460408051918252602082018390527f57bffb29c4c6b672a2e334fa00ea826dba286d6cb34d61bebc6c667abb579c62910160405180910390a1600755565b61088c878787610ecb565b6108998685858585611020565b6108a660c0820182611a93565b90506064146108e15760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b6044820152606401610632565b600061094560446020610938846108fb60c0880188611a93565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092939250506111839050565b62ffffff191691906111a7565b60405163473ec9fd60e11b815263ffffffff7f0000000000000000000000000000000000000000000000000000000000000000166004820152602481018290529091507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690638e7d93fa90604401600060405180830381600087803b1580156109d657600080fd5b505af11580156109ea573d6000803e3d6000fd5b505050507fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced81604051602001610a2291815260200190565b60408051601f1981840301815290829052610a3e913390611a40565b60405180910390a15050505050505050565b6000546001600160a01b03163314610a7b576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b038281169116148015610a99575060025415155b15610ab7576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b03808316911603610ae557604051634a2fb73f60e11b815260040160405180910390fd5b61075e816112b6565b6001546001600160a01b03163314610b19576040516311a7f27160e11b815260040160405180910390fd5b62093a8060025442610b2b9190611a80565b11610b49576040516324e0285f60e21b815260040160405180910390fd5b600154610813906001600160a01b0316610e66565b6000610b6982611304565b92915050565b6000546001600160a01b03163314610b9a576040516311a8a1bb60e31b815260040160405180910390fd5b60065460408051918252602082018390527f7f46895145f361561c5e9bbaf45b71269a4399dc3064511f123ebf4c6f04e357910160405180910390a1600855565b8151602014610c165760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b6044820152606401610632565b6000634ff746f660e01b83604051602401610c319190611ae1565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091528251909150606014610ca65760405162461bcd60e51b815260206004820152600c60248201526b042c8c2e8c240d8cadccee8d60a31b6044820152606401610632565b600080600084806020019051810190610cbf9190611af4565b92509250925060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663679b6ded34600360009054906101000a90046001600160a01b03166000610d1b8960065461134a565b6003546007546001600160a01b03909116908190610d3a908c9061134a565b610d468b60085461134a565b8e6040518a63ffffffff1660e01b8152600401610d6a989796959493929190611b22565b60206040518083038185885af1158015610d88573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190610dad9190611b7d565b60405190915081907fde92b5b7839f4a2c640f5e3bbb66d415458dadc57a487b0c7fa562ed7c9c896f90600090a250505050505050565b6040516316c2fdb560e21b815260040160405180910390fd5b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b604080516020808201849052818301859052825180830384018152606090920190925280519101206000906005546040516324b204d360e21b815267ffffffffffffffff871660048201529192506000916001600160a01b03909116906392c8134c9060240161018060405180830381865afa158015610f4f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f739190611ba6565b905081816040015114610fb75760405162461bcd60e51b815260206004820152600c60248201526b21636f6e6669726d4461746160a01b6044820152606401610632565b60008160c0015167ffffffffffffffff16118015610fe3575060008160e0015167ffffffffffffffff16115b6110195760405162461bcd60e51b8152602060048201526007602482015266085cdd185ad95960ca1b6044820152606401610632565b5050505050565b6003546001600160a01b031661103960208301836118a7565b6001600160a01b0316146110825760405162461bcd60e51b815260206004820152601060248201526f10b6b4b93937b921b7b73732b1ba37b960811b6044820152606401610632565b6004546000906001600160a01b0316639f0c04bf6110a360208501856118a7565b6110b360408601602087016118a7565b60408601356060870135608088013560a08901356110d460c08b018b611a93565b6040518963ffffffff1660e01b81526004016110f7989796959493929190611c78565b602060405180830381865afa158015611114573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111389190611b7d565b905061117b8585808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152508792508591508a9050611360565b505050505050565b81516000906020840161119e64ffffffffff851682846114f9565b95945050505050565b60008160ff166000036111bc575060006112af565b6111cf8460181c6001600160601b031690565b6001600160601b03166111e560ff841685611ce0565b111561124d576111fe8460781c6001600160601b031690565b6112118560181c6001600160601b031690565b6040516378218d2960e01b81526001600160601b039283166004820152911660248201526044810184905260ff83166064820152608401610632565b60208260ff1611156112725760405163045df3f960e01b815260040160405180910390fd5b60088202600061128b8660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91860151909116925050505b9392505050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b600061132f7f0000000000000000000000000000000000000000000000000000000000000000611536565b6001600160a01b0316826001600160a01b0316149050919050565b600081831061135957816112af565b5090919050565b6101008451106113a15760405162461bcd60e51b815260206004820152600c60248201526b0e0e4dedecc40d8cadccee8d60a31b6044820152606401610632565b835183901c156113e45760405162461bcd60e51b815260206004820152600e60248201526d10b6b4b734b6b0b610383937b7b360911b6044820152606401610632565b60008381526009602052604090205460ff161561142b5760405162461bcd60e51b81526020600482015260056024820152641cdc195b9d60da1b6044820152606401610632565b60048054604051627436d360e01b81526000926001600160a01b0390921691627436d39161145f9189918991899101611cf3565b602060405180830381865afa15801561147c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114a09190611b7d565b90508181146114da5760405162461bcd60e51b815260206004820152600660248201526510b83937b7b360d11b6044820152606401610632565b5050506000908152600960205260409020805460ff1916600117905550565b6000806115068385611ce0565b9050604051811115611516575060005b8060000361152b5762ffffff199150506112af565b61119e858585611694565b60006001600160a01b03821633146115615760405163253a6fc960e11b815260040160405180910390fd5b6000826001600160a01b031663ab5d89436040518163ffffffff1660e01b8152600401602060405180830381865afa1580156115a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115c59190611d40565b6001600160a01b03166380648b026040518163ffffffff1660e01b8152600401602060405180830381865afa158015611602573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116269190611d40565b90506001600160a01b038116610b695760405162461bcd60e51b815260206004820152602d60248201527f4c6962417262697472756d4c313a2073797374656d206d65737361676573207760448201526c34ba3437baba1039b2b73232b960991b6064820152608401610632565b60006060601883856001600160601b038216821480156116bc575086816001600160601b0316145b6116f55760405162461bcd60e51b815260206004820152600a602482015269085d1c9d5b98d85d195960b21b6044820152606401610632565b96831b90961790911b90941790931b9392505050565b60006020828403121561171d57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff8111828210171561175e5761175e611724565b60405290565b600082601f83011261177557600080fd5b813567ffffffffffffffff8082111561179057611790611724565b604051601f8301601f19908116603f011681019082821181831017156117b8576117b8611724565b816040528381528660208588010111156117d157600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561180457600080fd5b823567ffffffffffffffff8082111561181c57600080fd5b61182886838701611764565b9350602085013591508082111561183e57600080fd5b5061184b85828601611764565b9150509250929050565b60006020828403121561186757600080fd5b813567ffffffffffffffff81111561187e57600080fd5b61188a84828501611764565b949350505050565b6001600160a01b038116811461075e57600080fd5b6000602082840312156118b957600080fd5b81356112af81611892565b67ffffffffffffffff8116811461075e57600080fd5b600060e082840312156118ec57600080fd5b50919050565b600080600080600080600060c0888a03121561190d57600080fd5b8735611918816118c4565b96506020880135955060408801359450606088013567ffffffffffffffff8082111561194357600080fd5b818a0191508a601f83011261195757600080fd5b81358181111561196657600080fd5b8b60208260051b850101111561197b57600080fd5b6020830196508095505060808a0135935060a08a01359150808211156119a057600080fd5b506119ad8a828b016118da565b91505092959891949750929550565b6000815180845260005b818110156119e2576020818501810151868301820152016119c6565b506000602082860101526020601f19601f83011685010191505092915050565b606081526000611a1560608301866119bc565b8281036020840152611a2781866119bc565b91505060018060a01b0383166040830152949350505050565b604081526000611a5360408301856119bc565b905060018060a01b03831660208301529392505050565b634e487b7160e01b600052601160045260246000fd5b81810381811115610b6957610b69611a6a565b6000808335601e19843603018112611aaa57600080fd5b83018035915067ffffffffffffffff821115611ac557600080fd5b602001915036819003821315611ada57600080fd5b9250929050565b6020815260006112af60208301846119bc565b600080600060608486031215611b0957600080fd5b8351925060208401519150604084015190509250925092565b600061010060018060a01b03808c1684528a602085015289604085015280891660608501528088166080850152508560a08401528460c08401528060e0840152611b6e818401856119bc565b9b9a5050505050505050505050565b600060208284031215611b8f57600080fd5b5051919050565b8051611ba1816118c4565b919050565b60006101808284031215611bb957600080fd5b611bc161173a565b825181526020830151602082015260408301516040820152611be560608401611b96565b6060820152611bf660808401611b96565b6080820152611c0760a08401611b96565b60a0820152611c1860c08401611b96565b60c0820152611c2960e08401611b96565b60e0820152610100611c3c818501611b96565b90820152610120611c4e848201611b96565b90820152610140611c60848201611b96565b90820152610160928301519281019290925250919050565b600060018060a01b03808b168352808a166020840152508760408301528660608301528560808301528460a083015260e060c08301528260e08301526101008385828501376000838501820152601f909301601f191690910190910198975050505050505050565b80820180821115610b6957610b69611a6a565b606080825284519082018190526000906020906080840190828801845b82811015611d2c57815184529284019290840190600101611d10565b505050908301949094525060400152919050565b600060208284031215611d5257600080fd5b81516112af8161189256fea2646970667358221220019042e2fa1ddf40ad2442b13da589ca89a15ac368f145ebe78777a555b27d1b64736f6c63430008110033";

type ArbitrumHubConnectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ArbitrumHubConnectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ArbitrumHubConnector__factory extends ContractFactory {
  constructor(...args: ArbitrumHubConnectorConstructorParams) {
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
    _outbox: PromiseOrValue<string>,
    _maxSubmissionCostCap: PromiseOrValue<BigNumberish>,
    _maxGasCap: PromiseOrValue<BigNumberish>,
    _gasPriceCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ArbitrumHubConnector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _outbox,
      _maxSubmissionCostCap,
      _maxGasCap,
      _gasPriceCap,
      overrides || {}
    ) as Promise<ArbitrumHubConnector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _outbox: PromiseOrValue<string>,
    _maxSubmissionCostCap: PromiseOrValue<BigNumberish>,
    _maxGasCap: PromiseOrValue<BigNumberish>,
    _gasPriceCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _outbox,
      _maxSubmissionCostCap,
      _maxGasCap,
      _gasPriceCap,
      overrides || {}
    );
  }
  override attach(address: string): ArbitrumHubConnector {
    return super.attach(address) as ArbitrumHubConnector;
  }
  override connect(signer: Signer): ArbitrumHubConnector__factory {
    return super.connect(signer) as ArbitrumHubConnector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ArbitrumHubConnectorInterface {
    return new utils.Interface(_abi) as ArbitrumHubConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ArbitrumHubConnector {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ArbitrumHubConnector;
  }
}

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
  MultichainHubConnector,
  MultichainHubConnectorInterface,
} from "../../../../../contracts/messaging/connectors/multichain/MultichainHubConnector";

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
        name: "_mirrorChainId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_gasCap",
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
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "anyExecute",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
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
  "0x6101406040523480156200001257600080fd5b506040516200165e3803806200165e8339810160408190526200003591620003d1565b848282808a8a858a8a84848484846200004e3362000296565b8463ffffffff16600003620000995760405162461bcd60e51b815260206004820152600c60248201526b32b6b83a3c903237b6b0b4b760a11b60448201526064015b60405180910390fd5b6001600160a01b038216620000e55760405162461bcd60e51b815260206004820152601160248201527032b6b83a3c903937b7ba26b0b730b3b2b960791b604482015260640162000090565b63ffffffff8086166080526001600160a01b0380851660a05283811660c05290851660e0528116156200011d576200011d81620002f5565b604080516001600160a01b0385811682528481166020830152831681830152905163ffffffff86811692908816917f4f9c27c2fe3f84576ea469d367d044da53c45e951617e8389f2b5ed8db9d25f09181900360600190a35050505050505050505062000190816200035e60201b60201c565b5081600003620001d45760405162461bcd60e51b815260206004820152600e60248201526d085b5a5c9c9bdc90da185a5b925960921b604482015260640162000090565b826001600160a01b031663c34c08e56040518163ffffffff1660e01b8152600401602060405180830381865afa15801562000213573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000239919062000454565b6001600160a01b0316610100819052620002825760405162461bcd60e51b815260206004820152600960248201526810b2bc32b1baba37b960b91b604482015260640162000090565b506101205250620004799650505050505050565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b60045460408051918252602082018390527f877a02cb809da0364d23adca3cd50c451b53f279d3df632e1fc11eb66335bce5910160405180910390a1600455565b805163ffffffff81168114620003b457600080fd5b919050565b80516001600160a01b0381168114620003b457600080fd5b600080600080600080600060e0888a031215620003ed57600080fd5b620003f8886200039f565b965062000408602089016200039f565b95506200041860408901620003b9565b94506200042860608901620003b9565b93506200043860808901620003b9565b925060a0880151915060c0880151905092959891949750929550565b6000602082840312156200046757600080fd5b6200047282620003b9565b9392505050565b60805160a05160c05160e051610100516101205161115d6200050160003960008181610b4201528181610c350152610d8601526000610ce3015260008181610136015261089001526000818161022c015281816103fa01526108690152600081816103ad015281816104af015281816107a00152610a75015260006101d8015261115d6000f3fe6080604052600436106101185760003560e01c80637850b020116100a0578063cc39428311610064578063cc39428314610332578063d1851c9214610352578063d232c22014610370578063d69f9d611461039b578063db1b7659146103cf57600080fd5b80637850b020146102915780638da5cb5b146102b15780639abaf479146102cf578063b1f8100d146102fd578063c5b350df1461031d57600080fd5b806352a9674b116100e757806352a9674b146101c65780635bd11efc146101fa5780635f61e3ec1461021a5780636a42b8f814610266578063715018a61461027c57600080fd5b806314168416146101245780633cf52ffb1461017257806348e6fa23146101915780634ff746f6146101a657600080fd5b3661011f57005b600080fd5b34801561013057600080fd5b506101587f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020015b60405180910390f35b34801561017e57600080fd5b506002545b604051908152602001610169565b6101a461019f366004610e6a565b6103ef565b005b3480156101b257600080fd5b506101a46101c1366004610ece565b6104a4565b3480156101d257600080fd5b506101587f000000000000000000000000000000000000000000000000000000000000000081565b34801561020657600080fd5b506101a4610215366004610f20565b61054a565b34801561022657600080fd5b5061024e7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610169565b34801561027257600080fd5b5062093a80610183565b34801561028857600080fd5b506101a4610581565b34801561029d57600080fd5b506101a46102ac366004610f44565b610640565b3480156102bd57600080fd5b506000546001600160a01b031661024e565b3480156102db57600080fd5b506102ef6102ea366004610ece565b610674565b604051610169929190610faa565b34801561030957600080fd5b506101a4610318366004610f20565b610686565b34801561032957600080fd5b506101a461072b565b34801561033e57600080fd5b5060035461024e906001600160a01b031681565b34801561035e57600080fd5b506001546001600160a01b031661024e565b34801561037c57600080fd5b506000546001600160a01b0316155b6040519015158152602001610169565b3480156103a757600080fd5b5061024e7f000000000000000000000000000000000000000000000000000000000000000081565b3480156103db57600080fd5b5061038b6103ea366004610f20565b610786565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461045b5760405162461bcd60e51b815260206004820152600c60248201526b10b937b7ba26b0b730b3b2b960a11b60448201526064015b60405180910390fd5b6104658282610797565b7fdcaa37a042a0087de79018c629bbd29cee82ca80bd9be394e1696bf9e935507782823360405161049893929190610fc5565b60405180910390a15050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105055760405162461bcd60e51b81526004016104529060208082526004908201526310a0a6a160e11b604082015260600190565b61050e816107d4565b7fb3abc57bfeebd2cac918901db582f71972a8e628bccf19f5ae3e3482b98a5ced813360405161053f929190611003565b60405180910390a150565b6000546001600160a01b03163314610575576040516311a8a1bb60e31b815260040160405180910390fd5b61057e81610917565b50565b6000546001600160a01b031633146105ac576040516311a8a1bb60e31b815260040160405180910390fd5b6002546000036105cf57604051630e4b303f60e21b815260040160405180910390fd5b62093a80600254426105e19190611043565b116105ff576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b031615610629576040516323295ef960e01b815260040160405180910390fd5b60015461063e906001600160a01b0316610980565b565b6000546001600160a01b0316331461066b576040516311a8a1bb60e31b815260040160405180910390fd5b61057e816109df565b60006060610681836107d4565b915091565b6000546001600160a01b031633146106b1576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b0382811691161480156106d657506001600160a01b03811615155b156106f4576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831691160361072257604051634a2fb73f60e11b815260040160405180910390fd5b61057e81610a20565b6001546001600160a01b03163314610756576040516311a7f27160e11b815260040160405180910390fd5b62093a80600254426107689190611043565b116106295760405163d39c12bb60e01b815260040160405180910390fd5b600061079182610a6e565b92915050565b6003546107d0907f0000000000000000000000000000000000000000000000000000000000000000906001600160a01b03168484610a9a565b5050565b6003546107e9906001600160a01b0316610a6e565b6108245760405162461bcd60e51b815260206004820152600c60248201526b10b61921b7b73732b1ba37b960a11b6044820152606401610452565b805160201461085f5760405162461bcd60e51b8152602060048201526007602482015266042d8cadccee8d60cb1b6044820152606401610452565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016638e7d93fa7f00000000000000000000000000000000000000000000000000000000000000006108b88461105a565b6040516001600160e01b031960e085901b16815263ffffffff9290921660048301526024820152604401600060405180830381600087803b1580156108fc57600080fd5b505af1158015610910573d6000803e3d6000fd5b5050505050565b600354604080516001600160a01b03928316815291831660208301527fc77bec288fc88f168427f2f7da682eadb26cac89d8d591af6e443da98dff2bbc910160405180910390a1600380546001600160a01b0319166001600160a01b0392909216919091179055565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60045460408051918252602082018390527f877a02cb809da0364d23adca3cd50c451b53f279d3df632e1fc11eb66335bce5910160405180910390a1600455565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b60006107917f000000000000000000000000000000000000000000000000000000000000000083610c9a565b8151602014610ada5760405162461bcd60e51b815260206004820152600c60248201526b042c8c2e8c240d8cadccee8d60a31b6044820152606401610452565b805115610b185760405162461bcd60e51b815260206004820152600c60248201526b042c8c2e8c240d8cadccee8d60a31b6044820152606401610452565b6000610b2334610db1565b6040516366c96b3760e01b8152606060048201526000606482018190527f00000000000000000000000000000000000000000000000000000000000000006024830152602060448301529192506001600160a01b038716906366c96b3790608401602060405180830381865afa158015610ba1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bc59190611081565b9050610bd282600161109a565b8110610c085760405162461bcd60e51b8152602060048201526005602482015264216665657360d81b6044820152606401610452565b60405163bd45c4e760e01b81526001600160a01b0387169063bd45c4e7908490610c6090899089906000907f0000000000000000000000000000000000000000000000000000000000000000906002906004016110b2565b6000604051808303818588803b158015610c7957600080fd5b505af1158015610c8d573d6000803e3d6000fd5b5050505050505050505050565b6000336001600160a01b03841614610cde5760405162461bcd60e51b81526020600482015260076024820152662162726964676560c81b6044820152606401610452565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d0496d6a6040518163ffffffff1660e01b8152600401606060405180830381865afa158015610d3f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d6391906110f0565b5091509150836001600160a01b0316826001600160a01b0316148015610da857507f000000000000000000000000000000000000000000000000000000000000000081145b95945050505050565b6000600454821115610dc35760045491505b5090565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610dee57600080fd5b813567ffffffffffffffff80821115610e0957610e09610dc7565b604051601f8301601f19908116603f01168101908282118183101715610e3157610e31610dc7565b81604052838152866020858801011115610e4a57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060408385031215610e7d57600080fd5b823567ffffffffffffffff80821115610e9557600080fd5b610ea186838701610ddd565b93506020850135915080821115610eb757600080fd5b50610ec485828601610ddd565b9150509250929050565b600060208284031215610ee057600080fd5b813567ffffffffffffffff811115610ef757600080fd5b610f0384828501610ddd565b949350505050565b6001600160a01b038116811461057e57600080fd5b600060208284031215610f3257600080fd5b8135610f3d81610f0b565b9392505050565b600060208284031215610f5657600080fd5b5035919050565b6000815180845260005b81811015610f8357602081850181015186830182015201610f67565b81811115610f95576000602083870101525b50601f01601f19169290920160200192915050565b8215158152604060208201526000610f036040830184610f5d565b606081526000610fd86060830186610f5d565b8281036020840152610fea8186610f5d565b91505060018060a01b0383166040830152949350505050565b6040815260006110166040830185610f5d565b905060018060a01b03831660208301529392505050565b634e487b7160e01b600052601160045260246000fd5b6000828210156110555761105561102d565b500390565b8051602080830151919081101561107b576000198160200360031b1b821691505b50919050565b60006020828403121561109357600080fd5b5051919050565b600082198211156110ad576110ad61102d565b500190565b600060018060a01b03808816835260a060208401526110d460a0840188610f5d565b9516604083015250606081019290925260809091015292915050565b60008060006060848603121561110557600080fd5b835161111081610f0b565b60208501516040909501519096949550939250505056fea2646970667358221220627045eb5dc01fd88c7eb1eb88053c6b06760d38343a7ea9ff5375d41d7ae8cc64736f6c634300080f0033";

type MultichainHubConnectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MultichainHubConnectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MultichainHubConnector__factory extends ContractFactory {
  constructor(...args: MultichainHubConnectorConstructorParams) {
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
    _mirrorChainId: PromiseOrValue<BigNumberish>,
    _gasCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MultichainHubConnector> {
    return super.deploy(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorChainId,
      _gasCap,
      overrides || {}
    ) as Promise<MultichainHubConnector>;
  }
  override getDeployTransaction(
    _domain: PromiseOrValue<BigNumberish>,
    _mirrorDomain: PromiseOrValue<BigNumberish>,
    _amb: PromiseOrValue<string>,
    _rootManager: PromiseOrValue<string>,
    _mirrorConnector: PromiseOrValue<string>,
    _mirrorChainId: PromiseOrValue<BigNumberish>,
    _gasCap: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorChainId,
      _gasCap,
      overrides || {}
    );
  }
  override attach(address: string): MultichainHubConnector {
    return super.attach(address) as MultichainHubConnector;
  }
  override connect(signer: Signer): MultichainHubConnector__factory {
    return super.connect(signer) as MultichainHubConnector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultichainHubConnectorInterface {
    return new utils.Interface(_abi) as MultichainHubConnectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultichainHubConnector {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MultichainHubConnector;
  }
}

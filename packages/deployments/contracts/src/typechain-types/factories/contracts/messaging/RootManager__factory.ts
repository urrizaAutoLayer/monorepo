/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  RootManager,
  RootManagerInterface,
} from "../../../contracts/messaging/RootManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_merkle",
        type: "address",
      },
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
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "connector",
        type: "address",
      },
    ],
    name: "ConnectorAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "connector",
        type: "address",
      },
    ],
    name: "ConnectorRemoved",
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
        indexed: false,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "receivedRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "RootAggregated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "aggregate",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint32[]",
        name: "domains",
        type: "uint32[]",
      },
    ],
    name: "RootPropagated",
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
    name: "MERKLE",
    outputs: [
      {
        internalType: "contract MerkleTreeManager",
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
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_connector",
        type: "address",
      },
    ],
    name: "addConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_inbound",
        type: "bytes32",
      },
    ],
    name: "aggregate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "connectors",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "domains",
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
    name: "propagate",
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
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "removeConnector",
    outputs: [],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620021513803806200215183398101604081905262000034916200013d565b600380546001600160a01b0319166001600160a01b0383161790556200005a33620000b3565b6001600160a01b038216156200007157816200009e565b6040516200007f9062000112565b604051809103906000f0801580156200009c573d6000803e3d6000fd5b505b6001600160a01b031660805250620001759050565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610ee4806200126d83390190565b80516001600160a01b03811681146200013857600080fd5b919050565b600080604083850312156200015157600080fd5b6200015c8362000120565b91506200016c6020840162000120565b90509250929050565b6080516110ce6200019f60003960008181610194015281816103db01526106d901526110ce6000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063b904670f11610097578063d1851c9211610066578063d1851c9214610215578063d232c22014610226578063d2a3cc7114610242578063e6f1208d1461025557600080fd5b8063b904670f146101c9578063c14bad4a146101dc578063c546091214610205578063c5b350df1461020d57600080fd5b80638da5cb5b116100d35780638da5cb5b146101575780638e7d93fa1461017c578063a01892a51461018f578063b1f8100d146101b657600080fd5b80633cf52ffb1461010557806366cf8fab1461011c5780636a42b8f814610144578063715018a61461014d575b600080fd5b6002545b6040519081526020015b60405180910390f35b61012f61012a366004610cfc565b610268565b60405163ffffffff9091168152602001610113565b62093a80610109565b6101556102a2565b005b6000546001600160a01b03165b6040516001600160a01b039091168152602001610113565b61015561018a366004610d2e565b610361565b6101647f000000000000000000000000000000000000000000000000000000000000000081565b6101556101c4366004610d6f565b6104ac565b6101556101d7366004610d91565b610554565b6101646101ea366004610dc4565b6004602052600090815260409020546001600160a01b031681565b6101556106d5565b61015561087d565b6001546001600160a01b0316610164565b6000546040516001600160a01b03909116158152602001610113565b610155610250366004610d6f565b6108d8565b610155610263366004610dc4565b6109a0565b6005818154811061027857600080fd5b9060005260206000209060089182820401919006600402915054906101000a900463ffffffff1681565b6000546001600160a01b031633146102cd576040516311a8a1bb60e31b815260040160405180910390fd5b6002546000036102f057604051630e4b303f60e21b815260040160405180910390fd5b62093a80600254426103029190610df5565b11610320576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b03161561034a576040516323295ef960e01b815260040160405180910390fd5b60015461035f906001600160a01b0316610c4f565b565b63ffffffff821660009081526004602052604090205482906001600160a01b031633146103c25760405162461bcd60e51b815260206004820152600a60248201526910b1b7b73732b1ba37b960b11b60448201526064015b60405180910390fd5b604051632d287e4360e01b8152600481018390526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690632d287e439060240160408051808303816000875af115801561042b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061044f9190610e0c565b91507ff5832b5d15f2d906d01b871e48b0d1f27d8f282a7e0771c428b55bfeb409fa0590508484610481600185610df5565b6040805163ffffffff909416845260208401929092529082015260600160405180910390a150505050565b6000546001600160a01b031633146104d7576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b0382811691161480156104fc57506001600160a01b03811615155b1561051a576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831691160361054857604051634a2fb73f60e11b815260040160405180910390fd5b61055181610cae565b50565b6000546001600160a01b0316331461057f576040516311a8a1bb60e31b815260040160405180910390fd5b6001600160a01b0381166105c25760405162461bcd60e51b815260206004820152600a60248201526910b1b7b73732b1ba37b960b11b60448201526064016103b9565b63ffffffff82166000908152600460205260409020546001600160a01b0316156106175760405162461bcd60e51b815260206004820152600660248201526565786973747360d01b60448201526064016103b9565b63ffffffff828116600081815260046020818152604080842080546001600160a01b0319166001600160a01b0389169081179091556005805460018101825595527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db06008860401805460079096169094026101000a968702199094169585029590951790915583519283528201527fffe1880f946ecead1a35ac14f99c782cacaa440f95493896794dabacf8f95c5491015b60405180910390a15050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ebf0c7176040518163ffffffff1660e01b8152600401602060405180830381865afa158015610735573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107599190610e30565b60055490915060005b818163ffffffff16101561084a5760006004600060058463ffffffff168154811061078f5761078f610e49565b6000918252602080832060088304015460079092166004026101000a90910463ffffffff16835282810193909352604091820190205481519283018790526001600160a01b0316925082916382646a5891016040516020818303038152906040526040518263ffffffff1660e01b815260040161080c9190610e5f565b600060405180830381600087803b15801561082657600080fd5b505af115801561083a573d6000803e3d6000fd5b5050505081600101915050610762565b507ffbeca3b9b6e2936bbc4ecd9464e6a1092f67b16803cc78b202585d0a7fe0b39b8260056040516106c9929190610eb4565b6001546001600160a01b031633146108a8576040516311a7f27160e11b815260040160405180910390fd5b62093a80600254426108ba9190610df5565b1161034a5760405163d39c12bb60e01b815260040160405180910390fd5b6000546001600160a01b03163314610903576040516311a8a1bb60e31b815260040160405180910390fd5b6003546001600160a01b03908116908216036109615760405162461bcd60e51b815260206004820152601760248201527f616c72656164792077617463686572206d616e6167657200000000000000000060448201526064016103b9565b6040516001600160a01b03821681527fc16d059e43d7f8e29ccb4e001a2f249d3c59e274925d6a6bc3912943441d9f6c9060200160405180910390a150565b6003546040516384785ecd60e01b81523360048201526001600160a01b03909116906384785ecd90602401602060405180830381865afa1580156109e8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a0c9190611041565b610a435760405162461bcd60e51b815260206004820152600860248201526710bbb0ba31b432b960c11b60448201526064016103b9565b63ffffffff81166000908152600460205260409020546001600160a01b031680610a995760405162461bcd60e51b81526020600482015260076024820152662165786973747360c81b60448201526064016103b9565b63ffffffff8216600090815260046020526040812080546001600160a01b031916905560058054610acc90600190610df5565b81548110610adc57610adc610e49565b60009182526020822060088204015460079091166004026101000a900463ffffffff1691505b60055460ff82161015610bb6578363ffffffff1660058260ff1681548110610b2c57610b2c610e49565b6000918252602090912060088204015460079091166004026101000a900463ffffffff1603610ba4578160058260ff1681548110610b6c57610b6c610e49565b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908363ffffffff160217905550610bb6565b80610bae81611063565b915050610b02565b506005805480610bc857610bc8611082565b600082815260209020600860001990920191820401805463ffffffff600460078516026101000a021916905590556040517fb576e68aeacfc9a4973bc2ac5c7ea7e6662b78809d33443fed101e04ceb7c9d490610c42908590859063ffffffff9290921682526001600160a01b0316602082015260400190565b60405180910390a1505050565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b600060208284031215610d0e57600080fd5b5035919050565b803563ffffffff81168114610d2957600080fd5b919050565b60008060408385031215610d4157600080fd5b610d4a83610d15565b946020939093013593505050565b80356001600160a01b0381168114610d2957600080fd5b600060208284031215610d8157600080fd5b610d8a82610d58565b9392505050565b60008060408385031215610da457600080fd5b610dad83610d15565b9150610dbb60208401610d58565b90509250929050565b600060208284031215610dd657600080fd5b610d8a82610d15565b634e487b7160e01b600052601160045260246000fd5b600082821015610e0757610e07610ddf565b500390565b60008060408385031215610e1f57600080fd5b505080516020909101519092909150565b600060208284031215610e4257600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b600060208083528351808285015260005b81811015610e8c57858101830151858201604001528201610e70565b81811115610e9e576000604083870101525b50601f01601f1916929092016040019392505050565b6000604080830185845260208281860152818654610ed6818590815260200190565b60008981526020812095509092505b81600782011015610f5957845463ffffffff808216855281861c81168686015281881c811688860152606082811c821690860152608082811c82169086015260a082811c82169086015260c082811c9091169085015260e090811c9084015260019094019361010090920191600801610ee5565b93549381811015610f755763ffffffff85168352918301916001015b81811015610f905784841c63ffffffff168352918301916001015b81811015610fab5784861c63ffffffff168352918301916001015b81811015610fc857606085901c63ffffffff168352918301916001015b81811015610fe557608085901c63ffffffff168352918301916001015b818110156110025760a085901c63ffffffff168352918301916001015b8181101561101f5760c085901c63ffffffff168352918301916001015b818110156110335760e085901c8352918301915b509098975050505050505050565b60006020828403121561105357600080fd5b81518015158114610d8a57600080fd5b600060ff821660ff810361107957611079610ddf565b60010192915050565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220a92616d1640f20ee1fa58aaecf4c1062d83962dc83677f1d4a95ee1d4e86f1be64736f6c634300080f0033608060405234801561001057600080fd5b50610ec4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80634b72d0d41161005b5780634b72d0d41461010c5780638129fc1c14610121578063ebf0c71714610129578063fd54b2281461013157600080fd5b806306661abd1461008d5780631b373a98146100a45780632d287e43146100b957806331d0913c146100e1575b600080fd5b6021545b6040519081526020015b60405180910390f35b6100b76100b2366004610c28565b61013b565b005b6100cc6100c7366004610c58565b6101cc565b6040805192835260208301919091520161009b565b6022546100f4906001600160a01b031681565b6040516001600160a01b03909116815260200161009b565b61011461029d565b60405161009b9190610c71565b6100b76102d9565b6100916103ea565b6021546100919081565b6022546001600160a01b031633146101835760405162461bcd60e51b815260206004820152600660248201526510b7bbb732b960d11b60448201526064015b60405180910390fd5b6001600160a01b0381166101aa57604051630c11a52d60e11b815260040160405180910390fd5b602280546001600160a01b0319166001600160a01b0392909216919091179055565b60225460009081906001600160a01b031633146102145760405162461bcd60e51b815260206004820152600660248201526510b7bbb732b960d11b604482015260640161017a565b6040805161044081018083526000926001918391820190839060209082845b81548152602001906001019080831161023357505050918352505060209182015491015290506102638185610442565b905061026e8161057e565b60208083015183519295509350829160019161028b918391610b96565b50602091820151910155509092909150565b6102a5610bd4565b604080516104008101918290529060019060209082845b8154815260200190600101908083116102bc575050505050905090565b600054610100900460ff16158080156102f95750600054600160ff909116105b806103135750303b158015610313575060005460ff166001145b6103765760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161017a565b6000805460ff191660011790558015610399576000805461ff0019166101001790555b6103a1610591565b80156103e7576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50565b604080516104408101808352600092839291600191839190820190839060209082845b81548152602001906001019080831161040d575050509183525050602091820154910152905061043c8161057e565b91505090565b61044a610bf3565b600161045860206002610da1565b6104629190610dad565b8360200151106104a75760405162461bcd60e51b815260206004820152601060248201526f1b595c9adb19481d1c995948199d5b1b60821b604482015260640161017a565b6001836020018181516104ba9190610dc4565b905250602083015160005b602081101561056a57816001166001036104fe578451849082602081106104ee576104ee610ddc565b6020020152508391506105789050565b8451816020811061051157610511610ddc565b602002015184604051602001610531929190918252602082015260400190565b6040516020818303038152906040528051906020012093506002826105569190610df2565b91508061056281610e14565b9150506104c5565b50610573610e2d565b839150505b92915050565b60006105788261058c6105c2565b610a83565b600054610100900460ff166105b85760405162461bcd60e51b815260040161017a90610e43565b6105c0610b5b565b565b6105ca610bd4565b600081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb560208201527fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3060408201527f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba8560608201527fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a1934460808201527f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d60a08201527f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a196860c08201527fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f8360e08201527f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af6101008201527fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e06101208201527ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a56101408201527ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf8926101608201527f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c6101808201527fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb6101a08201527f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc6101c08201527fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d26101e08201527f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f6102008201527fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a6102208201527f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a06102408201527fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa06102608201527fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e26102808201527ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd96102a08201527f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e3776102c08201527f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee6526102e08201527fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef6103008201527f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d6103208201527fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d06103408201527f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e6103608201527f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e6103808201527f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea3226103a08201527f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d7356103c08201527f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a96103e082015290565b6020820151600090815b6020811015610b53578451600183831c16906000908360208110610ab357610ab3610ddc565b6020020151905081600103610af3576040805160208101839052908101869052606001604051602081830303815290604052805190602001209450610b3e565b84868460208110610b0657610b06610ddc565b6020020151604051602001610b25929190918252602082015260400190565b6040516020818303038152906040528051906020012094505b50508080610b4b90610e14565b915050610a8d565b505092915050565b600054610100900460ff16610b825760405162461bcd60e51b815260040161017a90610e43565b602280546001600160a01b03191633179055565b8260208101928215610bc4579160200282015b82811115610bc4578251825591602001919060010190610ba9565b50610bd0929150610c13565b5090565b6040518061040001604052806020906020820280368337509192915050565b6040518060400160405280610c06610bd4565b8152602001600081525090565b5b80821115610bd05760008155600101610c14565b600060208284031215610c3a57600080fd5b81356001600160a01b0381168114610c5157600080fd5b9392505050565b600060208284031215610c6a57600080fd5b5035919050565b6104008101818360005b6020808210610c8a5750610c9e565b825184529283019290910190600101610c7b565b50505092915050565b634e487b7160e01b600052601160045260246000fd5b600181815b80851115610cf8578160001904821115610cde57610cde610ca7565b80851615610ceb57918102915b93841c9390800290610cc2565b509250929050565b600082610d0f57506001610578565b81610d1c57506000610578565b8160018114610d325760028114610d3c57610d58565b6001915050610578565b60ff841115610d4d57610d4d610ca7565b50506001821b610578565b5060208310610133831016604e8410600b8410161715610d7b575081810a610578565b610d858383610cbd565b8060001904821115610d9957610d99610ca7565b029392505050565b6000610c518383610d00565b600082821015610dbf57610dbf610ca7565b500390565b60008219821115610dd757610dd7610ca7565b500190565b634e487b7160e01b600052603260045260246000fd5b600082610e0f57634e487b7160e01b600052601260045260246000fd5b500490565b600060018201610e2657610e26610ca7565b5060010190565b634e487b7160e01b600052600160045260246000fd5b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea26469706673582212202aaa1a510baeaf526a4ed7306e28a0142dfbc46ed7f0465f33d240b665d1c54864736f6c634300080f0033";

type RootManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RootManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RootManager__factory extends ContractFactory {
  constructor(...args: RootManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _merkle: PromiseOrValue<string>,
    _watcherManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RootManager> {
    return super.deploy(
      _merkle,
      _watcherManager,
      overrides || {}
    ) as Promise<RootManager>;
  }
  override getDeployTransaction(
    _merkle: PromiseOrValue<string>,
    _watcherManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _merkle,
      _watcherManager,
      overrides || {}
    );
  }
  override attach(address: string): RootManager {
    return super.attach(address) as RootManager;
  }
  override connect(signer: Signer): RootManager__factory {
    return super.connect(signer) as RootManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RootManagerInterface {
    return new utils.Interface(_abi) as RootManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RootManager {
    return new Contract(address, _abi, signerOrProvider) as RootManager;
  }
}

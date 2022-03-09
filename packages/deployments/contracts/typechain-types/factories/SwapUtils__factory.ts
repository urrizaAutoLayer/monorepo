/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SwapUtils, SwapUtilsInterface } from "../SwapUtils";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenAmounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "fees",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "invariant",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpTokenSupply",
        type: "uint256",
      },
    ],
    name: "AddLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newAdminFee",
        type: "uint256",
      },
    ],
    name: "NewAdminFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newSwapFee",
        type: "uint256",
      },
    ],
    name: "NewSwapFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenAmounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpTokenSupply",
        type: "uint256",
      },
    ],
    name: "RemoveLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "tokenAmounts",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "fees",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "invariant",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpTokenSupply",
        type: "uint256",
      },
    ],
    name: "RemoveLiquidityImbalance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpTokenSupply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "boughtId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokensBought",
        type: "uint256",
      },
    ],
    name: "RemoveLiquidityOne",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokensSold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokensBought",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "soldId",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "boughtId",
        type: "uint128",
      },
    ],
    name: "TokenSwap",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_ADMIN_FEE",
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
    name: "MAX_SWAP_FEE",
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
    name: "POOL_PRECISION_DECIMALS",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x613f4761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106101155760003560e01c806371906c2c116100ac578063a5397b221161007b578063a5397b2214610275578063ab3d854414610295578063e0692742146102a0578063e7a4db81146102b3578063f3de0362146102d357600080fd5b806371906c2c1461021c57806373fd6b3e1461022f5780637d0481601461024f578063834b49101461026257600080fd5b8063467e186c116100e8578063467e186c146101a95780634b23603c146101c957806370467276146101dc57806370703e4a146101fc57600080fd5b80630296ab501461011a57806324c5c7511461013957806340370edf1461015b57806341b91c2614610189575b600080fd5b610122601281565b60405160ff90911681526020015b60405180910390f35b81801561014557600080fd5b506101596101543660046137e6565b6102df565b005b81801561016757600080fd5b5061017b610176366004613838565b610436565b604051908152602001610130565b81801561019557600080fd5b5061017b6101a4366004613838565b610d50565b8180156101b557600080fd5b506101596101c436600461390a565b6114f8565b61017b6101d7366004613942565b61157d565b8180156101e857600080fd5b506101596101f736600461390a565b6115e8565b61020f61020a36600461390a565b611666565b6040516101309190613986565b61017b61022a3660046139ca565b611746565b81801561023b57600080fd5b5061020f61024a366004613a2f565b611814565b61017b61025d36600461390a565b611be8565b61017b610270366004613a93565b611c7f565b81801561028157600080fd5b5061017b610290366004613af2565b611ef9565b61017b6305f5e10081565b61017b6102ae366004613b40565b6122af565b8180156102bf57600080fd5b5061017b6102ce366004613b75565b612336565b61017b6402540be40081565b60008260070180548060200260200160405190810160405280929190818152602001828054801561033957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161031b575b5050505050905060005b815181101561043057600082828151811061036057610360613ba2565b6020026020010151905060006103ff86600901848154811061038457610384613ba2565b6000918252602090912001546040516370a0823160e01b81523060048201526001600160a01b038516906370a08231906024015b602060405180830381865afa1580156103d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f99190613bb8565b90612684565b9050801561041b5761041b6001600160a01b0383168683612690565b5050808061042890613be7565b915050610343565b50505050565b6000808460070180548060200260200160405190810160405280929190818152602001828054801561049157602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610473575b5050505050905080518451146104ee5760405162461bcd60e51b815260206004820181905260248201527f416d6f756e7473206d757374206d6174636820706f6f6c656420746f6b656e7360448201526064015b60405180910390fd5b600060405180610100016040528060008152602001600081526020016000815260200161051a886126f8565b81526020018760060160009054906101000a90046001600160a01b03166001600160a01b03168152602001600081526020018760090180548060200260200160405190810160405280929190818152602001828054801561059a57602002820191906000526020600020905b815481526020019060010190808311610586575b50505050508152602001876008018054806020026020016040519081016040528092919081815260200182805480156105f257602002820191906000526020600020905b8154815260200190600101908083116105de575b5050505050815250905080608001516001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561063e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106629190613bb8565b60a08201819052156106905761068d6106838260c001518360e00151612703565b8260600151612812565b81525b6000825167ffffffffffffffff8111156106ac576106ac613822565b6040519080825280602002602001820160405280156106d5578160200160208202803683370190505b50905060005b835181101561093e5760a083015115158061070f5750600087828151811061070557610705613ba2565b6020026020010151115b61075b5760405162461bcd60e51b815260206004820152601e60248201527f4d75737420737570706c7920616c6c20746f6b656e7320696e20706f6f6c000060448201526064016104e5565b86818151811061076d5761076d613ba2565b60200260200101516000146108c657600084828151811061079057610790613ba2565b60209081029190910101516040516370a0823160e01b81523060048201526001600160a01b03909116906370a0823190602401602060405180830381865afa1580156107e0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108049190613bb8565b905061085833308a858151811061081d5761081d613ba2565b602002602001015188868151811061083757610837613ba2565b60200260200101516001600160a01b0316612999909392919063ffffffff16565b6108a68186848151811061086e5761086e613ba2565b60209081029190910101516040516370a0823160e01b81523060048201526001600160a01b03909116906370a08231906024016103b8565b8883815181106108b8576108b8613ba2565b602002602001018181525050505b61090f8782815181106108db576108db613ba2565b60200260200101518460c0015183815181106108f9576108f9613ba2565b60200260200101516129d190919063ffffffff16565b82828151811061092157610921613ba2565b60209081029190910101528061093681613be7565b9150506106db565b5061095a610950828460e00151612703565b8360600151612812565b602083018190528251106109a45760405162461bcd60e51b8152602060048201526011602482015270442073686f756c6420696e63726561736560781b60448201526064016104e5565b60208201516040830152825160009067ffffffffffffffff8111156109cb576109cb613822565b6040519080825280602002602001820160405280156109f4578160200160208202803683370190505b5090508260a00151600014610bd2576000610a14896004015486516129dd565b905060005b8551811015610bab576000610a668660000151610a608860c001518581518110610a4557610a45613ba2565b602002602001015189602001516129f890919063ffffffff16565b90612a04565b9050610aa76402540be400610a60610aa0888681518110610a8957610a89613ba2565b602002602001015185612a1090919063ffffffff16565b86906129f8565b848381518110610ab957610ab9613ba2565b602002602001018181525050610b29610b016402540be400610a608e60050154888781518110610aeb57610aeb613ba2565b60200260200101516129f890919063ffffffff16565b868481518110610b1357610b13613ba2565b602002602001015161268490919063ffffffff16565b8b6009018381548110610b3e57610b3e613ba2565b9060005260206000200181905550610b7b848381518110610b6157610b61613ba2565b6020026020010151868481518110610b1357610b13613ba2565b858381518110610b8d57610b8d613ba2565b60209081029190910101525080610ba381613be7565b915050610a19565b50610bc7610bbd848660e00151612703565b8560600151612812565b604085015250610be9565b8151610be79060098a01906020850190613786565b505b60008360a0015160001415610c0357506020830151610c2b565b835160a08501516040860151610c289291610a6091610c229084612684565b906129f8565b90505b86811015610c7b5760405162461bcd60e51b815260206004820152601b60248201527f436f756c646e2774206d696e74206d696e20726571756573746564000000000060448201526064016104e5565b60808401516040516340c10f1960e01b8152336004820152602481018390526001600160a01b03909116906340c10f1990604401600060405180830381600087803b158015610cc957600080fd5b505af1158015610cdd573d6000803e3d6000fd5b50505050336001600160a01b03167f189c623b666b1b45b83d7178f39b8c087cb09774317ca2f53c2d3c3726f222a289848760200151610d2a868a60a001516129d190919063ffffffff16565b604051610d3a9493929190613c3d565b60405180910390a29450505050505b9392505050565b600080604051806101000160405280600081526020016000815260200160008152602001610d7d876126f8565b81526020018660060160009054906101000a90046001600160a01b03166001600160a01b031681526020016000815260200186600901805480602002602001604051908101604052809291908181526020018280548015610dfd57602002820191906000526020600020905b815481526020019060010190808311610de9575b5050505050815260200186600801805480602002602001604051908101604052809291908181526020018280548015610e5557602002820191906000526020600020905b815481526020019060010190808311610e41575b5050505050815250905080608001516001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ea1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec59190613bb8565b60a08201526007850180546040805160208084028201810190925282815260009390929091830182828015610f2357602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610f05575b505050505090508051855114610f7b5760405162461bcd60e51b815260206004820181905260248201527f416d6f756e74732073686f756c64206d6174636820706f6f6c20746f6b656e7360448201526064016104e5565b60808201516040516370a0823160e01b81523360048201526001600160a01b03909116906370a0823190602401602060405180830381865afa158015610fc5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe99190613bb8565b8411158015610ff757508315155b6110135760405162461bcd60e51b81526004016104e590613c76565b6000611024876004015483516129dd565b90506000825167ffffffffffffffff81111561104257611042613822565b60405190808252806020026020018201604052801561106b578160200160208202803683370190505b5090506000835167ffffffffffffffff81111561108a5761108a613822565b6040519080825280602002602001820160405280156110b3578160200160208202803683370190505b5090506110d56110cb8660c001518760e00151612703565b8660600151612812565b855260005b8451811015611175576111468982815181106110f8576110f8613ba2565b6020026020010151604051806060016040528060238152602001613eef602391398860c00151848151811061112f5761112f613ba2565b6020026020010151612a359092919063ffffffff16565b82828151811061115857611158613ba2565b60209081029190910101528061116d81613be7565b9150506110da565b506111876110cb828760e00151612703565b602086015260005b84518110156112f65760006111d68760000151610a608960c0015185815181106111bb576111bb613ba2565b60200260200101518a602001516129f890919063ffffffff16565b905060006112068484815181106111ef576111ef613ba2565b602002602001015183612a1090919063ffffffff16565b905061121b6402540be400610a6088846129f8565b85848151811061122d5761122d613ba2565b60200260200101818152505061127161125f6402540be400610a608f60050154898881518110610aeb57610aeb613ba2565b858581518110610b1357610b13613ba2565b8c600901848154811061128657611286613ba2565b90600052602060002001819055506112c38584815181106112a9576112a9613ba2565b6020026020010151858581518110610b1357610b13613ba2565b8484815181106112d5576112d5613ba2565b602002602001018181525050505080806112ee90613be7565b91505061118f565b506113086110cb828760e00151612703565b60408601819052855160a08701516000935061132e92610a609190610c22908490612684565b90508061137d5760405162461bcd60e51b815260206004820152601b60248201527f4275726e7420616d6f756e742063616e6e6f74206265207a65726f000000000060448201526064016104e5565b6113888160016129d1565b9050868111156113da5760405162461bcd60e51b815260206004820152601b60248201527f746f6b656e416d6f756e74203e206d61784275726e416d6f756e74000000000060448201526064016104e5565b608085015160405163079cc67960e41b8152336004820152602481018390526001600160a01b03909116906379cc679090604401600060405180830381600087803b15801561142857600080fd5b505af115801561143c573d6000803e3d6000fd5b5050505060005b84518110156114ae5761149c338a838151811061146257611462613ba2565b602002602001015187848151811061147c5761147c613ba2565b60200260200101516001600160a01b03166126909092919063ffffffff16565b806114a681613be7565b915050611443565b50336001600160a01b03167f3631c28b1f9dd213e0319fb167b554d76b6c283a41143eb400a0d1adb1af175589848860200151610d2a868b60a0015161268490919063ffffffff16565b6305f5e10081111561153e5760405162461bcd60e51b815260206004820152600f60248201526e08ccaca40d2e640e8dede40d0d2ced608b1b60448201526064016104e5565b600482018190556040518181527fd88ea5155021c6f8dafa1a741e173f595cdf77ce7c17d43342131d7f06afdfe5906020015b60405180910390a15050565b60006115de85858585896009018054806020026020016040519081016040528092919081815260200182805480156115d457602002820191906000526020600020905b8154815260200190600101908083116115c0575b5050505050612a61565b5095945050505050565b6402540be40081111561162f5760405162461bcd60e51b815260206004820152600f60248201526e08ccaca40d2e640e8dede40d0d2ced608b1b60448201526064016104e5565b600582018190556040518181527fab599d640ca80cde2b09b128a4154a8dfe608cb80f4c9399c8b954b01fd35f3890602001611571565b606061173d836009018054806020026020016040519081016040528092919081815260200182805480156116b957602002820191906000526020600020905b8154815260200190600101908083116116a5575b5050505050838560060160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611714573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117389190613bb8565b612bec565b90505b92915050565b60008061176361175584612cdb565b61175e856126f8565b612812565b905060008360060160009054906101000a90046001600160a01b031690506000816001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156117c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117e59190613bb8565b905080156118095761180081610a60610aa06012600a613d81565b95945050505050565b506000949350505050565b6006840154600785018054604080516020808402820181019092528281526060946001600160a01b031693600093919290919083018282801561188057602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611862575b50506040516370a0823160e01b815233600482015293945050506001600160a01b038416916370a082319150602401602060405180830381865afa1580156118cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118f09190613bb8565b86111561190f5760405162461bcd60e51b81526004016104e590613c76565b8051841461195f5760405162461bcd60e51b815260206004820181905260248201527f6d696e416d6f756e7473206d757374206d6174636820706f6f6c546f6b656e7360448201526064016104e5565b6000876009018054806020026020016040519081016040528092919081815260200182805480156119af57602002820191906000526020600020905b81548152602001906001019080831161199b575b505050505090506000836001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156119f6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a1a9190613bb8565b90506000611a29838a84612bec565b905060005b8151811015611b3257888882818110611a4957611a49613ba2565b90506020020135828281518110611a6257611a62613ba2565b60200260200101511015611ab85760405162461bcd60e51b815260206004820152601a60248201527f616d6f756e74735b695d203c206d696e416d6f756e74735b695d00000000000060448201526064016104e5565b611ae7828281518110611acd57611acd613ba2565b6020026020010151858381518110610b1357610b13613ba2565b8b6009018281548110611afc57611afc613ba2565b9060005260206000200181905550611b203383838151811061146257611462613ba2565b80611b2a81613be7565b915050611a2e565b5060405163079cc67960e41b8152336004820152602481018a90526001600160a01b038616906379cc679090604401600060405180830381600087803b158015611b7b57600080fd5b505af1158015611b8f573d6000803e3d6000fd5b503392507f88d38ed598fdd809c2bf01ee49cd24b7fdabf379a83d29567952b60324d58cef9150839050611bc3858d612684565b604051611bd1929190613d8d565b60405180910390a29450505050505b949350505050565b60078201546000908210611c0e5760405162461bcd60e51b81526004016104e590613daf565b61173d836009018381548110611c2657611c26613ba2565b9060005260206000200154846007018481548110611c4657611c46613ba2565b6000918252602090912001546040516370a0823160e01b81523060048201526001600160a01b03909116906370a08231906024016103b8565b600080611c8b866126f8565b9050600086600901805480602002602001604051908101604052809291908181526020018280548015611cdd57602002820191906000526020600020905b815481526020019060010190808311611cc9575b50505050509050600087600801805480602002602001604051908101604052809291908181526020018280548015611d3457602002820191906000526020600020905b815481526020019060010190808311611d20575b505050505090506000611d50611d4a8484612703565b85612812565b905060005b8351811015611e2d578615611db557611d92898983818110611d7957611d79613ba2565b905060200201358583815181106108f9576108f9613ba2565b848281518110611da457611da4613ba2565b602002602001018181525050611e1b565b611dfc898983818110611dca57611dca613ba2565b90506020020135604051806060016040528060238152602001613eef6023913986848151811061112f5761112f613ba2565b848281518110611e0e57611e0e613ba2565b6020026020010181815250505b80611e2581613be7565b915050611d55565b506000611e43611e3d8585612703565b86612812565b905060008a60060160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611e9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ec09190613bb8565b90508715611ee757611eda83610a6083610c228684612684565b9650505050505050611be0565b611eda83610a6083610c228387612684565b600080866007018660ff1681548110611f1457611f14613ba2565b6000918252602090912001546040516370a0823160e01b81523360048201526001600160a01b03909116915081906370a0823190602401602060405180830381865afa158015611f68573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f8c9190613bb8565b841115611fdb5760405162461bcd60e51b815260206004820152601d60248201527f43616e6e6f742073776170206d6f7265207468616e20796f75206f776e00000060448201526064016104e5565b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a0823190602401602060405180830381865afa158015612022573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120469190613bb8565b905061205d6001600160a01b038316333088612999565b6040516370a0823160e01b815230600482015261208f9082906001600160a01b038516906370a08231906024016103b8565b945050506000806000886009018054806020026020016040519081016040528092919081815260200182805480156120e657602002820191906000526020600020905b8154815260200190600101908083116120d2575b505050505090506120fa8989898985612a61565b90935091508483101561214f5760405162461bcd60e51b815260206004820181905260248201527f53776170206469646e277420726573756c7420696e206d696e20746f6b656e7360448201526064016104e5565b60006121978a6008018960ff168154811061216c5761216c613ba2565b9060005260206000200154610a606402540be400610a608e60050154886129f890919063ffffffff16565b90506121b287838b60ff16815181106108f9576108f9613ba2565b8a6009018a60ff16815481106121ca576121ca613ba2565b90600052602060002001819055506121f5816103f986858c60ff1681518110610b1357610b13613ba2565b8a6009018960ff168154811061220d5761220d613ba2565b906000526020600020018190555061225433858c6007018b60ff168154811061223857612238613ba2565b6000918252602090912001546001600160a01b03169190612690565b604080518881526020810186905260ff8b8116828401528a166060820152905133917fc6c1e0630dbe9130cc068028486c0d118ddcea348550819defd5cb8c257f8a38919081900360800190a2509198975050505050505050565b6000806115de8585858860060160009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561230d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906123319190613bb8565b612d8b565b6006840154600785018054604080516020808402820181019092528281526000946001600160a01b031693859391929091908301828280156123a157602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311612383575b50506040516370a0823160e01b815233600482015293945050506001600160a01b038416916370a082319150602401602060405180830381865afa1580156123ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124119190613bb8565b8611156124305760405162461bcd60e51b81526004016104e590613c76565b80518560ff16106124755760405162461bcd60e51b815260206004820152600f60248201526e151bdad95b881b9bdd08199bdd5b99608a1b60448201526064016104e5565b6000826001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156124b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124d99190613bb8565b90506000806124ea8a8a8a86612d8b565b915091508682101561252f5760405162461bcd60e51b815260206004820152600e60248201526d191e480f081b5a5b905b5bdd5b9d60921b60448201526064016104e5565b61258d61255c6125556402540be400610a608e60050154866129f890919063ffffffff16565b84906129d1565b8b6009018a60ff168154811061257457612574613ba2565b906000526020600020015461268490919063ffffffff16565b8a6009018960ff16815481106125a5576125a5613ba2565b60009182526020909120015560405163079cc67960e41b8152336004820152602481018a90526001600160a01b038616906379cc679090604401600060405180830381600087803b1580156125f957600080fd5b505af115801561260d573d6000803e3d6000fd5b5050505061262b3383868b60ff168151811061147c5761147c613ba2565b604080518a81526020810185905260ff8a168183015260608101849052905133917f43fb02998f4e03da2e0e6fff53fdbf0c40a9f45f145dc377fc30615d7d7a8a64919081900360800190a25098975050505050505050565b600061173d8284613de6565b6040516001600160a01b0383166024820152604481018290526126f390849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152612df3565b505050565b600061174082612ec5565b815181516060919081146127595760405162461bcd60e51b815260206004820152601f60248201527f42616c616e636573206d757374206d61746368206d756c7469706c696572730060448201526064016104e5565b60008167ffffffffffffffff81111561277457612774613822565b60405190808252806020026020018201604052801561279d578160200160208202803683370190505b50905060005b82811015612809576127da8582815181106127c0576127c0613ba2565b6020026020010151878381518110610aeb57610aeb613ba2565b8282815181106127ec576127ec613ba2565b60209081029190910101528061280181613be7565b9150506127a3565b50949350505050565b815160009081805b828110156128625761284e86828151811061283757612837613ba2565b6020026020010151836129d190919063ffffffff16565b91508061285a81613be7565b91505061281a565b508061287357600092505050611740565b6000818161288187866129f8565b905060005b61010081101561295a578260005b878110156128d3576128bf6128b5898d8481518110610aeb57610aeb613ba2565b610a6084886129f8565b9150806128cb81613be7565b915050612894565b5092935083926129276129076128ee83610c228b60016129d1565b6129016064610a6089610c228a84612684565b906129d1565b610a6086610c22612918868d6129f8565b6129016064610a608b8f6129f8565b93506129338486612f50565b156129475783975050505050505050611740565b508061295281613be7565b915050612886565b5060405162461bcd60e51b81526020600482015260136024820152724420646f6573206e6f7420636f6e766572676560681b60448201526064016104e5565b6040516001600160a01b03808516602483015283166044820152606481018290526104309085906323b872dd60e01b906084016126bc565b600061173d8284613dfd565b600061173d6129f26004610c22856001612684565b610a6085855b600061173d8284613e15565b600061173d8284613e34565b600081831115612a2b57612a248284613de6565b9050611740565b61173d8383613de6565b60008184841115612a595760405162461bcd60e51b81526004016104e59190613e82565b505050900390565b600080600087600801805480602002602001604051908101604052809291908181526020018280548015612ab457602002820191906000526020600020905b815481526020019060010190808311612aa0575b505050505090506000612ac78583612703565b905080518860ff16108015612adf575080518760ff16105b612afb5760405162461bcd60e51b81526004016104e590613daf565b6000612b4c828a60ff1681518110612b1557612b15613ba2565b6020026020010151612901858c60ff1681518110612b3557612b35613ba2565b60200260200101518a6129f890919063ffffffff16565b90506000612b65612b5c8c6126f8565b8b8b8587612f67565b9050612b8560016103f983868d60ff1681518110610b1357610b13613ba2565b9550612ba76402540be400610a608d60040154896129f890919063ffffffff16565b9450612bdc848a60ff1681518110612bc157612bc1613ba2565b6020026020010151610a60878961268490919063ffffffff16565b9550505050509550959350505050565b606081831115612c3e5760405162461bcd60e51b815260206004820152601a60248201527f43616e6e6f742065786365656420746f74616c20737570706c7900000000000060448201526064016104e5565b6000845167ffffffffffffffff811115612c5a57612c5a613822565b604051908082528060200260200182016040528015612c83578160200160208202803683370190505b50905060005b855181101561280957612cac84610a6087898581518110610aeb57610aeb613ba2565b828281518110612cbe57612cbe613ba2565b602090810291909101015280612cd381613be7565b915050612c89565b606061174082600901805480602002602001604051908101604052809291908181526020018280548015612d2e57602002820191906000526020600020905b815481526020019060010190808311612d1a575b505050505083600801805480602002602001604051908101604052809291908181526020018280548015612d8157602002820191906000526020600020905b815481526020019060010190808311612d6d575b5050505050612703565b6000806000806000612d9f89888a896131b1565b8093508194508295505050506000612de2846103f98c6008018b60ff1681548110612dcc57612dcc613ba2565b600091825260209091200154610a608688612684565b939a93995092975050505050505050565b6000612e48826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661349a9092919063ffffffff16565b8051909150156126f35780806020019051810190612e669190613eb5565b6126f35760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016104e5565b600381015460018201546000919042821115610d49576002840154845480831115612f2257612f18612f11612efa8685612684565b610a60612f074287612684565b610c228887612684565b82906129d1565b9695505050505050565b612f18612f49612f328685612684565b610a60612f3f4287612684565b610c228689612684565b8290612684565b60006001612f5e8484612a10565b11159392505050565b805160009060ff8681169086161415612fc25760405162461bcd60e51b815260206004820152601d60248201527f43616e277420636f6d7061726520746f6b656e20746f20697473656c6600000060448201526064016104e5565b808660ff16108015612fd65750808560ff16105b61301b5760405162461bcd60e51b8152602060048201526016602482015275151bdad95b9cc81b5d5cdd081899481a5b881c1bdbdb60521b60448201526064016104e5565b60006130278489612812565b905080600080613037858c6129f8565b90506000805b868110156130c0578b60ff1681141561305857899150613088565b8a60ff1681146130835788818151811061307457613074613ba2565b60200260200101519150613088565b6130ae565b61309284836129d1565b93506130ab6130a183896129f8565b610a6087896129f8565b94505b806130b881613be7565b91505061303d565b506130dd6130ce83886129f8565b610a606064610c22888a6129f8565b935060006130fa6130f384610a608960646129f8565b85906129d1565b9050600086815b6101008110156131685790915081906131346131268a6103f9876129018760026129f8565b610a608a61290186806129f8565b91506131408284612f50565b1561315657509850611800975050505050505050565b8061316081613be7565b915050613101565b5060405162461bcd60e51b815260206004820152601e60248201527f417070726f78696d6174696f6e20646964206e6f7420636f6e7665726765000060448201526064016104e5565b6000806000806131c088612cdb565b905080518760ff16106131e55760405162461bcd60e51b81526004016104e590613daf565b60006040518060a00160405280600081526020016000815260200160008152602001600081526020016000815250905061321e896126f8565b60808201819052613230908390612812565b80825261325090613248908890610a60908b906129f8565b825190612684565b60208201528151829060ff8a1690811061326c5761326c613ba2565b60200260200101518711156132c35760405162461bcd60e51b815260206004820152601a60248201527f5769746864726177206578636565647320617661696c61626c6500000000000060448201526064016104e5565b6132d78160800151898484602001516134a9565b6040820152815160009067ffffffffffffffff8111156132f9576132f9613822565b604051908082528060200260200182016040528015613322578160200160208202803683370190505b5090506133348a6004015484516129dd565b606083015260005b83518110156133fe57600084828151811061335957613359613ba2565b602002602001015190506133ce612f496402540be400610a6087606001518f60ff1687146133a757885160208a01516133a29161339b91610a60908a906129f8565b8790612684565b610c22565b610c2289604001516103f98b60000151610a608d602001518b6129f890919063ffffffff16565b8383815181106133e0576133e0613ba2565b602090810291909101015250806133f681613be7565b91505061333c565b50600061342d61341884608001518c8587602001516134a9565b838c60ff1681518110610b1357610b13613ba2565b90506134618b6008018b60ff168154811061344a5761344a613ba2565b600091825260209091200154610a60836001612684565b9050808360400151858c60ff168151811061347e5761347e613ba2565b6020026020010151965096509650505050509450945094915050565b6060611be0848460008561361c565b815160009060ff851681116134f25760405162461bcd60e51b815260206004820152600f60248201526e151bdad95b881b9bdd08199bdd5b99608a1b60448201526064016104e5565b8260008061350089856129f8565b905060005b8481101561357d578860ff16811461356b5761354388828151811061352c5761352c613ba2565b6020026020010151846129d190919063ffffffff16565b925061356861355e868a8481518110610aeb57610aeb613ba2565b610a60868a6129f8565b93505b8061357581613be7565b915050613505565b5061359a61358b82866129f8565b610a606064610c22878b6129f8565b925060006135b061255583610a608a60646129f8565b9050600087815b6101008110156131685790915081906135ea6135dc8b6103f9876129018760026129f8565b610a608961290186806129f8565b91506135f68284612f50565b1561360a57509650611be095505050505050565b8061361481613be7565b9150506135b7565b60608247101561367d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016104e5565b6001600160a01b0385163b6136d45760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104e5565b600080866001600160a01b031685876040516136f09190613ed2565b60006040518083038185875af1925050503d806000811461372d576040519150601f19603f3d011682016040523d82523d6000602084013e613732565b606091505b509150915061374282828661374d565b979650505050505050565b6060831561375c575081610d49565b82511561376c5782518084602001fd5b8160405162461bcd60e51b81526004016104e59190613e82565b8280548282559060005260206000209081019282156137c1579160200282015b828111156137c15782518255916020019190600101906137a6565b506137cd9291506137d1565b5090565b5b808211156137cd57600081556001016137d2565b600080604083850312156137f957600080fd5b8235915060208301356001600160a01b038116811461381757600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060006060848603121561384d57600080fd5b8335925060208085013567ffffffffffffffff8082111561386d57600080fd5b818701915087601f83011261388157600080fd5b81358181111561389357613893613822565b8060051b604051601f19603f830116810181811085821117156138b8576138b8613822565b60405291825284820192508381018501918a8311156138d657600080fd5b938501935b828510156138f4578435845293850193928501926138db565b979a979950505050604095909501359450505050565b6000806040838503121561391d57600080fd5b50508035926020909101359150565b803560ff8116811461393d57600080fd5b919050565b6000806000806080858703121561395857600080fd5b843593506139686020860161392c565b92506139766040860161392c565b9396929550929360600135925050565b6020808252825182820181905260009190848201906040850190845b818110156139be578351835292840192918401916001016139a2565b50909695505050505050565b6000602082840312156139dc57600080fd5b5035919050565b60008083601f8401126139f557600080fd5b50813567ffffffffffffffff811115613a0d57600080fd5b6020830191508360208260051b8501011115613a2857600080fd5b9250929050565b60008060008060608587031215613a4557600080fd5b8435935060208501359250604085013567ffffffffffffffff811115613a6a57600080fd5b613a76878288016139e3565b95989497509550505050565b8015158114613a9057600080fd5b50565b60008060008060608587031215613aa957600080fd5b84359350602085013567ffffffffffffffff811115613ac757600080fd5b613ad3878288016139e3565b9094509250506040850135613ae781613a82565b939692955090935050565b600080600080600060a08688031215613b0a57600080fd5b85359450613b1a6020870161392c565b9350613b286040870161392c565b94979396509394606081013594506080013592915050565b600080600060608486031215613b5557600080fd5b8335925060208401359150613b6c6040850161392c565b90509250925092565b60008060008060808587031215613b8b57600080fd5b84359350602085013592506139766040860161392c565b634e487b7160e01b600052603260045260246000fd5b600060208284031215613bca57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000600019821415613bfb57613bfb613bd1565b5060010190565b600081518084526020808501945080840160005b83811015613c3257815187529582019590820190600101613c16565b509495945050505050565b608081526000613c506080830187613c02565b8281036020840152613c628187613c02565b604084019590955250506060015292915050565b6020808252600d908201526c1f2628173130b630b731b2a7b360991b604082015260600190565b600181815b80851115613cd8578160001904821115613cbe57613cbe613bd1565b80851615613ccb57918102915b93841c9390800290613ca2565b509250929050565b600082613cef57506001611740565b81613cfc57506000611740565b8160018114613d125760028114613d1c57613d38565b6001915050611740565b60ff841115613d2d57613d2d613bd1565b50506001821b611740565b5060208310610133831016604e8410600b8410161715613d5b575081810a611740565b613d658383613c9d565b8060001904821115613d7957613d79613bd1565b029392505050565b600061173d8383613ce0565b604081526000613da06040830185613c02565b90508260208301529392505050565b60208082526018908201527f546f6b656e20696e646578206f7574206f662072616e67650000000000000000604082015260600190565b600082821015613df857613df8613bd1565b500390565b60008219821115613e1057613e10613bd1565b500190565b6000816000190483118215151615613e2f57613e2f613bd1565b500290565b600082613e5157634e487b7160e01b600052601260045260246000fd5b500490565b60005b83811015613e71578181015183820152602001613e59565b838111156104305750506000910152565b6020815260008251806020840152613ea1816040850160208701613e56565b601f01601f19169190910160400192915050565b600060208284031215613ec757600080fd5b8151610d4981613a82565b60008251613ee4818460208701613e56565b919091019291505056fe43616e6e6f74207769746864726177206d6f7265207468616e20617661696c61626c65a26469706673582212203aa6eec2d7c084d56be91162da1f6782b7e2d70d3660de32971bdd9844e1f15f64736f6c634300080b0033";

type SwapUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SwapUtils__factory extends ContractFactory {
  constructor(...args: SwapUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SwapUtils";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SwapUtils> {
    return super.deploy(overrides || {}) as Promise<SwapUtils>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SwapUtils {
    return super.attach(address) as SwapUtils;
  }
  connect(signer: Signer): SwapUtils__factory {
    return super.connect(signer) as SwapUtils__factory;
  }
  static readonly contractName: "SwapUtils";
  public readonly contractName: "SwapUtils";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapUtilsInterface {
    return new utils.Interface(_abi) as SwapUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapUtils {
    return new Contract(address, _abi, signerOrProvider) as SwapUtils;
  }
}

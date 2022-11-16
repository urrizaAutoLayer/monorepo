/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  PortalFacet,
  PortalFacetInterface,
} from "../../../../../contracts/core/connext/facets/PortalFacet";

const _abi = [
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
    name: "BaseConnextFacet__getAdoptedAsset_notAllowlisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getApprovedCanonicalId_notAllowlisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyBridgeRouter_notBridgeRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrAdmin_notOwnerOrAdmin",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrRouter_notOwnerOrRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwnerOrWatcher_notOwnerOrWatcher",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__whenNotPaused_paused",
    type: "error",
  },
  {
    inputs: [],
    name: "PortalFacet__repayAavePortalFor_zeroAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "PortalFacet__repayAavePortal_insufficientFunds",
    type: "error",
  },
  {
    inputs: [],
    name: "PortalFacet__repayAavePortal_swapFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "PortalFacet__setAavePortalFee_invalidFee",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AavePortalRepayment",
    type: "event",
  },
  {
    inputs: [],
    name: "aavePool",
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
    name: "aavePortalFee",
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
        internalType: "bytes32",
        name: "_transferId",
        type: "bytes32",
      },
    ],
    name: "getAavePortalDebt",
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
        internalType: "bytes32",
        name: "_transferId",
        type: "bytes32",
      },
    ],
    name: "getAavePortalFeeDebt",
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
        components: [
          {
            internalType: "uint32",
            name: "originDomain",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "destinationDomain",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "canonicalDomain",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "address",
            name: "delegate",
            type: "address",
          },
          {
            internalType: "bool",
            name: "receiveLocal",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "slippage",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "originSender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "bridgedAmt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "normalizedIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "canonicalId",
            type: "bytes32",
          },
        ],
        internalType: "struct TransferInfo",
        name: "_params",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_backingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_feeAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxIn",
        type: "uint256",
      },
    ],
    name: "repayAavePortal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "originDomain",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "destinationDomain",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "canonicalDomain",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "address",
            name: "delegate",
            type: "address",
          },
          {
            internalType: "bool",
            name: "receiveLocal",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "slippage",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "originSender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "bridgedAmt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "normalizedIn",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "canonicalId",
            type: "bytes32",
          },
        ],
        internalType: "struct TransferInfo",
        name: "_params",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_backingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_feeAmount",
        type: "uint256",
      },
    ],
    name: "repayAavePortalFor",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_aavePool",
        type: "address",
      },
    ],
    name: "setAavePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_aavePortalFeeNumerator",
        type: "uint256",
      },
    ],
    name: "setAavePortalFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506120b3806100206000396000f3fe60806040526004361061007b5760003560e01c8063a03e4bc31161004e578063a03e4bc314610115578063b3f62fcb1461014b578063d1e5f31c1461016b578063ef1eb0c11461019857600080fd5b806309d7ba5414610080578063349f937c146100c05780633bd30d34146100e25780636a39b95d14610102575b600080fd5b34801561008c57600080fd5b506100ad61009b366004611b14565b60009081526022602052604090205490565b6040519081526020015b60405180910390f35b3480156100cc57600080fd5b506100e06100db366004611b49565b6101ad565b005b3480156100ee57600080fd5b506100e06100fd366004611b14565b610260565b6100e0610110366004611b7d565b610313565b34801561012157600080fd5b5060205461010090046001600160a01b03166040516001600160a01b0390911681526020016100b7565b34801561015757600080fd5b506100e0610166366004611bcb565b6103cd565b34801561017757600080fd5b506100ad610186366004611b14565b60009081526023602052604090205490565b3480156101a457600080fd5b506021546100ad565b336101df7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6001600160a01b03161415801561021a57506003336000908152601b602052604090205460ff16600381111561021757610217611c1f565b14155b1561023857604051637b32c26b60e01b815260040160405180910390fd5b602080546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b336102927fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6001600160a01b0316141580156102cd57506003336000908152601b602052604090205460ff1660038111156102ca576102ca611c1f565b14155b156102eb57604051637b32c26b60e01b815260040160405180910390fd5b61271081111561030e5760405163f48157d160e01b815260040160405180910390fd5b602155565b601d546001190161033757604051637ce54e2d60e11b815260040160405180910390fd5b6002601d55600061036461035f61018086013561035a6060880160408901611c49565b61051e565b610561565b9050600061037961037486611d4d565b610597565b905060006103878486611e59565b9050806000036103aa576040516330d5e3e360e11b815260040160405180910390fd5b6103b483826105c7565b6103c08386868561070c565b50506001601d5550505050565b601d54600119016103f157604051637ce54e2d60e11b815260040160405180910390fd5b6002601d55600061041161018086013561035a6060880160408901611c49565b905060006104348261018088013561042f60608a0160408b01611c49565b610861565b336000908152600f602090815260408083206001600160a01b038516845290915290205490915083111561047b5760405163badaeb5960e01b815260040160405180910390fd5b600061048961037488611d4d565b9050600080806104a4868661049e8b8d611e59565b8a610878565b925092509250826104c8576040516379a3a9f160e01b815260040160405180910390fd5b336000908152600f602090815260408083206001600160a01b0389168452909152812080548492906104fb908490611e6c565b9091555061050d9050818a8a8761070c565b50506001601d555050505050505050565b6000828260405160200161054292919091825263ffffffff16602082015260400190565b6040516020818303038152906040528051906020012090505b92915050565b6000818152600b60205260408120546001600160a01b03168061055b57604051634cdfde3760e11b815260040160405180910390fd5b6000816040516020016105aa9190611ecf565b604051602081830303815290604052805190602001209050919050565b806000036105d3575050565b6001600160a01b0382166105fa57604051632a38b13360e01b815260040160405180910390fd5b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa158015610641573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106659190611fc9565b9050610673833330856108d1565b6040516370a0823160e01b8152306004820152829082906001600160a01b038616906370a0823190602401602060405180830381865afa1580156106bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106df9190611fc9565b6106e99190611e6c565b1461070757604051630e40773560e21b815260040160405180910390fd5b505050565b6000818152602260205260408120805485929061072a908490611e6c565b90915550506000818152602360205260408120805484929061074d908490611e6c565b909155505060205461077090859061010090046001600160a01b03166000610942565b60205461079690859061010090046001600160a01b03166107918587611e59565b610a5c565b60205460405163d65dc7a160e01b81526001600160a01b03868116600483015260248201869052604482018590526101009092049091169063d65dc7a190606401600060405180830381600087803b1580156107f157600080fd5b505af1158015610805573d6000803e3d6000fd5b5050604080516001600160a01b0388168152602081018790529081018590523360608201528392507f54b01a5ae4ec60eeeef60570103ba1a5de0999725219c02b2baf1b706625bb08915060800160405180910390a250505050565b60006108708484846000610b0e565b949350505050565b6000848152600b60205260408120548190819081906001600160a01b0390811690881681036108b1576001945086935091506108c79050565b6108be8989838a8a610b4c565b94509450945050505b9450945094915050565b6040516001600160a01b038085166024830152831660448201526064810182905261093c9085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610d1d565b50505050565b8015806109bc5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa158015610996573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109ba9190611fc9565b155b610a2c5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084015b60405180910390fd5b6040516001600160a01b03831660248201526044810182905261070790849063095ea7b360e01b90606401610905565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015610aad573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ad19190611fc9565b610adb9190611e59565b6040516001600160a01b03851660248201526044810182905290915061093c90859063095ea7b360e01b90606401610905565b600481015460009063ffffffff90811690841603610b2d575082610870565b506000938452600c01602052505060409020546001600160a01b031690565b6000858152601e6020526040812060088101548291869183919015610bb4576000610b778b8b610def565b90506000610b858c8b610def565b9050610b938383838c610e6f565b8810610bad5760019650610baa8383838c8c610eda565b95505b5050610d10565b60008a815260058301602052604080822054905163f9a15fb960e01b81526001600160a01b038c811660048301528b81166024830152604482018b90529091169190829063f9a15fb990606401602060405180830381865afa158015610c1e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c429190611fc9565b9050878111610d0d5760019650610c5b8b836000610942565b610c668b8383610a5c565b6001600160a01b038216635428c1178a8d8d8c610c8542610e10611e59565b6040516001600160e01b031960e088901b16815260048101959095526001600160a01b0393841660248601529290911660448401526064830152608482015260a4016020604051808303816000875af1158015610ce6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0a9190611fc9565b95505b50505b5050955095509592505050565b6000610d72826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661119d9092919063ffffffff16565b8051909150156107075780806020019051810190610d909190611fe2565b6107075760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610a23565b6000828152601f602090815260408083206001600160a01b03851680855290835281842054868552601e9093529083206008018054849360ff1692919083908110610e3c57610e3c611fff565b6000918252602090912001546001600160a01b0316146108705760405163054e442960e41b815260040160405180910390fd5b6000610ed08585858589600a01805480602002602001604051908101604052809291908181526020018280548015610ec657602002820191906000526020600020905b815481526020019060010190808311610eb2575b50505050506111ac565b5095945050505050565b600085600a018460ff1681548110610ef457610ef4611fff565b9060005260206000200154831115610f475760405162461bcd60e51b81526020600482015260166024820152756d6f7265207468616e20706f6f6c2062616c616e636560501b6044820152606401610a23565b600080600088600a01805480602002602001604051908101604052809291908181526020018280548015610f9a57602002820191906000526020600020905b815481526020019060010190808311610f86575b50505050509050610fae89898989856111ac565b909350915084831115610ff05760405162461bcd60e51b815260206004820152600a6024820152690c8f0407c40dac2f088f60b31b6044820152606401610a23565b6000896009018960ff168154811061100a5761100a611fff565b90600052602060002001546402540be4008b600601548561102b9190612015565b611035919061202c565b61103f919061202c565b90508084838b60ff168151811061105857611058611fff565b602002602001015161106a9190611e59565b6110749190611e6c565b8a600a018a60ff168154811061108c5761108c611fff565b906000526020600020018190555086828960ff16815181106110b0576110b0611fff565b60200260200101516110c29190611e6c565b8a600a018960ff16815481106110da576110da611fff565b600091825260209091200155801561113f57808a600b018a60ff168154811061110557611105611fff565b906000526020600020015461111a9190611e59565b8a600b018a60ff168154811061113257611132611fff565b6000918252602090912001555b895460408051868152602081018a905260ff8c8116828401528b16606082015290513392917f28d4cf2d5709da3b474b5f05cfd7083faffd601f9500d1f8439b8a13ec7df320919081900360800190a3509198975050505050505050565b606061087084846000856113f7565b6000808460ff168660ff16036112045760405162461bcd60e51b815260206004820152601760248201527f636f6d7061726520746f6b656e20746f20697473656c660000000000000000006044820152606401610a23565b60008760090180548060200260200160405190810160405280929190818152602001828054801561125457602002820191906000526020600020905b815481526020019060010190808311611240575b50505050509050600061126785836114d2565b905080518860ff1610801561127f575080518760ff16105b6112c05760405162461bcd60e51b8152602060048201526012602482015271696e646578206f7574206f662072616e676560701b6044820152606401610a23565b60006112cb8a6115dd565b905060006112d983836115e8565b9050838960ff16815181106112f0576112f0611fff565b6020026020010151886113039190612015565b838a60ff168151811061131857611318611fff565b602002602001015161132a9190611e6c565b838a60ff168151811061133f5761133f611fff565b6020026020010181815250506000611359838c8685611795565b9050838b60ff168151811061137057611370611fff565b60200260200101518160016113859190611e59565b61138f9190611e6c565b96506402540be4008c60050154886113a79190612015565b6113b1919061202c565b9550848b60ff16815181106113c8576113c8611fff565b602002602001015186886113dc9190611e59565b6113e6919061202c565b965050505050509550959350505050565b6060824710156114585760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610a23565b600080866001600160a01b03168587604051611474919061204e565b60006040518083038185875af1925050503d80600081146114b1576040519150601f19603f3d011682016040523d82523d6000602084013e6114b6565b606091505b50915091506114c787838387611984565b979650505050505050565b8151815160609190811461151f5760405162461bcd60e51b81526020600482015260146024820152736d69736d61746368206d756c7469706c6965727360601b6044820152606401610a23565b60008167ffffffffffffffff81111561153a5761153a611c64565b604051908082528060200260200182016040528015611563578160200160208202803683370190505b50905060005b828110156115d45784818151811061158357611583611fff565b602002602001015186828151811061159d5761159d611fff565b60200260200101516115af9190612015565b8282815181106115c1576115c1611fff565b6020908102919091010152600101611569565b50949350505050565b600061055b826119fd565b815160009081805b828110156116275785818151811061160a5761160a611fff565b60200260200101518261161d9190611e59565b91506001016115f0565b508060000361163b5760009250505061055b565b600081816116498588612015565b905060005b610100811015611756578260005b878110156116a757878b828151811061167757611677611fff565b60200260200101516116899190612015565b6116938684612015565b61169d919061202c565b915060010161165c565b50839450808760016116b99190611e59565b6116c39190612015565b6064856116d08287611e6c565b6116da9190612015565b6116e4919061202c565b6116ee9190611e59565b846116f98984612015565b60646117058a88612015565b61170f919061202c565b6117199190611e59565b6117239190612015565b61172d919061202c565b93506117398486611aae565b1561174d578397505050505050505061055b565b5060010161164e565b5060405162461bcd60e51b81526020600482015260136024820152724420646f6573206e6f7420636f6e766572676560681b6044820152606401610a23565b815160009060ff851681116117de5760405162461bcd60e51b815260206004820152600f60248201526e151bdad95b881b9bdd08199bdd5b99608a1b6044820152606401610a23565b826000806117ec848a612015565b905060005b8481101561186e578860ff1681146118665787818151811061181557611815611fff565b6020026020010151836118289190611e59565b92508488828151811061183d5761183d611fff565b602002602001015161184f9190612015565b6118598886612015565b611863919061202c565b93505b6001016117f1565b506118798482612015565b60646118858886612015565b61188f9190612015565b611899919061202c565b92506000816118a9606489612015565b6118b3919061202c565b6118bd9084611e59565b9050600087815b61010081101561193b5781925089848360026118e09190612015565b6118ea9190611e59565b6118f49190611e6c565b876118ff8480612015565b6119099190611e59565b611913919061202c565b915061191f8284611aae565b156119335750965061087095505050505050565b6001016118c4565b5060405162461bcd60e51b815260206004820152601e60248201527f417070726f78696d6174696f6e20646964206e6f7420636f6e766572676500006044820152606401610a23565b606083156119f35782516000036119ec576001600160a01b0385163b6119ec5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610a23565b5081610870565b6108708383611ac5565b600481015460028201546000919042821115611aa7576003840154600185015480831115611a6b57611a2f8285611e6c565b611a398342611e6c565b611a438386611e6c565b611a4d9190612015565b611a57919061202c565b611a619082611e59565b9695505050505050565b611a758285611e6c565b611a7f8342611e6c565b611a898584611e6c565b611a939190612015565b611a9d919061202c565b611a619082611e6c565b9392505050565b60006001611abc8484611aef565b11159392505050565b815115611ad55781518083602001fd5b8060405162461bcd60e51b8152600401610a23919061206a565b600081831115611b0a57611b038284611e6c565b905061055b565b611aa78383611e6c565b600060208284031215611b2657600080fd5b5035919050565b80356001600160a01b0381168114611b4457600080fd5b919050565b600060208284031215611b5b57600080fd5b611aa782611b2d565b60006101a08284031215611b7757600080fd5b50919050565b600080600060608486031215611b9257600080fd5b833567ffffffffffffffff811115611ba957600080fd5b611bb586828701611b64565b9660208601359650604090950135949350505050565b60008060008060808587031215611be157600080fd5b843567ffffffffffffffff811115611bf857600080fd5b611c0487828801611b64565b97602087013597506040870135966060013595509350505050565b634e487b7160e01b600052602160045260246000fd5b803563ffffffff81168114611b4457600080fd5b600060208284031215611c5b57600080fd5b611aa782611c35565b634e487b7160e01b600052604160045260246000fd5b6040516101a0810167ffffffffffffffff81118282101715611c9e57611c9e611c64565b60405290565b8015158114611cb257600080fd5b50565b8035611b4481611ca4565b600082601f830112611cd157600080fd5b813567ffffffffffffffff80821115611cec57611cec611c64565b604051601f8301601f19908116603f01168101908282118183101715611d1457611d14611c64565b81604052838152866020858801011115611d2d57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60006101a08236031215611d6057600080fd5b611d68611c7a565b611d7183611c35565b8152611d7f60208401611c35565b6020820152611d9060408401611c35565b6040820152611da160608401611b2d565b6060820152611db260808401611b2d565b6080820152611dc360a08401611cb5565b60a082015260c083013567ffffffffffffffff811115611de257600080fd5b611dee36828601611cc0565b60c08301525060e083013560e0820152610100611e0c818501611b2d565b9082015261012083810135908201526101408084013590820152610160808401359082015261018092830135928101929092525090565b634e487b7160e01b600052601160045260246000fd5b8082018082111561055b5761055b611e43565b8181038181111561055b5761055b611e43565b60005b83811015611e9a578181015183820152602001611e82565b50506000910152565b60008151808452611ebb816020860160208601611e7f565b601f01601f19169290920160200192915050565b60208152611ee660208201835163ffffffff169052565b60006020830151611eff604084018263ffffffff169052565b50604083015163ffffffff811660608401525060608301516001600160a01b03811660808401525060808301516001600160a01b03811660a08401525060a083015180151560c08401525060c08301516101a08060e0850152611f666101c0850183611ea3565b60e086015161010086810191909152860151909250610120611f92818701836001600160a01b03169052565b8601516101408681019190915286015161016080870191909152860151610180808701919091529095015193019290925250919050565b600060208284031215611fdb57600080fd5b5051919050565b600060208284031215611ff457600080fd5b8151611aa781611ca4565b634e487b7160e01b600052603260045260246000fd5b808202811582820484141761055b5761055b611e43565b60008261204957634e487b7160e01b600052601260045260246000fd5b500490565b60008251612060818460208701611e7f565b9190910192915050565b602081526000611aa76020830184611ea356fea2646970667358221220af0708d9771e936ececdce527b084163371969f430f4f6d84228177d4dd6ce2064736f6c63430008110033";

type PortalFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PortalFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PortalFacet__factory extends ContractFactory {
  constructor(...args: PortalFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PortalFacet> {
    return super.deploy(overrides || {}) as Promise<PortalFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PortalFacet {
    return super.attach(address) as PortalFacet;
  }
  override connect(signer: Signer): PortalFacet__factory {
    return super.connect(signer) as PortalFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PortalFacetInterface {
    return new utils.Interface(_abi) as PortalFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PortalFacet {
    return new Contract(address, _abi, signerOrProvider) as PortalFacet;
  }
}

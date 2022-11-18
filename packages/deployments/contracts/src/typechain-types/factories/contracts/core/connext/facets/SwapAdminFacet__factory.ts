/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  SwapAdminFacet,
  SwapAdminFacetInterface,
} from "../../../../../contracts/core/connext/facets/SwapAdminFacet";

const _abi = [
  {
    inputs: [],
    name: "AssetLogic__handleOutgoingAsset_notNative",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getAdoptedAsset_notWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__getApprovedCanonicalId_notWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonReentrant_reentrantCall",
    type: "error",
  },
  {
    inputs: [],
    name: "BaseConnextFacet__nonXCallReentrant_reentrantCall",
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
    name: "SwapAdminFacet__disableSwap_alreadyDisabled",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__disableSwap_notInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_aExceedMax",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_adminFeeExceedMax",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_alreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_decimalsMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_duplicateTokens",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_failedInitLpTokenClone",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_feeExceedMax",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_invalidPooledTokens",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_tokenDecimalsExceedMax",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__initializeSwap_zeroTokenAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__removeSwap_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__removeSwap_nonZeroBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__removeSwap_notDisabledPool",
    type: "error",
  },
  {
    inputs: [],
    name: "SwapAdminFacet__removeSwap_notInitialized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newAdminFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AdminFeesSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "AdminFeesWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "futureA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "futureTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RampAStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "RampAStopped",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SwapDisabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newSwapFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SwapFeesSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "initialA",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "futureA",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "initialATime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "futureATime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "swapFee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "adminFee",
            type: "uint256",
          },
          {
            internalType: "contract LPToken",
            name: "lpToken",
            type: "address",
          },
          {
            internalType: "contract IERC20[]",
            name: "pooledTokens",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "tokenPrecisionMultipliers",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "balances",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "adminFees",
            type: "uint256[]",
          },
          {
            internalType: "bool",
            name: "disabled",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "removeTime",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct SwapUtils.Swap",
        name: "swap",
        type: "tuple",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SwapInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "SwapRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "disableSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
      {
        internalType: "contract IERC20[]",
        name: "_pooledTokens",
        type: "address[]",
      },
      {
        internalType: "uint8[]",
        name: "decimals",
        type: "uint8[]",
      },
      {
        internalType: "string",
        name: "lpTokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "lpTokenSymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_adminFee",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "lpTokenTargetAddress",
        type: "address",
      },
    ],
    name: "initializeSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "isDisabled",
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
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "futureA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "futureTime",
        type: "uint256",
      },
    ],
    name: "rampA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_key",
        type: "bytes32",
      },
    ],
    name: "removeSwap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "newAdminFee",
        type: "uint256",
      },
    ],
    name: "setSwapAdminFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "newSwapFee",
        type: "uint256",
      },
    ],
    name: "setSwapFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "stopRampA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
    ],
    name: "withdrawSwapAdminFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50612107806100206000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80634b141bb4116100665780634b141bb4146100e657806372a30e08146101205780639c8eab9714610133578063a1a23c2914610146578063ea027c2f1461015957600080fd5b80631963e426146100985780633e74aea0146100ad57806343be5eaf146100c057806347555ef6146100d3575b600080fd5b6100ab6100a63660046119ca565b61016c565b005b6100ab6100bb3660046119f6565b61022e565b6100ab6100ce366004611a0f565b6104ff565b6100ab6100e1366004611c0b565b6105b0565b61010c6100f43660046119f6565b6000908152601f60205260409020600c015460ff1690565b604051901515815260200160405180910390f35b6100ab61012e3660046119f6565b610c75565b6100ab610141366004611a0f565b610d26565b6100ab6101543660046119f6565b610dd7565b6100ab6101673660046119f6565b610e74565b33610175610fac565b6001600160a01b0316141580156101b057506003336000908152601b602052604090205460ff1660038111156101ad576101ad611cf0565b14155b156101ce57604051637b32c26b60e01b815260040160405180910390fd5b6000838152601f602052604090206101e7908383610fda565b60408051838152602081018390523381830152905184917f58e6fbecdb1a94225cf82c6b317a771aa08c9ab6552702b819bcd84ba8e8312f919081900360600190a2505050565b33610237610fac565b6001600160a01b03161415801561027257506003336000908152601b602052604090205460ff16600381111561026f5761026f611cf0565b14155b1561029057604051637b32c26b60e01b815260040160405180910390fd5b6000818152601f6020526040812060080154908190036102c357604051635e98c38d60e11b815260040160405180910390fd5b6000828152601f60205260409020600c015460ff166102f557604051637baf490160e11b815260040160405180910390fd5b6000828152601f60205260409020600d0154421015610327576040516302aba83160e51b815260040160405180910390fd5b60005b81811015610420576000838152601f6020526040812060080180548390811061035557610355611d06565b6000918252602080832090910154868352601f90915260408220600a0180546001600160a01b039092169350908490811061039257610392611d06565b906000526020600020015411156103f0576000848152601f60205260409020600a0180546103f0913391859081106103cc576103cc611d06565b9060005260206000200154836001600160a01b03166112679092919063ffffffff16565b6000848152602080805260408083206001600160a01b03909416835292905220805460ff1916905560010161032a565b5061042b82336112be565b6000828152601f602052604081208181556001810182905560028101829055600381018290556004810182905560058101829055600681018290556007810180546001600160a01b03191690559061048660088301826118f4565b6104946009830160006118f4565b6104a2600a830160006118f4565b6104b0600b830160006118f4565b50600c8101805460ff191690556000600d9091015560405133815282907fb729dde7e954c83f790a153521f9d2e12779b36305ed42c8bf86ac4cf7ce6915906020015b60405180910390a25050565b33610508610fac565b6001600160a01b03161415801561054357506003336000908152601b602052604090205460ff16600381111561054057610540611cf0565b14155b1561056157604051637b32c26b60e01b815260040160405180910390fd5b6000828152601f602052604090206105799082611311565b6040805182815233602082015283917f6d9b91502dc11e7c127e8e2d114c1f8026647ecb6b987c1baaadb706b5eb317691016104f3565b336105b9610fac565b6001600160a01b0316141580156105f457506003336000908152601b602052604090205460ff1660038111156105f1576105f1611cf0565b14155b1561061257604051637b32c26b60e01b815260040160405180910390fd5b6000898152601f602052604090206008015415610642576040516376a1368960e11b815260040160405180910390fd5b60018851111580610654575060208851115b156106725760405163502ef3af60e01b815260040160405180910390fd5b8751875181146106955760405163d6e48e5d60e01b815260040160405180910390fd5b6000885167ffffffffffffffff8111156106b1576106b1611a31565b6040519080825280602002602001820160405280156106da578160200160208202803683370190505b50905060005b828110156108ef5780156107a85760008c815260208052604081208c519091908d908490811061071257610712611d06565b6020908102919091018101516001600160a01b031682528101919091526040016000205460ff1615158061078a57508a818151811061075357610753611d06565b60200260200101516001600160a01b03168b60008151811061077757610777611d06565b60200260200101516001600160a01b0316145b156107a857604051632fa9e93b60e11b815260040160405180910390fd5b60006001600160a01b03168b82815181106107c5576107c5611d06565b60200260200101516001600160a01b0316036107f457604051634ce187ad60e11b815260040160405180910390fd5b601260ff168a828151811061080b5761080b611d06565b602002602001015160ff16111561083557604051637d4ada4560e11b815260040160405180910390fd5b89818151811061084757610847611d06565b6020026020010151601261085b9190611d32565b6108699060ff16600a611e35565b82828151811061087b5761087b611d06565b60200260200101818152505080600060200160008e815260200190815260200160002060008d84815181106108b2576108b2611d06565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191660ff929092169190911790556001016106e0565b50620f42408610610913576040516306aedbfd60e01b815260040160405180910390fd5b6305f5e100851061093757604051634fc2217d60e11b815260040160405180910390fd5b6402540be400841061095c576040516384b9a37f60e01b815260040160405180910390fd5b600061096784611389565b60405163266c45bb60e11b81529091506001600160a01b03821690634cd88b7690610998908c908c90600401611e91565b6020604051808303816000875af11580156109b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109db9190611ebf565b6109f85760405163276cd8b960e01b815260040160405180910390fd5b6000604051806101c001604052808e815260200160648a610a199190611ee1565b8152602001610a2960648b611ee1565b81526020016000815260200160008152602001888152602001878152602001836001600160a01b031681526020018d81526020018481526020018d5167ffffffffffffffff811115610a7d57610a7d611a31565b604051908082528060200260200182016040528015610aa6578160200160208202803683370190505b5081526020018d5167ffffffffffffffff811115610ac657610ac6611a31565b604051908082528060200260200182016040528015610aef578160200160208202803683370190505b50815260200160001515815260200160008152509050806000601f0160008f8152602001908152602001600020600082015181600001556020820151816001015560408201518160020155606082015181600301556080820151816004015560a0820151816005015560c0820151816006015560e08201518160070160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550610100820151816008019080519060200190610bac929190611915565b506101208201518051610bc991600984019160209091019061197a565b506101408201518051610be691600a84019160209091019061197a565b506101608201518051610c0391600b84019160209091019061197a565b50610180820151600c8201805460ff19169115159190911790556101a090910151600d909101556040518d907f17624207b3ada0ecb82d25bef7eb308a62e614001936961428b08af45651c3f190610c5e9084903390611f6c565b60405180910390a250505050505050505050505050565b33610c7e610fac565b6001600160a01b031614158015610cb957506003336000908152601b602052604090205460ff166003811115610cb657610cb6611cf0565b14155b15610cd757604051637b32c26b60e01b815260040160405180910390fd5b6000818152601f60205260409020610cee90611423565b60405133815281907f86ce75679135e270f845c02bcb49ef6fb50464cb322dcc30096cccd13d2597df9060200160405180910390a250565b33610d2f610fac565b6001600160a01b031614158015610d6a57506003336000908152601b602052604090205460ff166003811115610d6757610d67611cf0565b14155b15610d8857604051637b32c26b60e01b815260040160405180910390fd5b6000828152601f60205260409020610da090826114e4565b6040805182815233602082015283917f46eefbb271e4103912d3c227656de8afc0849f4c8cba4b2a1e38b660361e046391016104f3565b33610de0610fac565b6001600160a01b031614158015610e1b57506003336000908152601b602052604090205460ff166003811115610e1857610e18611cf0565b14155b15610e3957604051637b32c26b60e01b815260040160405180910390fd5b601d5460011901610e5d57604051637ce54e2d60e11b815260040160405180910390fd5b6002601d55610e6c81336112be565b506001601d55565b33610e7d610fac565b6001600160a01b031614158015610eb857506003336000908152601b602052604090205460ff166003811115610eb557610eb5611cf0565b14155b15610ed657604051637b32c26b60e01b815260040160405180910390fd5b6000818152601f602052604081206008015490819003610f09576040516303bb6f8760e61b815260040160405180910390fd5b6000828152601f60205260409020600c015460ff1615610f3c576040516380cd476f60e01b815260040160405180910390fd5b6000828152601f60205260409020600c01805460ff19166001179055610f6562093a804261208f565b6000838152601f6020908152604091829020600d01929092555133815283917f436f3434791c806271347887826cd8df45595907e6cfdc188dd8c9b468d8521e91016104f3565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6003830154610fec906201518061208f565b4210156110405760405162461bcd60e51b815260206004820152601f60248201527f57616974203120646179206265666f7265207374617274696e672072616d700060448201526064015b60405180910390fd5b61104d621275004261208f565b8110156110955760405162461bcd60e51b8152602060048201526016602482015275496e73756666696369656e742072616d702074696d6560501b6044820152606401611037565b81158015906110a65750620f424082105b6110f25760405162461bcd60e51b815260206004820181905260248201527f667574757265415f206d757374206265203e203020616e64203c204d41585f416044820152606401611037565b60006110fd8461155d565b9050600061110c606485611ee1565b905080820361114b5760405162461bcd60e51b815260206004820152600b60248201526a02176616c69642072616d760ac1b6044820152606401611037565b818110156111aa578161115f600283611ee1565b10156111a55760405162461bcd60e51b8152602060048201526015602482015274199d5d1d5c995057c81a5cc81d1bdbc81cdb585b1b605a1b6044820152606401611037565b6111fc565b6111b5600283611ee1565b8111156111fc5760405162461bcd60e51b8152602060048201526015602482015274667574757265415f20697320746f6f206c6172676560581b6044820152606401611037565b600185018290556002850181905542600386018190556004860184905560408051848152602081018490528082019290925260608201859052517fa2b71ec6df949300b59aab36b55e189697b750119dd349fcfa8c0f779e83c2549181900360800190a15050505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526112b99084906115a6565b505050565b6000828152601f602052604090206112d69082611678565b6040516001600160a01b038216815282907f2e6c35653408399a9853c5e5f81b67018cba78568bfd76dd46f93c825cbfb95d906020016104f3565b6305f5e1008111156113505760405162461bcd60e51b81526020600482015260086024820152670e8dede40d0d2ced60c31b6044820152606401611037565b6005820181905581546040518281527f29aee3d14d18e1b8ace81481838ab2996fee9446a44336847d1d5c7fdf2471b1906020016104f3565b6000763d602d80600a3d3981f3363d3d373d3d3d363d730000008260601b60e81c176000526e5af43d82803e903d91602b57fd5bf38260781b17602052603760096000f090506001600160a01b03811661141e5760405162461bcd60e51b8152602060048201526016602482015275115490cc4c4d8dce8818dc99585d194819985a5b195960521b6044820152606401611037565b919050565b428160040154116114765760405162461bcd60e51b815260206004820152601760248201527f52616d7020697320616c72656164792073746f707065640000000000000000006044820152606401611037565b60006114818261155d565b60018301819055600283018190554260038401819055600484018190556040519192507f46e22fb3709ad289f62ce63d469248536dbc78d82b84a3d7e74ad606dc201938916114d891848252602082015260400190565b60405180910390a15050565b6402540be4008111156115245760405162461bcd60e51b81526020600482015260086024820152670e8dede40d0d2ced60c31b6044820152606401611037565b6006820181905581546040518281527f7b4e02f2e320870ba4f764edf60a5289a465018a3fe159f0d72ba33139b0a616906020016104f3565b60048101546002820154600183015490919080831480159061157e57508142105b1561159f576000846003015490508083038142038502428503840201049350505b5050919050565b60006115fb826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166117219092919063ffffffff16565b8051909150156112b957808060200190518101906116199190611ebf565b6112b95760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401611037565b600882015460005b8181101561171b57600084600801828154811061169f5761169f611d06565b6000918252602082200154600b870180546001600160a01b03909216935090849081106116ce576116ce611d06565b906000526020600020015490508060001461171157600086600b0184815481106116fa576116fa611d06565b60009182526020909120015561171182868361173a565b5050600101611680565b50505050565b60606117308484600085611779565b90505b9392505050565b8060000361174757505050565b6001600160a01b03831661176e57604051633a48ca7b60e11b815260040160405180910390fd5b6112b9838383611267565b6060824710156117da5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401611037565b600080866001600160a01b031685876040516117f691906120a2565b60006040518083038185875af1925050503d8060008114611833576040519150601f19603f3d011682016040523d82523d6000602084013e611838565b606091505b509150915061184987838387611856565b925050505b949350505050565b606083156118c55782516000036118be576001600160a01b0385163b6118be5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401611037565b508161184e565b61184e83838151156118da5781518083602001fd5b8060405162461bcd60e51b815260040161103791906120be565b508054600082559060005260206000209081019061191291906119b5565b50565b82805482825590600052602060002090810192821561196a579160200282015b8281111561196a57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190611935565b506119769291506119b5565b5090565b82805482825590600052602060002090810192821561196a579160200282015b8281111561196a57825182559160200191906001019061199a565b5b8082111561197657600081556001016119b6565b6000806000606084860312156119df57600080fd5b505081359360208301359350604090920135919050565b600060208284031215611a0857600080fd5b5035919050565b60008060408385031215611a2257600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611a7057611a70611a31565b604052919050565b600067ffffffffffffffff821115611a9257611a92611a31565b5060051b60200190565b6001600160a01b038116811461191257600080fd5b600082601f830112611ac257600080fd5b81356020611ad7611ad283611a78565b611a47565b82815260059290921b84018101918181019086841115611af657600080fd5b8286015b84811015611b1a578035611b0d81611a9c565b8352918301918301611afa565b509695505050505050565b600082601f830112611b3657600080fd5b81356020611b46611ad283611a78565b82815260059290921b84018101918181019086841115611b6557600080fd5b8286015b84811015611b1a57803560ff81168114611b835760008081fd5b8352918301918301611b69565b600082601f830112611ba157600080fd5b813567ffffffffffffffff811115611bbb57611bbb611a31565b611bce601f8201601f1916602001611a47565b818152846020838601011115611be357600080fd5b816020850160208301376000918101602001919091529392505050565b803561141e81611a9c565b60008060008060008060008060006101208a8c031215611c2a57600080fd5b8935985060208a013567ffffffffffffffff80821115611c4957600080fd5b611c558d838e01611ab1565b995060408c0135915080821115611c6b57600080fd5b611c778d838e01611b25565b985060608c0135915080821115611c8d57600080fd5b611c998d838e01611b90565b975060808c0135915080821115611caf57600080fd5b50611cbc8c828d01611b90565b95505060a08a0135935060c08a0135925060e08a01359150611ce16101008b01611c00565b90509295985092959850929598565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60ff8281168282160390811115611d4b57611d4b611d1c565b92915050565b600181815b80851115611d8c578160001904821115611d7257611d72611d1c565b80851615611d7f57918102915b93841c9390800290611d56565b509250929050565b600082611da357506001611d4b565b81611db057506000611d4b565b8160018114611dc65760028114611dd057611dec565b6001915050611d4b565b60ff841115611de157611de1611d1c565b50506001821b611d4b565b5060208310610133831016604e8410600b8410161715611e0f575081810a611d4b565b611e198383611d51565b8060001904821115611e2d57611e2d611d1c565b029392505050565b60006117338383611d94565b60005b83811015611e5c578181015183820152602001611e44565b50506000910152565b60008151808452611e7d816020860160208601611e41565b601f01601f19169290920160200192915050565b604081526000611ea46040830185611e65565b8281036020840152611eb68185611e65565b95945050505050565b600060208284031215611ed157600080fd5b8151801515811461173357600080fd5b8082028115828204841417611d4b57611d4b611d1c565b600081518084526020808501945080840160005b83811015611f315781516001600160a01b031687529582019590820190600101611f0c565b509495945050505050565b600081518084526020808501945080840160005b83811015611f3157815187529582019590820190600101611f50565b60408152825160408201526020830151606082015260408301516080820152606083015160a0820152608083015160c082015260a083015160e0820152600060c0840151610100818185015260e08601519150610120611fd6818601846001600160a01b03169052565b8187015192506101c091506101408281870152611ff7610200870185611ef8565b9350818801519150603f196101608188870301818901526120188685611f3c565b9550828a0151935061018092508188870301838901526120388685611f3c565b9550808a01519350506101a08188870301818901526120578685611f3c565b9550828a0151935061206c8589018515159052565b8901516101e08801525050506001600160a01b0385166020850152509050611733565b80820180821115611d4b57611d4b611d1c565b600082516120b4818460208701611e41565b9190910192915050565b6020815260006117336020830184611e6556fea2646970667358221220d9120bf8abf9020dc969763e027be3162fbb375e966fd721f9eb64d441935e1364736f6c63430008110033";

type SwapAdminFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SwapAdminFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SwapAdminFacet__factory extends ContractFactory {
  constructor(...args: SwapAdminFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SwapAdminFacet> {
    return super.deploy(overrides || {}) as Promise<SwapAdminFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SwapAdminFacet {
    return super.attach(address) as SwapAdminFacet;
  }
  override connect(signer: Signer): SwapAdminFacet__factory {
    return super.connect(signer) as SwapAdminFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapAdminFacetInterface {
    return new utils.Interface(_abi) as SwapAdminFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapAdminFacet {
    return new Contract(address, _abi, signerOrProvider) as SwapAdminFacet;
  }
}

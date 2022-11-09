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
  "0x608060405234801561001057600080fd5b50611c56806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631963e4261461006757806343be5eaf1461007c57806347555ef61461008f57806372a30e08146100a25780639c8eab97146100b5578063a1a23c29146100c8575b600080fd5b61007a6100753660046114e4565b6100db565b005b61007a61008a366004611510565b61019d565b61007a61009d36600461170f565b610256565b61007a6100b03660046117f4565b6108d6565b61007a6100c3366004611510565b610987565b61007a6100d63660046117f4565b610a38565b336100e4610b18565b6001600160a01b03161415801561011f575060033360009081526019602052604090205460ff16600381111561011c5761011c61180d565b14155b1561013d57604051637b32c26b60e01b815260040160405180910390fd5b6000838152601c60205260409020610156908383610b46565b60408051838152602081018390523381830152905184917f58e6fbecdb1a94225cf82c6b317a771aa08c9ab6552702b819bcd84ba8e8312f919081900360600190a2505050565b336101a6610b18565b6001600160a01b0316141580156101e1575060033360009081526019602052604090205460ff1660038111156101de576101de61180d565b14155b156101ff57604051637b32c26b60e01b815260040160405180910390fd5b6000828152601c602052604090206102179082610dd3565b6040805182815233602082015283917f6d9b91502dc11e7c127e8e2d114c1f8026647ecb6b987c1baaadb706b5eb317691015b60405180910390a25050565b3361025f610b18565b6001600160a01b03161415801561029a575060033360009081526019602052604090205460ff1660038111156102975761029761180d565b14155b156102b857604051637b32c26b60e01b815260040160405180910390fd5b6000898152601c6020526040902060080154156102e8576040516376a1368960e11b815260040160405180910390fd5b600188511115806102fa575060208851115b156103185760405163502ef3af60e01b815260040160405180910390fd5b8751875160ff82161461033e5760405163d6e48e5d60e01b815260040160405180910390fd5b6000885167ffffffffffffffff81111561035a5761035a611532565b604051908082528060200260200182016040528015610383578160200160208202803683370190505b50905060005b8260ff1681101561059c5780156104555760008c8152601d602052604081208c519091908d90849081106103bf576103bf611823565b6020908102919091018101516001600160a01b031682528101919091526040016000205460ff1615158061043757508a818151811061040057610400611823565b60200260200101516001600160a01b03168b60008151811061042457610424611823565b60200260200101516001600160a01b0316145b1561045557604051632fa9e93b60e11b815260040160405180910390fd5b60006001600160a01b03168b828151811061047257610472611823565b60200260200101516001600160a01b0316036104a157604051634ce187ad60e11b815260040160405180910390fd5b601260ff168a82815181106104b8576104b8611823565b602002602001015160ff1611156104e257604051637d4ada4560e11b815260040160405180910390fd5b8981815181106104f4576104f4611823565b60200260200101516012610508919061184f565b6105169060ff16600a611958565b82828151811061052857610528611823565b602002602001018181525050806000601d0160008e815260200190815260200160002060008d848151811061055f5761055f611823565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff191660ff92909216919091179055600101610389565b50620f424086106105c0576040516306aedbfd60e01b815260040160405180910390fd5b6305f5e10085106105e457604051634fc2217d60e11b815260040160405180910390fd5b6402540be4008410610609576040516384b9a37f60e01b815260040160405180910390fd5b600061061484610e4b565b60405163266c45bb60e11b81529091506001600160a01b03821690634cd88b7690610645908c908c906004016119bc565b6020604051808303816000875af1158015610664573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068891906119ea565b6106a55760405163276cd8b960e01b815260040160405180910390fd5b60006040518061018001604052808e815260200160648a6106c69190611a0c565b81526020016106d660648b611a0c565b81526020016000815260200160008152602001888152602001878152602001836001600160a01b031681526020018d81526020018481526020018d5167ffffffffffffffff81111561072a5761072a611532565b604051908082528060200260200182016040528015610753578160200160208202803683370190505b5081526020018d5167ffffffffffffffff81111561077357610773611532565b60405190808252806020026020018201604052801561079c578160200160208202803683370190505b50905260008e8152601c602090815260409182902083518155838201516001820155918301516002830155606083015160038301556080830151600483015560a0830151600583015560c0830151600683015560e08301516007830180546001600160a01b0319166001600160a01b0390921691909117905561010083015180519394508493610832926008850192019061142f565b50610120820151805161084f916009840191602090910190611494565b50610140820151805161086c91600a840191602090910190611494565b50610160820151805161088991600b840191602090910190611494565b509050508c7f4c5d883e86afc82dc0f918cfc013e437aa458ec41475884857ba8daec50d24cb82336040516108bf929190611a9f565b60405180910390a250505050505050505050505050565b336108df610b18565b6001600160a01b03161415801561091a575060033360009081526019602052604090205460ff1660038111156109175761091761180d565b14155b1561093857604051637b32c26b60e01b815260040160405180910390fd5b6000818152601c6020526040902061094f90610ee8565b60405133815281907f86ce75679135e270f845c02bcb49ef6fb50464cb322dcc30096cccd13d2597df9060200160405180910390a250565b33610990610b18565b6001600160a01b0316141580156109cb575060033360009081526019602052604090205460ff1660038111156109c8576109c861180d565b14155b156109e957604051637b32c26b60e01b815260040160405180910390fd5b6000828152601c60205260409020610a019082610fa9565b6040805182815233602082015283917f46eefbb271e4103912d3c227656de8afc0849f4c8cba4b2a1e38b660361e0463910161024a565b33610a41610b18565b6001600160a01b031614158015610a7c575060033360009081526019602052604090205460ff166003811115610a7957610a7961180d565b14155b15610a9a57604051637b32c26b60e01b815260040160405180910390fd5b601b5460011901610abe57604051637ce54e2d60e11b815260040160405180910390fd5b6002601b556000818152601c60205260409020610adb9033611022565b60405133815281907f2e6c35653408399a9853c5e5f81b67018cba78568bfd76dd46f93c825cbfb95d9060200160405180910390a2506001601b55565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c1320546001600160a01b031690565b6003830154610b589062015180611ba0565b421015610bac5760405162461bcd60e51b815260206004820152601f60248201527f57616974203120646179206265666f7265207374617274696e672072616d700060448201526064015b60405180910390fd5b610bb96212750042611ba0565b811015610c015760405162461bcd60e51b8152602060048201526016602482015275496e73756666696369656e742072616d702074696d6560501b6044820152606401610ba3565b8115801590610c125750620f424082105b610c5e5760405162461bcd60e51b815260206004820181905260248201527f667574757265415f206d757374206265203e203020616e64203c204d41585f416044820152606401610ba3565b6000610c69846110d4565b90506000610c78606485611a0c565b9050808203610cb75760405162461bcd60e51b815260206004820152600b60248201526a02176616c69642072616d760ac1b6044820152606401610ba3565b81811015610d165781610ccb600283611a0c565b1015610d115760405162461bcd60e51b8152602060048201526015602482015274199d5d1d5c995057c81a5cc81d1bdbc81cdb585b1b605a1b6044820152606401610ba3565b610d68565b610d21600283611a0c565b811115610d685760405162461bcd60e51b8152602060048201526015602482015274667574757265415f20697320746f6f206c6172676560581b6044820152606401610ba3565b600185018290556002850181905542600386018190556004860184905560408051848152602081018490528082019290925260608201859052517fa2b71ec6df949300b59aab36b55e189697b750119dd349fcfa8c0f779e83c2549181900360800190a15050505050565b6305f5e100811115610e125760405162461bcd60e51b81526020600482015260086024820152670e8dede40d0d2ced60c31b6044820152606401610ba3565b6005820181905581546040518281527f29aee3d14d18e1b8ace81481838ab2996fee9446a44336847d1d5c7fdf2471b19060200161024a565b6000604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528260601b60148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f09150506001600160a01b038116610ee35760405162461bcd60e51b8152602060048201526016602482015275115490cc4c4d8dce8818dc99585d194819985a5b195960521b6044820152606401610ba3565b919050565b42816004015411610f3b5760405162461bcd60e51b815260206004820152601760248201527f52616d7020697320616c72656164792073746f707065640000000000000000006044820152606401610ba3565b6000610f46826110d4565b60018301819055600283018190554260038401819055600484018190556040519192507f46e22fb3709ad289f62ce63d469248536dbc78d82b84a3d7e74ad606dc20193891610f9d91848252602082015260400190565b60405180910390a15050565b6402540be400811115610fe95760405162461bcd60e51b81526020600482015260086024820152670e8dede40d0d2ced60c31b6044820152606401610ba3565b6006820181905581546040518281527f7b4e02f2e320870ba4f764edf60a5289a465018a3fe159f0d72ba33139b0a6169060200161024a565b600882015460005b818110156110ce57600084600801828154811061104957611049611823565b6000918252602082200154600b870180546001600160a01b039092169350908490811061107857611078611823565b90600052602060002001549050806000146110c457600086600b0184815481106110a4576110a4611823565b6000918252602090912001556110c46001600160a01b0383168683611185565b505060010161102a565b50505050565b60048101546002820154600091904282111561117e576003840154600185015480831115611142576111068285611bb8565b6111108342611bb8565b61111a8386611bb8565b6111249190611a0c565b61112e9190611bcf565b6111389082611ba0565b9695505050505050565b61114c8285611bb8565b6111568342611bb8565b6111608584611bb8565b61116a9190611a0c565b6111749190611bcf565b6111389082611bb8565b9392505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526111d79084906111dc565b505050565b6000611231826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166112ae9092919063ffffffff16565b8051909150156111d7578080602001905181019061124f91906119ea565b6111d75760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610ba3565b60606112bd84846000856112c5565b949350505050565b6060824710156113265760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610ba3565b6001600160a01b0385163b61137d5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610ba3565b600080866001600160a01b031685876040516113999190611bf1565b60006040518083038185875af1925050503d80600081146113d6576040519150601f19603f3d011682016040523d82523d6000602084013e6113db565b606091505b50915091506113eb8282866113f6565b979650505050505050565b6060831561140557508161117e565b8251156114155782518084602001fd5b8160405162461bcd60e51b8152600401610ba39190611c0d565b828054828255906000526020600020908101928215611484579160200282015b8281111561148457825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019061144f565b506114909291506114cf565b5090565b828054828255906000526020600020908101928215611484579160200282015b828111156114845782518255916020019190600101906114b4565b5b8082111561149057600081556001016114d0565b6000806000606084860312156114f957600080fd5b505081359360208301359350604090920135919050565b6000806040838503121561152357600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561157157611571611532565b604052919050565b600067ffffffffffffffff82111561159357611593611532565b5060051b60200190565b6001600160a01b03811681146115b257600080fd5b50565b600082601f8301126115c657600080fd5b813560206115db6115d683611579565b611548565b82815260059290921b840181019181810190868411156115fa57600080fd5b8286015b8481101561161e5780356116118161159d565b83529183019183016115fe565b509695505050505050565b600082601f83011261163a57600080fd5b8135602061164a6115d683611579565b82815260059290921b8401810191818101908684111561166957600080fd5b8286015b8481101561161e57803560ff811681146116875760008081fd5b835291830191830161166d565b600082601f8301126116a557600080fd5b813567ffffffffffffffff8111156116bf576116bf611532565b6116d2601f8201601f1916602001611548565b8181528460208386010111156116e757600080fd5b816020850160208301376000918101602001919091529392505050565b8035610ee38161159d565b60008060008060008060008060006101208a8c03121561172e57600080fd5b8935985060208a013567ffffffffffffffff8082111561174d57600080fd5b6117598d838e016115b5565b995060408c013591508082111561176f57600080fd5b61177b8d838e01611629565b985060608c013591508082111561179157600080fd5b61179d8d838e01611694565b975060808c01359150808211156117b357600080fd5b506117c08c828d01611694565b95505060a08a0135935060c08a0135925060e08a013591506117e56101008b01611704565b90509295985092959850929598565b60006020828403121561180657600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff84168082101561186957611869611839565b90039392505050565b600181815b808511156118ad57816000190482111561189357611893611839565b808516156118a057918102915b93841c9390800290611877565b509250929050565b6000826118c457506001611952565b816118d157506000611952565b81600181146118e757600281146118f15761190d565b6001915050611952565b60ff84111561190257611902611839565b50506001821b611952565b5060208310610133831016604e8410600b8410161715611930575081810a611952565b61193a8383611872565b806000190482111561194e5761194e611839565b0290505b92915050565b600061117e83836118b5565b60005b8381101561197f578181015183820152602001611967565b838111156110ce5750506000910152565b600081518084526119a8816020860160208601611964565b601f01601f19169290920160200192915050565b6040815260006119cf6040830185611990565b82810360208401526119e18185611990565b95945050505050565b6000602082840312156119fc57600080fd5b8151801515811461117e57600080fd5b6000816000190483118215151615611a2657611a26611839565b500290565b600081518084526020808501945080840160005b83811015611a645781516001600160a01b031687529582019590820190600101611a3f565b509495945050505050565b600081518084526020808501945080840160005b83811015611a6457815187529582019590820190600101611a83565b60408152825160408201526020830151606082015260408301516080820152606083015160a0820152608083015160c082015260a083015160e0820152600060c0840151610100818185015260e08601519150610120611b09818601846001600160a01b03169052565b81870151925061018091506101408281870152611b2a6101c0870185611a2b565b9350818801519150603f19610160818887030181890152611b4b8685611a6f565b9550828a01519350818887030185890152611b668685611a6f565b9550808a015194505080878603016101a0880152505050611b878282611a6f565b9250505061117e60208301846001600160a01b03169052565b60008219821115611bb357611bb3611839565b500190565b600082821015611bca57611bca611839565b500390565b600082611bec57634e487b7160e01b600052601260045260246000fd5b500490565b60008251611c03818460208701611964565b9190910192915050565b60208152600061117e602083018461199056fea26469706673582212209f6d79176b1ba591f0fb9cdaea423c5fc491a3fa3b89ad172a501db5dc18f69b64736f6c634300080f0033";

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

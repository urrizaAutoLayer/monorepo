/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Executor, ExecutorInterface } from "../Executor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_connext",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "assetId",
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
        internalType: "bytes29",
        name: "_properties",
        type: "bytes29",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isContract",
        type: "bool",
      },
    ],
    name: "Executed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_transferId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "address",
        name: "_assetId",
        type: "address",
      },
      {
        internalType: "bytes29",
        name: "_properties",
        type: "bytes29",
      },
      {
        internalType: "bytes",
        name: "_callData",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getConnext",
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
    name: "origin",
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
    name: "originSender",
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
];

const _bytecode =
  "0x60a0604052600080546001600160e81b0319166001600160e81b0317905534801561002957600080fd5b506040516111d03803806111d083398101604081905261004891610059565b6001600160a01b0316608052610089565b60006020828403121561006b57600080fd5b81516001600160a01b038116811461008257600080fd5b9392505050565b6080516111266100aa6000396000818160d0015261016701526111266000f3fe60806040526004361061003f5760003560e01c80632b59241f146100445780638468104714610076578063938b5f3214610097578063975740c6146100c1575b600080fd5b34801561005057600080fd5b506100596100f4565b6040516001600160a01b0390911681526020015b60405180910390f35b610089610084366004610e44565b610158565b60405161006d929190610f63565b3480156100a357600080fd5b506100ac610327565b60405163ffffffff909116815260200161006d565b3480156100cd57600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610059565b6000805460181b62ffffff1990811614156101445760405162461bcd60e51b815260206004820152600b60248201526a2170726f7065727469657360a81b60448201526064015b60405180910390fd5b6000546101539060181b610381565b905090565b60006060336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101be5760405162461bcd60e51b8152602060048201526007602482015266234f433a30323760c81b604482015260640161013b565b6001600160a01b03861615806101d9576101d987898b6103b2565b600060606001600160a01b038a163b158015906102a95762ffffff198981161480159061021757600080546001600160e81b03191660188c901c1790555b8b6001600160a01b03168561022d57600061022f565b8d5b8a8a60405161023f929190610f7e565b60006040518083038185875af1925050503d806000811461027c576040519150601f19603f3d011682016040523d82523d6000602084013e610281565b606091505b50909450925080156102a757600080546001600160e81b0319166001600160e81b031790555b505b821580156102b5575083155b156102c5576102c58a8c8e61049d565b8a6001600160a01b03168d7f32387f16e663a0bb215292b00070e6c9b95f1eb4bf3249b7d32149082bdab00a8c8f8d8d8d898b8a60405161030d989796959493929190610f8e565b60405180910390a350909b909a5098505050505050505050565b6000805460181b62ffffff1990811614156103725760405162461bcd60e51b815260206004820152600b60248201526a2170726f7065727469657360a81b604482015260640161013b565b6000546101539060181b6105b0565b6000816001610398815b62ffffff198416906105d2565b506103aa62ffffff19851660056106ab565b949350505050565b604051636eb1769f60e11b81523060048201526001600160a01b038381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015610403573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610427919061100c565b610431919061103b565b6040516001600160a01b03851660248201526044810182905290915061049790859063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526106c0565b50505050565b604051636eb1769f60e11b81523060048201526001600160a01b0383811660248301526000919085169063dd62ed3e90604401602060405180830381865afa1580156104ed573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610511919061100c565b9050818110156105755760405162461bcd60e51b815260206004820152602960248201527f5361666545524332303a2064656372656173656420616c6c6f77616e63652062604482015268656c6f77207a65726f60b81b606482015260840161013b565b6040516001600160a01b038416602482015282820360448201819052906105a990869063095ea7b360e01b90606401610460565b5050505050565b60008160016105be8161038b565b506103aa62ffffff19851660056004610797565b60006105de83836107c7565b6106a45760006105fd6105f18560d81c90565b64ffffffffff166107ea565b91505060006106128464ffffffffff166107ea565b6040517f5479706520617373657274696f6e206661696c65642e20476f7420307800000060208201526001600160b01b031960b086811b8216603d8401526c05c408af0e0cac6e8cac84060f609b1b604784015283901b16605482015290925060009150605e0160405160208183030381529060405290508060405162461bcd60e51b815260040161013b9190611053565b5090919050565b60006106b983836014610797565b9392505050565b6000610715826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166108969092919063ffffffff16565b80519091501561079257808060200190518101906107339190611066565b6107925760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840161013b565b505050565b60006107a4826020611088565b6107af9060086110ab565b60ff166107bd8585856108a5565b901c949350505050565b60008164ffffffffff166107db8460d81c90565b64ffffffffff16149392505050565b600080601f5b600f8160ff1611156108485760006108098260086110ab565b60ff1685901c905061081a816109fe565b61ffff16841793508160ff1660101461083557601084901b93505b50610841600182611088565b90506107f0565b50600f5b60ff8160ff1610156108905760ff600882021684901c61086b816109fe565b61ffff16831792508160ff1660001461088657601083901b92505b506000190161084c565b50915091565b60606103aa8484600085610a30565b600060ff82166108b7575060006106b9565b6108ca8460181c6001600160601b031690565b6001600160601b03166108e08460ff8516610b61565b11156109445761092b6108fc8560781c6001600160601b031690565b6001600160601b03166109188660181c6001600160601b031690565b6001600160601b0316858560ff16610b6d565b60405162461bcd60e51b815260040161013b9190611053565b60208260ff1611156109be5760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e203332206279746573000000000000606482015260840161013b565b6008820260006109d78660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91909501511695945050505050565b6000610a1060048360ff16901c610c97565b60ff1661ffff919091161760081b610a2782610c97565b60ff1617919050565b606082471015610a915760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840161013b565b6001600160a01b0385163b610ae85760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161013b565b600080866001600160a01b03168587604051610b0491906110d4565b60006040518083038185875af1925050503d8060008114610b41576040519150601f19603f3d011682016040523d82523d6000602084013e610b46565b606091505b5091509150610b56828286610df3565b979650505050505050565b60006106b9828461103b565b60606000610b7a866107ea565b9150506000610b88866107ea565b9150506000610b96866107ea565b9150506000610ba4866107ea565b604080517f54797065644d656d566965772f696e646578202d204f76657272616e20746865602082015274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b818301526001600160d01b031960d098891b811660558301526e040eed2e8d040d8cadccee8d04060f608b1b605b830181905297891b8116606a8301527f2e20417474656d7074656420746f20696e646578206174206f666673657420306070830152600f60fb1b609083015295881b861660918201526097810196909652951b90921660a68401525050601760f91b60ac8201528151808203608d01815260ad90910190915295945050505050565b600060f08083179060ff82161415610cb25750603092915050565b8060ff1660f11415610cc75750603192915050565b8060ff1660f21415610cdc5750603292915050565b8060ff1660f31415610cf15750603392915050565b8060ff1660f41415610d065750603492915050565b8060ff1660f51415610d1b5750603592915050565b8060ff1660f61415610d305750603692915050565b8060ff1660f71415610d455750603792915050565b8060ff1660f81415610d5a5750603892915050565b8060ff1660f91415610d6f5750603992915050565b8060ff1660fa1415610d845750606192915050565b8060ff1660fb1415610d995750606292915050565b8060ff1660fc1415610dae5750606392915050565b8060ff1660fd1415610dc35750606492915050565b8060ff1660fe1415610dd85750606592915050565b8060ff1660ff1415610ded5750606692915050565b50919050565b60608315610e025750816106b9565b825115610e125782518084602001fd5b8160405162461bcd60e51b815260040161013b9190611053565b6001600160a01b0381168114610e4157600080fd5b50565b600080600080600080600060c0888a031215610e5f57600080fd5b87359650602088013595506040880135610e7881610e2c565b94506060880135610e8881610e2c565b9350608088013562ffffff1981168114610ea157600080fd5b925060a088013567ffffffffffffffff80821115610ebe57600080fd5b818a0191508a601f830112610ed257600080fd5b813581811115610ee157600080fd5b8b6020828501011115610ef357600080fd5b60208301945080935050505092959891949750929550565b60005b83811015610f26578181015183820152602001610f0e565b838111156104975750506000910152565b60008151808452610f4f816020860160208601610f0b565b601f01601f19169290920160200192915050565b82151581526040602082015260006103aa6040830184610f37565b8183823760009101908152919050565b6001600160a01b03891681526020810188905262ffffff198716604082015260e060608201819052810185905260006101008688828501376000838801820152601f8701601f1916830183810382016080850152610fee81830188610f37565b95151560a085015250505090151560c0909101529695505050505050565b60006020828403121561101e57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561104e5761104e611025565b500190565b6020815260006106b96020830184610f37565b60006020828403121561107857600080fd5b815180151581146106b957600080fd5b600060ff821660ff8416808210156110a2576110a2611025565b90039392505050565b600060ff821660ff84168160ff04811182151516156110cc576110cc611025565b029392505050565b600082516110e6818460208701610f0b565b919091019291505056fea2646970667358221220c55ead47fdb9c7afc4590dd56fefd40f0ca37d5f2db3fc4b23aff1183826b77d64736f6c634300080b0033";

type ExecutorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExecutorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Executor__factory extends ContractFactory {
  constructor(...args: ExecutorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Executor";
  }

  deploy(
    _connext: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Executor> {
    return super.deploy(_connext, overrides || {}) as Promise<Executor>;
  }
  getDeployTransaction(
    _connext: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_connext, overrides || {});
  }
  attach(address: string): Executor {
    return super.attach(address) as Executor;
  }
  connect(signer: Signer): Executor__factory {
    return super.connect(signer) as Executor__factory;
  }
  static readonly contractName: "Executor";
  public readonly contractName: "Executor";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExecutorInterface {
    return new utils.Interface(_abi) as ExecutorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Executor {
    return new Contract(address, _abi, signerOrProvider) as Executor;
  }
}

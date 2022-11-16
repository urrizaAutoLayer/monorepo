/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  InboxFacet,
  InboxFacetInterface,
} from "../../../../../contracts/core/connext/facets/InboxFacet";

const _abi = [
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
    name: "InboxFacet__handle_notTransfer",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__onlyRemoteRouter_notRemote",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__onlyReplica_notReplica",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__reconcile_alreadyReconciled",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__reconcile_noPortalRouter",
    type: "error",
  },
  {
    inputs: [],
    name: "InboxFacet__reconcile_notConnext",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint64",
        name: "originAndNonce",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "liquidityProvider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Receive",
    type: "event",
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
        internalType: "uint32",
        name: "originDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "local",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "routers",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "Reconciled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "_nonce",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611422806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063ab2dc3f514610030575b600080fd5b61004361003e366004611143565b610045565b005b61004e3361013c565b61006b5760405163761c560f60e11b815260040160405180910390fd5b838261007782826101b1565b610094576040516346b4a0e960e01b815260040160405180910390fd5b60006100ae6100a385836101db565b62ffffff19166101ff565b905060006100c162ffffff198316610218565b905060006100d462ffffff19841661024d565b90506100e562ffffff1982166102a5565b61010257604051632af392f960e11b815260040160405180910390fd5b6000806101118b8b86866102b2565b9150915061012f6101278462ffffff191661046f565b8c8484610484565b5050505050505050505050565b602554604051635190bc5360e01b81526001600160a01b0383811660048301526000921690635190bc5390602401602060405180830381865afa158015610187573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ab919061121f565b92915050565b63ffffffff8216600090815260146020526040812054821480156101d457508115155b9392505050565b8151600090602084016101f664ffffffffff85168284610796565b95945050505050565b60006101ab61020d836107dd565b62ffffff191661080f565b600081600261022f815b62ffffff1984169061086f565b5061024562ffffff198516600060246001610948565b949350505050565b600081600261025b81610222565b5060006102766024601887901c6001600160601b031661126d565b90506000610283866109b8565b60ff16905061029b62ffffff19871660248484610948565b9695505050505050565b60006101ab8260036109cd565b600080806102c562ffffff198616610a2c565b905060006102d862ffffff198716610a4e565b905060006102f06102e98484610a70565b8484610ab2565b9050600061030362ffffff198816610ac1565b90508060000361038657306001600160a01b03831667ffffffff0000000060208d901b1663ffffffff8c161760408051600081526020810186905267ffffffffffffffff92909216917f9f9a97db84f39202ca3b409b63f7ccf7d3fd810e176573c7483088b6f181bbbb910160405180910390a450935060009250610466915050565b61038f82610ad6565b6103f4576040516340c10f1960e01b8152306004820152602481018290526001600160a01b038316906340c10f1990604401600060405180830381600087803b1580156103db57600080fd5b505af11580156103ef573d6000803e3d6000fd5b505050505b306001600160a01b03831667ffffffff0000000060208d901b1663ffffffff8c161760408051600081526020810186905267ffffffffffffffff92909216917f9f9a97db84f39202ca3b409b63f7ccf7d3fd810e176573c7483088b6f181bbbb910160405180910390a4909450925050505b94509492505050565b60006101ab62ffffff19831660216020610ae3565b6000848152600d602052604081205460ff16908160038111156104a9576104a9611241565b141580156104c9575060028160038111156104c6576104c6611241565b14155b156104e757604051638f6bc06f60e01b815260040160405180910390fd5b60008160038111156104fb576104fb611241565b1461050757600361050a565b60015b6000868152600d60205260409020805460ff1916600183600381111561053257610532611241565b02179055506000858152600e602090815260408083208054825181850281018501909352808352919290919083018282801561059757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610579575b505050600089815260236020908152604080832054602290925282205494955090936105c69350909150611280565b825190915081158015906105db575080600114155b156105f95760405163d3bd901560e01b815260040160405180910390fd5b801561073f57600061060b82876112a9565b905060005b61061b60018461126d565b8110156106a357816000600f01600087848151811061063c5761063c6112bd565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008a6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546106969190611280565b9091555050600101610610565b5060006106b083886112d3565b6106ba9083611280565b905080600f6000876106cd60018861126d565b815181106106dd576106dd6112bd565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060008a6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546107379190611280565b909155505050505b856001600160a01b03168763ffffffff16897f30bf44531c04b96173a40012c90db840a147cf7d50a3e160f5227f1af2faa3a0868933604051610784939291906112e7565b60405180910390a45050505050505050565b6000806107a38385611280565b90506040518111156107b3575060005b806000036107c85762ffffff199150506101d4565b5050606092831b9190911790911b1760181b90565b60006107e882610c3f565b15610805576301000000600160d81b038216600160d91b176101ab565b62ffffff196101ab565b600061081a82610c62565b61086b5760405162461bcd60e51b815260206004820152601960248201527f56616c696469747920617373657274696f6e206661696c65640000000000000060448201526064015b60405180910390fd5b5090565b600061087b8383610c9f565b61094157600061089a61088e8560d81c90565b64ffffffffff16610cc2565b91505060006108af8464ffffffffff16610cc2565b6040517f5479706520617373657274696f6e206661696c65642e20476f7420307800000060208201526001600160b01b031960b086811b8216603d8401526c05c408af0e0cac6e8cac84060f609b1b604784015283901b16605482015290925060009150605e0160405160208183030381529060405290508060405162461bcd60e51b8152600401610862919061134b565b5090919050565b60008061095e8660781c6001600160601b031690565b6001600160601b0316905061097286610d5e565b8461097d8784611280565b6109879190611280565b111561099a5762ffffff19915050610245565b6109a48582611280565b905061029b8364ffffffffff168286610796565b60006101ab62ffffff19831660246001610d97565b60008160038111156109e1576109e1611241565b60ff166109ed84610dc7565b60ff161480156101d45750816003811115610a0a57610a0a611241565b610a1384610ddb565b6003811115610a2457610a24611241565b149392505050565b6000816001610a3a81610222565b5061024562ffffff19851660046020610ae3565b6000816001610a5c81610222565b5061024562ffffff19851660006004610d97565b60008282604051602001610a9492919091825263ffffffff16602082015260400190565b60405160208183030381529060405280519060200120905092915050565b60006102458484846000610df6565b60006101ab62ffffff19831660016020610d97565b60006101ab826000610e35565b60008160ff16600003610af8575060006101d4565b610b0b8460181c6001600160601b031690565b6001600160601b0316610b2160ff841685611280565b1115610b8557610b6c610b3d8560781c6001600160601b031690565b6001600160601b0316610b598660181c6001600160601b031690565b6001600160601b0316858560ff16610e6b565b60405162461bcd60e51b8152600401610862919061134b565b60208260ff161115610bff5760405162461bcd60e51b815260206004820152603a60248201527f54797065644d656d566965772f696e646578202d20417474656d70746564207460448201527f6f20696e646578206d6f7265207468616e2033322062797465730000000000006064820152608401610862565b600882026000610c188660781c6001600160601b031690565b6001600160601b031690506000600160ff1b60001984011d91909501511695945050505050565b6000601882901c6001600160601b0316610c5b60416024611280565b1492915050565b6000610c6e8260d81c90565b64ffffffffff1664ffffffffff03610c8857506000919050565b6000610c9383610d5e565b60405110199392505050565b60008164ffffffffff16610cb38460d81c90565b64ffffffffff16149392505050565b600080601f5b600f811115610d0e576000610cde826008611399565b85901c9050610cec81610f95565b61ffff168417935081601014610d0457601084901b93505b5060001901610cc8565b50600f5b60ff811015610d58576000610d28826008611399565b85901c9050610d3681610f95565b61ffff168317925081600014610d4e57601083901b92505b5060001901610d12565b50915091565b6000610d738260181c6001600160601b031690565b610d868360781c6001600160601b031690565b016001600160601b03169050919050565b6000610da48260206113b0565b610daf9060086113c9565b60ff16610dbd858585610ae3565b901c949350505050565b60006101ab62ffffff198316826001610d97565b600060d882901c60ff1660038111156101ab576101ab611241565b600481015460009063ffffffff90811690841603610e15575082610245565b506000848152600c820160205260409020546001600160a01b0316610245565b6001600160a01b0382166000908152600a8201602052604081205463ffffffff1615610e63575060006101ab565b50503b151590565b60606000610e7886610cc2565b9150506000610e8686610cc2565b9150506000610e9486610cc2565b9150506000610ea286610cc2565b604080517f54797065644d656d566965772f696e646578202d204f76657272616e20746865602082015274040ecd2caee5c40a6d8d2c6ca40d2e640c2e84060f605b1b818301526001600160d01b031960d098891b811660558301526e040eed2e8d040d8cadccee8d04060f608b1b605b830181905297891b8116606a8301527f2e20417474656d7074656420746f20696e646578206174206f666673657420306070830152600f60fb1b609083015295881b861660918201526097810196909652951b90921660a68401525050601760f91b60ac8201528151808203608d01815260ad90910190915295945050505050565b6000610fa760048360ff16901c610fc7565b60ff1661ffff919091161760081b610fbe82610fc7565b60ff1617919050565b600060f08083179060ff82169003610fe25750603092915050565b8060ff1660f103610ff65750603192915050565b8060ff1660f20361100a5750603292915050565b8060ff1660f30361101e5750603392915050565b8060ff1660f4036110325750603492915050565b8060ff1660f5036110465750603592915050565b8060ff1660f60361105a5750603692915050565b8060ff1660f70361106e5750603792915050565b8060ff1660f8036110825750603892915050565b8060ff1660f9036110965750603992915050565b8060ff1660fa036110aa5750606192915050565b8060ff1660fb036110be5750606292915050565b8060ff1660fc036110d25750606392915050565b8060ff1660fd036110e65750606492915050565b8060ff1660fe036110fa5750606592915050565b8060ff1660ff0361110e5750606692915050565b50919050565b803563ffffffff8116811461112857600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561115957600080fd5b61116285611114565b935061117060208601611114565b925060408501359150606085013567ffffffffffffffff8082111561119457600080fd5b818701915087601f8301126111a857600080fd5b8135818111156111ba576111ba61112d565b604051601f8201601f19908116603f011681019083821181831017156111e2576111e261112d565b816040528281528a60208487010111156111fb57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60006020828403121561123157600080fd5b815180151581146101d457600080fd5b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b818103818111156101ab576101ab611257565b808201808211156101ab576101ab611257565b634e487b7160e01b600052601260045260246000fd5b6000826112b8576112b8611293565b500490565b634e487b7160e01b600052603260045260246000fd5b6000826112e2576112e2611293565b500690565b606080825284519082018190526000906020906080840190828801845b828110156113295781516001600160a01b031684529284019290840190600101611304565b50505090830194909452506001600160a01b0391909116604090910152919050565b600060208083528351808285015260005b818110156113785785810183015185820160400152820161135c565b506000604082860101526040601f19601f8301168501019250505092915050565b80820281158282048414176101ab576101ab611257565b60ff82811682821603908111156101ab576101ab611257565b60ff81811683821602908116908181146113e5576113e5611257565b509291505056fea26469706673582212200b64b1a8485f2c918502d2c853676bdc8de8ee8d6fe449bf85917c8ff9b479bc64736f6c63430008110033";

type InboxFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InboxFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InboxFacet__factory extends ContractFactory {
  constructor(...args: InboxFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<InboxFacet> {
    return super.deploy(overrides || {}) as Promise<InboxFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): InboxFacet {
    return super.attach(address) as InboxFacet;
  }
  override connect(signer: Signer): InboxFacet__factory {
    return super.connect(signer) as InboxFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InboxFacetInterface {
    return new utils.Interface(_abi) as InboxFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InboxFacet {
    return new Contract(address, _abi, signerOrProvider) as InboxFacet;
  }
}

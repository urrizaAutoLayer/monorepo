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
import type { PromiseOrValue } from "../../../../../../common";
import type {
  ERC20,
  ERC20Interface,
} from "../../../../../../contracts/core/connext/helpers/OZERC20.sol/ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
      {
        internalType: "string",
        name: "version_",
        type: "string",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
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
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
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
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "nonces",
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
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "_r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
];

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200127a3803806200127a8339810160408190526200003491620001b6565b6003620000428482620002f1565b506004620000518382620002f1565b506005805460ff191660ff9590951694909417909355508051602091820120825192820192909220600883905560c0818152466080818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818801528082019790975260608701949094528501523060a0808601829052835180870382018152959092019092528351939092019290922060075552620003bd565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200011957600080fd5b81516001600160401b0380821115620001365762000136620000f1565b604051601f8301601f19908116603f01168101908282118183101715620001615762000161620000f1565b816040528381526020925086838588010111156200017e57600080fd5b600091505b83821015620001a2578582018301518183018401529082019062000183565b600093810190920192909252949350505050565b60008060008060808587031215620001cd57600080fd5b845160ff81168114620001df57600080fd5b60208601519094506001600160401b0380821115620001fd57600080fd5b6200020b8883890162000107565b945060408701519150808211156200022257600080fd5b620002308883890162000107565b935060608701519150808211156200024757600080fd5b50620002568782880162000107565b91505092959194509250565b600181811c908216806200027757607f821691505b6020821081036200029857634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002ec57600081815260208120601f850160051c81016020861015620002c75750805b601f850160051c820191505b81811015620002e857828155600101620002d3565b5050505b505050565b81516001600160401b038111156200030d576200030d620000f1565b62000325816200031e845462000262565b846200029e565b602080601f8311600181146200035d5760008415620003445750858301515b600019600386901b1c1916600185901b178555620002e8565b600085815260208120601f198616915b828110156200038e578886015182559484019460019091019084016200036d565b5085821015620003ad5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c051610e8d620003ed6000396000610957015260006108c4015260006108ee0152610e8d6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a457c2d711610066578063a457c2d7146101c9578063a9059cbb146101dc578063d505accf146101ef578063dd62ed3e1461020457600080fd5b806370a08231146101855780637ecebe00146101ae57806395d89b41146101c157600080fd5b806323b872dd116100c857806323b872dd14610142578063313ce567146101555780633644e5151461016a578063395093511461017257600080fd5b806306fdde03146100ef578063095ea7b31461010d57806318160ddd14610130575b600080fd5b6100f7610217565b6040516101049190610c54565b60405180910390f35b61012061011b366004610cbe565b6102a9565b6040519015158152602001610104565b6002545b604051908152602001610104565b610120610150366004610ce8565b6102c0565b60055460405160ff9091168152602001610104565b6101346102e2565b610120610180366004610cbe565b6102f1565b610134610193366004610d24565b6001600160a01b031660009081526020819052604090205490565b6101346101bc366004610d24565b61032d565b6100f761034b565b6101206101d7366004610cbe565b61035a565b6101206101ea366004610cbe565b6103d9565b6102026101fd366004610d46565b6103e6565b005b610134610212366004610db9565b61054a565b60606003805461022690610dec565b80601f016020809104026020016040519081016040528092919081815260200182805461025290610dec565b801561029f5780601f106102745761010080835404028352916020019161029f565b820191906000526020600020905b81548152906001019060200180831161028257829003601f168201915b5050505050905090565b60006102b6338484610575565b5060015b92915050565b60006102cd843384610699565b6102d8848484610713565b5060019392505050565b60006102ec6108b7565b905090565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916102b6918590610328908690610e20565b610575565b6001600160a01b0381166000908152600660205260408120546102ba565b60606004805461022690610dec565b600080610367338561054a565b9050828110156103cc5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102d83385858403610575565b60006102b6338484610713565b834211156104365760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016103c3565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886104658c6109a5565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006104c0826109cd565b905060006104d082878787610a1b565b9050896001600160a01b0316816001600160a01b0316146105335760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016103c3565b61053e8a8a8a610575565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b0383166105d75760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103c3565b6001600160a01b0382166106385760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103c3565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006106a5848461054a565b9050600019811461070d57818110156107005760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103c3565b61070d8484848403610575565b50505050565b6001600160a01b0383166107775760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103c3565b6001600160a01b0382166107d95760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103c3565b6001600160a01b038316600090815260208190526040902054818110156108515760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103c3565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a361070d565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561091057507f000000000000000000000000000000000000000000000000000000000000000046145b1561091c575060075490565b50600854604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f602080830191909152818301939093527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a0808301919091528251808303909101815260c0909101909152805191012090565b6001600160a01b03811660009081526006602052604090208054600181018255905b50919050565b60006102ba6109da6108b7565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000610a2c87878787610a43565b91509150610a3981610b07565b5095945050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610a7a5750600090506003610afe565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015610ace573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610af757600060019250925050610afe565b9150600090505b94509492505050565b6000816004811115610b1b57610b1b610e41565b03610b235750565b6001816004811115610b3757610b37610e41565b03610b845760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016103c3565b6002816004811115610b9857610b98610e41565b03610be55760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016103c3565b6003816004811115610bf957610bf9610e41565b03610c515760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016103c3565b50565b600060208083528351808285015260005b81811015610c8157858101830151858201604001528201610c65565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610cb957600080fd5b919050565b60008060408385031215610cd157600080fd5b610cda83610ca2565b946020939093013593505050565b600080600060608486031215610cfd57600080fd5b610d0684610ca2565b9250610d1460208501610ca2565b9150604084013590509250925092565b600060208284031215610d3657600080fd5b610d3f82610ca2565b9392505050565b600080600080600080600060e0888a031215610d6157600080fd5b610d6a88610ca2565b9650610d7860208901610ca2565b95506040880135945060608801359350608088013560ff81168114610d9c57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610dcc57600080fd5b610dd583610ca2565b9150610de360208401610ca2565b90509250929050565b600181811c90821680610e0057607f821691505b6020821081036109c757634e487b7160e01b600052602260045260246000fd5b808201808211156102ba57634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea2646970667358221220416d5a4e976ab8e7f6ba5cbb9e3f03ee9430c01a799d4978a9e1b8002624577264736f6c63430008110033";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    decimals_: PromiseOrValue<BigNumberish>,
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    version_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20> {
    return super.deploy(
      decimals_,
      name_,
      symbol_,
      version_,
      overrides || {}
    ) as Promise<ERC20>;
  }
  override getDeployTransaction(
    decimals_: PromiseOrValue<BigNumberish>,
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    version_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      decimals_,
      name_,
      symbol_,
      version_,
      overrides || {}
    );
  }
  override attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  override connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}

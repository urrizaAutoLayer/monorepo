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
import type { PromiseOrValue } from "../../../../common";
import type {
  SendOutboundRootResolver,
  SendOutboundRootResolverInterface,
} from "../../../../contracts/messaging/connectors/SendOutboundRootResolver";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_connector",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_executionInterval",
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
    name: "CONNECTOR",
    outputs: [
      {
        internalType: "contract SpokeConnector",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EXECUTION_INTERVAL",
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
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_executionInterval",
        type: "uint256",
      },
    ],
    name: "changeExecutionInterval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "checker",
    outputs: [
      {
        internalType: "bool",
        name: "canExec",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "execPayload",
        type: "bytes",
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
    inputs: [],
    name: "lastExecuted",
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
    name: "lastRootSent",
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
    name: "sendMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610a77380380610a7783398101604081905261002f91610127565b600081116100a95760405162461bcd60e51b815260206004820152603860248201527f53656e644f7574626f756e64526f6f745265736f6c7665723a2065786563757460448201527f696f6e20696e74657276616c206d757374206265203e20300000000000000000606482015260840160405180910390fd5b6100b2336100c8565b6001600160a01b03909116608052600355610161565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000806040838503121561013a57600080fd5b82516001600160a01b038116811461015157600080fd5b6020939093015192949293505050565b6080516108e6610191600039600081816101770152818161047c015281816105a8015261063001526108e66000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063a5f8754411610097578063cf5303cf11610066578063cf5303cf146101bd578063d1851c92146101d3578063d232c220146101e4578063e5aed28a1461020057600080fd5b8063a5f8754414610172578063b0b943a214610199578063b1f8100d146101a2578063c5b350df146101b557600080fd5b806345102ffb116100d357806345102ffb146101275780636a42b8f81461013c578063715018a6146101455780638da5cb5b1461014d57600080fd5b80631c15ff77146100fa5780631cf123b6146101165780633cf52ffb1461011f575b600080fd5b61010360045481565b6040519081526020015b60405180910390f35b61010360055481565b600254610103565b61013a610135366004610754565b610208565b005b62093a80610103565b61013a6102b2565b6000546001600160a01b03165b6040516001600160a01b03909116815260200161010d565b61015a7f000000000000000000000000000000000000000000000000000000000000000081565b61010360035481565b61013a6101b036600461076d565b610371565b61013a610419565b6101c5610474565b60405161010d92919061079d565b6001546001600160a01b031661015a565b6000546040516001600160a01b0390911615815260200161010d565b61013a6105a6565b6000546001600160a01b03163314610233576040516311a8a1bb60e31b815260040160405180910390fd5b600081116102ad5760405162461bcd60e51b815260206004820152603860248201527f53656e644f7574626f756e64526f6f745265736f6c7665723a2065786563757460448201527f696f6e20696e74657276616c206d757374206265203e20300000000000000000606482015260840160405180910390fd5b600355565b6000546001600160a01b031633146102dd576040516311a8a1bb60e31b815260040160405180910390fd5b60025460000361030057604051630e4b303f60e21b815260040160405180910390fd5b62093a80600254426103129190610812565b11610330576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b03161561035a576040516323295ef960e01b815260040160405180910390fd5b60015461036f906001600160a01b03166106a7565b565b6000546001600160a01b0316331461039c576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b0382811691161480156103c157506001600160a01b03811615155b156103df576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b0380831691160361040d57604051634a2fb73f60e11b815260040160405180910390fd5b61041681610706565b50565b6001546001600160a01b03163314610444576040516311a7f27160e11b815260040160405180910390fd5b62093a80600254426104569190610812565b1161035a5760405163d39c12bb60e01b815260040160405180910390fd5b6000606060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166365eaf11b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104fc9190610829565b90504260035460045461050f9190610842565b11156105395760006040518060600160405280602d8152602001610884602d913992509250509091565b806005540361056657600060405180606001604052806029815260200161085b6029913992509250509091565b604080516024808201939093528151808203909301835260440190526020810180516001600160e01b03166372d7694560e11b1790526001939092509050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166365eaf11b6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610604573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106289190610829565b6005819055507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b46300ec6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561068957600080fd5b505af115801561069d573d6000803e3d6000fd5b5050426004555050565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b60006020828403121561076657600080fd5b5035919050565b60006020828403121561077f57600080fd5b81356001600160a01b038116811461079657600080fd5b9392505050565b821515815260006020604081840152835180604085015260005b818110156107d3578581018301518582016060015282016107b7565b818111156107e5576000606083870101525b50601f01601f191692909201606001949350505050565b634e487b7160e01b600052601160045260246000fd5b600082821015610824576108246107fc565b500390565b60006020828403121561083b57600080fd5b5051919050565b60008219821115610855576108556107fc565b50019056fe53656e7420726f6f74206973207468652073616d65206173207468652063757272656e7420726f6f74455845435554494f4e5f494e54455256414c207365636f6e647320617265206e6f742070617373656420796574a26469706673582212202be3d87e8a1deb4a586c63d6368c75380defd39bdfbdb91de564e26c689a1b1b64736f6c634300080f0033";

type SendOutboundRootResolverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SendOutboundRootResolverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SendOutboundRootResolver__factory extends ContractFactory {
  constructor(...args: SendOutboundRootResolverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _connector: PromiseOrValue<string>,
    _executionInterval: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SendOutboundRootResolver> {
    return super.deploy(
      _connector,
      _executionInterval,
      overrides || {}
    ) as Promise<SendOutboundRootResolver>;
  }
  override getDeployTransaction(
    _connector: PromiseOrValue<string>,
    _executionInterval: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _connector,
      _executionInterval,
      overrides || {}
    );
  }
  override attach(address: string): SendOutboundRootResolver {
    return super.attach(address) as SendOutboundRootResolver;
  }
  override connect(signer: Signer): SendOutboundRootResolver__factory {
    return super.connect(signer) as SendOutboundRootResolver__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SendOutboundRootResolverInterface {
    return new utils.Interface(_abi) as SendOutboundRootResolverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SendOutboundRootResolver {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SendOutboundRootResolver;
  }
}

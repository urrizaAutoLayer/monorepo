/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  MultichainCall,
  MultichainCallInterface,
} from "../../../../../../contracts/core/messaging/connectors/MultichainConnector.sol/MultichainCall";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "_fallback",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_toChainID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_flags",
        type: "uint256",
      },
    ],
    name: "anyCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "context",
    outputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fromChainID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "executor",
    outputs: [
      {
        internalType: "address",
        name: "executor",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class MultichainCall__factory {
  static readonly abi = _abi;
  static createInterface(): MultichainCallInterface {
    return new utils.Interface(_abi) as MultichainCallInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultichainCall {
    return new Contract(address, _abi, signerOrProvider) as MultichainCall;
  }
}

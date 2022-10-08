/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IKnownCodesStorage,
  IKnownCodesStorageInterface,
} from "../../../../../../@matterlabs/zksync-contracts/l2/system-contracts/interfaces/IKnownCodesStorage";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
    ],
    name: "checkIfKnown",
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
        name: "_hash",
        type: "bytes32",
      },
    ],
    name: "getMarker",
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
        internalType: "bytes32[16]",
        name: "_hash",
        type: "bytes32[16]",
      },
    ],
    name: "markAsKnownCandidates",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
    ],
    name: "markAsRepublished",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
    ],
    name: "removeUnusedKnownCandidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IKnownCodesStorage__factory {
  static readonly abi = _abi;
  static createInterface(): IKnownCodesStorageInterface {
    return new utils.Interface(_abi) as IKnownCodesStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IKnownCodesStorage {
    return new Contract(address, _abi, signerOrProvider) as IKnownCodesStorage;
  }
}

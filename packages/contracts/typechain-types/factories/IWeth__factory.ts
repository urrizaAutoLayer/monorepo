/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IWeth, IWethInterface } from "../IWeth";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_wad",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export class IWeth__factory {
  static readonly abi = _abi;
  static createInterface(): IWethInterface {
    return new utils.Interface(_abi) as IWethInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IWeth {
    return new Contract(address, _abi, signerOrProvider) as IWeth;
  }
}

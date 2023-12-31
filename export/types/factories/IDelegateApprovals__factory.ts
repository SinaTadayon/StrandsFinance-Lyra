/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IDelegateApprovals,
  IDelegateApprovalsInterface,
} from "../IDelegateApprovals";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "delegate",
        type: "address",
      },
    ],
    name: "approveExchangeOnBehalf",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "exchanger",
        type: "address",
      },
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "canExchangeOnBehalf",
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
];

export class IDelegateApprovals__factory {
  static readonly abi = _abi;
  static createInterface(): IDelegateApprovalsInterface {
    return new utils.Interface(_abi) as IDelegateApprovalsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IDelegateApprovals {
    return new Contract(address, _abi, signerOrProvider) as IDelegateApprovals;
  }
}

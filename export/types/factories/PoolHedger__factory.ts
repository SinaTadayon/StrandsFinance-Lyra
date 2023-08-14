/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { PoolHedger, PoolHedgerInterface } from "../PoolHedger";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        internalType: "address",
        name: "liquidityPool",
        type: "address",
      },
    ],
    name: "OnlyLiquidityPool",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "interactionDelay",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hedgeCap",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct PoolHedger.PoolHedgerParameters",
        name: "poolHedgerParams",
        type: "tuple",
      },
    ],
    name: "PoolHedgerParametersSet",
    type: "event",
  },
  {
    inputs: [],
    name: "getCappedExpectedHedge",
    outputs: [
      {
        internalType: "int256",
        name: "cappedExpectedHedge",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentHedgedNetDelta",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "spotPrice",
        type: "uint256",
      },
    ],
    name: "getHedgingLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "pendingDeltaLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "usedDeltaLiquidity",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPoolHedgerParams",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "interactionDelay",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "hedgeCap",
            type: "uint256",
          },
        ],
        internalType: "struct PoolHedger.PoolHedgerParameters",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hedgeDelta",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastInteraction",
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
    name: "resetInteractionDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class PoolHedger__factory {
  static readonly abi = _abi;
  static createInterface(): PoolHedgerInterface {
    return new utils.Interface(_abi) as PoolHedgerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolHedger {
    return new Contract(address, _abi, signerOrProvider) as PoolHedger;
  }
}

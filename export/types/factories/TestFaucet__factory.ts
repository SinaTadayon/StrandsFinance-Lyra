/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestFaucet, TestFaucetInterface } from "../TestFaucet";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract TestERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Dripped",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "addresses",
    outputs: [
      {
        internalType: "contract TestERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "drip",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "bool",
        name: "permit",
        type: "bool",
      },
    ],
    name: "permitModify",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "permitted",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "received",
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
        internalType: "contract TestERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "setDripAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000908152600260205260409020805460ff191660011790556105978061003a6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806357d4b29c146100675780636cc301e31461007c57806371e72423146100b45780639f678cca146100c7578063df0cb934146100cf578063edf26d9b146100f2575b600080fd5b61007a61007536600461047b565b61011d565b005b61009f61008a3660046104b9565b60026020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b61007a6100c23660046104dd565b61019d565b61007a6102ae565b61009f6100dd3660046104b9565b60036020526000908152604090205460ff1681565b610105610100366004610509565b610439565b6040516001600160a01b0390911681526020016100ab565b3360009081526002602052604090205460ff166101725760405162461bcd60e51b815260206004820152600e60248201526d1bdb9b1e481c195c9b5a5d1d195960921b60448201526064015b60405180910390fd5b6001600160a01b03919091166000908152600260205260409020805460ff1916911515919091179055565b3360009081526002602052604090205460ff166101ed5760405162461bcd60e51b815260206004820152600e60248201526d1bdb9b1e481c195c9b5a5d1d195960921b6044820152606401610169565b6000805b60015482101561024b57836001600160a01b03166001838154811061021857610218610522565b6000918252602090912001546001600160a01b0316141561023b5750600161024b565b61024482610538565b91506101f1565b8061029b576001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319166001600160a01b0386161790555b5060009081526020819052604090205550565b3360009081526003602052604090205460ff16156103015760405162461bcd60e51b815260206004820152601060248201526f185b1c9958591e481c9958d95a5d995960821b6044820152606401610169565b60005b60015481101561041c576001818154811061032157610321610522565b600091825260208083209190910154838352908290526040918290205491516340c10f1960e01b815233600482015260248101929092526001600160a01b0316906340c10f1990604401600060405180830381600087803b15801561038557600080fd5b505af1158015610399573d6000803e3d6000fd5b505050507f0daf449977d5acafa35195e10b3eb92f97839892a6653afaba222379b58d8a9b600182815481106103d1576103d1610522565b6000918252602080832091909101548483528282526040928390205483516001600160a01b039092168252918101919091520160405180910390a161041581610538565b9050610304565b50336000908152600360205260409020805460ff19166001179055565b6001818154811061044957600080fd5b6000918252602090912001546001600160a01b0316905081565b6001600160a01b038116811461047857600080fd5b50565b6000806040838503121561048e57600080fd5b823561049981610463565b9150602083013580151581146104ae57600080fd5b809150509250929050565b6000602082840312156104cb57600080fd5b81356104d681610463565b9392505050565b600080604083850312156104f057600080fd5b82356104fb81610463565b946020939093013593505050565b60006020828403121561051b57600080fd5b5035919050565b634e487b7160e01b600052603260045260246000fd5b600060001982141561055a57634e487b7160e01b600052601160045260246000fd5b506001019056fea26469706673582212206aa6134149a68fb4c52ad2a5736d765a2c5d733cdeaa548a7a441fa134f86b7c64736f6c63430008090033";

type TestFaucetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestFaucetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestFaucet__factory extends ContractFactory {
  constructor(...args: TestFaucetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestFaucet> {
    return super.deploy(overrides || {}) as Promise<TestFaucet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestFaucet {
    return super.attach(address) as TestFaucet;
  }
  connect(signer: Signer): TestFaucet__factory {
    return super.connect(signer) as TestFaucet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestFaucetInterface {
    return new utils.Interface(_abi) as TestFaucetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestFaucet {
    return new Contract(address, _abi, signerOrProvider) as TestFaucet;
  }
}
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BasicLiquidityCounter,
  BasicLiquidityCounterInterface,
} from "../BasicLiquidityCounter";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
        name: "nominatedOwner",
        type: "address",
      },
    ],
    name: "OnlyNominatedOwner",
    type: "error",
  },
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
        name: "owner",
        type: "address",
      },
    ],
    name: "OnlyOwner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerNominated",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "addTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityToken",
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
        name: "_owner",
        type: "address",
      },
    ],
    name: "nominateNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nominatedOwner",
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
        name: "trader",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "removeTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "lpToken",
        type: "address",
      },
    ],
    name: "setLiquidityToken",
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
    name: "userLiquidity",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163390811782556040805192835260208301919091527fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c910160405180910390a16104d58061006e6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80636039fbdb116100665780636039fbdb1461010357806379ba5097146101165780638da5cb5b1461011e578063ba4c28c314610131578063fee778f91461015f57600080fd5b80631627540c146100985780631e10eeaf146100ad57806343cd8f7e146100c057806353a47bb7146100f0575b600080fd5b6100ab6100a63660046103ca565b610172565b005b6100ab6100bb3660046103ec565b6101ce565b6002546100d3906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6001546100d3906001600160a01b031681565b6100ab6101113660046103ec565b610232565b6100ab610284565b6000546100d3906001600160a01b031681565b61015161013f3660046103ca565b60036020526000908152604090205481565b6040519081526020016100e7565b6100ab61016d3660046103ca565b61033c565b61017a610366565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527f906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce229060200160405180910390a150565b6002546001600160a01b031633146102015760405162461bcd60e51b81526004016101f890610416565b60405180910390fd5b6001600160a01b03821660009081526003602052604081208054839290610229908490610470565b90915550505050565b6002546001600160a01b0316331461025c5760405162461bcd60e51b81526004016101f890610416565b6001600160a01b03821660009081526003602052604081208054839290610229908490610487565b6001546001600160a01b031633146102ca576001546040516312d9f3db60e31b81523060048201523360248201526001600160a01b0390911660448201526064016101f8565b600054600154604080516001600160a01b0393841681529290911660208301527fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c910160405180910390a160018054600080546001600160a01b03199081166001600160a01b03841617909155169055565b610344610366565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146103ac5760005460405163035785f360e31b81523060048201523360248201526001600160a01b0390911660448201526064016101f8565b565b80356001600160a01b03811681146103c557600080fd5b919050565b6000602082840312156103dc57600080fd5b6103e5826103ae565b9392505050565b600080604083850312156103ff57600080fd5b610408836103ae565b946020939093013593505050565b60208082526024908201527f63616e206f6e6c792062652063616c6c6564206279204c69717569646974795460408201526337b5b2b760e11b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b6000828210156104825761048261045a565b500390565b6000821982111561049a5761049a61045a565b50019056fea264697066735822122031cf101682f8a646de777909330ee780bfca4c13411495443a306d266355588c64736f6c63430008090033";

type BasicLiquidityCounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BasicLiquidityCounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BasicLiquidityCounter__factory extends ContractFactory {
  constructor(...args: BasicLiquidityCounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BasicLiquidityCounter> {
    return super.deploy(overrides || {}) as Promise<BasicLiquidityCounter>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BasicLiquidityCounter {
    return super.attach(address) as BasicLiquidityCounter;
  }
  connect(signer: Signer): BasicLiquidityCounter__factory {
    return super.connect(signer) as BasicLiquidityCounter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BasicLiquidityCounterInterface {
    return new utils.Interface(_abi) as BasicLiquidityCounterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BasicLiquidityCounter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BasicLiquidityCounter;
  }
}
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LiquidityToken,
  LiquidityTokenInterface,
} from "../LiquidityToken";

const _abi = [
  {
    inputs: [
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
    ],
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
    ],
    name: "AlreadyInitialised",
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
        name: "liquidityPool",
        type: "address",
      },
    ],
    name: "OnlyLiquidityPool",
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
        indexed: false,
        internalType: "contract ILiquidityTracker",
        name: "liquidityTracker",
        type: "address",
      },
    ],
    name: "LiquidityTrackerSet",
    type: "event",
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
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
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
    inputs: [
      {
        internalType: "address",
        name: "_liquidityPool",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityPool",
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
    name: "liquidityTracker",
    outputs: [
      {
        internalType: "contract ILiquidityTracker",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
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
        internalType: "contract ILiquidityTracker",
        name: "_liquidityTracker",
        type: "address",
      },
    ],
    name: "setLiquidityTracker",
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
        name: "recipient",
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
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
  "0x60806040526006805460ff60a01b191690553480156200001e57600080fd5b50604051620013483803806200134883398101604081905262000041916200023e565b8151829082906200005a906003906020850190620000cb565b50805162000070906004906020840190620000cb565b5050600580546001600160a01b03191633908117909155604080516000815260208101929092527fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c92500160405180910390a15050620002e5565b828054620000d990620002a8565b90600052602060002090601f016020900481019282620000fd576000855562000148565b82601f106200011857805160ff191683800117855562000148565b8280016001018555821562000148579182015b82811115620001485782518255916020019190600101906200012b565b50620001569291506200015a565b5090565b5b808211156200015657600081556001016200015b565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200019957600080fd5b81516001600160401b0380821115620001b657620001b662000171565b604051601f8301601f19908116603f01168101908282118183101715620001e157620001e162000171565b81604052838152602092508683858801011115620001fe57600080fd5b600091505b8382101562000222578582018301518183018401529082019062000203565b83821115620002345760008385830101525b9695505050505050565b600080604083850312156200025257600080fd5b82516001600160401b03808211156200026a57600080fd5b620002788683870162000187565b935060208501519150808211156200028f57600080fd5b506200029e8582860162000187565b9150509250929050565b600181811c90821680620002bd57607f821691505b60208210811415620002df57634e487b7160e01b600052602260045260246000fd5b50919050565b61105380620002f56000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806353a47bb7116100b857806395d89b411161007c57806395d89b41146102945780639dc29fac1461029c578063a457c2d7146102af578063a9059cbb146102c2578063b62c4a69146102d5578063dd62ed3e146102e857600080fd5b806353a47bb714610212578063665a11ca1461023d57806370a082311461025057806379ba5097146102795780638da5cb5b1461028157600080fd5b806319ab453c116100ff57806319ab453c146101b757806323b872dd146101ca578063313ce567146101dd57806339509351146101ec57806340c10f19146101ff57600080fd5b80630452681e1461013c57806306fdde0314610151578063095ea7b31461016f5780631627540c1461019257806318160ddd146101a5575b600080fd5b61014f61014a366004610e5b565b610321565b005b61015961037e565b6040516101669190610e7f565b60405180910390f35b61018261017d366004610ed4565b610410565b6040519015158152602001610166565b61014f6101a0366004610e5b565b610426565b6002545b604051908152602001610166565b61014f6101c5366004610e5b565b61047c565b6101826101d8366004610f00565b6104ec565b60405160128152602001610166565b6101826101fa366004610ed4565b610596565b61014f61020d366004610ed4565b6105d2565b600654610225906001600160a01b031681565b6040516001600160a01b039091168152602001610166565b600754610225906001600160a01b031681565b6101a961025e366004610e5b565b6001600160a01b031660009081526020819052604090205490565b61014f61061c565b600554610225906001600160a01b031681565b6101596106ca565b61014f6102aa366004610ed4565b6106d9565b6101826102bd366004610ed4565b61071f565b6101826102d0366004610ed4565b6107b8565b600854610225906001600160a01b031681565b6101a96102f6366004610f41565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6103296107c5565b600880546001600160a01b0319166001600160a01b0383169081179091556040519081527fd2320cff3a80dac6b5da4ed0a0609d55549ad83a811f7115e9a51b288d6f4133906020015b60405180910390a150565b60606003805461038d90610f7a565b80601f01602080910402602001604051908101604052809291908181526020018280546103b990610f7a565b80156104065780601f106103db57610100808354040283529160200191610406565b820191906000526020600020905b8154815290600101906020018083116103e957829003601f168201915b5050505050905090565b600061041d338484610803565b50600192915050565b61042e6107c5565b600680546001600160a01b0319166001600160a01b0383169081179091556040519081527f906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce2290602001610373565b6104846107c5565b600654600160a01b900460ff16156104b65760405163161b906f60e01b81523060048201526024015b60405180910390fd5b6006805460ff60a01b1916600160a01b179055600780546001600160a01b039092166001600160a01b0319909216919091179055565b60006104f9848484610927565b6001600160a01b03841660009081526001602090815260408083203384529091529020548281101561057e5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084016104ad565b61058b8533858403610803565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161041d9185906105cd908690610fcb565b610803565b6007546001600160a01b0316331461060e57600754604051630a5505d960e21b81526104ad91309133916001600160a01b031690600401610fe3565b6106188282610b01565b5050565b6006546001600160a01b03163314610658576006546040516312d9f3db60e31b81526104ad91309133916001600160a01b031690600401610fe3565b600554600654604080516001600160a01b0393841681529290911660208301527fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c910160405180910390a160068054600580546001600160a01b03199081166001600160a01b03841617909155169055565b60606004805461038d90610f7a565b6007546001600160a01b0316331461071557600754604051630a5505d960e21b81526104ad91309133916001600160a01b031690600401610fe3565b6106188282610be8565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156107a15760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104ad565b6107ae3385858403610803565b5060019392505050565b600061041d338484610927565b6005546001600160a01b031633146108015760055460405163035785f360e31b81526104ad91309133916001600160a01b031690600401610fe3565b565b6001600160a01b0383166108655760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104ad565b6001600160a01b0382166108c65760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104ad565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03831661098b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104ad565b6001600160a01b0382166109ed5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104ad565b6001600160a01b03831660009081526020819052604090205481811015610a655760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104ad565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610a9c908490610fcb565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ae891815260200190565b60405180910390a3610afb848484610d42565b50505050565b6001600160a01b038216610b575760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104ad565b8060026000828254610b699190610fcb565b90915550506001600160a01b03821660009081526020819052604081208054839290610b96908490610fcb565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a361061860008383610d42565b6001600160a01b038216610c485760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104ad565b6001600160a01b03821660009081526020819052604090205481811015610cbc5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104ad565b6001600160a01b0383166000908152602081905260408120838303905560028054849290610ceb908490611006565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3610d3d83600084610d42565b505050565b6008546001600160a01b031615610d3d576001600160a01b03831615610dc957600854604051631e10eeaf60e01b81526001600160a01b0385811660048301526024820184905290911690631e10eeaf90604401600060405180830381600087803b158015610db057600080fd5b505af1158015610dc4573d6000803e3d6000fd5b505050505b6001600160a01b03821615610d3d57600854604051636039fbdb60e01b81526001600160a01b0384811660048301526024820184905290911690636039fbdb90604401600060405180830381600087803b158015610e2657600080fd5b505af1158015610e3a573d6000803e3d6000fd5b50505050505050565b6001600160a01b0381168114610e5857600080fd5b50565b600060208284031215610e6d57600080fd5b8135610e7881610e43565b9392505050565b600060208083528351808285015260005b81811015610eac57858101830151858201604001528201610e90565b81811115610ebe576000604083870101525b50601f01601f1916929092016040019392505050565b60008060408385031215610ee757600080fd5b8235610ef281610e43565b946020939093013593505050565b600080600060608486031215610f1557600080fd5b8335610f2081610e43565b92506020840135610f3081610e43565b929592945050506040919091013590565b60008060408385031215610f5457600080fd5b8235610f5f81610e43565b91506020830135610f6f81610e43565b809150509250929050565b600181811c90821680610f8e57607f821691505b60208210811415610faf57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610fde57610fde610fb5565b500190565b6001600160a01b0393841681529183166020830152909116604082015260600190565b60008282101561101857611018610fb5565b50039056fea26469706673582212209375ac9eeb6143b25601a8202f158678c25e630311f2053ddd700cbdd5e1d5f764736f6c63430008090033";

type LiquidityTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LiquidityTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LiquidityToken__factory extends ContractFactory {
  constructor(...args: LiquidityTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LiquidityToken> {
    return super.deploy(
      name_,
      symbol_,
      overrides || {}
    ) as Promise<LiquidityToken>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): LiquidityToken {
    return super.attach(address) as LiquidityToken;
  }
  connect(signer: Signer): LiquidityToken__factory {
    return super.connect(signer) as LiquidityToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LiquidityTokenInterface {
    return new utils.Interface(_abi) as LiquidityTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LiquidityToken {
    return new Contract(address, _abi, signerOrProvider) as LiquidityToken;
  }
}

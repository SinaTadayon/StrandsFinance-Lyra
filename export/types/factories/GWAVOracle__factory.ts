/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GWAVOracle, GWAVOracleInterface } from "../GWAVOracle";

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
        internalType: "uint256",
        name: "strikeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "secondsAgo",
        type: "uint256",
      },
    ],
    name: "deltaGWAV",
    outputs: [
      {
        internalType: "int256",
        name: "callDelta",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract OptionMarket",
        name: "_optionMarket",
        type: "address",
      },
      {
        internalType: "contract OptionGreekCache",
        name: "_greekCache",
        type: "address",
      },
      {
        internalType: "contract SynthetixAdapter",
        name: "_synthetixAdapter",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "boardId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "secondsAgo",
        type: "uint256",
      },
    ],
    name: "ivGWAV",
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
    inputs: [
      {
        internalType: "uint256",
        name: "strikeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "secondsAgo",
        type: "uint256",
      },
    ],
    name: "optionPriceGWAV",
    outputs: [
      {
        internalType: "uint256",
        name: "callPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "putPrice",
        type: "uint256",
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
        internalType: "contract OptionMarket",
        name: "_optionMarket",
        type: "address",
      },
      {
        internalType: "contract OptionGreekCache",
        name: "_greekCache",
        type: "address",
      },
      {
        internalType: "contract SynthetixAdapter",
        name: "_synthetixAdapter",
        type: "address",
      },
    ],
    name: "setLyraAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "strikeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "secondsAgo",
        type: "uint256",
      },
    ],
    name: "skewGWAV",
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
        internalType: "uint256",
        name: "strikeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "secondsAgo",
        type: "uint256",
      },
    ],
    name: "vegaGWAV",
    outputs: [
      {
        internalType: "uint256",
        name: "vega",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "strikeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "secondsAgo",
        type: "uint256",
      },
    ],
    name: "volGWAV",
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
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163390811782556040805192835260208301919091527fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c910160405180910390a1610ef58061006e6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806360f318481161007157806360f318481461015857806379ba50971461016b5780638da5cb5b14610173578063c2e23e1614610186578063ca4ca66714610199578063fb5f34e5146101c157600080fd5b80631627540c146100b9578063184b9559146100ce578063271ec176146100e157806339a427f1146101075780633f8406be1461011a57806353a47bb71461012d575b600080fd5b6100cc6100c736600461096c565b6101d4565b005b6100cc6100dc366004610989565b610230565b6100f46100ef3660046109d4565b610248565b6040519081526020015b60405180910390f35b6100f46101153660046109d4565b6102f4565b6100f46101283660046109d4565b6103a0565b600154610140906001600160a01b031681565b6040516001600160a01b0390911681526020016100fe565b6100f46101663660046109d4565b61044c565b6100cc6104d8565b600054610140906001600160a01b031681565b6100f46101943660046109d4565b610595565b6101ac6101a73660046109d4565b6105ce565b604080519283526020830191909152016100fe565b6100cc6101cf366004610989565b61067f565b6101dc6106c6565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527f906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce229060200160405180910390a150565b6102386106c6565b61024383838361067f565b505050565b6000806102548461070e565b905061026084846102f4565b6020820152604051630325cf7360e31b815273__$c0a17acec7091fec39628aa0eae1394872$__9063192e7b989061029c9084906004016109f6565b60206040518083038186803b1580156102b457600080fd5b505af41580156102c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ec9190610a30565b949350505050565b60025460405163a6063c0560e01b81526004810184905260009182916001600160a01b039091169063a6063c05906024016101206040518083038186803b15801561033e57600080fd5b505afa158015610352573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103769190610b7a565b90506102ec6103858585610595565b6103948361010001518661044c565b90610932565b92915050565b6000806103ac8461070e565b90506103b884846102f4565b6020820152604051634698f9d560e11b815273__$c0a17acec7091fec39628aa0eae1394872$__90638d31f3aa906103f49084906004016109f6565b604080518083038186803b15801561040b57600080fd5b505af415801561041f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104439190610b97565b50949350505050565b60035460405163f3fd9b3d60e01b815260048101849052602481018390526000916001600160a01b03169063f3fd9b3d906044015b60206040518083038186803b15801561049957600080fd5b505afa1580156104ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d19190610a30565b9392505050565b6001546001600160a01b03163314610523576001546040516312d9f3db60e31b81523060048201523360248201526001600160a01b0390911660448201526064015b60405180910390fd5b600054600154604080516001600160a01b0393841681529290911660208301527fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c910160405180910390a160018054600080546001600160a01b03199081166001600160a01b03841617909155169055565b600354604051630fbee24d60e31b815260048101849052602481018390526000916001600160a01b031690637df7126890604401610481565b60008060006105dc8561070e565b90506105e885856102f4565b602082015260405163b6e62e5960e01b815273__$c0a17acec7091fec39628aa0eae1394872$__9063b6e62e59906106249084906004016109f6565b604080518083038186803b15801561063b57600080fd5b505af415801561064f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106739190610b97565b90969095509350505050565b6106876106c6565b600280546001600160a01b039485166001600160a01b031991821617909155600380549385169382169390931790925560048054919093169116179055565b6000546001600160a01b0316331461070c5760005460405163035785f360e31b81523060048201523360248201526001600160a01b03909116604482015260640161051a565b565b6107406040518060a0016040528060008152602001600081526020016000815260200160008152602001600081525090565b600254604051630c4c4a0d60e41b81526004810184905260009182916001600160a01b039091169063c4c4a0d09060240160006040518083038186803b15801561078957600080fd5b505afa15801561079d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107c59190810190610bbb565b915091506040518060a001604052804283602001516107e49190610cf0565b81526020016108048460400151846040015161093290919063ffffffff16565b815260048054600254604051630fb75cc960e31b81526001600160a01b03918216938101939093526020909301921690637dbae6489060240160206040518083038186803b15801561085557600080fd5b505afa158015610869573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061088d9190610a30565b815260200183602001518152602001600360009054906101000a90046001600160a01b03166001600160a01b031663f369f2ac6040518163ffffffff1660e01b81526004016101406040518083038186803b1580156108eb57600080fd5b505afa1580156108ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109239190610d07565b61012001519052949350505050565b60006109406012600a610e72565b61094a8385610e7e565b6104d19190610e9d565b6001600160a01b038116811461096957600080fd5b50565b60006020828403121561097e57600080fd5b81356104d181610954565b60008060006060848603121561099e57600080fd5b83356109a981610954565b925060208401356109b981610954565b915060408401356109c981610954565b809150509250925092565b600080604083850312156109e757600080fd5b50508035926020909101359150565b600060a082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015292915050565b600060208284031215610a4257600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b604051610120810167ffffffffffffffff81118282101715610a8357610a83610a49565b60405290565b60405160a0810167ffffffffffffffff81118282101715610a8357610a83610a49565b604051610140810167ffffffffffffffff81118282101715610a8357610a83610a49565b604051601f8201601f1916810167ffffffffffffffff81118282101715610af957610af9610a49565b604052919050565b60006101208284031215610b1457600080fd5b610b1c610a5f565b9050815181526020820151602082015260408201516040820152606082015160608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525092915050565b60006101208284031215610b8d57600080fd5b6104d18383610b01565b60008060408385031215610baa57600080fd5b505080516020909101519092909150565b6000806101408385031215610bcf57600080fd5b610bd98484610b01565b915061012083015167ffffffffffffffff80821115610bf757600080fd5b9084019060a08287031215610c0b57600080fd5b610c13610a89565b82518152602080840151818301526040840151604083015260608401518015158114610c3e57600080fd5b6060830152608084015183811115610c5557600080fd5b80850194505087601f850112610c6a57600080fd5b835183811115610c7c57610c7c610a49565b8060051b9350610c8d828501610ad0565b818152938501820193828101908a861115610ca757600080fd5b958301955b85871015610cc557865182529583019590830190610cac565b60808501525095989197509095505050505050565b634e487b7160e01b600052601160045260246000fd5b600082821015610d0257610d02610cda565b500390565b60006101408284031215610d1a57600080fd5b610d22610aac565b825181526020830151602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b600181815b80851115610dc9578160001904821115610daf57610daf610cda565b80851615610dbc57918102915b93841c9390800290610d93565b509250929050565b600082610de05750600161039a565b81610ded5750600061039a565b8160018114610e035760028114610e0d57610e29565b600191505061039a565b60ff841115610e1e57610e1e610cda565b50506001821b61039a565b5060208310610133831016604e8410600b8410161715610e4c575081810a61039a565b610e568383610d8e565b8060001904821115610e6a57610e6a610cda565b029392505050565b60006104d18383610dd1565b6000816000190483118215151615610e9857610e98610cda565b500290565b600082610eba57634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220159d92dc9f58fdd7bf9c2b84f97e78cc699ce1492fd03729c1fb5ee13e42bc0e64736f6c63430008090033";

type GWAVOracleConstructorParams =
  | [linkLibraryAddresses: GWAVOracleLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GWAVOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class GWAVOracle__factory extends ContractFactory {
  constructor(...args: GWAVOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        GWAVOracle__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: GWAVOracleLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$c0a17acec7091fec39628aa0eae1394872\\$__", "g"),
      linkLibraryAddresses[
        "@lyrafinance/protocol/contracts/libraries/BlackScholes.sol:BlackScholes"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GWAVOracle> {
    return super.deploy(overrides || {}) as Promise<GWAVOracle>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GWAVOracle {
    return super.attach(address) as GWAVOracle;
  }
  connect(signer: Signer): GWAVOracle__factory {
    return super.connect(signer) as GWAVOracle__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GWAVOracleInterface {
    return new utils.Interface(_abi) as GWAVOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GWAVOracle {
    return new Contract(address, _abi, signerOrProvider) as GWAVOracle;
  }
}

export interface GWAVOracleLibraryAddresses {
  ["@lyrafinance/protocol/contracts/libraries/BlackScholes.sol:BlackScholes"]: string;
}
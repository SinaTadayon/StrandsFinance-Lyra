/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestSynthetixReturnZero,
  TestSynthetixReturnZeroInterface,
} from "../TestSynthetixReturnZero";

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
        internalType: "address",
        name: "exchangeForAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "sourceCurrencyKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sourceAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "destinationCurrencyKey",
        type: "bytes32",
      },
    ],
    name: "Exchange",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ticker",
        type: "bytes32",
      },
      {
        internalType: "contract ITestERC20",
        name: "baseAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
    ],
    name: "addBaseAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "addressResolver",
    outputs: [
      {
        internalType: "contract IAddressResolver",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "baseAssets",
    outputs: [
      {
        internalType: "contract ITestERC20",
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
        internalType: "bytes32",
        name: "sourceCurrencyKey",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "sourceAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "destinationCurrencyKey",
        type: "bytes32",
      },
    ],
    name: "exchange",
    outputs: [
      {
        internalType: "uint256",
        name: "amountReceived",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "exchangeForAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "sourceCurrencyKey",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "sourceAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "destinationCurrencyKey",
        type: "bytes32",
      },
    ],
    name: "exchangeOnBehalf",
    outputs: [
      {
        internalType: "uint256",
        name: "amountReceived",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "exchangeForAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "sourceCurrencyKey",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "sourceAmount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "destinationCurrencyKey",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "exchangeOnBehalfWithTracking",
    outputs: [
      {
        internalType: "uint256",
        name: "amountReceived",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract SynthetixAdapter",
        name: "_synthetixAdapter",
        type: "address",
      },
      {
        internalType: "contract ITestERC20",
        name: "_quoteAsset",
        type: "address",
      },
      {
        internalType: "contract IAddressResolver",
        name: "_addressResolver",
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
    name: "initialized",
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
        name: "",
        type: "bytes32",
      },
    ],
    name: "markets",
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
    name: "returnZero",
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
        internalType: "bool",
        name: "_returnZero",
        type: "bool",
      },
    ],
    name: "setReturnZero",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526005805461ffff1916905534801561001b57600080fd5b50610f408061002b6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80635b87280b116100715780635b87280b1461014a5780637564912b1461017357806391e56b681461019c5780639b3b051a146101bd578063c836fa0a146101d0578063ee52a2f3146101e357600080fd5b806305a2ee2a146100ae578063158ef93e146100de578063184b9559146100fb578063216f194a1461011057806345f38c7f14610138575b600080fd5b6001546100c1906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6005546100eb9060ff1681565b60405190151581526020016100d5565b61010e610109366004610b45565b6101f6565b005b61010e61011e366004610b9e565b600580549115156101000261ff0019909216919091179055565b6005546100eb90610100900460ff1681565b6100c1610158366004610bbb565b6003602052600090815260409020546001600160a01b031681565b6100c1610181366004610bbb565b6004602052600090815260409020546001600160a01b031681565b6101af6101aa366004610bd4565b610290565b6040519081526020016100d5565b61010e6101cb366004610c32565b61030c565b6101af6101de366004610c59565b6103fa565b6101af6101f1366004610c94565b6109fc565b60055460ff16156102445760405162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481a5b9a5d1a585b1a5e9959606a1b60448201526064015b60405180910390fd5b600080546001600160a01b039485166001600160a01b0319918216179091556002805493851693821693909317909255600180549190931691161781556005805460ff19169091179055565b600554600090610100900460ff16156102ab57506000610302565b6040805133815260208101889052908101869052606081018590527f21e60f3189350d5335ac262321d36256f31672072e541960c0993c0151c4a76b9060800160405180910390a16102ff878787876103fa565b90505b9695505050505050565b6001600160a01b0382166103625760405162461bcd60e51b815260206004820152601e60248201527f45524332302063616e6e6f742068617665207a65726f20616464726573730000604482015260640161023b565b6001600160a01b0381166103b85760405162461bcd60e51b815260206004820152601f60248201527f4d61726b65742063616e6e6f742068617665207a65726f206164647265737300604482015260640161023b565b600092835260036020908152604080852080546001600160a01b03199081166001600160a01b0396871617909155600490925290932080549093169116179055565b6001546040516321f8a72160e01b81527044656c6567617465417070726f76616c7360781b60048201526000918291829182916001600160a01b03909116906321f8a7219060240160206040518083038186803b15801561045a57600080fd5b505afa15801561046e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104929190610cc0565b60405163d3fb5e3760e01b81523360048201526001600160a01b038a81166024830152919091169063d3fb5e379060440160206040518083038186803b1580156104db57600080fd5b505afa1580156104ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105139190610cdd565b61055f5760405162461bcd60e51b815260206004820152601d60248201527f4e6f7420617070726f76656420746f20616374206f6e20626568616c66000000604482015260640161023b565b86631cd554d160e21b14156105e457600254604051632770a7eb60e21b81526001600160a01b038a8116600483015260248201899052670de0b6b3a7640000955090911690639dc29fac90604401600060405180830381600087803b1580156105c757600080fd5b505af11580156105db573d6000803e3d6000fd5b505050506107a3565b6000878152600460205260409020546001600160a01b0316806106495760405162461bcd60e51b815260206004820152601b60248201527f696e76616c696420736f757263652063757272656e6379206b65790000000000604482015260640161023b565b600080546040516333ef9fd160e21b81526001600160a01b0384811660048301529091169063cfbe7f449060240160a06040518083038186803b15801561068f57600080fd5b505afa1580156106a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c79190610cfa565b60008a8152600360205260409020549091506001600160a01b03168061072f5760405162461bcd60e51b815260206004820152601e60248201527f45524332302063616e6e6f742068617665207a65726f20616464726573730000604482015260640161023b565b604051632770a7eb60e21b81526001600160a01b038c81166004830152602482018b9052821690639dc29fac90604401600060405180830381600087803b15801561077957600080fd5b505af115801561078d573d6000803e3d6000fd5b5050505081600001519550816080015194505050505b84631cd554d160e21b141561084a5760006107be8785610a2c565b90506107dc6107d584670de0b6b3a7640000610d8e565b8290610a2c565b6002546040516340c10f1960e01b81526001600160a01b038c81166004830152602482018490529297509116906340c10f1990604401600060405180830381600087803b15801561082c57600080fd5b505af1158015610840573d6000803e3d6000fd5b50505050506109f1565b6000858152600460205260409020546001600160a01b0316806108af5760405162461bcd60e51b815260206004820181905260248201527f696e76616c69642064657374696e6174696f6e2063757272656e6379206b6579604482015260640161023b565b600080546040516333ef9fd160e21b81526001600160a01b0384811660048301529091169063cfbe7f449060240160a06040518083038186803b1580156108f557600080fd5b505afa158015610909573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092d9190610cfa565b600088815260036020526040902054815194509091506001600160a01b03168461095957816060015194505b600061096f856109698c8a610a2c565b90610a4d565b90506109866107d587670de0b6b3a7640000610d8e565b6040516340c10f1960e01b81526001600160a01b038e8116600483015260248201839052919950908316906340c10f1990604401600060405180830381600087803b1580156109d457600080fd5b505af11580156109e8573d6000803e3d6000fd5b50505050505050505b505050949350505050565b600554600090610100900460ff1615610a1757506000610a25565b610a22848484610a65565b90505b9392505050565b6000610a448383610a3f6012600a610e89565b610abc565b90505b92915050565b6000610a448383610a606012600a610e89565b610b14565b6040805133815260208101859052908101839052606081018290526000907f21e60f3189350d5335ac262321d36256f31672072e541960c0993c0151c4a76b9060800160405180910390a1610a22338585856103fa565b600080610aca600a84610eab565b610ad48587610ebf565b610ade9190610eab565b90506005610aed600a83610ede565b10610b0057610afd600a82610ef2565b90505b610b0b600a82610eab565b95945050505050565b60008083610b2384600a610ebf565b610ad49087610ebf565b6001600160a01b0381168114610b4257600080fd5b50565b600080600060608486031215610b5a57600080fd5b8335610b6581610b2d565b92506020840135610b7581610b2d565b91506040840135610b8581610b2d565b809150509250925092565b8015158114610b4257600080fd5b600060208284031215610bb057600080fd5b8135610a2581610b90565b600060208284031215610bcd57600080fd5b5035919050565b60008060008060008060c08789031215610bed57600080fd5b8635610bf881610b2d565b95506020870135945060408701359350606087013592506080870135610c1d81610b2d565b8092505060a087013590509295509295509295565b600080600060608486031215610c4757600080fd5b833592506020840135610b7581610b2d565b60008060008060808587031215610c6f57600080fd5b8435610c7a81610b2d565b966020860135965060408601359560600135945092505050565b600080600060608486031215610ca957600080fd5b505081359360208301359350604090920135919050565b600060208284031215610cd257600080fd5b8151610a2581610b2d565b600060208284031215610cef57600080fd5b8151610a2581610b90565b600060a08284031215610d0c57600080fd5b60405160a0810181811067ffffffffffffffff82111715610d3d57634e487b7160e01b600052604160045260246000fd5b806040525082518152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082821015610da057610da0610d78565b500390565b600181815b80851115610de0578160001904821115610dc657610dc6610d78565b80851615610dd357918102915b93841c9390800290610daa565b509250929050565b600082610df757506001610a47565b81610e0457506000610a47565b8160018114610e1a5760028114610e2457610e40565b6001915050610a47565b60ff841115610e3557610e35610d78565b50506001821b610a47565b5060208310610133831016604e8410600b8410161715610e63575081810a610a47565b610e6d8383610da5565b8060001904821115610e8157610e81610d78565b029392505050565b6000610a448383610de8565b634e487b7160e01b600052601260045260246000fd5b600082610eba57610eba610e95565b500490565b6000816000190483118215151615610ed957610ed9610d78565b500290565b600082610eed57610eed610e95565b500690565b60008219821115610f0557610f05610d78565b50019056fea2646970667358221220dd1c2f0c5b5efc031f9d73cf07f138e5e1c5de21e56e6ee2c5cd129b0bd0c5c864736f6c63430008090033";

type TestSynthetixReturnZeroConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestSynthetixReturnZeroConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestSynthetixReturnZero__factory extends ContractFactory {
  constructor(...args: TestSynthetixReturnZeroConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestSynthetixReturnZero> {
    return super.deploy(overrides || {}) as Promise<TestSynthetixReturnZero>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestSynthetixReturnZero {
    return super.attach(address) as TestSynthetixReturnZero;
  }
  connect(signer: Signer): TestSynthetixReturnZero__factory {
    return super.connect(signer) as TestSynthetixReturnZero__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestSynthetixReturnZeroInterface {
    return new utils.Interface(_abi) as TestSynthetixReturnZeroInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestSynthetixReturnZero {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestSynthetixReturnZero;
  }
}
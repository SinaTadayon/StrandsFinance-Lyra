/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestSynthetix, TestSynthetixInterface } from "../TestSynthetix";

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
];

const _bytecode =
  "0x60806040526005805460ff1916905534801561001a57600080fd5b50610fe98061002a6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80637564912b116100665780637564912b1461012357806391e56b681461014c5780639b3b051a1461016d578063c836fa0a14610180578063ee52a2f31461019357600080fd5b806305a2ee2a14610098578063158ef93e146100c8578063184b9559146100e55780635b87280b146100fa575b600080fd5b6001546100ab906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6005546100d59060ff1681565b60405190151581526020016100bf565b6100f86100f3366004610c0d565b6101a6565b005b6100ab610108366004610c58565b6003602052600090815260409020546001600160a01b031681565b6100ab610131366004610c58565b6004602052600090815260409020546001600160a01b031681565b61015f61015a366004610c71565b610240565b6040519081526020016100bf565b6100f861017b366004610ccf565b6103fc565b61015f61018e366004610cf6565b6104ea565b61015f6101a1366004610d31565b610aec565b60055460ff16156101f45760405162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481a5b9a5d1a585b1a5e9959606a1b60448201526064015b60405180910390fd5b600080546001600160a01b039485166001600160a01b0319918216179091556002805493851693821693909317909255600180549190931691161781556005805460ff19169091179055565b6001546040516321f8a72160e01b81527044656c6567617465417070726f76616c7360781b60048201526000916001600160a01b0316906321f8a7219060240160206040518083038186803b15801561029857600080fd5b505afa1580156102ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d09190610d5d565b60405163d3fb5e3760e01b81523360048201526001600160a01b038981166024830152919091169063d3fb5e379060440160206040518083038186803b15801561031957600080fd5b505afa15801561032d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103519190610d81565b61039d5760405162461bcd60e51b815260206004820152601d60248201527f4e6f7420617070726f76656420746f20616374206f6e20626568616c6600000060448201526064016101eb565b6040805133815260208101889052908101869052606081018590527f21e60f3189350d5335ac262321d36256f31672072e541960c0993c0151c4a76b9060800160405180910390a16103f1878787876104ea565b979650505050505050565b6001600160a01b0382166104525760405162461bcd60e51b815260206004820152601e60248201527f45524332302063616e6e6f742068617665207a65726f2061646472657373000060448201526064016101eb565b6001600160a01b0381166104a85760405162461bcd60e51b815260206004820152601f60248201527f4d61726b65742063616e6e6f742068617665207a65726f20616464726573730060448201526064016101eb565b600092835260036020908152604080852080546001600160a01b03199081166001600160a01b0396871617909155600490925290932080549093169116179055565b6001546040516321f8a72160e01b81527044656c6567617465417070726f76616c7360781b60048201526000918291829182916001600160a01b03909116906321f8a7219060240160206040518083038186803b15801561054a57600080fd5b505afa15801561055e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105829190610d5d565b60405163d3fb5e3760e01b81523360048201526001600160a01b038a81166024830152919091169063d3fb5e379060440160206040518083038186803b1580156105cb57600080fd5b505afa1580156105df573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106039190610d81565b61064f5760405162461bcd60e51b815260206004820152601d60248201527f4e6f7420617070726f76656420746f20616374206f6e20626568616c6600000060448201526064016101eb565b86631cd554d160e21b14156106d457600254604051632770a7eb60e21b81526001600160a01b038a8116600483015260248201899052670de0b6b3a7640000955090911690639dc29fac90604401600060405180830381600087803b1580156106b757600080fd5b505af11580156106cb573d6000803e3d6000fd5b50505050610893565b6000878152600460205260409020546001600160a01b0316806107395760405162461bcd60e51b815260206004820152601b60248201527f696e76616c696420736f757263652063757272656e6379206b6579000000000060448201526064016101eb565b600080546040516333ef9fd160e21b81526001600160a01b0384811660048301529091169063cfbe7f449060240160a06040518083038186803b15801561077f57600080fd5b505afa158015610793573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b79190610da3565b60008a8152600360205260409020549091506001600160a01b03168061081f5760405162461bcd60e51b815260206004820152601e60248201527f45524332302063616e6e6f742068617665207a65726f2061646472657373000060448201526064016101eb565b604051632770a7eb60e21b81526001600160a01b038c81166004830152602482018b9052821690639dc29fac90604401600060405180830381600087803b15801561086957600080fd5b505af115801561087d573d6000803e3d6000fd5b5050505081600001519550816080015194505050505b84631cd554d160e21b141561093a5760006108ae8785610b4b565b90506108cc6108c584670de0b6b3a7640000610e37565b8290610b4b565b6002546040516340c10f1960e01b81526001600160a01b038c81166004830152602482018490529297509116906340c10f1990604401600060405180830381600087803b15801561091c57600080fd5b505af1158015610930573d6000803e3d6000fd5b5050505050610ae1565b6000858152600460205260409020546001600160a01b03168061099f5760405162461bcd60e51b815260206004820181905260248201527f696e76616c69642064657374696e6174696f6e2063757272656e6379206b657960448201526064016101eb565b600080546040516333ef9fd160e21b81526001600160a01b0384811660048301529091169063cfbe7f449060240160a06040518083038186803b1580156109e557600080fd5b505afa1580156109f9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1d9190610da3565b600088815260036020526040902054815194509091506001600160a01b031684610a4957816060015194505b6000610a5f85610a598c8a610b4b565b90610b6c565b9050610a766108c587670de0b6b3a7640000610e37565b6040516340c10f1960e01b81526001600160a01b038e8116600483015260248201839052919950908316906340c10f1990604401600060405180830381600087803b158015610ac457600080fd5b505af1158015610ad8573d6000803e3d6000fd5b50505050505050505b505050949350505050565b6040805133815260208101859052908101839052606081018290526000907f21e60f3189350d5335ac262321d36256f31672072e541960c0993c0151c4a76b9060800160405180910390a1610b43338585856104ea565b949350505050565b6000610b638383610b5e6012600a610f32565b610b84565b90505b92915050565b6000610b638383610b7f6012600a610f32565b610bdc565b600080610b92600a84610f54565b610b9c8587610f68565b610ba69190610f54565b90506005610bb5600a83610f87565b10610bc857610bc5600a82610f9b565b90505b610bd3600a82610f54565b95945050505050565b60008083610beb84600a610f68565b610b9c9087610f68565b6001600160a01b0381168114610c0a57600080fd5b50565b600080600060608486031215610c2257600080fd5b8335610c2d81610bf5565b92506020840135610c3d81610bf5565b91506040840135610c4d81610bf5565b809150509250925092565b600060208284031215610c6a57600080fd5b5035919050565b60008060008060008060c08789031215610c8a57600080fd5b8635610c9581610bf5565b95506020870135945060408701359350606087013592506080870135610cba81610bf5565b8092505060a087013590509295509295509295565b600080600060608486031215610ce457600080fd5b833592506020840135610c3d81610bf5565b60008060008060808587031215610d0c57600080fd5b8435610d1781610bf5565b966020860135965060408601359560600135945092505050565b600080600060608486031215610d4657600080fd5b505081359360208301359350604090920135919050565b600060208284031215610d6f57600080fd5b8151610d7a81610bf5565b9392505050565b600060208284031215610d9357600080fd5b81518015158114610d7a57600080fd5b600060a08284031215610db557600080fd5b60405160a0810181811067ffffffffffffffff82111715610de657634e487b7160e01b600052604160045260246000fd5b806040525082518152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082821015610e4957610e49610e21565b500390565b600181815b80851115610e89578160001904821115610e6f57610e6f610e21565b80851615610e7c57918102915b93841c9390800290610e53565b509250929050565b600082610ea057506001610b66565b81610ead57506000610b66565b8160018114610ec35760028114610ecd57610ee9565b6001915050610b66565b60ff841115610ede57610ede610e21565b50506001821b610b66565b5060208310610133831016604e8410600b8410161715610f0c575081810a610b66565b610f168383610e4e565b8060001904821115610f2a57610f2a610e21565b029392505050565b6000610b638383610e91565b634e487b7160e01b600052601260045260246000fd5b600082610f6357610f63610f3e565b500490565b6000816000190483118215151615610f8257610f82610e21565b500290565b600082610f9657610f96610f3e565b500690565b60008219821115610fae57610fae610e21565b50019056fea264697066735822122083ac4a4918e4c5e223ef96f2097ad18dccc3b847b2a6a2ab013d3587af10ffe964736f6c63430008090033";

type TestSynthetixConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestSynthetixConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestSynthetix__factory extends ContractFactory {
  constructor(...args: TestSynthetixConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestSynthetix> {
    return super.deploy(overrides || {}) as Promise<TestSynthetix>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestSynthetix {
    return super.attach(address) as TestSynthetix;
  }
  connect(signer: Signer): TestSynthetix__factory {
    return super.connect(signer) as TestSynthetix__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestSynthetixInterface {
    return new utils.Interface(_abi) as TestSynthetixInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestSynthetix {
    return new Contract(address, _abi, signerOrProvider) as TestSynthetix;
  }
}
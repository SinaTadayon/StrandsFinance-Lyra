/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LyraRegistry, LyraRegistryInterface } from "../LyraRegistry";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "contractName",
        type: "bytes32",
      },
    ],
    name: "NonExistentGlobalContract",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "optionMarket",
        type: "address",
      },
    ],
    name: "NonExistentMarket",
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
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
    ],
    name: "RemovingInvalidMarket",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "name",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "GlobalAddressUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract OptionMarket",
        name: "market",
        type: "address",
      },
    ],
    name: "MarketRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract OptionMarket",
        name: "optionMarket",
        type: "address",
      },
      {
        components: [
          {
            internalType: "contract LiquidityPool",
            name: "liquidityPool",
            type: "address",
          },
          {
            internalType: "contract LiquidityToken",
            name: "liquidityToken",
            type: "address",
          },
          {
            internalType: "contract OptionGreekCache",
            name: "greekCache",
            type: "address",
          },
          {
            internalType: "contract OptionMarket",
            name: "optionMarket",
            type: "address",
          },
          {
            internalType: "contract OptionMarketPricer",
            name: "optionMarketPricer",
            type: "address",
          },
          {
            internalType: "contract OptionToken",
            name: "optionToken",
            type: "address",
          },
          {
            internalType: "contract PoolHedger",
            name: "poolHedger",
            type: "address",
          },
          {
            internalType: "contract ShortCollateral",
            name: "shortCollateral",
            type: "address",
          },
          {
            internalType: "contract GWAVOracle",
            name: "gwavOracle",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "quoteAsset",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "baseAsset",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct LyraRegistry.OptionMarketAddresses",
        name: "market",
        type: "tuple",
      },
    ],
    name: "MarketUpdated",
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
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract LiquidityPool",
            name: "liquidityPool",
            type: "address",
          },
          {
            internalType: "contract LiquidityToken",
            name: "liquidityToken",
            type: "address",
          },
          {
            internalType: "contract OptionGreekCache",
            name: "greekCache",
            type: "address",
          },
          {
            internalType: "contract OptionMarket",
            name: "optionMarket",
            type: "address",
          },
          {
            internalType: "contract OptionMarketPricer",
            name: "optionMarketPricer",
            type: "address",
          },
          {
            internalType: "contract OptionToken",
            name: "optionToken",
            type: "address",
          },
          {
            internalType: "contract PoolHedger",
            name: "poolHedger",
            type: "address",
          },
          {
            internalType: "contract ShortCollateral",
            name: "shortCollateral",
            type: "address",
          },
          {
            internalType: "contract GWAVOracle",
            name: "gwavOracle",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "quoteAsset",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "baseAsset",
            type: "address",
          },
        ],
        internalType: "struct LyraRegistry.OptionMarketAddresses",
        name: "newMarketAddresses",
        type: "tuple",
      },
    ],
    name: "addMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "contractName",
        type: "bytes32",
      },
    ],
    name: "getGlobalAddress",
    outputs: [
      {
        internalType: "address",
        name: "globalContract",
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
        name: "optionMarket",
        type: "address",
      },
    ],
    name: "getMarketAddresses",
    outputs: [
      {
        components: [
          {
            internalType: "contract LiquidityPool",
            name: "liquidityPool",
            type: "address",
          },
          {
            internalType: "contract LiquidityToken",
            name: "liquidityToken",
            type: "address",
          },
          {
            internalType: "contract OptionGreekCache",
            name: "greekCache",
            type: "address",
          },
          {
            internalType: "contract OptionMarket",
            name: "optionMarket",
            type: "address",
          },
          {
            internalType: "contract OptionMarketPricer",
            name: "optionMarketPricer",
            type: "address",
          },
          {
            internalType: "contract OptionToken",
            name: "optionToken",
            type: "address",
          },
          {
            internalType: "contract PoolHedger",
            name: "poolHedger",
            type: "address",
          },
          {
            internalType: "contract ShortCollateral",
            name: "shortCollateral",
            type: "address",
          },
          {
            internalType: "contract GWAVOracle",
            name: "gwavOracle",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "quoteAsset",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "baseAsset",
            type: "address",
          },
        ],
        internalType: "struct LyraRegistry.OptionMarketAddresses",
        name: "",
        type: "tuple",
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
    name: "globalAddresses",
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
        name: "",
        type: "address",
      },
    ],
    name: "marketAddresses",
    outputs: [
      {
        internalType: "contract LiquidityPool",
        name: "liquidityPool",
        type: "address",
      },
      {
        internalType: "contract LiquidityToken",
        name: "liquidityToken",
        type: "address",
      },
      {
        internalType: "contract OptionGreekCache",
        name: "greekCache",
        type: "address",
      },
      {
        internalType: "contract OptionMarket",
        name: "optionMarket",
        type: "address",
      },
      {
        internalType: "contract OptionMarketPricer",
        name: "optionMarketPricer",
        type: "address",
      },
      {
        internalType: "contract OptionToken",
        name: "optionToken",
        type: "address",
      },
      {
        internalType: "contract PoolHedger",
        name: "poolHedger",
        type: "address",
      },
      {
        internalType: "contract ShortCollateral",
        name: "shortCollateral",
        type: "address",
      },
      {
        internalType: "contract GWAVOracle",
        name: "gwavOracle",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "quoteAsset",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "baseAsset",
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
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "optionMarkets",
    outputs: [
      {
        internalType: "contract OptionMarket",
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
        internalType: "contract OptionMarket",
        name: "market",
        type: "address",
      },
    ],
    name: "removeMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "names",
        type: "bytes32[]",
      },
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    name: "updateGlobalAddresses",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600080546001600160a01b0319163390811782556040805192835260208301919091527fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c910160405180910390a1610fa18061006e6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80637f2e0600116100715780637f2e06001461013f5780638acce68f146101525780638da5cb5b1461017b578063c4158a511461018e578063c71b7e53146101ae578063db913236146102a057600080fd5b80631627540c146100b9578063199bc905146100ce5780631cb66845146100e157806330a12dc41461011157806353a47bb71461012457806379ba509714610137575b600080fd5b6100cc6100c7366004610b0b565b6102b3565b005b6100cc6100dc366004610bab565b61030f565b6100f46100ef366004610c85565b6104e5565b6040516001600160a01b0390911681526020015b60405180910390f35b6100cc61011f366004610d36565b61050f565b6001546100f4906001600160a01b031681565b6100cc610664565b6100f461014d366004610c85565b61071c565b6100f4610160366004610c85565b6004602052600090815260409020546001600160a01b031681565b6000546100f4906001600160a01b031681565b6101a161019c366004610b0b565b610760565b6040516101089190610def565b6102356101bc366004610b0b565b600360208190526000918252604090912080546001820154600283015493830154600484015460058501546006860154600787015460088801546009890154600a909901546001600160a01b039889169a978916999789169896871697958716969485169593851694928316939183169291821691168b565b604080516001600160a01b039c8d1681529a8c1660208c0152988b16988a01989098529589166060890152938816608088015291871660a0870152861660c0860152851660e08501528416610100840152831661012083015290911661014082015261016001610108565b6100cc6102ae366004610b0b565b610896565b6102bb6108aa565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527f906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce229060200160405180910390a150565b6103176108aa565b60608101516001600160a01b039081166000908152600360208190526040909120015416610394576060810151600280546001810182556000919091527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace0180546001600160a01b0319166001600160a01b039092169190911790555b6060810180516001600160a01b03908116600090815260036020818152604092839020865181546001600160a01b031990811691871691909117825591870151600182018054841691871691909117905583870151600282018054841691871691909117905594519185018054821692851692831790556080860151600486018054831691861691909117905560a0860151600586018054831691861691909117905560c0860151600686018054831691861691909117905560e0860151600786018054831691861691909117905561010086015160088601805483169186169190911790556101208601516009860180548316918616919091179055610140860151600a90950180549091169490931693909317909155517fa090264792b8766dd953a6d1775028cdd591d04a748e045c19b98135970e9127906104da908490610def565b60405180910390a250565b600281815481106104f557600080fd5b6000918252602090912001546001600160a01b0316905081565b6105176108aa565b8151815181146105605760405162461bcd60e51b815260206004820152600f60248201526e0d8cadccee8d040dad2e6dac2e8c6d608b1b60448201526064015b60405180910390fd5b60005b8181101561065e5782818151811061057d5761057d610ef7565b60200260200101516004600086848151811061059b5761059b610ef7565b6020026020010151815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508381815181106105e7576105e7610ef7565b60200260200101517fdf028fe8b079d8195054d23416d2537debdd0f58695e83cd840d822e6a4c2e8084838151811061062257610622610ef7565b602002602001015160405161064691906001600160a01b0391909116815260200190565b60405180910390a261065781610f23565b9050610563565b50505050565b6001546001600160a01b031633146106aa576001546040516312d9f3db60e31b81523060048201523360248201526001600160a01b039091166044820152606401610557565b600054600154604080516001600160a01b0393841681529290911660208301527fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c910160405180910390a160018054600080546001600160a01b03199081166001600160a01b03841617909155169055565b6000818152600460205260409020546001600160a01b0316801561073f57919050565b6040516311cb6ba160e31b815260048101839052602401610557565b919050565b6040805161016081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101919091526001600160a01b0380831660009081526003602081815260409283902083516101608101855281548616815260018201548616928101929092526002810154851693820193909352908201548316606082018190526004830154841660808301526005830154841660a08301526006830154841660c08301526007830154841660e08301526008830154841661010083015260098301548416610120830152600a90920154909216610140830152156108725792915050565b604051631146468b60e11b81526001600160a01b0384166004820152602401610557565b61089e6108aa565b6108a7816108f2565b50565b6000546001600160a01b031633146108f05760005460405163035785f360e31b81523060048201523360248201526001600160a01b039091166044820152606401610557565b565b600254600080805b8381101561095657846001600160a01b03166002828154811061091f5761091f610ef7565b6000918252602090912001546001600160a01b031614156109465780925060019150610956565b61094f81610f23565b90506108fa565b508061098657604051633cebeb3960e21b81523060048201526001600160a01b0385166024820152604401610557565b6002610993600185610f3e565b815481106109a3576109a3610ef7565b600091825260209091200154600280546001600160a01b0390921691849081106109cf576109cf610ef7565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506002805480610a0e57610a0e610f55565b600082815260208120820160001990810180546001600160a01b03191690559091019091556040516001600160a01b038616917f59d7b1e52008dc342c9421dadfc773114b914a65682a4e4b53cf60a970df0d7791a25050506001600160a01b0316600090815260036020819052604090912080546001600160a01b031990811682556001820180548216905560028201805482169055918101805483169055600481018054831690556005810180548316905560068101805483169055600781018054831690556008810180548316905560098101805483169055600a0180549091169055565b6001600160a01b03811681146108a757600080fd5b600060208284031215610b1d57600080fd5b8135610b2881610af6565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604051610160810167ffffffffffffffff81118282101715610b6957610b69610b2f565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715610b9857610b98610b2f565b604052919050565b803561075b81610af6565b60006101608284031215610bbe57600080fd5b610bc6610b45565b610bcf83610ba0565b8152610bdd60208401610ba0565b6020820152610bee60408401610ba0565b6040820152610bff60608401610ba0565b6060820152610c1060808401610ba0565b6080820152610c2160a08401610ba0565b60a0820152610c3260c08401610ba0565b60c0820152610c4360e08401610ba0565b60e0820152610100610c56818501610ba0565b90820152610120610c68848201610ba0565b90820152610140610c7a848201610ba0565b908201529392505050565b600060208284031215610c9757600080fd5b5035919050565b600067ffffffffffffffff821115610cb857610cb8610b2f565b5060051b60200190565b600082601f830112610cd357600080fd5b81356020610ce8610ce383610c9e565b610b6f565b82815260059290921b84018101918181019086841115610d0757600080fd5b8286015b84811015610d2b578035610d1e81610af6565b8352918301918301610d0b565b509695505050505050565b60008060408385031215610d4957600080fd5b823567ffffffffffffffff80821115610d6157600080fd5b818501915085601f830112610d7557600080fd5b81356020610d85610ce383610c9e565b82815260059290921b84018101918181019089841115610da457600080fd5b948201945b83861015610dc257853582529482019490820190610da9565b96505086013592505080821115610dd857600080fd5b50610de585828601610cc2565b9150509250929050565b81516001600160a01b0316815261016081016020830151610e1b60208401826001600160a01b03169052565b506040830151610e3660408401826001600160a01b03169052565b506060830151610e5160608401826001600160a01b03169052565b506080830151610e6c60808401826001600160a01b03169052565b5060a0830151610e8760a08401826001600160a01b03169052565b5060c0830151610ea260c08401826001600160a01b03169052565b5060e0830151610ebd60e08401826001600160a01b03169052565b50610100838101516001600160a01b0390811691840191909152610120808501518216908401526101409384015116929091019190915290565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415610f3757610f37610f0d565b5060010190565b600082821015610f5057610f50610f0d565b500390565b634e487b7160e01b600052603160045260246000fdfea26469706673582212206f24bca27dedcbbf21aeacfb85a9e4e1a67778e09a732d355d1b4fa69c121a4164736f6c63430008090033";

type LyraRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LyraRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LyraRegistry__factory extends ContractFactory {
  constructor(...args: LyraRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LyraRegistry> {
    return super.deploy(overrides || {}) as Promise<LyraRegistry>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LyraRegistry {
    return super.attach(address) as LyraRegistry;
  }
  connect(signer: Signer): LyraRegistry__factory {
    return super.connect(signer) as LyraRegistry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LyraRegistryInterface {
    return new utils.Interface(_abi) as LyraRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LyraRegistry {
    return new Contract(address, _abi, signerOrProvider) as LyraRegistry;
  }
}

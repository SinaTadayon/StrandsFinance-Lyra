/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ShortPoolHedger,
  ShortPoolHedgerInterface,
} from "../ShortPoolHedger";

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
        internalType: "uint256",
        name: "lastInteraction",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interactionDelta",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentTime",
        type: "uint256",
      },
    ],
    name: "InteractionDelayNotExpired",
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
        internalType: "uint256",
        name: "newShortBuffer",
        type: "uint256",
      },
    ],
    name: "InvalidShortBuffer",
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
        internalType: "uint256",
        name: "quoteReceived",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minCollateral",
        type: "uint256",
      },
    ],
    name: "NotEnoughQuoteForMinCollateral",
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
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "address",
        name: "approvee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "QuoteApprovalFailure",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "QuoteTransferFailed",
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
        internalType: "uint256",
        name: "shortId",
        type: "uint256",
      },
    ],
    name: "ShortAccountAlreadyOpen",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newAmount",
        type: "uint256",
      },
    ],
    name: "LongSetTo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "shortId",
        type: "uint256",
      },
    ],
    name: "OpenedShortAccount",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int256",
        name: "oldNetDelta",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "currentNetDelta",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "expectedNetDelta",
        type: "int256",
      },
    ],
    name: "PositionUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amountQuote",
        type: "uint256",
      },
    ],
    name: "QuoteReturnedToLP",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newShortBuffer",
        type: "uint256",
      },
    ],
    name: "ShortBufferSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract ICollateralShort",
        name: "collateralShort",
        type: "address",
      },
    ],
    name: "ShortCollateralSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldShort",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newShort",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldCollateral",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newCollateral",
        type: "uint256",
      },
    ],
    name: "ShortSetTo",
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
    inputs: [],
    name: "collateralShort",
    outputs: [
      {
        internalType: "contract ICollateralShort",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
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
    name: "getPoolHedgerSettings",
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
        name: "_poolHedgerParams",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_shortBuffer",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getShortPosition",
    outputs: [
      {
        internalType: "uint256",
        name: "shortBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "collateral",
        type: "uint256",
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
    inputs: [
      {
        internalType: "contract SynthetixAdapter",
        name: "_synthetixAdapter",
        type: "address",
      },
      {
        internalType: "contract OptionMarket",
        name: "_optionMarket",
        type: "address",
      },
      {
        internalType: "contract OptionGreekCache",
        name: "_optionGreekCache",
        type: "address",
      },
      {
        internalType: "contract LiquidityPool",
        name: "_liquidityPool",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "_quoteAsset",
        type: "address",
      },
      {
        internalType: "contract ERC20",
        name: "_baseAsset",
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
    name: "openShortAccount",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "resetInteractionDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
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
        internalType: "struct PoolHedger.PoolHedgerParameters",
        name: "_poolHedgerParams",
        type: "tuple",
      },
    ],
    name: "setPoolHedgerParams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_shortBuffer",
        type: "uint256",
      },
    ],
    name: "setShortBuffer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shortBuffer",
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
    name: "shortId",
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
    name: "updateCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateCollateralShortAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateDelegateApproval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526005805460ff60a01b1916905534801561001d57600080fd5b50600480546001600160a01b03191633908117909155604080516000815260208101929092527fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c910160405180910390a1600160065561274a806100826000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c8063759d4d59116100c3578063c91e9bc81161007c578063c91e9bc8146102a7578063d45ce907146102af578063df582300146102b7578063e70fec23146102bf578063e77309c5146102c8578063faa2e64e146102d057600080fd5b8063759d4d591461025557806379ba50971461025d5780638da5cb5b146102655780638f71a2651461027857806399e133f9146102815780639afb3a641461029457600080fd5b8063318b61c411610115578063318b61c41461020f5780633876601d146102225780634b9a2a711461022a57806353a47bb714610232578063619a84cc1461024557806369c30f981461024d57600080fd5b806310147a9b1461015257806312a0083d146101905780631603c2f4146101bb5780631627540c146101e35780633135ab82146101f8575b600080fd5b604080518082018252600080825260209182015281518083019092526001548252600254908201526040516101879190612240565b60405180910390f35b600c546101a3906001600160a01b031681565b6040516001600160a01b039091168152602001610187565b6101ce6101c9366004612257565b610325565b60408051928352602083019190915201610187565b6101f66101f1366004612285565b610490565b005b610201600d5481565b604051908152602001610187565b6101f661021d366004612257565b6104ed565b610201610564565b6101ce6106e8565b6005546101a3906001600160a01b031681565b6101f661078c565b6101f661087a565b6102016109fe565b6101f6610ab0565b6004546101a3906001600160a01b031681565b61020160035481565b6101f661028f3660046122a9565b610b68565b6101f66102a236600461232b565b610e17565b6101f6610e2b565b6101f6610f52565b6101f6610ff7565b610201600e5481565b6101f661115c565b610305604080518082019091526000808252602082015250600e54604080518082019091526001548152600254602082015291565b604080518351815260209384015193810193909352820152606001610187565b6000806000610332610564565b905060008061033f6106e8565b600b546040516370a0823160e01b81523060048201529294509092506000916001600160a01b03909116906370a082319060240160206040518083038186803b15801561038b57600080fd5b505afa15801561039f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103c39190612388565b905060006103d182856123b7565b90506103dd82896111a9565b6103e790876123b7565b955060006103f5858a6111a9565b9050808411156104165761040981856123cf565b61041390886123b7565b96505b60008613156104555781610429876111d4565b11156104505761044d898361043d896111d4565b61044791906123cf565b906111a9565b97505b610485565b60008612156104855781610468876111d4565b111561048557610482600e546104478b8561043d8b6111d4565b97505b505050505050915091565b6104986111ec565b600580546001600160a01b0319166001600160a01b0383169081179091556040519081527f906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce22906020015b60405180910390a150565b6104f56111ec565b6105016012600a6124ca565b81101561052f5760405163cd0d872560e01b8152306004820152602481018290526044015b60405180910390fd5b600e8190556040518181527f56a81749672122017ebaeb5466658d6709da3d87ea1966bd5807a0dd6f5c2719906020016104e2565b600080600960009054906101000a90046001600160a01b03166001600160a01b031663825df9b26040518163ffffffff1660e01b815260040160206040518083038186803b1580156105b557600080fd5b505afa1580156105c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ed9190612388565b6000805460408051635ca9662560e11b8152815194955092936001600160a01b039092169263b952cc4a9260048083019392829003018186803b15801561063357600080fd5b505afa158015610647573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066b91906124d6565b91506000905061067b82846124fa565b90506000600180015461068d836111d4565b11905060008212801561069d5750805b156106be576002546106ae90611235565b6106b790612539565b94506106e1565b600082121580156106cc5750805b156106dd576002546106b790611235565b8194505b5050505090565b600080600d54600014156106ff5750600091829150565b600c54600d54604051634c0deef960e11b815230600482015260248101919091526001600160a01b039091169063981bddf290604401604080518083038186803b15801561074c57600080fd5b505afa158015610760573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061078491906124d6565b915091509091565b6107946111ec565b600760009054906101000a90046001600160a01b03166001600160a01b0316633535c97b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156107e257600080fd5b505afa1580156107f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081a9190612556565b60075460405163447fbc6360e01b81526001600160a01b03918216600482015291169063447fbc6390602401600060405180830381600087803b15801561086057600080fd5b505af1158015610874573d6000803e3d6000fd5b50505050565b6002600654141561089d5760405162461bcd60e51b815260040161052690612573565b60026006556007546008546040516333ef9fd160e21b81526001600160a01b039182166004820152600092919091169063cfbe7f449060240160a06040518083038186803b1580156108ee57600080fd5b505afa158015610902573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092691906125aa565b600c54600d54604051631c3d878d60e31b81529293506000926001600160a01b039092169163e1ec3c68916109619160040190815260200190565b61012060405180830381600087803b15801561097c57600080fd5b505af1158015610990573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b4919061263d565b50975050505050505050806000146109ec57600d54604051631759b80d60e31b81523060048201526024810191909152604401610526565b6109f5826112a3565b50506001600655565b600b546040516370a0823160e01b815230600482015260009182916001600160a01b03909116906370a082319060240160206040518083038186803b158015610a4657600080fd5b505afa158015610a5a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7e9190612388565b90506000610a8a6106e8565b509050610a9681611235565b610a9f83611235565b610aa991906124fa565b9250505090565b6005546001600160a01b03163314610af6576005546040516312d9f3db60e31b81523060048201523360248201526001600160a01b039091166044820152606401610526565b600454600554604080516001600160a01b0393841681529290911660208301527fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c910160405180910390a160058054600480546001600160a01b03199081166001600160a01b03841617909155169055565b610b706111ec565b600554600160a01b900460ff1615610b9d5760405163161b906f60e01b8152306004820152602401610526565b6005805460ff60a01b1916600160a01b179055600780546001600160a01b038089166001600160a01b03199283168117909355600880548983169084161790556009805488831690841617905560008054878316908416179055600a8054868316908416179055600b80549185169190921617905560408051633535c97b60e01b81529051633535c97b91600480820192602092909190829003018186803b158015610c4857600080fd5b505afa158015610c5c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c809190612556565b60075460405163447fbc6360e01b81526001600160a01b03918216600482015291169063447fbc6390602401600060405180830381600087803b158015610cc657600080fd5b505af1158015610cda573d6000803e3d6000fd5b50505050600760009054906101000a90046001600160a01b03166001600160a01b03166305a2ee2a6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d2c57600080fd5b505afa158015610d40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d649190612556565b6040516321f8a72160e01b81526e10dbdb1b185d195c985b14da1bdc9d608a1b60048201526001600160a01b0391909116906321f8a7219060240160206040518083038186803b158015610db757600080fd5b505afa158015610dcb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610def9190612556565b600c80546001600160a01b0319166001600160a01b0392909216919091179055505050505050565b610e1f6111ec565b610e2881611647565b50565b60026006541415610e4e5760405162461bcd60e51b815260040161052690612573565b6002600655600754600854604051630fb75cc960e31b81526001600160a01b0391821660048201526000929190911690637dbae6489060240160206040518083038186803b158015610e9f57600080fd5b505afa158015610eb3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ed79190612388565b9050600080610ee46106e8565b915091506000610ef584848461168c565b9050610eff611898565b6040805184815260208101859052908101839052606081018290527f2fb25c576ce2b36188f3af9971c0018ae01f18545466eb6fa10fa91461186ebd9060800160405180910390a1505060016006555050565b60026006541415610f755760405162461bcd60e51b815260040161052690612573565b60026006556000610f84610564565b90508015801590610f96575060015415155b15610fe6576001546003544291610fac916123b7565b1115610fe657600354600154604051636e1195af60e11b815230600482015260248101929092526044820152426064820152608401610526565b610fef81611a0e565b506001600655565b600760009054906101000a90046001600160a01b03166001600160a01b03166305a2ee2a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561104557600080fd5b505afa158015611059573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107d9190612556565b6040516321f8a72160e01b81526e10dbdb1b185d195c985b14da1bdc9d608a1b60048201526001600160a01b0391909116906321f8a7219060240160206040518083038186803b1580156110d057600080fd5b505afa1580156110e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111089190612556565b600c80546001600160a01b0319166001600160a01b039290921691821790556040519081527f54f125ff4a0780f6c6186ebc5a8c8fb4dab08aab4f01bad0936fa3dc13bc5b8e9060200160405180910390a1565b6000546001600160a01b031633146111a257600054604051630a5505d960e21b81523060048201523360248201526001600160a01b039091166044820152606401610526565b6000600355565b60006111b76012600a6124ca565b6111c183856126b8565b6111cb91906126d7565b90505b92915050565b60008082126111e357816111ce565b6111ce82612539565b6004546001600160a01b03163314611233576004805460405163035785f360e31b815230928101929092523360248301526001600160a01b03166044820152606401610526565b565b60006001600160ff1b0382111561129f5760405162461bcd60e51b815260206004820152602860248201527f53616665436173743a2076616c756520646f65736e27742066697420696e2061604482015267371034b73a191a9b60c11b6064820152608401610526565b5090565b600c5460408051632e8b7a6f60e21b815290516000926001600160a01b03169163ba2de9bc91600480830192602092919082900301818787803b1580156112e957600080fd5b505af11580156112fd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113219190612388565b600a54600c5460405163095ea7b360e01b81526001600160a01b0391821660048201526000196024820152929350169063095ea7b390604401602060405180830381600087803b15801561137457600080fd5b505af1158015611388573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113ac91906126f9565b6113e657600c54604051631f8e990f60e21b81523060048201526001600160a01b0390911660248201526000196044820152606401610526565b6000548251604051633c9349af60e01b81526001600160a01b0390921691633c9349af91611421918590600401918252602082015260400190565b602060405180830381600087803b15801561143b57600080fd5b505af115801561144f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114739190612388565b50600a546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b1580156114b857600080fd5b505afa1580156114cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114f09190612388565b90508181101561152357604051635c087e1b60e01b81523060048201526024810182905260448101839052606401610526565b600c54604084810151905163f93451ed60e01b8152600481018590526000602482015260448101919091526001600160a01b039091169063f93451ed90606401602060405180830381600087803b15801561157d57600080fd5b505af1158015611591573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115b59190612388565b600d556115c0611898565b7fd500499a0f00903fd1d14c7d9a655a8ace5240f1602bb889a68a6650bfbb25f1600d546040516115f391815260200190565b60405180910390a160408051600080825260208201819052818301526060810184905290517f2fb25c576ce2b36188f3af9971c0018ae01f18545466eb6fa10fa91461186ebd9181900360800190a1505050565b80516001819055602080830151600281905560408051938452918301527f30e133389aaa0e4c36900134befbab7813a00291781f0d584c8d339724ec89ac91016104e2565b6000806116a8600e5461044787876111a990919063ffffffff16565b9050808310156117e457600080546001600160a01b0316633c9349af876116cf87866123cf565b6040516001600160e01b031960e085901b16815260048101929092526024820152604401602060405180830381600087803b15801561170d57600080fd5b505af1158015611721573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117459190612388565b905080156117de57600c54600d54604051630efe6a8b60e01b81523060048201526024810191909152604481018390526001600160a01b0390911690630efe6a8b906064016040805180830381600087803b1580156117a357600080fd5b505af11580156117b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117db91906124d6565b50505b50611886565b8083111561188657600c54600d546001600160a01b039091169063441a3e709061180e84876123cf565b6040516001600160e01b031960e085901b168152600481019290925260248201526044016040805180830381600087803b15801561184b57600080fd5b505af115801561185f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061188391906124d6565b50505b61188e6106e8565b9695505050505050565b600a546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a082319060240160206040518083038186803b1580156118dc57600080fd5b505afa1580156118f0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119149190612388565b600a5460005460405163a9059cbb60e01b81526001600160a01b03918216600482015260248101849052929350169063a9059cbb90604401602060405180830381600087803b15801561196657600080fd5b505af115801561197a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061199e91906126f9565b6119de576000546040516307bd6c6760e11b8152306004820181905260248201526001600160a01b03909116604482015260648101829052608401610526565b6040518181527fbe2791c1a5f92b2a8736ef8c3d4e859c88f9536ddb879ecfcebc0f0fb1f5f236906020016104e2565b6007546008546040516333ef9fd160e21b81526001600160a01b039182166004820152600092919091169063cfbe7f449060240160a06040518083038186803b158015611a5a57600080fd5b505afa158015611a6e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a9291906125aa565b600b546040516370a0823160e01b81523060048201529192506000916001600160a01b03909116906370a082319060240160206040518083038186803b158015611adb57600080fd5b505afa158015611aef573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b139190612388565b9050600080611b206106e8565b9150915060008360001415611b4657611b3883611235565b611b4190612539565b611b4f565b611b4f84611235565b90506000611b60868686868b611bce565b60408051848152602081018390529081018990529091507f2d11d7e3ea242a268cd10786c2aaf79fb6d738e8065c6e62b2ed3a7e717f9bef9060600160405180910390a18015801590611bb35750818114155b15611bbd57426003555b611bc5611898565b50505050505050565b6000808212611c4f578184151580611be65750600084115b15611bfc578651611bfa9060008787611c93565b505b85811115611c2857611c20611c1b88611c1589856123cf565b89611eb8565b611235565b915050611c8a565b85811015611c4657611c20611c1b611c4083896123cf565b886120dc565b611c2086611235565b6000611c5a83612539565b90508515611c6e57611c6c86876120dc565b505b611c81611c1b8860000151838888611c93565b611c2090612539565b95945050505050565b600080848411611db357611ca886868561168c565b90506000611ccb600e54611cc5898561222790919063ffffffff16565b90612227565b905084811115611d7357600c54600d546001600160a01b039091169063d2b8035a90611cf788856123cf565b6040516001600160e01b031960e085901b168152600481019290925260248201526044016040805180830381600087803b158015611d3457600080fd5b505af1158015611d48573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d6c91906124d6565b5050611da1565b84811015611d9d57600c54600d546001600160a01b0390911690637e9c9b7490611cf784896123cf565b8492505b611da96106e8565b509250611e679050565b600c54600d546001600160a01b0390911690637e9c9b7490611dd588886123cf565b6040516001600160e01b031960e085901b168152600481019290925260248201526044016040805180830381600087803b158015611e1257600080fd5b505af1158015611e26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e4a91906124d6565b5050611e546106e8565b9092509050611e6486838361168c565b90505b6040805185815260208101849052908101849052606081018290527f2fb25c576ce2b36188f3af9971c0018ae01f18545466eb6fa10fa91461186ebd9060800160405180910390a150949350505050565b60608301516000908190611ee390611ed26012600a6124ca565b611edc91906123cf565b8590612227565b8551909150600090611ef69083906111a9565b600080548851604051633c9349af60e01b815260048101919091526024810184905292935090916001600160a01b0390911690633c9349af90604401602060405180830381600087803b158015611f4c57600080fd5b505af1158015611f60573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f849190612388565b905081811015611f92578091505b60075460085460405163ae58cf0b60e01b81526001600160a01b0391821660048201526024810185905291169063ae58cf0b90604401602060405180830381600087803b158015611fe257600080fd5b505af1158015611ff6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061201a9190612388565b50600b546040516370a0823160e01b81523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b15801561205e57600080fd5b505afa158015612072573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120969190612388565b60408051878152602081018390529195507fafc550c7eb066277cc683739b4a8ee49fb30a7e0771e11450a8cfe8bed33871e910160405180910390a15050509392505050565b6007546008546040516323ebff4960e01b81526001600160a01b0391821660048201526024810185905260009291909116906323ebff4990604401602060405180830381600087803b15801561213157600080fd5b505af1158015612145573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121699190612388565b50600b546040516370a0823160e01b81523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b1580156121ad57600080fd5b505afa1580156121c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906121e59190612388565b60408051848152602081018390529192507fafc550c7eb066277cc683739b4a8ee49fb30a7e0771e11450a8cfe8bed33871e910160405180910390a192915050565b6000816122366012600a6124ca565b6111c190856126b8565b8151815260208083015190820152604081016111ce565b60006020828403121561226957600080fd5b5035919050565b6001600160a01b0381168114610e2857600080fd5b60006020828403121561229757600080fd5b81356122a281612270565b9392505050565b60008060008060008060c087890312156122c257600080fd5b86356122cd81612270565b955060208701356122dd81612270565b945060408701356122ed81612270565b935060608701356122fd81612270565b9250608087013561230d81612270565b915060a087013561231d81612270565b809150509295509295509295565b60006040828403121561233d57600080fd5b6040516040810181811067ffffffffffffffff8211171561236e57634e487b7160e01b600052604160045260246000fd5b604052823581526020928301359281019290925250919050565b60006020828403121561239a57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156123ca576123ca6123a1565b500190565b6000828210156123e1576123e16123a1565b500390565b600181815b80851115612421578160001904821115612407576124076123a1565b8085161561241457918102915b93841c93908002906123eb565b509250929050565b600082612438575060016111ce565b81612445575060006111ce565b816001811461245b576002811461246557612481565b60019150506111ce565b60ff841115612476576124766123a1565b50506001821b6111ce565b5060208310610133831016604e8410600b84101617156124a4575081810a6111ce565b6124ae83836123e6565b80600019048211156124c2576124c26123a1565b029392505050565b60006111cb8383612429565b600080604083850312156124e957600080fd5b505080516020909101519092909150565b60008083128015600160ff1b850184121615612518576125186123a1565b6001600160ff1b0384018313811615612533576125336123a1565b50500390565b6000600160ff1b82141561254f5761254f6123a1565b5060000390565b60006020828403121561256857600080fd5b81516122a281612270565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b600060a082840312156125bc57600080fd5b60405160a0810181811067ffffffffffffffff821117156125ed57634e487b7160e01b600052604160045260246000fd5b806040525082518152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b8051801515811461263857600080fd5b919050565b60008060008060008060008060006101208a8c03121561265c57600080fd5b8951985060208a015161266e81612270565b8098505060408a0151965060608a0151955060808a0151945061269360a08b01612628565b935060c08a0151925060e08a015191506101008a015190509295985092959850929598565b60008160001904831182151516156126d2576126d26123a1565b500290565b6000826126f457634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561270b57600080fd5b6111cb8261262856fea264697066735822122064463b2c5af4943103bddcba6cd4e541c1e2d7bca59db74a08a19b4f58255d4464736f6c63430008090033";

type ShortPoolHedgerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShortPoolHedgerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShortPoolHedger__factory extends ContractFactory {
  constructor(...args: ShortPoolHedgerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ShortPoolHedger> {
    return super.deploy(overrides || {}) as Promise<ShortPoolHedger>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ShortPoolHedger {
    return super.attach(address) as ShortPoolHedger;
  }
  connect(signer: Signer): ShortPoolHedger__factory {
    return super.connect(signer) as ShortPoolHedger__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShortPoolHedgerInterface {
    return new utils.Interface(_abi) as ShortPoolHedgerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShortPoolHedger {
    return new Contract(address, _abi, signerOrProvider) as ShortPoolHedger;
  }
}

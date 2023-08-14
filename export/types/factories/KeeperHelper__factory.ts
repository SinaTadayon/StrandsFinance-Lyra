/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { KeeperHelper, KeeperHelperInterface } from "../KeeperHelper";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "greekCache",
    outputs: [
      {
        internalType: "contract OptionGreekCache",
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
        internalType: "contract ShortCollateral",
        name: "_shortCollateral",
        type: "address",
      },
      {
        internalType: "contract OptionGreekCache",
        name: "_greekCache",
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
        internalType: "uint256",
        name: "batch1",
        type: "uint256",
      },
    ],
    name: "liquidate8",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "positionIds",
        type: "uint256[]",
      },
    ],
    name: "liquidateMany",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "optionMarket",
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
    inputs: [
      {
        internalType: "uint256",
        name: "batch1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch2",
        type: "uint256",
      },
    ],
    name: "settle16",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "batch1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch3",
        type: "uint256",
      },
    ],
    name: "settle24",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "batch1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch3",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch4",
        type: "uint256",
      },
    ],
    name: "settle32",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "batch1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch3",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch4",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch5",
        type: "uint256",
      },
    ],
    name: "settle40",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "batch1",
        type: "uint256",
      },
    ],
    name: "settle8",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "batch1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch2",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch3",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch4",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch5",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch6",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch7",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch8",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch9",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "batch10",
        type: "uint256",
      },
    ],
    name: "settle80",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "positionIds",
        type: "uint256[]",
      },
    ],
    name: "settleMany",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "shortCollateral",
    outputs: [
      {
        internalType: "contract ShortCollateral",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateAllBoardCachedGreeks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateStaleBoardCachedGreeks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611758806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063778bd3d311610097578063870dcaeb11610066578063870dcaeb14610203578063bb4a9f8814610216578063c4e521d514610229578063f88668201461023c57600080fd5b8063778bd3d3146101c25780637a73780c146101d557806380deab4d146101e8578063839d71ba146101f057600080fd5b806356f08312116100d357806356f08312146101815780635ba3107b146101945780635bf3e977146101a75780636b23e77a146101ba57600080fd5b8063158ef93e14610105578063184b95591461012e5780631d5565f01461014357806338b7405414610156575b600080fd5b60025461011990600160a01b900460ff1681565b60405190151581526020015b60405180910390f35b61014161013c3660046112bd565b61024f565b005b610141610151366004611308565b610306565b600254610169906001600160a01b031681565b6040516001600160a01b039091168152602001610125565b61014161018f366004611370565b6105f8565b6101416101a236600461140d565b6107ab565b6101416101b53660046114a3565b610809565b610141610988565b6101416101d03660046114cf565b610b5b565b6101416101e33660046114cf565b610c2a565b610141610ca6565b6101416101fe36600461140d565b610dd1565b600154610169906001600160a01b031681565b600054610169906001600160a01b031681565b6101416102373660046114e8565b610e81565b61014161024a366004611523565b61106a565b600254600160a01b900460ff16156102b85760405162461bcd60e51b815260206004820152602260248201527f4b65657065722048656c7065723a20616c726561647920696e697469616c697a604482015261195960f21b606482015260840160405180910390fd5b600080546001600160a01b039485166001600160a01b031991821617909155600180549385169390911692909217909155600280546001600160a81b0319169190921617600160a01b179055565b604080516050808252610a20820190925260009160208201610a008036833701905050905060005b605081101561058457610342600882611571565b610373576103508c826111a4565b82828151811061036257610362611585565b602002602001018181525050610574565b61037e600882611571565b600114156103b7576103908b826111a4565b8261039c60088461159b565b6103a79060086115af565b8151811061036257610362611585565b6103c2600882611571565b600214156103eb576103d48a826111a4565b826103e060088461159b565b6103a79060106115af565b6103f6600882611571565b6003141561041f5761040889826111a4565b8261041460088461159b565b6103a79060186115af565b61042a600882611571565b600414156104535761043c88826111a4565b8261044860088461159b565b6103a79060206115af565b61045e600882611571565b600514156104875761047087826111a4565b8261047c60088461159b565b6103a79060286115af565b610492600882611571565b600614156104bb576104a486826111a4565b826104b060088461159b565b6103a79060306115af565b6104c6600882611571565b600714156104ef576104d885826111a4565b826104e460088461159b565b6103a79060386115af565b6104fa600882611571565b600814156105235761050c84826111a4565b8261051860088461159b565b6103a79060406115af565b61052e600882611571565b600914156105745761054083826111a4565b8261054c60088461159b565b6105579060486115af565b8151811061056757610567611585565b6020026020010181815250505b61057d816115c7565b905061032e565b5060006001825161059591906115e2565b90505b80156105e1578181815181106105b0576105b0611585565b6020026020010151600014156105cf578151156105cf57600182510382525b806105d9816115f9565b915050610598565b506105eb816107ab565b5050505050505050505050565b60408051602080825261042082019092526000918082016104008036833701905050905060005b602081101561073d57610633600882611571565b6106645761064186826111a4565b82828151811061065357610653611585565b60200260200101818152505061072d565b61066f600882611571565b600114156106a85761068185826111a4565b8261068d60088461159b565b6106989060086115af565b8151811061065357610653611585565b6106b3600882611571565b600214156106dc576106c584826111a4565b826106d160088461159b565b6106989060106115af565b6106e7600882611571565b6003141561072d576106f983826111a4565b8261070560088461159b565b6107109060186115af565b8151811061072057610720611585565b6020026020010181815250505b610736816115c7565b905061061f565b5060006001825161074e91906115e2565b90505b801561079a5781818151811061076957610769611585565b6020026020010151600014156107885781511561078857600182510382525b80610792816115f9565b915050610751565b506107a4816107ab565b5050505050565b60015460405163bc0d6c5760e01b81526001600160a01b039091169063bc0d6c57906107db908490600401611610565b600060405180830381600087803b1580156107f557600080fd5b505af11580156107a4573d6000803e3d6000fd5b6040805160188082526103208201909252600091602082016103008036833701905050905060005b601881101561091b57610845600882611571565b6108765761085385826111a4565b82828151811061086557610865611585565b60200260200101818152505061090b565b610881600882611571565b600114156108ba5761089384826111a4565b8261089f60088461159b565b6108aa9060086115af565b8151811061086557610865611585565b6108c5600882611571565b6002141561090b576108d783826111a4565b826108e360088461159b565b6108ee9060106115af565b815181106108fe576108fe611585565b6020026020010181815250505b610914816115c7565b9050610831565b5060006001825161092c91906115e2565b90505b80156109785781818151811061094757610947611585565b6020026020010151600014156109665781511561096657600182510382525b80610970816115f9565b91505061092f565b50610982816107ab565b50505050565b60008060009054906101000a90046001600160a01b03166001600160a01b0316637e7088eb6040518163ffffffff1660e01b815260040160006040518083038186803b1580156109d757600080fd5b505afa1580156109eb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a139190810190611654565b905060005b8151811015610b575760025482516001600160a01b039091169063d6d1c31b90849084908110610a4a57610a4a611585565b60200260200101516040518263ffffffff1660e01b8152600401610a7091815260200190565b60206040518083038186803b158015610a8857600080fd5b505afa158015610a9c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ac091906116da565b15610b475760025482516001600160a01b03909116906360e3ecc990849084908110610aee57610aee611585565b60200260200101516040518263ffffffff1660e01b8152600401610b1491815260200190565b600060405180830381600087803b158015610b2e57600080fd5b505af1158015610b42573d6000803e3d6000fd5b505050505b610b50816115c7565b9050610a18565b5050565b6040805160088082526101208201909252600091602082016101008036833701905050905060005b6008811015610bc357610b9683826111a4565b828281518110610ba857610ba8611585565b6020908102919091010152610bbc816115c7565b9050610b83565b50600060018251610bd491906115e2565b90505b8015610c2057818181518110610bef57610bef611585565b602002602001015160001415610c0e57815115610c0e57600182510382525b80610c18816115f9565b915050610bd7565b50610b57816107ab565b6040805160088082526101208201909252600091602082016101008036833701905050905060005b6008811015610c9c57610c66816020611703565b83901c63ffffffff16828281518110610c8157610c81611585565b6020908102919091010152610c95816115c7565b9050610c52565b50610b57816111cd565b60008060009054906101000a90046001600160a01b03166001600160a01b0316637e7088eb6040518163ffffffff1660e01b815260040160006040518083038186803b158015610cf557600080fd5b505afa158015610d09573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610d319190810190611654565b905060005b8151811015610b575760025482516001600160a01b03909116906360e3ecc990849084908110610d6857610d68611585565b60200260200101516040518263ffffffff1660e01b8152600401610d8e91815260200190565b600060405180830381600087803b158015610da857600080fd5b505af1158015610dbc573d6000803e3d6000fd5b5050505080610dca906115c7565b9050610d36565b60005b8151811015610b575760005482516001600160a01b0390911690635f036de190849084908110610e0657610e06611585565b6020026020010151336040518363ffffffff1660e01b8152600401610e3e9291909182526001600160a01b0316602082015260400190565b600060405180830381600087803b158015610e5857600080fd5b505af1158015610e6c573d6000803e3d6000fd5b5050505080610e7a906115c7565b9050610dd4565b6040805160288082526105208201909252600091602082016105008036833701905050905060005b6028811015610ffb57610ebd600882611571565b610eee57610ecb87826111a4565b828281518110610edd57610edd611585565b602002602001018181525050610feb565b610ef9600882611571565b60011415610f3257610f0b86826111a4565b82610f1760088461159b565b610f229060086115af565b81518110610edd57610edd611585565b610f3d600882611571565b60021415610f6657610f4f85826111a4565b82610f5b60088461159b565b610f229060106115af565b610f71600882611571565b60031415610f9a57610f8384826111a4565b82610f8f60088461159b565b610f229060186115af565b610fa5600882611571565b60041415610feb57610fb783826111a4565b82610fc360088461159b565b610fce9060206115af565b81518110610fde57610fde611585565b6020026020010181815250505b610ff4816115c7565b9050610ea9565b5060006001825161100c91906115e2565b90505b80156110585781818151811061102757611027611585565b6020026020010151600014156110465781511561104657600182510382525b80611050816115f9565b91505061100f565b50611062816107ab565b505050505050565b6040805160108082526102208201909252600091602082016102008036833701905050905060005b6010811015611138576110a6600882611571565b6110d7576110b484826111a4565b8282815181106110c6576110c6611585565b602002602001018181525050611128565b6110e2600882611571565b60011415611128576110f483826111a4565b8261110060088461159b565b61110b9060086115af565b8151811061111b5761111b611585565b6020026020010181815250505b611131816115c7565b9050611092565b5060006001825161114991906115e2565b90505b80156111955781818151811061116457611164611585565b6020026020010151600014156111835781511561118357600182510382525b8061118d816115f9565b91505061114c565b5061119f816107ab565b505050565b60006111b160088361159b565b6111bc906020611703565b83901c63ffffffff16905092915050565b805160005b8181101561119f578281815181106111ec576111ec611585565b60200260200101516000141561120157611295565b60005483516001600160a01b0390911690635f036de19085908490811061122a5761122a611585565b6020026020010151336040518363ffffffff1660e01b81526004016112629291909182526001600160a01b0316602082015260400190565b600060405180830381600087803b15801561127c57600080fd5b505af1158015611290573d6000803e3d6000fd5b505050505b61129e816115c7565b90506111d2565b6001600160a01b03811681146112ba57600080fd5b50565b6000806000606084860312156112d257600080fd5b83356112dd816112a5565b925060208401356112ed816112a5565b915060408401356112fd816112a5565b809150509250925092565b6000806000806000806000806000806101408b8d03121561132857600080fd5b505088359a60208a01359a5060408a013599606081013599506080810135985060a0810135975060c0810135965060e081013595506101008101359450610120013592509050565b6000806000806080858703121561138657600080fd5b5050823594602084013594506040840135936060013592509050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156113e1576113e16113a2565b604052919050565b600067ffffffffffffffff821115611403576114036113a2565b5060051b60200190565b6000602080838503121561142057600080fd5b823567ffffffffffffffff81111561143757600080fd5b8301601f8101851361144857600080fd5b803561145b611456826113e9565b6113b8565b81815260059190911b8201830190838101908783111561147a57600080fd5b928401925b828410156114985783358252928401929084019061147f565b979650505050505050565b6000806000606084860312156114b857600080fd5b505081359360208301359350604090920135919050565b6000602082840312156114e157600080fd5b5035919050565b600080600080600060a0868803121561150057600080fd5b505083359560208501359550604085013594606081013594506080013592509050565b6000806040838503121561153657600080fd5b50508035926020909101359150565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008261158057611580611545565b500490565b634e487b7160e01b600052603260045260246000fd5b6000826115aa576115aa611545565b500690565b600082198211156115c2576115c261155b565b500190565b60006000198214156115db576115db61155b565b5060010190565b6000828210156115f4576115f461155b565b500390565b6000816116085761160861155b565b506000190190565b6020808252825182820181905260009190848201906040850190845b818110156116485783518352928401929184019160010161162c565b50909695505050505050565b6000602080838503121561166757600080fd5b825167ffffffffffffffff81111561167e57600080fd5b8301601f8101851361168f57600080fd5b805161169d611456826113e9565b81815260059190911b820183019083810190878311156116bc57600080fd5b928401925b82841015611498578351825292840192908401906116c1565b6000602082840312156116ec57600080fd5b815180151581146116fc57600080fd5b9392505050565b600081600019048311821515161561171d5761171d61155b565b50029056fea26469706673582212204367e8e52fa26f295214d036f2fa56873b6177fbf3ba90c29f511ce6bdbf26b364736f6c63430008090033";

type KeeperHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KeeperHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KeeperHelper__factory extends ContractFactory {
  constructor(...args: KeeperHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<KeeperHelper> {
    return super.deploy(overrides || {}) as Promise<KeeperHelper>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): KeeperHelper {
    return super.attach(address) as KeeperHelper;
  }
  connect(signer: Signer): KeeperHelper__factory {
    return super.connect(signer) as KeeperHelper__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KeeperHelperInterface {
    return new utils.Interface(_abi) as KeeperHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KeeperHelper {
    return new Contract(address, _abi, signerOrProvider) as KeeperHelper;
  }
}

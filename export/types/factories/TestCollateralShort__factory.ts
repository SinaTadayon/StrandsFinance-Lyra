/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestCollateralShort,
  TestCollateralShortInterface,
} from "../TestCollateralShort";

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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "createTestEmptyLoanForAccount",
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
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "draw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
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
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getShortAndCollateral",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        internalType: "contract SynthetixAdapter",
        name: "_synthetixAdapter",
        type: "address",
      },
      {
        internalType: "contract ITestERC20",
        name: "_quoteAsset",
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
    inputs: [],
    name: "issueFeeRate",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "loans",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "collateral",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "currency",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "short",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "accruedInterest",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interestIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastInteraction",
        type: "uint256",
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
    name: "minCollateral",
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
    name: "minCratio",
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
        name: "collateral",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "currency",
        type: "bytes32",
      },
    ],
    name: "open",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "repay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "repayWithCollateral",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "testForceClose",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600a6200001360128262000201565b6200002090600c62000216565b6200002c919062000238565b6002556200003d6012600a62000201565b6200004b906103e862000216565b6003556103e86200005f6012600a62000201565b6200006c90600562000216565b62000078919062000238565b6004556001600955600b805460ff191690553480156200009757600080fd5b50600080546001600160a01b0319163390811782556040805192835260208301919091527fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c910160405180910390a16200025b565b634e487b7160e01b600052601160045260246000fd5b600181815b8085111562000143578160001904821115620001275762000127620000ec565b808516156200013557918102915b93841c939080029062000107565b509250929050565b6000826200015c57506001620001fb565b816200016b57506000620001fb565b81600181146200018457600281146200018f57620001af565b6001915050620001fb565b60ff841115620001a357620001a3620000ec565b50506001821b620001fb565b5060208310610133831016604e8410600b8410161715620001d4575081810a620001fb565b620001e0838362000102565b8060001904821115620001f757620001f7620000ec565b0290505b92915050565b60006200020f83836200014b565b9392505050565b6000816000190483118215151615620002335762000233620000ec565b500290565b6000826200025657634e487b7160e01b600052601260045260246000fd5b500490565b611882806200026b6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80638da5cb5b116100b8578063ba2de9bc1161007c578063ba2de9bc14610359578063d2b8035a14610362578063e1ec3c6814610375578063e2d8e6f01461042a578063f09a40161461043d578063f93451ed1461045057600080fd5b80638da5cb5b1461027b578063925ead111461028e578063981bddf2146102975780639b3b051a14610333578063a10af0281461034657600080fd5b806353a47bb71161010a57806353a47bb7146101d05780635b87280b146101fb5780637564912b1461022457806379ba50971461024d5780637e9c9b74146102555780638cd2e0c71461026857600080fd5b80630efe6a8b14610147578063158ef93e146101745780631627540c14610191578063361e2086146101a6578063441a3e70146101bd575b600080fd5b61015a6101553660046114f0565b610463565b604080519283526020830191909152015b60405180910390f35b600b546101819060ff1681565b604051901515815260200161016b565b6101a461019f366004611525565b61051a565b005b6101af60045481565b60405190815260200161016b565b61015a6101cb366004611549565b610576565b6001546101e3906001600160a01b031681565b6040516001600160a01b03909116815260200161016b565b6101e361020936600461156b565b6007602052600090815260409020546001600160a01b031681565b6101e361023236600461156b565b6008602052600090815260409020546001600160a01b031681565b6101a4610792565b61015a610263366004611549565b61084a565b61015a6102763660046114f0565b610a03565b6000546101e3906001600160a01b031681565b6101af60025481565b61015a6102a5366004611584565b6000908152600a60209081526040918290208251610120810184528154815260018201546001600160a01b031692810192909252600281015492820183905260038101546060830152600481015460808301819052600582015460ff16151560a0840152600682015460c0840152600782015460e08401526008909101546101009092019190915292909150565b6101a46103413660046115b0565b610b98565b6101a461035436600461156b565b610c7b565b6101af60035481565b61015a610370366004611549565b610cbd565b6103dc61038336600461156b565b600a6020526000908152604090208054600182015460028301546003840154600485015460058601546006870154600788015460089098015496976001600160a01b039096169694959394929360ff9092169290919089565b60408051998a526001600160a01b0390981660208a01529688019590955260608701939093526080860191909152151560a085015260c084015260e08301526101008201526101200161016b565b6101a4610438366004611525565b610ecc565b6101a461044b3660046115f2565b610fca565b6101af61045e36600461162b565b61104e565b600654604051632770a7eb60e21b81523360048201526024810183905260009182916001600160a01b0390911690639dc29fac90604401600060405180830381600087803b1580156104b457600080fd5b505af11580156104c8573d6000803e3d6000fd5b5050506000858152600a6020526040902060078101549091506104ea90611389565b838160020160008282546104fe919061166d565b9091555050600481015460029091015490969095509350505050565b6105226113c7565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527f906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce229060200160405180910390a150565b6000828152600a60205260408120600781015482919061059590611389565b60018101546001600160a01b031633146105f65760405162461bcd60e51b815260206004820152601f60248201527f77697468647261773a206c6f616e2e6163636f756e74206d69736d617463680060448201526064015b60405180910390fd5b8381600201546106069190611685565b60028201556006546040516340c10f1960e01b8152336004820152602481018690526001600160a01b03909116906340c10f1990604401600060405180830381600087803b15801561065757600080fd5b505af115801561066b573d6000803e3d6000fd5b50506005546003840154600090815260086020526040808220549051630fb75cc960e31b81526001600160a01b0391821660048201529194509091169150637dbae6489060240160206040518083038186803b1580156106ca57600080fd5b505afa1580156106de573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610702919061169c565b905061071d600254836002015461140f90919063ffffffff16565b600483015461072d90839061140f565b111561077b5760405162461bcd60e51b815260206004820181905260248201527f7769746864726177696e672064726f707320726174696f20746f6f206d75636860448201526064016105ed565b816004015482600201549350935050509250929050565b6001546001600160a01b031633146107d8576001546040516312d9f3db60e31b81523060048201523360248201526001600160a01b0390911660448201526064016105ed565b600054600154604080516001600160a01b0393841681529290911660208301527fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c910160405180910390a160018054600080546001600160a01b03199081166001600160a01b03841617909155169055565b6000828152600a60205260408120600781015482919061086990611389565b60018101546001600160a01b031633146108b95760405162461bcd60e51b81526020600482015260116024820152701bdb9b1e481b1bd85b881858d8dbdd5b9d607a1b60448201526064016105ed565b6005546003820154600090815260086020526040808220549051630fb75cc960e31b81526001600160a01b03918216600482015291921690637dbae6489060240160206040518083038186803b15801561091257600080fd5b505afa158015610926573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094a919061169c565b60045490915061097a906109606012600a611799565b61096a9190611685565b610974838861140f565b9061143a565b82600201546109899190611685565b6002830155600482015461099e908690611685565b600483015560006109df60646109b66012600a611799565b6109c19060326117a5565b6109cb91906117da565b6004546109d990899061140f565b9061140f565b905060006109ed828861166d565b6002909401549395509293505050509250929050565b6000828152600a602052604081206007810154829190610a2290611389565b6005546003820154600090815260086020526040808220549051630fb75cc960e31b81526001600160a01b03918216600482015291921690637dbae6489060240160206040518083038186803b158015610a7b57600080fd5b505afa158015610a8f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab3919061169c565b600383015460009081526007602052604090819020549051632770a7eb60e21b8152336004820152602481018890529192506001600160a01b0316908190639dc29fac90604401600060405180830381600087803b158015610b1457600080fd5b505af1158015610b28573d6000803e3d6000fd5b50505050858360040154610b3c9190611685565b60048401556002805490840154610b529161140f565b6004840154610b6290849061140f565b10610b7f5760405162461bcd60e51b81526004016105ed906117ee565b8260040154836002015494509450505050935093915050565b610ba06113c7565b6001600160a01b038116610beb5760405162461bcd60e51b815260206004820152601260248201527106d61726b65742063616e6e6f7420626520360741b60448201526064016105ed565b6001600160a01b038216610c395760405162461bcd60e51b815260206004820152601560248201527406261736541737365742063616e6e6f74206265203605c1b60448201526064016105ed565b600092835260076020908152604080852080546001600160a01b03199081166001600160a01b0396871617909155600890925290932080549093169116179055565b610c836113c7565b6000818152600a60205260409020610cba906000600482018190556002820181905560068201819055600782015542600890910155565b50565b6000828152600a602052604081206007810154829190610cdc90611389565b60018101546001600160a01b03163314610d385760405162461bcd60e51b815260206004820152601b60248201527f647261773a206c6f616e2e6163636f756e74206d69736d61746368000000000060448201526064016105ed565b6005546003820154600090815260086020526040808220549051630fb75cc960e31b81526001600160a01b03918216600482015291921690637dbae6489060240160206040518083038186803b158015610d9157600080fd5b505afa158015610da5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc9919061169c565b905084826004016000828254610ddf919061166d565b90915550506006546004546001600160a01b03909116906340c10f19903390610e2890610e0e6012600a611799565b610e189190611685565b610e22868b61140f565b90611452565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b158015610e6e57600080fd5b505af1158015610e82573d6000803e3d6000fd5b50505050610e9f600254836002015461140f90919063ffffffff16565b6004830154610eaf90839061140f565b1061077b5760405162461bcd60e51b81526004016105ed906117ee565b610ed46113c7565b600060405180610120016040528060096000815480929190610ef59061181d565b9091555081526001600160a01b039384166020808301919091526000604080840182905260608085018390526080808601849052600160a080880182905260c080890187905260e0808a01849052426101009a8b01528a518852600a8952968690208a518155978a015192880180546001600160a01b03191693909c1692909217909a5592870151600286015590860151600385015585015160048401559584015160058301805460ff1916911515919091179055948301516006820155938201516007850155015160089092019190915550565b600b5460ff16156110135760405162461bcd60e51b8152602060048201526013602482015272185b1c9958591e481a5b9a5d1a585b1a5e9959606a1b60448201526064016105ed565b600580546001600160a01b039384166001600160a01b03199182161790915560068054929093169116179055600b805460ff19166001179055565b600080604051806101200160405280600960008154809291906110709061181d565b9091555081523360208083019190915260408083018990526060830187905260808301889052600160a08401819052600060c0850181905260e085019190915242610100909401939093526005548784526008909252808320549051630fb75cc960e31b81526001600160a01b0391821660048201529394509192911690637dbae6489060240160206040518083038186803b15801561110f57600080fd5b505afa158015611123573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611147919061169c565b90506003548610156111a75760405162461bcd60e51b8152602060048201526024808201527f6d7573742070726f76696465206d6f7265207468616e206d696e436f6c6c6174604482015263195c985b60e21b60648201526084016105ed565b60025460408301516111b89161140f565b60808301516111c890839061140f565b106111e55760405162461bcd60e51b81526004016105ed906117ee565b6006546004546001600160a01b03909116906340c10f199033906112299061120f6012600a611799565b6112199190611685565b6080870151610e2290879061140f565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401600060405180830381600087803b15801561126f57600080fd5b505af1158015611283573d6000803e3d6000fd5b5050600654604051632770a7eb60e21b8152336004820152602481018a90526001600160a01b039091169250639dc29fac9150604401600060405180830381600087803b1580156112d357600080fd5b505af11580156112e7573d6000803e3d6000fd5b505083516000908152600a60209081526040918290208651808255918701516001820180546001600160a01b0319166001600160a01b03909216919091179055918601516002830155606086015160038301556080860151600483015560a086015160058301805460ff191691151591909117905560c0860151600683015560e086015160078301556101009095015160089091015550919695505050505050565b80610cba5760405162461bcd60e51b815260206004820152600e60248201526d131bd85b881a5cc818db1bdcd95960921b60448201526064016105ed565b6000546001600160a01b0316331461140d5760005460405163035785f360e31b81523060048201523360248201526001600160a01b0390911660448201526064016105ed565b565b600061141d6012600a611799565b61142783856117a5565b61143191906117da565b90505b92915050565b6000611431838361144d6012600a611799565b61146a565b600061143183836114656012600a611799565b6114c3565b6000808361147984600a6117a5565b61148390876117a5565b61148d91906117da565b9050600561149c600a83611838565b106114af576114ac600a8261166d565b90505b6114ba600a826117da565b95945050505050565b6000806114d1600a846117da565b61148385876117a5565b6001600160a01b0381168114610cba57600080fd5b60008060006060848603121561150557600080fd5b8335611510816114db565b95602085013595506040909401359392505050565b60006020828403121561153757600080fd5b8135611542816114db565b9392505050565b6000806040838503121561155c57600080fd5b50508035926020909101359150565b60006020828403121561157d57600080fd5b5035919050565b6000806040838503121561159757600080fd5b82356115a2816114db565b946020939093013593505050565b6000806000606084860312156115c557600080fd5b8335925060208401356115d7816114db565b915060408401356115e7816114db565b809150509250925092565b6000806040838503121561160557600080fd5b8235611610816114db565b91506020830135611620816114db565b809150509250929050565b60008060006060848603121561164057600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561168057611680611657565b500190565b60008282101561169757611697611657565b500390565b6000602082840312156116ae57600080fd5b5051919050565b600181815b808511156116f05781600019048211156116d6576116d6611657565b808516156116e357918102915b93841c93908002906116ba565b509250929050565b60008261170757506001611434565b8161171457506000611434565b816001811461172a576002811461173457611750565b6001915050611434565b60ff84111561174557611745611657565b50506001821b611434565b5060208310610133831016604e8410600b8410161715611773575081810a611434565b61177d83836116b5565b806000190482111561179157611791611657565b029392505050565b600061143183836116f8565b60008160001904831182151516156117bf576117bf611657565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826117e9576117e96117c4565b500490565b6020808252601590820152741b9bdd08195b9bdd59da0818dbdb1b185d195c985b605a1b604082015260600190565b600060001982141561183157611831611657565b5060010190565b600082611847576118476117c4565b50069056fea26469706673582212201663c64e736b25c373cf558cfbda1c9c7f0b84d11a4e8e227e2d46770706994964736f6c63430008090033";

type TestCollateralShortConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestCollateralShortConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestCollateralShort__factory extends ContractFactory {
  constructor(...args: TestCollateralShortConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestCollateralShort> {
    return super.deploy(overrides || {}) as Promise<TestCollateralShort>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestCollateralShort {
    return super.attach(address) as TestCollateralShort;
  }
  connect(signer: Signer): TestCollateralShort__factory {
    return super.connect(signer) as TestCollateralShort__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestCollateralShortInterface {
    return new utils.Interface(_abi) as TestCollateralShortInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestCollateralShort {
    return new Contract(address, _abi, signerOrProvider) as TestCollateralShort;
  }
}
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BlackScholes, BlackScholesInterface } from "../BlackScholes";

const _abi = [
  {
    inputs: [],
    name: "ExpOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "LnNegativeUndefined",
    type: "error",
  },
  {
    inputs: [],
    name: "Overflow",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "x",
        type: "int256",
      },
    ],
    name: "_stdNormalCDF",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "timeToExpirySec",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "volatilityDecimal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "spotDecimal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strikePriceDecimal",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "rateDecimal",
            type: "int256",
          },
        ],
        internalType: "struct BlackScholes.BlackScholesInputs",
        name: "bsInput",
        type: "tuple",
      },
    ],
    name: "delta",
    outputs: [
      {
        internalType: "int256",
        name: "callDeltaDecimal",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "putDeltaDecimal",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "timeToExpirySec",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "volatilityDecimal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "spotDecimal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strikePriceDecimal",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "rateDecimal",
            type: "int256",
          },
        ],
        internalType: "struct BlackScholes.BlackScholesInputs",
        name: "bsInput",
        type: "tuple",
      },
    ],
    name: "optionPrices",
    outputs: [
      {
        internalType: "uint256",
        name: "call",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "put",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "timeToExpirySec",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "volatilityDecimal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "spotDecimal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strikePriceDecimal",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "rateDecimal",
            type: "int256",
          },
        ],
        internalType: "struct BlackScholes.BlackScholesInputs",
        name: "bsInput",
        type: "tuple",
      },
    ],
    name: "pricesDeltaStdVega",
    outputs: [
      {
        components: [
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
          {
            internalType: "int256",
            name: "callDelta",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "putDelta",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "vega",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stdVega",
            type: "uint256",
          },
        ],
        internalType: "struct BlackScholes.PricesDeltaStdVega",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "timeToExpirySec",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "volatilityDecimal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "spotDecimal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strikePriceDecimal",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "rateDecimal",
            type: "int256",
          },
        ],
        internalType: "struct BlackScholes.BlackScholesInputs",
        name: "bsInput",
        type: "tuple",
      },
    ],
    name: "vega",
    outputs: [
      {
        internalType: "uint256",
        name: "vegaDecimal",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6116b761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100615760003560e01c8063036d587814610066578063192e7b98146100ce578063246e1ff5146100ef5780638d31f3aa14610102578063b6e62e591461012a575b600080fd5b6100796100743660046112d1565b61013d565b6040516100c59190600060c082019050825182526020830151602083015260408301516040830152606083015160608301526080830151608083015260a083015160a083015292915050565b60405180910390f35b6100e16100dc3660046112d1565b61028f565b6040519081526020016100c5565b6100e16100fd36600461134f565b6102ff565b6101156101103660046112d1565b6104a0565b604080519283526020830191909152016100c5565b6101156101383660046112d1565b610519565b6101766040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600081525090565b600061018583600001516105b4565b9050600061019684604001516105ca565b90506000806101cc846101ac88602001516105ca565b856101ba8a606001516105ca565b6101c78b608001516105f0565b610616565b915091506000806101f986866101e58b606001516105ca565b6101f28c608001516105f0565b8888610720565b9150915060008061020f86888c600001516107b4565b9150915060008061021f886107fa565b915091506040518060c0016040528061023788610824565b815260200161024587610824565b81526020016102538461088b565b81526020016102618361088b565b815260200161026f86610824565b815260200161027d85610824565b90529c9b505050505050505050505050565b60008061029f83600001516105b4565b905060006102b084604001516105ca565b905060006102e0836102c587602001516105ca565b846102d389606001516105ca565b6101c78a608001516105f0565b5090506102f66102f18484846108c9565b610824565b95945050505050565b60008061030b836108e4565b90506000610325676765c793fa10079d601b1b602561137e565b821161047357600061035361034561033e6002866113b3565b85906108fc565b61034e906113c7565b610914565b90506b16d90cda2bbc61dfb66de0008310156103955761038e816103886103798661093a565b61038287610a9e565b90610b83565b906108fc565b9150610471565b60006104416104256104056103e560146103bb676765c793fa10079d601b1b600d61137e565b6103c591906113b3565b6103cf90896113e4565b610382676765c793fa10079d601b1b600461137e565b6103ef90886113e4565b610382676765c793fa10079d601b1b600361137e565b61040f90876113e4565b610382676765c793fa10079d601b1b600261137e565b61042f90866113e4565b676765c793fa10079d601b1b90610b83565b61044b90856113e4565b905061046d610466826b08196f2f0c65a776731daf256108fc565b8390610b83565b9250505b505b60008413156104965761049181676765c793fa10079d601b1b6113fc565b610498565b805b949350505050565b60008060006104b284600001516105b4565b905060006104c385604001516105ca565b905060006104e6836104d888602001516105ca565b846101ba8a606001516105ca565b5090506000806104f5836107fa565b915091506105028261088b565b61050b8261088b565b965096505050505050915091565b600080600061052b84600001516105b4565b9050600061053c85604001516105ca565b9050600061054d86606001516105ca565b9050600061055e87608001516105f0565b905060008061057c866105748b602001516105ca565b878787610616565b9150915061058e868686868686610720565b909850965061059c88610824565b6105a588610824565b97509750505050505050915091565b60006105c4826301e13380610b83565b92915050565b60006105d86012601b61143b565b6105e69060ff16600a611542565b6105c4908361137e565b60006105fe6012601b61143b565b61060c9060ff16600a611542565b6105c4908361154e565b6000806106326301e13380676765c793fa10079d601b1b6113b3565b871061063e5786610657565b6106576301e13380676765c793fa10079d601b1b6113b3565b9650610670612710676765c793fa10079d601b1b6113b3565b861061067c5785610693565b610693612710676765c793fa10079d601b1b6113b3565b955060006106aa6106a389610b9b565b88906108fc565b905060006106c06106bb8888610b83565b610bba565b905060006106ef8a8760026106d58d806108fc565b6106df91906113b3565b6106e991906115d3565b90610be0565b9050610705836106ff83856115d3565b90610bf8565b945061071183866113fc565b93505050509550959350505050565b600080806107346106a3610345888c610be0565b9050600061074b610744876102ff565b8a906108fc565b9050600061076261075b876102ff565b84906108fc565b90508181111561077357600061077d565b61077d8183611614565b945061078983866113e4565b9350838a111561079a5760006107a4565b6107a48a85611614565b9350505050965096945050505050565b60008060006107c2846105b4565b905060006107cf85610c10565b905060006107de83888a6108c9565b9050806107eb81846108fc565b94509450505050935093915050565b600080610806836102ff565b915061081d676765c793fa10079d601b1b836113fc565b9050915091565b600080600a6108356012601b61143b565b6108439060ff16600a611542565b61084d91906113b3565b61085790846113b3565b90506005610866600a8361162b565b1061087957610876600a826113e4565b90505b610884600a826113b3565b9392505050565b600080600a61089c6012601b61143b565b6108aa9060ff16600a611542565b6108b4919061163f565b6108be908461163f565b905061088481610c72565b60006104986108db8461038885610cbd565b61038886610b9b565b60008082126108f357816105c4565b6105c4826113c7565b6000610884838361090f601b600a611542565b610ce7565b600061092c610927633b9aca008461163f565b610d36565b6105c490633b9aca0061137e565b6000806c01186756d73741bcf718674000676765c793fa10079d601b1b846b33e7f9eb874906c0804d800082826b05ac40fb9fcbd61a1c5300008261098a836a491cf5ed58c13f0465800061137e565b61099491906113b3565b61099e91906113e4565b6109a8919061137e565b6109b291906113b3565b6109bc91906113e4565b6109c6919061137e565b6109d091906113b3565b6109da91906113e4565b90506c058f0db42aaec2a56c7b580000676765c793fa10079d601b1b846c0a04fde6a089345e53ecce000082826c080b5606775ed46a4938a1800082826c03be40326c6c3695becee9000082610a30838d61137e565b610a3a91906113b3565b610a4491906113e4565b610a4e919061137e565b610a5891906113b3565b610a6291906113e4565b610a6c919061137e565b610a7691906113b3565b610a8091906113e4565b610a8a919061137e565b610a9491906113b3565b61088491906113e4565b6000806b6d9410b9dea0c8f816b18000676765c793fa10079d601b1b846b14986aff6ba446890962200082826b024357e200894d98c57a800082610aed836a1d2b1fc56316da1beb180061137e565b610af791906113b3565b610b0191906113e4565b610b0b919061137e565b610b1591906113b3565b610b1f91906113e4565b610b29919061137e565b610b3391906113b3565b610b3d91906113e4565b90506c02c786da15576152b63dac0000676765c793fa10079d601b1b846c02cac7991589dbf7204867800082826c016a25d126a1a2fc90d761800082610a4e838a61137e565b60006108848383610b96601b600a611542565b610ebc565b60006105c4610bb5676765c793fa10079d601b1b8461137e565b610ed5565b6000610bd2610bcd633b9aca008461163f565b611046565b6105c490633b9aca0061154e565b60006108848383610bf3601b600a611542565b61128b565b60006108848383610c0b601b600a611542565b6112b8565b600062093a808210610c225781610c27565b62093a805b91506000610c3862015180846113b3565b90506000610c52676765c793fa10079d601b1b601e61137e565b90506064610c68610c6384846113b3565b610b9b565b61049891906113b3565b6000806005610c82600a8561166d565b12610c8f5750600a610ca7565b600419610c9d600a8561166d565b13610ca757506009195b600a610cb382856115d3565b610884919061163f565b60006105c46b08196f2f0c65a776731daf25610382610345610ce060028761163f565b8690610be0565b600080610cf5600a846113b3565b610cff858761137e565b610d0991906113b3565b90506005610d18600a8361162b565b10610d2b57610d28600a826113e4565b90505b6102f6600a826113b3565b6000680248ce36a70cb26b3e198213610d5157506000919050565b680755bf798b4a1bf1e58212610d7a5760405163a37bfec960e01b815260040160405180910390fd5b6503782dace9d9604e83901b059150600060606bb17217f7d1cf79abc9e3b39884821b6d2c06887d92262d378b9593af35346c09791803c2923d5d9721c3da80929091056001605f1b0190921d6bb17217f7d1cf79abc9e3b39881029095039081018102606090811d6d019dd9374d4315c8464a395fc09881016c1bff318b126baa436ea9aeaffd19840102821d93840193016d29c9ad45cc0beb0a2ff097a7bab40192909202821d6dcf3c27b2e487711b467e90f19320016c22fcd1cffa6fa000f6e27eeca082018202831d6d022f98fbc368092c79210d196fa0018202831d6d13aaae3ba38de06adc25ebfacc0901820290921d6d624dcbeb5e25df590e409325888a01026d360d7aeea093263ec6495851bd9760621b010574029d9dc38563c32e5c2f6dc192ee70ef65f9978af30260c3939093039290921c92915050565b60008083610ecb84600a61137e565b610cff908761137e565b600081610ee457506000919050565b50600181600160801b8110610efe5760409190911b9060801c5b680100000000000000008110610f195760209190911b9060401c5b6401000000008110610f305760109190911b9060201c5b620100008110610f455760089190911b9060101c5b6101008110610f595760049190911b9060081c5b60108110610f6c5760029190911b9060041c5b60088110610f7c57600182901b91505b6001828481610f8d57610f8d61139d565b048301901c91506001828481610fa557610fa561139d565b048301901c91506001828481610fbd57610fbd61139d565b048301901c91506001828481610fd557610fd561139d565b048301901c91506001828481610fed57610fed61139d565b048301901c915060018284816110055761100561139d565b048301901c9150600182848161101d5761101d61139d565b048301901c915060008284816110355761103561139d565b049050808310156104965782610498565b6000600182121561108c5760008212156110735760405163906dbb0160e01b815260040160405180910390fd5b604051631a93c68960e11b815260040160405180910390fd5b6000606060016fffffffffffffffffffffffffffffffff851160071b85811c67ffffffffffffffff1060061b1785811c63ffffffff1060051b1785811c61ffff1060041b1785811c60ff10600390811b90911786811c600f1060021b1786811c909110821b1785811c919091111703609f8181039490941b90931c6c465772b2bbbb5f824b15207a3081018102606090811d6d0388eaa27412d5aca026815d636e018202811d6d0df99ac502031bf953eff472fdcc018202811d6d13cdffb29d51d99322bdff5f2211018202811d6d0a0f742023def783a307a986912e018202811d6d01920d8043ca89b5239253284e42018202811d6c0b7a86d7375468fac667a0a527016c29508e458543d8aa4df2abee7883018302821d6d0139601a2efabe717e604cbb4894018302821d6d02247f7a7b6594320649aa03aba1018302821d6c8c3f38e95a6b1ff2ab1c3b343619018302821d6d02384773bdf1ac5676facced60901901830290911d6cb9a025d814b29c212b8b1a07cd1901909102780a09507084cc699bb0e71ea869ffffffffffffffffffffffff190105711340daa0d5f769dba1915cef59f0815a5506027d0267a36c0c95b3975ab3ee5b203a7614a3f75373f047d803ae7b6687f2b393909302929092017d57115e47018c7177eebf7cd370a3356a1b7863008a5ae8028c72b88642840160ae1d92915050565b600080611299600a8461163f565b6112a3858761154e565b6112ad919061163f565b90506102f681610c72565b600080836112c784600a61154e565b6112a3908761154e565b600060a082840312156112e357600080fd5b60405160a0810181811067ffffffffffffffff8211171561131457634e487b7160e01b600052604160045260246000fd5b806040525082358152602083013560208201526040830135604082015260608301356060820152608083013560808201528091505092915050565b60006020828403121561136157600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561139857611398611368565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826113c2576113c261139d565b500490565b6000600160ff1b8214156113dd576113dd611368565b5060000390565b600082198211156113f7576113f7611368565b500190565b60008083128015600160ff1b85018412161561141a5761141a611368565b6001600160ff1b038401831381161561143557611435611368565b50500390565b600060ff821660ff84168082101561145557611455611368565b90039392505050565b600181815b8085111561149957816000190482111561147f5761147f611368565b8085161561148c57918102915b93841c9390800290611463565b509250929050565b6000826114b0575060016105c4565b816114bd575060006105c4565b81600181146114d357600281146114dd576114f9565b60019150506105c4565b60ff8411156114ee576114ee611368565b50506001821b6105c4565b5060208310610133831016604e8410600b841016171561151c575081810a6105c4565b611526838361145e565b806000190482111561153a5761153a611368565b029392505050565b600061088483836114a1565b60006001600160ff1b038184138284138082168684048611161561157457611574611368565b600160ff1b600087128281168783058912161561159357611593611368565b600087129250878205871284841616156115af576115af611368565b878505871281841616156115c5576115c5611368565b505050929093029392505050565b600080821280156001600160ff1b03849003851316156115f5576115f5611368565b600160ff1b839003841281161561160e5761160e611368565b50500190565b60008282101561162657611626611368565b500390565b60008261163a5761163a61139d565b500690565b60008261164e5761164e61139d565b600160ff1b82146000198414161561166857611668611368565b500590565b60008261167c5761167c61139d565b50079056fea2646970667358221220058bae2b78f9ab27653853aaae851f65013c2a3e32e1f2a3eadcabc72178106564736f6c63430008090033";

type BlackScholesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BlackScholesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BlackScholes__factory extends ContractFactory {
  constructor(...args: BlackScholesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BlackScholes> {
    return super.deploy(overrides || {}) as Promise<BlackScholes>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BlackScholes {
    return super.attach(address) as BlackScholes;
  }
  connect(signer: Signer): BlackScholes__factory {
    return super.connect(signer) as BlackScholes__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BlackScholesInterface {
    return new utils.Interface(_abi) as BlackScholesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BlackScholes {
    return new Contract(address, _abi, signerOrProvider) as BlackScholes;
  }
}

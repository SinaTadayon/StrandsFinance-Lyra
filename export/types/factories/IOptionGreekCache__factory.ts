/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IOptionGreekCache,
  IOptionGreekCacheInterface,
} from "../IOptionGreekCache";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "thrower",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "boardId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newStrikesLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxStrikesPerBoard",
        type: "uint256",
      },
    ],
    name: "BoardStrikeLimitExceeded",
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
        name: "boardId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentTimestamp",
        type: "uint256",
      },
    ],
    name: "CannotUpdateExpiredBoard",
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
        name: "boardId",
        type: "uint256",
      },
    ],
    name: "InvalidBoardId",
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
        components: [
          {
            internalType: "uint256",
            name: "ivGWAVPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "skewGWAVPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortVolShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortPostCutoffVolShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longVolShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longPostCutoffVolShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidateVolShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidatePostCutoffVolShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortSpotMin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidateSpotMin",
            type: "uint256",
          },
        ],
        internalType: "struct IOptionGreekCache.ForceCloseParameters",
        name: "forceCloseParams",
        type: "tuple",
      },
    ],
    name: "InvalidForceCloseParameters",
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
        components: [
          {
            internalType: "uint256",
            name: "maxStrikesPerBoard",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "acceptableSpotPricePercentMove",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "staleUpdateDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "varianceIvGWAVPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "varianceSkewGWAVPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "optionValueIvGWAVPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "optionValueSkewGWAVPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gwavSkewFloor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gwavSkewCap",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "rateAndCarry",
            type: "int256",
          },
        ],
        internalType: "struct IOptionGreekCache.GreekCacheParameters",
        name: "greekCacheParams",
        type: "tuple",
      },
    ],
    name: "InvalidGreekCacheParameters",
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
        components: [
          {
            internalType: "uint256",
            name: "minStaticQuoteCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minStaticBaseCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shockVolA",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shockVolPointA",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shockVolB",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shockVolPointB",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "callSpotPriceShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "putSpotPriceShock",
            type: "uint256",
          },
        ],
        internalType: "struct IOptionGreekCache.MinCollateralParameters",
        name: "minCollatParams",
        type: "tuple",
      },
    ],
    name: "InvalidMinCollatParams",
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
        name: "optionMarket",
        type: "address",
      },
    ],
    name: "OnlyIOptionMarket",
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
        name: "optionMarketPricer",
        type: "address",
      },
    ],
    name: "OnlyIOptionMarketPricer",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "boardId",
        type: "uint256",
      },
    ],
    name: "BoardCacheRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "strikes",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "iv",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "int256",
                name: "netDelta",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "netStdVega",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "netOptionValue",
                type: "int256",
              },
            ],
            internalType: "struct IOptionGreekCache.NetGreeks",
            name: "netGreeks",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "updatedAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updatedAtPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxSkewVariance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ivVariance",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IOptionGreekCache.OptionBoardCache",
        name: "boardCache",
        type: "tuple",
      },
    ],
    name: "BoardCacheUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "boardId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newIv",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "globalMaxIvVariance",
        type: "uint256",
      },
    ],
    name: "BoardIvUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "ivGWAVPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "skewGWAVPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortVolShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortPostCutoffVolShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longVolShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longPostCutoffVolShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidateVolShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidatePostCutoffVolShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortSpotMin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidateSpotMin",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IOptionGreekCache.ForceCloseParameters",
        name: "params",
        type: "tuple",
      },
    ],
    name: "ForceCloseParametersSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "minUpdatedAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minUpdatedAtPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxUpdatedAtPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxSkewVariance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxIvVariance",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "int256",
                name: "netDelta",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "netStdVega",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "netOptionValue",
                type: "int256",
              },
            ],
            internalType: "struct IOptionGreekCache.NetGreeks",
            name: "netGreeks",
            type: "tuple",
          },
        ],
        indexed: false,
        internalType: "struct IOptionGreekCache.GlobalCache",
        name: "globalCache",
        type: "tuple",
      },
    ],
    name: "GlobalCacheUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "maxStrikesPerBoard",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "acceptableSpotPricePercentMove",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "staleUpdateDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "varianceIvGWAVPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "varianceSkewGWAVPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "optionValueIvGWAVPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "optionValueSkewGWAVPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gwavSkewFloor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gwavSkewCap",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "rateAndCarry",
            type: "int256",
          },
        ],
        indexed: false,
        internalType: "struct IOptionGreekCache.GreekCacheParameters",
        name: "params",
        type: "tuple",
      },
    ],
    name: "GreekCacheParametersSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "minStaticQuoteCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minStaticBaseCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shockVolA",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shockVolPointA",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shockVolB",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shockVolPointB",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "callSpotPriceShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "putSpotPriceShock",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IOptionGreekCache.MinCollateralParameters",
        name: "params",
        type: "tuple",
      },
    ],
    name: "MinCollateralParametersSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "strikeId",
        type: "uint256",
      },
    ],
    name: "StrikeCacheRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "boardId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strikePrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "skew",
            type: "uint256",
          },
          {
            components: [
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
                name: "stdVega",
                type: "uint256",
              },
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
            internalType: "struct IOptionGreekCache.StrikeGreeks",
            name: "greeks",
            type: "tuple",
          },
          {
            internalType: "int256",
            name: "callExposure",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "putExposure",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "skewVariance",
            type: "uint256",
          },
        ],
        indexed: false,
        internalType: "struct IOptionGreekCache.StrikeCache",
        name: "strikeCache",
        type: "tuple",
      },
    ],
    name: "StrikeCacheUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "strikeId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newSkew",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "globalMaxSkewVariance",
        type: "uint256",
      },
    ],
    name: "StrikeSkewUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "boardId",
        type: "uint256",
      },
    ],
    name: "getBoardGreeksView",
    outputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "int256",
                name: "netDelta",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "netStdVega",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "netOptionValue",
                type: "int256",
              },
            ],
            internalType: "struct IOptionGreekCache.NetGreeks",
            name: "boardGreeks",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "ivGWAV",
            type: "uint256",
          },
          {
            components: [
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
                name: "stdVega",
                type: "uint256",
              },
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
            internalType: "struct IOptionGreekCache.StrikeGreeks[]",
            name: "strikeGreeks",
            type: "tuple[]",
          },
          {
            internalType: "uint256[]",
            name: "skewGWAVs",
            type: "uint256[]",
          },
        ],
        internalType: "struct IOptionGreekCache.BoardGreeksView",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getForceCloseParams",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "ivGWAVPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "skewGWAVPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortVolShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortPostCutoffVolShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longVolShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longPostCutoffVolShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidateVolShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidatePostCutoffVolShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortSpotMin",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "liquidateSpotMin",
            type: "uint256",
          },
        ],
        internalType: "struct IOptionGreekCache.ForceCloseParameters",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGlobalCache",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "minUpdatedAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minUpdatedAtPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxUpdatedAtPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxSkewVariance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxIvVariance",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "int256",
                name: "netDelta",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "netStdVega",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "netOptionValue",
                type: "int256",
              },
            ],
            internalType: "struct IOptionGreekCache.NetGreeks",
            name: "netGreeks",
            type: "tuple",
          },
        ],
        internalType: "struct IOptionGreekCache.GlobalCache",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getGlobalNetDelta",
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
    inputs: [],
    name: "getGlobalOptionValue",
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
    inputs: [],
    name: "getGreekCacheParams",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "maxStrikesPerBoard",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "acceptableSpotPricePercentMove",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "staleUpdateDuration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "varianceIvGWAVPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "varianceSkewGWAVPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "optionValueIvGWAVPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "optionValueSkewGWAVPeriod",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gwavSkewFloor",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "gwavSkewCap",
            type: "uint256",
          },
          {
            internalType: "int256",
            name: "rateAndCarry",
            type: "int256",
          },
        ],
        internalType: "struct IOptionGreekCache.GreekCacheParameters",
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
    name: "getIvGWAV",
    outputs: [
      {
        internalType: "uint256",
        name: "ivGWAV",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinCollatParams",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "minStaticQuoteCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minStaticBaseCollateral",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shockVolA",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shockVolPointA",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shockVolB",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shockVolPointB",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "callSpotPriceShock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "putSpotPriceShock",
            type: "uint256",
          },
        ],
        internalType: "struct IOptionGreekCache.MinCollateralParameters",
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
        internalType: "enum IOptionMarket.OptionType",
        name: "optionType",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "strikePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "spotPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "getMinCollateral",
    outputs: [
      {
        internalType: "uint256",
        name: "minCollateral",
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
        name: "boardId",
        type: "uint256",
      },
    ],
    name: "getOptionBoardCache",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256[]",
            name: "strikes",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "iv",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "int256",
                name: "netDelta",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "netStdVega",
                type: "int256",
              },
              {
                internalType: "int256",
                name: "netOptionValue",
                type: "int256",
              },
            ],
            internalType: "struct IOptionGreekCache.NetGreeks",
            name: "netGreeks",
            type: "tuple",
          },
          {
            internalType: "uint256",
            name: "updatedAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "updatedAtPrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxSkewVariance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "ivVariance",
            type: "uint256",
          },
        ],
        internalType: "struct IOptionGreekCache.OptionBoardCache",
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
        components: [
          {
            internalType: "bool",
            name: "isBuy",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isForceClose",
            type: "bool",
          },
          {
            internalType: "enum IOptionMarket.TradeDirection",
            name: "tradeDirection",
            type: "uint8",
          },
          {
            internalType: "enum IOptionMarket.OptionType",
            name: "optionType",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strikePrice",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "freeLiquidity",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "burnableLiquidity",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "usedCollatLiquidity",
                type: "uint256",
              },
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
              {
                internalType: "uint256",
                name: "NAV",
                type: "uint256",
              },
            ],
            internalType: "struct ILiquidityPool.Liquidity",
            name: "liquidity",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "spotPrice",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "quoteKey",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "baseKey",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "quoteBaseFeeRate",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "baseQuoteFeeRate",
                type: "uint256",
              },
            ],
            internalType: "struct ISynthetixAdapter.ExchangeParams",
            name: "exchangeParams",
            type: "tuple",
          },
        ],
        internalType: "struct IOptionMarket.TradeParameters",
        name: "trade",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strikePrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "skew",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longCall",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortCallBase",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortCallQuote",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "longPut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "shortPut",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "boardId",
            type: "uint256",
          },
        ],
        internalType: "struct IOptionMarket.Strike",
        name: "strike",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "newVol",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isPostCutoff",
        type: "bool",
      },
    ],
    name: "getPriceForForceClose",
    outputs: [
      {
        internalType: "uint256",
        name: "optionPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "forceCloseVol",
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
        name: "timeToMaturity",
        type: "uint256",
      },
    ],
    name: "getShockVol",
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
    name: "getSkewGWAV",
    outputs: [
      {
        internalType: "uint256",
        name: "skewGWAV",
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
    ],
    name: "getStrikeCache",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "boardId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "strikePrice",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "skew",
            type: "uint256",
          },
          {
            components: [
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
                name: "stdVega",
                type: "uint256",
              },
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
            internalType: "struct IOptionGreekCache.StrikeGreeks",
            name: "greeks",
            type: "tuple",
          },
          {
            internalType: "int256",
            name: "callExposure",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "putExposure",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "skewVariance",
            type: "uint256",
          },
        ],
        internalType: "struct IOptionGreekCache.StrikeCache",
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
        internalType: "uint256",
        name: "boardId",
        type: "uint256",
      },
    ],
    name: "isBoardCacheStale",
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
        name: "spotPrice",
        type: "uint256",
      },
    ],
    name: "isGlobalCacheStale",
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
        name: "boardId",
        type: "uint256",
      },
    ],
    name: "updateBoardCachedGreeks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IOptionGreekCache__factory {
  static readonly abi = _abi;
  static createInterface(): IOptionGreekCacheInterface {
    return new utils.Interface(_abi) as IOptionGreekCacheInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOptionGreekCache {
    return new Contract(address, _abi, signerOrProvider) as IOptionGreekCache;
  }
}
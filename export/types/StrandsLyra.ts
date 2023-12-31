/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface StrandsLyraInterface extends utils.Interface {
  functions: {
    "baseAsset()": FunctionFragment;
    "buyStraddle(uint256,uint256)": FunctionFragment;
    "curveSwap()": FunctionFragment;
    "feeCounter()": FunctionFragment;
    "getPositionId(address,uint256)": FunctionFragment;
    "greekCache()": FunctionFragment;
    "gwavOracle()": FunctionFragment;
    "initAdapter(address,address,address,address)": FunctionFragment;
    "liquidityPool()": FunctionFragment;
    "lyraRegistry()": FunctionFragment;
    "optionMarket()": FunctionFragment;
    "optionPricer()": FunctionFragment;
    "optionToken()": FunctionFragment;
    "owner()": FunctionFragment;
    "quoteAsset()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setLyraAddresses(address,address,address,address)": FunctionFragment;
    "shortCollateral()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateDelegateApproval()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "baseAsset", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "buyStraddle",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "curveSwap", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPositionId",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "greekCache",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "gwavOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initAdapter",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lyraRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "optionMarket",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "optionPricer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "optionToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "quoteAsset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setLyraAddresses",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "shortCollateral",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateDelegateApproval",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "baseAsset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "buyStraddle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "curveSwap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeCounter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPositionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "greekCache", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gwavOracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "initAdapter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidityPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lyraRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "optionMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "optionPricer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "optionToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "quoteAsset", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLyraAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shortCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDelegateApproval",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface StrandsLyra extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StrandsLyraInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    baseAsset(overrides?: CallOverrides): Promise<[string]>;

    "baseAsset()"(overrides?: CallOverrides): Promise<[string]>;

    buyStraddle(
      strikeId: BigNumberish,
      size: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "buyStraddle(uint256,uint256)"(
      strikeId: BigNumberish,
      size: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    curveSwap(overrides?: CallOverrides): Promise<[string]>;

    "curveSwap()"(overrides?: CallOverrides): Promise<[string]>;

    feeCounter(overrides?: CallOverrides): Promise<[string]>;

    "feeCounter()"(overrides?: CallOverrides): Promise<[string]>;

    getPositionId(
      trader: string,
      strikeId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "getPositionId(address,uint256)"(
      trader: string,
      strikeId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    greekCache(overrides?: CallOverrides): Promise<[string]>;

    "greekCache()"(overrides?: CallOverrides): Promise<[string]>;

    gwavOracle(overrides?: CallOverrides): Promise<[string]>;

    "gwavOracle()"(overrides?: CallOverrides): Promise<[string]>;

    initAdapter(
      _lyraRegistry: string,
      _optionMarket: string,
      _curveSwap: string,
      _feeCounter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initAdapter(address,address,address,address)"(
      _lyraRegistry: string,
      _optionMarket: string,
      _curveSwap: string,
      _feeCounter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    liquidityPool(overrides?: CallOverrides): Promise<[string]>;

    "liquidityPool()"(overrides?: CallOverrides): Promise<[string]>;

    lyraRegistry(overrides?: CallOverrides): Promise<[string]>;

    "lyraRegistry()"(overrides?: CallOverrides): Promise<[string]>;

    optionMarket(overrides?: CallOverrides): Promise<[string]>;

    "optionMarket()"(overrides?: CallOverrides): Promise<[string]>;

    optionPricer(overrides?: CallOverrides): Promise<[string]>;

    "optionPricer()"(overrides?: CallOverrides): Promise<[string]>;

    optionToken(overrides?: CallOverrides): Promise<[string]>;

    "optionToken()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    quoteAsset(overrides?: CallOverrides): Promise<[string]>;

    "quoteAsset()"(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLyraAddresses(
      _lyraRegistry: string,
      _optionMarket: string,
      _curveSwap: string,
      _feeCounter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setLyraAddresses(address,address,address,address)"(
      _lyraRegistry: string,
      _optionMarket: string,
      _curveSwap: string,
      _feeCounter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    shortCollateral(overrides?: CallOverrides): Promise<[string]>;

    "shortCollateral()"(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateDelegateApproval(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateDelegateApproval()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  baseAsset(overrides?: CallOverrides): Promise<string>;

  "baseAsset()"(overrides?: CallOverrides): Promise<string>;

  buyStraddle(
    strikeId: BigNumberish,
    size: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "buyStraddle(uint256,uint256)"(
    strikeId: BigNumberish,
    size: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  curveSwap(overrides?: CallOverrides): Promise<string>;

  "curveSwap()"(overrides?: CallOverrides): Promise<string>;

  feeCounter(overrides?: CallOverrides): Promise<string>;

  "feeCounter()"(overrides?: CallOverrides): Promise<string>;

  getPositionId(
    trader: string,
    strikeId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "getPositionId(address,uint256)"(
    trader: string,
    strikeId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  greekCache(overrides?: CallOverrides): Promise<string>;

  "greekCache()"(overrides?: CallOverrides): Promise<string>;

  gwavOracle(overrides?: CallOverrides): Promise<string>;

  "gwavOracle()"(overrides?: CallOverrides): Promise<string>;

  initAdapter(
    _lyraRegistry: string,
    _optionMarket: string,
    _curveSwap: string,
    _feeCounter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initAdapter(address,address,address,address)"(
    _lyraRegistry: string,
    _optionMarket: string,
    _curveSwap: string,
    _feeCounter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  liquidityPool(overrides?: CallOverrides): Promise<string>;

  "liquidityPool()"(overrides?: CallOverrides): Promise<string>;

  lyraRegistry(overrides?: CallOverrides): Promise<string>;

  "lyraRegistry()"(overrides?: CallOverrides): Promise<string>;

  optionMarket(overrides?: CallOverrides): Promise<string>;

  "optionMarket()"(overrides?: CallOverrides): Promise<string>;

  optionPricer(overrides?: CallOverrides): Promise<string>;

  "optionPricer()"(overrides?: CallOverrides): Promise<string>;

  optionToken(overrides?: CallOverrides): Promise<string>;

  "optionToken()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  quoteAsset(overrides?: CallOverrides): Promise<string>;

  "quoteAsset()"(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "renounceOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLyraAddresses(
    _lyraRegistry: string,
    _optionMarket: string,
    _curveSwap: string,
    _feeCounter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setLyraAddresses(address,address,address,address)"(
    _lyraRegistry: string,
    _optionMarket: string,
    _curveSwap: string,
    _feeCounter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  shortCollateral(overrides?: CallOverrides): Promise<string>;

  "shortCollateral()"(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateDelegateApproval(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateDelegateApproval()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    baseAsset(overrides?: CallOverrides): Promise<string>;

    "baseAsset()"(overrides?: CallOverrides): Promise<string>;

    buyStraddle(
      strikeId: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "buyStraddle(uint256,uint256)"(
      strikeId: BigNumberish,
      size: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    curveSwap(overrides?: CallOverrides): Promise<string>;

    "curveSwap()"(overrides?: CallOverrides): Promise<string>;

    feeCounter(overrides?: CallOverrides): Promise<string>;

    "feeCounter()"(overrides?: CallOverrides): Promise<string>;

    getPositionId(
      trader: string,
      strikeId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "getPositionId(address,uint256)"(
      trader: string,
      strikeId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    greekCache(overrides?: CallOverrides): Promise<string>;

    "greekCache()"(overrides?: CallOverrides): Promise<string>;

    gwavOracle(overrides?: CallOverrides): Promise<string>;

    "gwavOracle()"(overrides?: CallOverrides): Promise<string>;

    initAdapter(
      _lyraRegistry: string,
      _optionMarket: string,
      _curveSwap: string,
      _feeCounter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "initAdapter(address,address,address,address)"(
      _lyraRegistry: string,
      _optionMarket: string,
      _curveSwap: string,
      _feeCounter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    liquidityPool(overrides?: CallOverrides): Promise<string>;

    "liquidityPool()"(overrides?: CallOverrides): Promise<string>;

    lyraRegistry(overrides?: CallOverrides): Promise<string>;

    "lyraRegistry()"(overrides?: CallOverrides): Promise<string>;

    optionMarket(overrides?: CallOverrides): Promise<string>;

    "optionMarket()"(overrides?: CallOverrides): Promise<string>;

    optionPricer(overrides?: CallOverrides): Promise<string>;

    "optionPricer()"(overrides?: CallOverrides): Promise<string>;

    optionToken(overrides?: CallOverrides): Promise<string>;

    "optionToken()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    quoteAsset(overrides?: CallOverrides): Promise<string>;

    "quoteAsset()"(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setLyraAddresses(
      _lyraRegistry: string,
      _optionMarket: string,
      _curveSwap: string,
      _feeCounter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setLyraAddresses(address,address,address,address)"(
      _lyraRegistry: string,
      _optionMarket: string,
      _curveSwap: string,
      _feeCounter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    shortCollateral(overrides?: CallOverrides): Promise<string>;

    "shortCollateral()"(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateDelegateApproval(overrides?: CallOverrides): Promise<void>;

    "updateDelegateApproval()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    baseAsset(overrides?: CallOverrides): Promise<BigNumber>;

    "baseAsset()"(overrides?: CallOverrides): Promise<BigNumber>;

    buyStraddle(
      strikeId: BigNumberish,
      size: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "buyStraddle(uint256,uint256)"(
      strikeId: BigNumberish,
      size: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    curveSwap(overrides?: CallOverrides): Promise<BigNumber>;

    "curveSwap()"(overrides?: CallOverrides): Promise<BigNumber>;

    feeCounter(overrides?: CallOverrides): Promise<BigNumber>;

    "feeCounter()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPositionId(
      trader: string,
      strikeId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPositionId(address,uint256)"(
      trader: string,
      strikeId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    greekCache(overrides?: CallOverrides): Promise<BigNumber>;

    "greekCache()"(overrides?: CallOverrides): Promise<BigNumber>;

    gwavOracle(overrides?: CallOverrides): Promise<BigNumber>;

    "gwavOracle()"(overrides?: CallOverrides): Promise<BigNumber>;

    initAdapter(
      _lyraRegistry: string,
      _optionMarket: string,
      _curveSwap: string,
      _feeCounter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initAdapter(address,address,address,address)"(
      _lyraRegistry: string,
      _optionMarket: string,
      _curveSwap: string,
      _feeCounter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    liquidityPool(overrides?: CallOverrides): Promise<BigNumber>;

    "liquidityPool()"(overrides?: CallOverrides): Promise<BigNumber>;

    lyraRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    "lyraRegistry()"(overrides?: CallOverrides): Promise<BigNumber>;

    optionMarket(overrides?: CallOverrides): Promise<BigNumber>;

    "optionMarket()"(overrides?: CallOverrides): Promise<BigNumber>;

    optionPricer(overrides?: CallOverrides): Promise<BigNumber>;

    "optionPricer()"(overrides?: CallOverrides): Promise<BigNumber>;

    optionToken(overrides?: CallOverrides): Promise<BigNumber>;

    "optionToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    quoteAsset(overrides?: CallOverrides): Promise<BigNumber>;

    "quoteAsset()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLyraAddresses(
      _lyraRegistry: string,
      _optionMarket: string,
      _curveSwap: string,
      _feeCounter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setLyraAddresses(address,address,address,address)"(
      _lyraRegistry: string,
      _optionMarket: string,
      _curveSwap: string,
      _feeCounter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    shortCollateral(overrides?: CallOverrides): Promise<BigNumber>;

    "shortCollateral()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateDelegateApproval(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateDelegateApproval()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    baseAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "baseAsset()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buyStraddle(
      strikeId: BigNumberish,
      size: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "buyStraddle(uint256,uint256)"(
      strikeId: BigNumberish,
      size: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    curveSwap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "curveSwap()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeCounter(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "feeCounter()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPositionId(
      trader: string,
      strikeId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPositionId(address,uint256)"(
      trader: string,
      strikeId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    greekCache(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "greekCache()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gwavOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "gwavOracle()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initAdapter(
      _lyraRegistry: string,
      _optionMarket: string,
      _curveSwap: string,
      _feeCounter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initAdapter(address,address,address,address)"(
      _lyraRegistry: string,
      _optionMarket: string,
      _curveSwap: string,
      _feeCounter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    liquidityPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "liquidityPool()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lyraRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lyraRegistry()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    optionMarket(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "optionMarket()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    optionPricer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "optionPricer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    optionToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "optionToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    quoteAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "quoteAsset()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "renounceOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLyraAddresses(
      _lyraRegistry: string,
      _optionMarket: string,
      _curveSwap: string,
      _feeCounter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setLyraAddresses(address,address,address,address)"(
      _lyraRegistry: string,
      _optionMarket: string,
      _curveSwap: string,
      _feeCounter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    shortCollateral(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "shortCollateral()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateDelegateApproval(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateDelegateApproval()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

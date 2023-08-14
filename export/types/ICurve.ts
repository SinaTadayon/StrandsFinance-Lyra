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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ICurveInterface extends utils.Interface {
  functions: {
    "exchange_underlying(int128,int128,uint256,uint256)": FunctionFragment;
    "exchange_with_best_rate(address,address,uint256,uint256,address)": FunctionFragment;
    "get_best_rate(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "exchange_underlying",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exchange_with_best_rate",
    values: [string, string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "get_best_rate",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "exchange_underlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchange_with_best_rate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "get_best_rate",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ICurve extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICurveInterface;

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
    exchange_underlying(
      _from: BigNumberish,
      _to: BigNumberish,
      _amount: BigNumberish,
      _expected: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "exchange_underlying(int128,int128,uint256,uint256)"(
      _from: BigNumberish,
      _to: BigNumberish,
      _amount: BigNumberish,
      _expected: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exchange_with_best_rate(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _expected: BigNumberish,
      _receiver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "exchange_with_best_rate(address,address,uint256,uint256,address)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _expected: BigNumberish,
      _receiver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    get_best_rate(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { pool: string; amountOut: BigNumber }>;

    "get_best_rate(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { pool: string; amountOut: BigNumber }>;
  };

  exchange_underlying(
    _from: BigNumberish,
    _to: BigNumberish,
    _amount: BigNumberish,
    _expected: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "exchange_underlying(int128,int128,uint256,uint256)"(
    _from: BigNumberish,
    _to: BigNumberish,
    _amount: BigNumberish,
    _expected: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exchange_with_best_rate(
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _expected: BigNumberish,
    _receiver: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "exchange_with_best_rate(address,address,uint256,uint256,address)"(
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _expected: BigNumberish,
    _receiver: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  get_best_rate(
    _from: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { pool: string; amountOut: BigNumber }>;

  "get_best_rate(address,address,uint256)"(
    _from: string,
    _to: string,
    _amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { pool: string; amountOut: BigNumber }>;

  callStatic: {
    exchange_underlying(
      _from: BigNumberish,
      _to: BigNumberish,
      _amount: BigNumberish,
      _expected: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exchange_underlying(int128,int128,uint256,uint256)"(
      _from: BigNumberish,
      _to: BigNumberish,
      _amount: BigNumberish,
      _expected: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchange_with_best_rate(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _expected: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exchange_with_best_rate(address,address,uint256,uint256,address)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _expected: BigNumberish,
      _receiver: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    get_best_rate(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { pool: string; amountOut: BigNumber }>;

    "get_best_rate(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { pool: string; amountOut: BigNumber }>;
  };

  filters: {};

  estimateGas: {
    exchange_underlying(
      _from: BigNumberish,
      _to: BigNumberish,
      _amount: BigNumberish,
      _expected: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "exchange_underlying(int128,int128,uint256,uint256)"(
      _from: BigNumberish,
      _to: BigNumberish,
      _amount: BigNumberish,
      _expected: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exchange_with_best_rate(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _expected: BigNumberish,
      _receiver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "exchange_with_best_rate(address,address,uint256,uint256,address)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _expected: BigNumberish,
      _receiver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    get_best_rate(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "get_best_rate(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    exchange_underlying(
      _from: BigNumberish,
      _to: BigNumberish,
      _amount: BigNumberish,
      _expected: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "exchange_underlying(int128,int128,uint256,uint256)"(
      _from: BigNumberish,
      _to: BigNumberish,
      _amount: BigNumberish,
      _expected: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exchange_with_best_rate(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _expected: BigNumberish,
      _receiver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "exchange_with_best_rate(address,address,uint256,uint256,address)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _expected: BigNumberish,
      _receiver: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    get_best_rate(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "get_best_rate(address,address,uint256)"(
      _from: string,
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SignedDecimalMathInterface extends utils.Interface {
  functions: {
    "PRECISE_UNIT()": FunctionFragment;
    "UNIT()": FunctionFragment;
    "decimals()": FunctionFragment;
    "highPrecisionDecimals()": FunctionFragment;
    "preciseUnit()": FunctionFragment;
    "unit()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "PRECISE_UNIT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "UNIT", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "highPrecisionDecimals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "preciseUnit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unit", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "PRECISE_UNIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "UNIT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "highPrecisionDecimals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "preciseUnit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unit", data: BytesLike): Result;

  events: {};
}

export interface SignedDecimalMath extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SignedDecimalMathInterface;

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
    PRECISE_UNIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    "PRECISE_UNIT()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    UNIT(overrides?: CallOverrides): Promise<[BigNumber]>;

    "UNIT()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    "decimals()"(overrides?: CallOverrides): Promise<[number]>;

    highPrecisionDecimals(overrides?: CallOverrides): Promise<[number]>;

    "highPrecisionDecimals()"(overrides?: CallOverrides): Promise<[number]>;

    preciseUnit(overrides?: CallOverrides): Promise<[BigNumber]>;

    "preciseUnit()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    unit(overrides?: CallOverrides): Promise<[BigNumber]>;

    "unit()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  PRECISE_UNIT(overrides?: CallOverrides): Promise<BigNumber>;

  "PRECISE_UNIT()"(overrides?: CallOverrides): Promise<BigNumber>;

  UNIT(overrides?: CallOverrides): Promise<BigNumber>;

  "UNIT()"(overrides?: CallOverrides): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  "decimals()"(overrides?: CallOverrides): Promise<number>;

  highPrecisionDecimals(overrides?: CallOverrides): Promise<number>;

  "highPrecisionDecimals()"(overrides?: CallOverrides): Promise<number>;

  preciseUnit(overrides?: CallOverrides): Promise<BigNumber>;

  "preciseUnit()"(overrides?: CallOverrides): Promise<BigNumber>;

  unit(overrides?: CallOverrides): Promise<BigNumber>;

  "unit()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    PRECISE_UNIT(overrides?: CallOverrides): Promise<BigNumber>;

    "PRECISE_UNIT()"(overrides?: CallOverrides): Promise<BigNumber>;

    UNIT(overrides?: CallOverrides): Promise<BigNumber>;

    "UNIT()"(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    "decimals()"(overrides?: CallOverrides): Promise<number>;

    highPrecisionDecimals(overrides?: CallOverrides): Promise<number>;

    "highPrecisionDecimals()"(overrides?: CallOverrides): Promise<number>;

    preciseUnit(overrides?: CallOverrides): Promise<BigNumber>;

    "preciseUnit()"(overrides?: CallOverrides): Promise<BigNumber>;

    unit(overrides?: CallOverrides): Promise<BigNumber>;

    "unit()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    PRECISE_UNIT(overrides?: CallOverrides): Promise<BigNumber>;

    "PRECISE_UNIT()"(overrides?: CallOverrides): Promise<BigNumber>;

    UNIT(overrides?: CallOverrides): Promise<BigNumber>;

    "UNIT()"(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    "decimals()"(overrides?: CallOverrides): Promise<BigNumber>;

    highPrecisionDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    "highPrecisionDecimals()"(overrides?: CallOverrides): Promise<BigNumber>;

    preciseUnit(overrides?: CallOverrides): Promise<BigNumber>;

    "preciseUnit()"(overrides?: CallOverrides): Promise<BigNumber>;

    unit(overrides?: CallOverrides): Promise<BigNumber>;

    "unit()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    PRECISE_UNIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "PRECISE_UNIT()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    UNIT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "UNIT()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "decimals()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    highPrecisionDecimals(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "highPrecisionDecimals()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    preciseUnit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "preciseUnit()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "unit()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

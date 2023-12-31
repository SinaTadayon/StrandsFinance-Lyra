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

export interface IExchangerInterface extends utils.Interface {
  functions: {
    "feeRateForExchange(bytes32,bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "feeRateForExchange",
    values: [BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "feeRateForExchange",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IExchanger extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IExchangerInterface;

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
    feeRateForExchange(
      sourceCurrencyKey: BytesLike,
      destinationCurrencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { exchangeFeeRate: BigNumber }>;

    "feeRateForExchange(bytes32,bytes32)"(
      sourceCurrencyKey: BytesLike,
      destinationCurrencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { exchangeFeeRate: BigNumber }>;
  };

  feeRateForExchange(
    sourceCurrencyKey: BytesLike,
    destinationCurrencyKey: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "feeRateForExchange(bytes32,bytes32)"(
    sourceCurrencyKey: BytesLike,
    destinationCurrencyKey: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    feeRateForExchange(
      sourceCurrencyKey: BytesLike,
      destinationCurrencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "feeRateForExchange(bytes32,bytes32)"(
      sourceCurrencyKey: BytesLike,
      destinationCurrencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    feeRateForExchange(
      sourceCurrencyKey: BytesLike,
      destinationCurrencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "feeRateForExchange(bytes32,bytes32)"(
      sourceCurrencyKey: BytesLike,
      destinationCurrencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    feeRateForExchange(
      sourceCurrencyKey: BytesLike,
      destinationCurrencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "feeRateForExchange(bytes32,bytes32)"(
      sourceCurrencyKey: BytesLike,
      destinationCurrencyKey: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

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

export interface IShortCollateralInterface extends utils.Interface {
  functions: {
    "LPBaseExcess()": FunctionFragment;
    "LPQuoteExcess()": FunctionFragment;
    "settleOptions(uint256[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "LPBaseExcess",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LPQuoteExcess",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "settleOptions",
    values: [BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "LPBaseExcess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LPQuoteExcess",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "settleOptions",
    data: BytesLike
  ): Result;

  events: {
    "BaseExchangedAndQuoteSent(address,uint256,uint256)": EventFragment;
    "BaseSent(address,uint256)": EventFragment;
    "BoardSettlementCollateralSent(uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "PositionSettled(uint256,address,address,uint256,uint256,uint8,uint256,uint256,uint256)": EventFragment;
    "QuoteSent(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BaseExchangedAndQuoteSent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BaseSent"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "BoardSettlementCollateralSent"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PositionSettled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "QuoteSent"): EventFragment;
}

export type BaseExchangedAndQuoteSentEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { recipient: string; amountBase: BigNumber; quoteReceived: BigNumber }
>;

export type BaseExchangedAndQuoteSentEventFilter =
  TypedEventFilter<BaseExchangedAndQuoteSentEvent>;

export type BaseSentEvent = TypedEvent<
  [string, BigNumber],
  { receiver: string; amount: BigNumber }
>;

export type BaseSentEventFilter = TypedEventFilter<BaseSentEvent>;

export type BoardSettlementCollateralSentEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    amountBaseSent: BigNumber;
    amountQuoteSent: BigNumber;
    lpBaseInsolvency: BigNumber;
    lpQuoteInsolvency: BigNumber;
    LPBaseExcess: BigNumber;
    LPQuoteExcess: BigNumber;
  }
>;

export type BoardSettlementCollateralSentEventFilter =
  TypedEventFilter<BoardSettlementCollateralSentEvent>;

export type PositionSettledEvent = TypedEvent<
  [
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    number,
    BigNumber,
    BigNumber,
    BigNumber
  ],
  {
    positionId: BigNumber;
    settler: string;
    optionOwner: string;
    strikePrice: BigNumber;
    priceAtExpiry: BigNumber;
    optionType: number;
    amount: BigNumber;
    settlementAmount: BigNumber;
    insolventAmount: BigNumber;
  }
>;

export type PositionSettledEventFilter = TypedEventFilter<PositionSettledEvent>;

export type QuoteSentEvent = TypedEvent<
  [string, BigNumber],
  { receiver: string; amount: BigNumber }
>;

export type QuoteSentEventFilter = TypedEventFilter<QuoteSentEvent>;

export interface IShortCollateral extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IShortCollateralInterface;

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
    LPBaseExcess(overrides?: CallOverrides): Promise<[BigNumber]>;

    "LPBaseExcess()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    LPQuoteExcess(overrides?: CallOverrides): Promise<[BigNumber]>;

    "LPQuoteExcess()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    settleOptions(
      positionIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "settleOptions(uint256[])"(
      positionIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  LPBaseExcess(overrides?: CallOverrides): Promise<BigNumber>;

  "LPBaseExcess()"(overrides?: CallOverrides): Promise<BigNumber>;

  LPQuoteExcess(overrides?: CallOverrides): Promise<BigNumber>;

  "LPQuoteExcess()"(overrides?: CallOverrides): Promise<BigNumber>;

  settleOptions(
    positionIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "settleOptions(uint256[])"(
    positionIds: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    LPBaseExcess(overrides?: CallOverrides): Promise<BigNumber>;

    "LPBaseExcess()"(overrides?: CallOverrides): Promise<BigNumber>;

    LPQuoteExcess(overrides?: CallOverrides): Promise<BigNumber>;

    "LPQuoteExcess()"(overrides?: CallOverrides): Promise<BigNumber>;

    settleOptions(
      positionIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "settleOptions(uint256[])"(
      positionIds: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BaseExchangedAndQuoteSent(address,uint256,uint256)"(
      recipient?: string | null,
      amountBase?: null,
      quoteReceived?: null
    ): BaseExchangedAndQuoteSentEventFilter;
    BaseExchangedAndQuoteSent(
      recipient?: string | null,
      amountBase?: null,
      quoteReceived?: null
    ): BaseExchangedAndQuoteSentEventFilter;

    "BaseSent(address,uint256)"(
      receiver?: string | null,
      amount?: null
    ): BaseSentEventFilter;
    BaseSent(receiver?: string | null, amount?: null): BaseSentEventFilter;

    "BoardSettlementCollateralSent(uint256,uint256,uint256,uint256,uint256,uint256)"(
      amountBaseSent?: null,
      amountQuoteSent?: null,
      lpBaseInsolvency?: null,
      lpQuoteInsolvency?: null,
      LPBaseExcess?: null,
      LPQuoteExcess?: null
    ): BoardSettlementCollateralSentEventFilter;
    BoardSettlementCollateralSent(
      amountBaseSent?: null,
      amountQuoteSent?: null,
      lpBaseInsolvency?: null,
      lpQuoteInsolvency?: null,
      LPBaseExcess?: null,
      LPQuoteExcess?: null
    ): BoardSettlementCollateralSentEventFilter;

    "PositionSettled(uint256,address,address,uint256,uint256,uint8,uint256,uint256,uint256)"(
      positionId?: BigNumberish | null,
      settler?: string | null,
      optionOwner?: string | null,
      strikePrice?: null,
      priceAtExpiry?: null,
      optionType?: null,
      amount?: null,
      settlementAmount?: null,
      insolventAmount?: null
    ): PositionSettledEventFilter;
    PositionSettled(
      positionId?: BigNumberish | null,
      settler?: string | null,
      optionOwner?: string | null,
      strikePrice?: null,
      priceAtExpiry?: null,
      optionType?: null,
      amount?: null,
      settlementAmount?: null,
      insolventAmount?: null
    ): PositionSettledEventFilter;

    "QuoteSent(address,uint256)"(
      receiver?: string | null,
      amount?: null
    ): QuoteSentEventFilter;
    QuoteSent(receiver?: string | null, amount?: null): QuoteSentEventFilter;
  };

  estimateGas: {
    LPBaseExcess(overrides?: CallOverrides): Promise<BigNumber>;

    "LPBaseExcess()"(overrides?: CallOverrides): Promise<BigNumber>;

    LPQuoteExcess(overrides?: CallOverrides): Promise<BigNumber>;

    "LPQuoteExcess()"(overrides?: CallOverrides): Promise<BigNumber>;

    settleOptions(
      positionIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "settleOptions(uint256[])"(
      positionIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    LPBaseExcess(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "LPBaseExcess()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LPQuoteExcess(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "LPQuoteExcess()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    settleOptions(
      positionIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "settleOptions(uint256[])"(
      positionIds: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

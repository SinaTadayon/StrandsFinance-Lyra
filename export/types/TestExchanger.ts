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

export interface TestExchangerInterface extends utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "feeRateForExchange(bytes32,bytes32)": FunctionFragment;
    "nominateNewOwner(address)": FunctionFragment;
    "nominatedOwner()": FunctionFragment;
    "owner()": FunctionFragment;
    "setFeeRateForExchange(bytes32,bytes32,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeRateForExchange",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "nominateNewOwner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "nominatedOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setFeeRateForExchange",
    values: [BytesLike, BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeRateForExchange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nominateNewOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nominatedOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFeeRateForExchange",
    data: BytesLike
  ): Result;

  events: {
    "OwnerChanged(address,address)": EventFragment;
    "OwnerNominated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerNominated"): EventFragment;
}

export type OwnerChangedEvent = TypedEvent<
  [string, string],
  { oldOwner: string; newOwner: string }
>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export type OwnerNominatedEvent = TypedEvent<[string], { newOwner: string }>;

export type OwnerNominatedEventFilter = TypedEventFilter<OwnerNominatedEvent>;

export interface TestExchanger extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestExchangerInterface;

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
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "acceptOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    nominateNewOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "nominateNewOwner(address)"(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<[string]>;

    "nominatedOwner()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    setFeeRateForExchange(
      sourceCurrencyKey: BytesLike,
      destinationCurrencyKey: BytesLike,
      newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setFeeRateForExchange(bytes32,bytes32,uint256)"(
      sourceCurrencyKey: BytesLike,
      destinationCurrencyKey: BytesLike,
      newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "acceptOwnership()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  nominateNewOwner(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "nominateNewOwner(address)"(
    _owner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nominatedOwner(overrides?: CallOverrides): Promise<string>;

  "nominatedOwner()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  setFeeRateForExchange(
    sourceCurrencyKey: BytesLike,
    destinationCurrencyKey: BytesLike,
    newFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setFeeRateForExchange(bytes32,bytes32,uint256)"(
    sourceCurrencyKey: BytesLike,
    destinationCurrencyKey: BytesLike,
    newFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    "acceptOwnership()"(overrides?: CallOverrides): Promise<void>;

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

    nominateNewOwner(_owner: string, overrides?: CallOverrides): Promise<void>;

    "nominateNewOwner(address)"(
      _owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    nominatedOwner(overrides?: CallOverrides): Promise<string>;

    "nominatedOwner()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    setFeeRateForExchange(
      sourceCurrencyKey: BytesLike,
      destinationCurrencyKey: BytesLike,
      newFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setFeeRateForExchange(bytes32,bytes32,uint256)"(
      sourceCurrencyKey: BytesLike,
      destinationCurrencyKey: BytesLike,
      newFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnerChanged(address,address)"(
      oldOwner?: null,
      newOwner?: null
    ): OwnerChangedEventFilter;
    OwnerChanged(oldOwner?: null, newOwner?: null): OwnerChangedEventFilter;

    "OwnerNominated(address)"(newOwner?: null): OwnerNominatedEventFilter;
    OwnerNominated(newOwner?: null): OwnerNominatedEventFilter;
  };

  estimateGas: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "acceptOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

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

    nominateNewOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "nominateNewOwner(address)"(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nominatedOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "nominatedOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    setFeeRateForExchange(
      sourceCurrencyKey: BytesLike,
      destinationCurrencyKey: BytesLike,
      newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setFeeRateForExchange(bytes32,bytes32,uint256)"(
      sourceCurrencyKey: BytesLike,
      destinationCurrencyKey: BytesLike,
      newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "acceptOwnership()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

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

    nominateNewOwner(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "nominateNewOwner(address)"(
      _owner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nominatedOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nominatedOwner()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFeeRateForExchange(
      sourceCurrencyKey: BytesLike,
      destinationCurrencyKey: BytesLike,
      newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setFeeRateForExchange(bytes32,bytes32,uint256)"(
      sourceCurrencyKey: BytesLike,
      destinationCurrencyKey: BytesLike,
      newFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
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

export interface TestFaucetInterface extends utils.Interface {
  functions: {
    "addresses(uint256)": FunctionFragment;
    "drip()": FunctionFragment;
    "permitModify(address,bool)": FunctionFragment;
    "permitted(address)": FunctionFragment;
    "received(address)": FunctionFragment;
    "setDripAmount(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addresses",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "drip", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "permitModify",
    values: [string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "permitted", values: [string]): string;
  encodeFunctionData(functionFragment: "received", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setDripAmount",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addresses", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "drip", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "permitModify",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "permitted", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "received", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDripAmount",
    data: BytesLike
  ): Result;

  events: {
    "Dripped(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Dripped"): EventFragment;
}

export type DrippedEvent = TypedEvent<
  [string, BigNumber],
  { token: string; amount: BigNumber }
>;

export type DrippedEventFilter = TypedEventFilter<DrippedEvent>;

export interface TestFaucet extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestFaucetInterface;

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
    addresses(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "addresses(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    drip(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "drip()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    permitModify(
      user: string,
      permit: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "permitModify(address,bool)"(
      user: string,
      permit: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    permitted(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "permitted(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    received(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "received(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    setDripAmount(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setDripAmount(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addresses(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "addresses(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  drip(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "drip()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  permitModify(
    user: string,
    permit: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "permitModify(address,bool)"(
    user: string,
    permit: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  permitted(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "permitted(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  received(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "received(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  setDripAmount(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setDripAmount(address,uint256)"(
    token: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addresses(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "addresses(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    drip(overrides?: CallOverrides): Promise<void>;

    "drip()"(overrides?: CallOverrides): Promise<void>;

    permitModify(
      user: string,
      permit: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "permitModify(address,bool)"(
      user: string,
      permit: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    permitted(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "permitted(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    received(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "received(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    setDripAmount(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setDripAmount(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Dripped(address,uint256)"(token?: null, amount?: null): DrippedEventFilter;
    Dripped(token?: null, amount?: null): DrippedEventFilter;
  };

  estimateGas: {
    addresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "addresses(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    drip(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "drip()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    permitModify(
      user: string,
      permit: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "permitModify(address,bool)"(
      user: string,
      permit: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    permitted(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "permitted(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    received(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "received(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setDripAmount(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setDripAmount(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addresses(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "addresses(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    drip(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "drip()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    permitModify(
      user: string,
      permit: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "permitModify(address,bool)"(
      user: string,
      permit: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    permitted(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "permitted(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    received(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "received(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setDripAmount(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setDripAmount(address,uint256)"(
      token: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

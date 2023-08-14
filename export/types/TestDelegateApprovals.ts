/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface TestDelegateApprovalsInterface extends utils.Interface {
  functions: {
    "approveExchangeOnBehalf(address)": FunctionFragment;
    "canExchangeOnBehalf(address,address)": FunctionFragment;
    "exchangingApproved(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "approveExchangeOnBehalf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "canExchangeOnBehalf",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangingApproved",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "approveExchangeOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "canExchangeOnBehalf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangingApproved",
    data: BytesLike
  ): Result;

  events: {};
}

export interface TestDelegateApprovals extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestDelegateApprovalsInterface;

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
    approveExchangeOnBehalf(
      approvee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "approveExchangeOnBehalf(address)"(
      approvee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    canExchangeOnBehalf(
      exchanger: string,
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "canExchangeOnBehalf(address,address)"(
      exchanger: string,
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    exchangingApproved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "exchangingApproved(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  approveExchangeOnBehalf(
    approvee: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "approveExchangeOnBehalf(address)"(
    approvee: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  canExchangeOnBehalf(
    exchanger: string,
    beneficiary: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "canExchangeOnBehalf(address,address)"(
    exchanger: string,
    beneficiary: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  exchangingApproved(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "exchangingApproved(address,address)"(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    approveExchangeOnBehalf(
      approvee: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "approveExchangeOnBehalf(address)"(
      approvee: string,
      overrides?: CallOverrides
    ): Promise<void>;

    canExchangeOnBehalf(
      exchanger: string,
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "canExchangeOnBehalf(address,address)"(
      exchanger: string,
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    exchangingApproved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "exchangingApproved(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    approveExchangeOnBehalf(
      approvee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "approveExchangeOnBehalf(address)"(
      approvee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    canExchangeOnBehalf(
      exchanger: string,
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "canExchangeOnBehalf(address,address)"(
      exchanger: string,
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exchangingApproved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exchangingApproved(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    approveExchangeOnBehalf(
      approvee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "approveExchangeOnBehalf(address)"(
      approvee: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    canExchangeOnBehalf(
      exchanger: string,
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canExchangeOnBehalf(address,address)"(
      exchanger: string,
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exchangingApproved(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "exchangingApproved(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}

import {TestSystem, TestSystemContractsType} from "@lyrafinance/protocol";
import { ethers } from "hardhat";
import {MAX_UINT, MONTH_SEC, OptionType, toBN, toBytes32} from "@lyrafinance/protocol/dist/scripts/util/web3utils";
import { fastForward } from "@lyrafinance/protocol/dist/test/utils/evm";
import { expect } from "chai";
import { mockPrice } from "@lyrafinance/protocol/dist/test/utils/seedTestSystem";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {StrandsLyra__factory} from "../export/types";

describe("StrandsLyra Test", () => {
  let deployer: SignerWithAddress;
  let alice: SignerWithAddress;
  let testSystem: TestSystemContractsType;

  beforeEach(async () => {
    const signers = await ethers.getSigners();
    deployer = signers[0];
    alice = signers[1];
    testSystem = await TestSystem.deploy(deployer);
    await TestSystem.seed(deployer, testSystem);
    // Mint tokens
    await testSystem.snx.quoteAsset.mint(alice.address, toBN('20000'));
    await testSystem.snx.baseAsset.mint(alice.address, toBN('10'));
  });

  it("Should pay out long call success", async () => {
    // given
    const boardIds = await testSystem.optionMarket.getLiveBoards();
    const strikeIds = await testSystem.optionMarket.getBoardStrikes(boardIds[0]);

    // when
    // Buy long call
    const tx = await testSystem.optionMarket.connect(deployer).openPosition({
      strikeId: strikeIds[0],
      positionId: 0,
      amount: toBN("1"),
      setCollateralTo: 0,
      iterations: 1,
      minTotalCost: 0,
      maxTotalCost: MAX_UINT,
      optionType: OptionType.LONG_CALL,
    });
    const txReceipt = await tx.wait(0);
    const logDesc = testSystem.optionMarket.interface.parseLog(txReceipt.logs[17]);
    const tradeEvent = <any[]>(<unknown>logDesc.args);

    // and
    // Wait till board expires
    await fastForward(MONTH_SEC);

    // and
    // Mock sETH price
    await mockPrice(testSystem, toBN("2000"), "sETH");

    // then
    // Settle option and confirm payout
    await testSystem.optionMarket.settleExpiredBoard(boardIds[0]);
    const preBalance = await testSystem.snx.quoteAsset.balanceOf(deployer.address);
    await testSystem.shortCollateral.settleOptions([tradeEvent[1]]);
    const postBalance = await testSystem.snx.quoteAsset.balanceOf(deployer.address);
    expect(postBalance.sub(preBalance)).to.eq(toBN("500"));
  });

  it("Should buyStraddle get Long Call and Put positions success", async () => {
    // given
    const boardIds = await testSystem.optionMarket.getLiveBoards();
    const strikeIds = await testSystem.optionMarket.getBoardStrikes(boardIds[0]);
    const strandFactory = new StrandsLyra__factory();
    const strandsLyra = await strandFactory.connect(deployer).deploy();
    await testSystem.snx.quoteAsset.connect(alice).approve(strandsLyra.address, toBN('10000'));

    // It appears that there is a bug in the default test system. The LyraAdapter is trying to find a
    // SynthetixAdapter with the name "SYNTHETIX_ADAPTER," but its name in the test system is actually "EXCHANGE_ADAPTER."
    await testSystem.lyraRegistry.updateGlobalAddresses(
      [
        toBytes32('SYNTHETIX_ADAPTER'),
      ],
      [
        testSystem.synthetixAdapter.address,
      ],
    );
    await strandsLyra.connect(deployer).initAdapter(
      testSystem.lyraRegistry.address,
      testSystem.optionMarket.address,
      testSystem.testCurve.address,
      testSystem.basicFeeCounter.address
    )

    // when
    await strandsLyra.connect(alice).buyStraddle(strikeIds[1], toBN('1'))

    // and
    // Wait till board expires
    await fastForward(MONTH_SEC);

    // and
    // Mock sETH price
    await mockPrice(testSystem, toBN("1500"), "sETH");

    // then
    // Settle option and confirm payout
    const positionsId = await strandsLyra.getPositionId(alice.address, strikeIds[1]);
    await testSystem.optionMarket.settleExpiredBoard(boardIds[0]);
    const preBalance = await testSystem.snx.quoteAsset.balanceOf(strandsLyra.address);
    await testSystem.shortCollateral.settleOptions(positionsId);
    const postBalance = await testSystem.snx.quoteAsset.balanceOf(strandsLyra.address);
    expect(postBalance.sub(preBalance)).to.eq(toBN("500"));
  })
});

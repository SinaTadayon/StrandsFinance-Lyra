// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;
import {LyraAdapter} from "@lyrafinance/protocol/contracts/periphery/LyraAdapter.sol";

contract StrandsLyra is LyraAdapter {
  mapping(address => mapping(uint => uint[])) mapActivePositionIds;

  constructor() LyraAdapter() {}
    
  function initAdapter(
    address _lyraRegistry,
    address _optionMarket,
    address _curveSwap,
    address _feeCounter
  ) external onlyOwner {
    // set addresses for LyraAdapter
    setLyraAddresses(_lyraRegistry, _optionMarket, _curveSwap, _feeCounter);
  }

  /**
   * @notice It opens both long Call and Put positions with the same strike ID and 
   *         the same size in a single transaction.
   * @dev It attempts to calculate the optimized amount of approval needed for both the 
   *      liquidity pool and the option market from the quote asset.
   * @param strikeId open position on strike id
   * @param size number of contracts to trade in uint of 10 ** 18
   */
  function buyStraddle(uint strikeId, uint size) external {

    (uint strikePrice,) = optionMarket.getStrikeAndExpiry(strikeId);
    uint tradeBalanceRequired = strikePrice * (size / 10 ** 18) * 2;
    require(tradeBalanceRequired > 0, "Invalid Size");
    require(quoteAsset.balanceOf(msg.sender) >= tradeBalanceRequired, "Not Enough Balance");
    quoteAsset.transferFrom(msg.sender, address(this), tradeBalanceRequired);
    quoteAsset.approve(address(liquidityPool), tradeBalanceRequired);
    quoteAsset.approve(address(optionMarket), tradeBalanceRequired);

    // Open Long Call Position
    TradeInputParameters memory tradeParams = LyraAdapter.TradeInputParameters({
      strikeId: strikeId,
      positionId: 0, // if 0, new position is created
      iterations: 1, // more iterations use more gas but incur less slippage
      optionType: OptionType.LONG_CALL,
      amount: size,
      setCollateralTo: 0,
      minTotalCost: 0,
      maxTotalCost: type(uint).max,
      rewardRecipient: address(0)
    });
    TradeResult memory result = _openPosition(tradeParams); // built-in LyraAdapter.sol function
    mapActivePositionIds[msg.sender][strikeId].push(result.positionId);

    // Open Long Put Position
    tradeParams = LyraAdapter.TradeInputParameters({
      strikeId: strikeId,
      positionId: 0, // if 0, new position is created
      iterations: 1, // more iterations use more gas but incur less slippage
      optionType: OptionType.LONG_PUT,
      amount: size,
      setCollateralTo: 0,
      minTotalCost: 0,
      maxTotalCost: type(uint).max,
      rewardRecipient: address(0)
    });
    result = _openPosition(tradeParams); // built-in LyraAdapter.sol function
    mapActivePositionIds[msg.sender][strikeId].push(result.positionId);
  }

  /**
   * @notice get position Id by trader address and strike Id
   */
  function getPositionId(address trader, uint strikeId) external view returns (uint[] memory) {
    return mapActivePositionIds[trader][strikeId];
  }
}
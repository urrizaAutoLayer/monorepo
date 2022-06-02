// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import {IAavePool} from "../../../../contracts/core/connext/interfaces/IAavePool.sol";
import {IStableSwap} from "../../../../contracts/core/connext/interfaces/IStableSwap.sol";
import {ITokenRegistry} from "../../../../contracts/core/connext/interfaces/ITokenRegistry.sol";
import {ConnextMessage} from "../../../../contracts/core/connext/libraries/ConnextMessage.sol";
import {CallParams, ExecuteArgs} from "../../../../contracts/core/connext/libraries/LibConnextStorage.sol";
import {XAppConnectionManager} from "../../../../contracts/nomad-core/contracts/XAppConnectionManager.sol";
import {BridgeFacet} from "../../../../contracts/core/connext/facets/BridgeFacet.sol";
import {TestERC20} from "../../../../contracts/test/TestERC20.sol";

import {MockPool, MockXAppConnectionManager} from "../../../utils/Mock.sol";

import "forge-std/console.sol";
import "./FacetHelper.sol";

// test_BridgeFacet__handle_creditToRouterIfNotPortalTransfer

contract BridgeFacetTest is BridgeFacet, FacetHelper {
  // ============ storage ============
  // routers
  uint256 _router0Key = 2;
  address _router0 = vm.addr(2);
  uint256 _router1Key = 3;
  address _router1 = vm.addr(3);

  // default origin sender
  address _originSender = address(4);

  // domains
  address _originFacet = address(111222);
  address _destinationFacet = address(222111);

  // aave pool details
  address _aavePool;

  // relayer fee
  uint256 _relayerFee = 0.1 ether;

  // default amount
  uint256 _amount = 1.1 ether;

  // default nonce on xcall
  uint256 _nonce = 1;

  // default CallParams
  CallParams _params =
    CallParams(
      address(11), // to
      bytes(""), // callData
      _originDomain, // origin domain
      _destinationDomain, // destination domain
      address(11), // recovery address
      address(0), // callback
      0, // callbackFee
      false, // forceSlow
      false // receiveLocal
    );

  // ============ Test set up ============
  function setUp() public {
    // set the defaults
    setDefaults();

    // set the asset context -> you are on the destination domain
    // with the local asset == adopted asset
    setAssetContext(_destinationDomain, true);

    // setup aave pool
    _aavePool = address(new MockPool());
    s.aavePool = _aavePool;

    // setup other context
    s.approvedRelayers[address(this)] = true;
    s.maxRoutersPerTransfer = 5;
    s.xAppConnectionManager = XAppConnectionManager(address(new MockXAppConnectionManager()));
  }

  // ============ utils ============
  function getRouterSignatures(
    bytes32 _transferId,
    address[] memory _routers,
    uint256[] memory _keys
  ) public returns (bytes[] memory) {
    uint256 pathLen = _routers.length;
    bytes[] memory signatures = new bytes[](pathLen);
    if (pathLen == 0) {
      return signatures;
    }
    bytes32 preImage = keccak256(abi.encode(_transferId, pathLen));
    bytes32 toSign = ECDSA.toEthSignedMessageHash(preImage);
    for (uint256 i; i < pathLen; i++) {
      (uint8 v, bytes32 r, bytes32 _s) = vm.sign(_keys[i], toSign);
      signatures[i] = abi.encodePacked(r, _s, v);
    }
    return signatures;
  }

  function _getExecuteArgs(
    address[] memory routers,
    uint256[] memory keys,
    bool fill
  ) public returns (bytes32, ExecuteArgs memory) {
    if (routers.length == 0 && fill) {
      routers = new address[](1);
      keys = new uint256[](1);
      routers[0] = _router0;
      keys[0] = _router0Key;
    }
    // get args
    bytes[] memory empty = new bytes[](0);
    ExecuteArgs memory args = ExecuteArgs(_params, _local, routers, empty, _relayerFee, _amount, _nonce, _originSender);
    // generate transfer id
    bytes32 _id = getTransferIdFromExecuteArgs(args);
    // generate router signatures
    args.routerSignatures = getRouterSignatures(_id, routers, keys);
    return (_id, args);
  }

  // Meant to mimic the getTransferId in the contract.
  function getTransferIdFromExecuteArgs(ExecuteArgs memory _args) public returns (bytes32) {
    bytes32 transferId = keccak256(
      abi.encode(_args.nonce, _args.params, _args.originSender, _canonicalTokenId, _canonicalDomain, _args.amount)
    );
    return transferId;
  }

  function getExecuteArgsNoRouters() public returns (bytes32, ExecuteArgs memory) {
    address[] memory routers = new address[](0);
    uint256[] memory keys = new uint256[](0);
    return _getExecuteArgs(routers, keys, false);
  }

  function getExecuteArgs(address[] memory routers, uint256[] memory keys)
    public
    returns (bytes32, ExecuteArgs memory)
  {
    return _getExecuteArgs(routers, keys, false);
  }

  function getExecuteArgs() public returns (bytes32, ExecuteArgs memory) {
    address[] memory routers;
    uint256[] memory keys;
    return _getExecuteArgs(routers, keys, true);
  }

  function executeAndAssert(bytes32 _id, ExecuteArgs memory _args) public {
    // get pre-execute liquidity in local
    uint256 pathLen = _args.routers.length;
    uint256[] memory prevLiquidity = new uint256[](pathLen);
    for (uint256 i; i < pathLen; i++) {
      prevLiquidity[i] = s.routerBalances[_args.routers[i]][_local];
    }

    // get pre-execute balance here in local
    uint256 prevBalance = IERC20(_local).balanceOf(address(this));

    // get pre-execute to balance in adopted
    IERC20 token = IERC20(s.canonicalToAdopted[_canonicalTokenId]);
    uint256 prevBalanceTo = token.balanceOf(_params.to);

    // execute
    uint256 transferred = pathLen == 0
      ? _args.amount
      : (_args.amount * _liquidityFeeNumerator) / _liquidityFeeDenominator;
    vm.expectEmit(true, true, false, true);
    emit Executed(_id, _args.params.to, _args, _args.local, transferred, address(this));
    this.execute(_args);

    // check local balance
    if (pathLen > 0) {
      // should decrement router balance
      uint256 decrement = transferred / pathLen;
      for (uint256 i; i < pathLen; i++) {
        assertEq(s.routerBalances[_args.routers[i]][_args.local], prevLiquidity[i] - decrement);
      }
    } else {
      // should decrement balance of bridge
      assertEq(IERC20(_local).balanceOf(address(this)), prevBalance - _amount);
    }

    // should increment balance of `to` in `adopted`
    assertEq(token.balanceOf(_params.to), prevBalanceTo + transferred);

    // should mark the transfer as executed
    assertEq(s.transferRelayer[_id], address(this));
  }

  function buildMessage(bytes32 _id) private returns (bytes memory) {
    bytes32 detailsHash = keccak256("test");

    bytes29 action = ConnextMessage.formatTransfer(bytes32(uint256(uint160(_params.to))), _amount, detailsHash, _id);
    bytes29 tokenId = ConnextMessage.formatTokenId(_canonicalDomain, _canonicalTokenId);

    return ConnextMessage.formatMessage(tokenId, action);
  }

  // ============ execute ============

  // ============ execute failure cases

  // should fail if msg.sender is not an approved relayer
  function test_BridgeFacet__execute_failIfRelayerNotApproved() public {
    // set context
    s.approvedRelayers[address(this)] = false;

    // get args
    (, ExecuteArgs memory args) = getExecuteArgs();

    // expect failure
    vm.expectRevert(BridgeFacet.BridgeFacet__execute_unapprovedRelayer.selector);
    this.execute(args);
  }

  // should fail if the # of routers > maxRouters

  // should fail if it is a slow transfer (forceSlow = true) and not reconciled
  function test_BridgeFacet__execute_failIfForceSlowAndNotReconciled() public {
    // set test params
    _params.forceSlow = true;

    // get args
    (bytes32 transferId, ExecuteArgs memory args) = getExecuteArgs();

    // expect failure
    vm.expectRevert(BridgeFacet.BridgeFacet__execute_notReconciled.selector);
    this.execute(args);
  }

  // should fail if the router is not approved and ownership is not renounced

  // should fail if the router signature is invalid

  // should fail if it was already executed

  // should fail if sponsored vault did not fund contract

  // ============ execute fail with aave portals
  function testFail_BridgeFacet__execute_failsIfNoLiquidityAndAaveNotEnabled() public {
    // get args
    (bytes32 _id, ExecuteArgs memory _args) = getExecuteArgs();

    // set liquidity context
    for (uint256 i; i < _args.routers.length; i++) {
      s.routerBalances[_args.routers[i]][_args.local] = 0 ether;
    }

    // set aave not enabled
    s.aavePool = address(0);

    // Will fail on unchecked with:

    this.execute(_args);
  }

  function test_BridgeFacet__execute_failsIfRouterNotApprovedForPortal() public {
    // get args
    (bytes32 _id, ExecuteArgs memory _args) = getExecuteArgs();

    // set liquidity context
    for (uint256 i; i < _args.routers.length; i++) {
      s.routerBalances[_args.routers[i]][_args.local] = 0 ether;
    }

    // set aave enabled
    s.aavePool = _aavePool;

    vm.expectRevert(abi.encodeWithSelector(BridgeFacet.BridgeFacet__execute_notApprovedForPortals.selector));
    this.execute(_args);
  }

  // ============ execute success cases

  // should use slow liquidity if specified (forceSlow = true)
  function test_BridgeFacet__execute_forceSlowWorks() public {
    // set test params
    _params.forceSlow = true;

    // get args
    (bytes32 _id, ExecuteArgs memory _args) = getExecuteArgsNoRouters();

    // set reconciled context
    s.reconciledTransfers[_id] = true;

    executeAndAssert(_id, _args);
  }

  // should use the local asset if specified (receiveLocal = true)
  function test_BridgeFacet__execute_receiveLocalWorks() public {
    // set test params
    _params.receiveLocal = true;

    // get args
    (bytes32 _id, ExecuteArgs memory _args) = getExecuteArgs();

    // set liquidity context
    for (uint256 i; i < _args.routers.length; i++) {
      s.routerBalances[_args.routers[i]][_args.local] += 10 ether;
    }

    executeAndAssert(_id, _args);
  }

  // should work without calldata

  // should work with successful calldata

  // should work with failing calldata

  // should work if already reconciled (happening in slow liquidity mode)

  // should work with unapproved router if ownership renounced

  // should work with unapproved router if router-whitelist ownership renounced

  // ============ execute success with aave portals

  function test_BridgeFacet__execute_worksWithAave() public {
    // get args
    (bytes32 _id, ExecuteArgs memory _args) = getExecuteArgs();

    // get fast liquidity amount
    uint256 userAmount = (_args.amount * _liquidityFeeNumerator) / _liquidityFeeDenominator;

    // set liquidity to 0
    s.routerBalances[_args.routers[0]][_args.local] = 0;

    // set approval
    s.routerPermissionInfo.approvedForPortalRouters[_args.routers[0]] = true;

    // set aave call checks
    vm.expectCall(
      _aavePool,
      abi.encodeWithSelector(IAavePool.mintUnbacked.selector, _args.local, userAmount, address(this), 0)
    );
    vm.expectCall(
      _aavePool,
      abi.encodeWithSelector(IAavePool.withdraw.selector, _args.local, userAmount, address(this))
    );

    vm.expectEmit(true, true, true, true);
    emit AavePortalMintUnbacked(_id, _router0, _args.local, userAmount);

    this.execute(_args);

    assertEq(s.aavePortalsTransfers[_id], userAmount);
    assertEq(s.routerBalances[_args.routers[0]][_args.local], 0);
  }

  // ============ handle ============

  // ============ handle with aave portals
  function test_BridgeFacet__handle_worksWithPortals() public {
    // get args
    (bytes32 _id, ExecuteArgs memory _args) = getExecuteArgs();

    // get the total debt
    uint256 portaled = (_args.amount * _liquidityFeeNumerator) / _liquidityFeeDenominator;

    // get the portal fee
    uint256 fee = (portaled * _portalFeeNumerator) / _liquidityFeeDenominator;

    // set transfer context (handled by portal, already routed)
    s.aavePortalsTransfers[_id] = portaled;
    s.routedTransfers[_id] = _args.routers;

    // set remote context
    setRemoteRouterContext(_originFacet, _originDomain);

    // construct message
    bytes memory message = buildMessage(_id);

    // get current router balance
    uint256 initLiquidity = s.routerBalances[_router0][_local];

    uint256 profit = _args.amount - portaled - fee;
    console.log("initLiquidity", initLiquidity);
    console.log("expected final liq", profit + initLiquidity);

    // set expected calls
    vm.expectCall(_local, abi.encodeWithSelector(IERC20.approve.selector, _aavePool, portaled + fee));

    vm.expectCall(_aavePool, abi.encodeWithSelector(IAavePool.backUnbacked.selector, _local, portaled, fee));

    vm.expectEmit(true, true, true, true);
    emit AavePortalRepayment(_id, _local, portaled, fee);

    this.handle(_params.originDomain, uint32(_nonce), bytes32(abi.encodePacked(_originFacet)), message);

    // verify router liquidity remains unchanged
    assertEq(s.routerBalances[_router0][_local], initLiquidity + profit);
  }

  // should credit router if they provided liquidity
  function test_BridgeFacet__handle_creditToRouterIfNotPortalTransfer() public {
    // get args
    (bytes32 _id, ExecuteArgs memory _args) = getExecuteArgs();

    // set routed transfer context
    s.routedTransfers[_id] = _args.routers;
    uint256 initLiquidity = 10 ether;
    s.routerBalances[_router0][_local] = initLiquidity;
    setRemoteRouterContext(_destinationFacet, _destinationDomain);

    bytes memory message = buildMessage(_id);

    this.handle(_params.destinationDomain, uint32(_nonce), bytes32(abi.encodePacked(_destinationFacet)), message);

    assertEq(s.routerBalances[_router0][_local], initLiquidity + _args.amount);
  }

  // should credit router leftovers from portal repayment from positive slippage of amm
  function test_BridgeFacet__handle_creditToRouterLeftoversFromPortalRepayment() public {
    // setup asset with adopted != local
    setAssetContext(_destinationDomain, false);

    // set remote context
    setRemoteRouterContext(_originFacet, _originDomain);

    // get args
    (bytes32 _id, ExecuteArgs memory _args) = getExecuteArgs();

    // get the total debt in adopted
    uint256 portaled = (_args.amount * _liquidityFeeNumerator) / _liquidityFeeDenominator;
    uint256 fee = (portaled * _portalFeeNumerator) / _liquidityFeeDenominator;
    // set remainder -- comes from positive slippage
    uint256 remainder = 0.01 ether;
    uint256 swappedIn = portaled + fee - remainder; // amount it cost on AMM to get repay amt

    // set mock + storage (using external pool)
    vm.mockCall(_stableSwap, abi.encodeWithSelector(IStableSwap.swapExactOut.selector), abi.encode(swappedIn));
    vm.mockCall(
      _stableSwap,
      abi.encodeWithSelector(IStableSwap.calculateSwapFromAddress.selector),
      abi.encode(_args.amount)
    );
    vm.mockCall(
      _stableSwap,
      abi.encodeWithSelector(IStableSwap.calculateSwapOutFromAddress.selector),
      abi.encode(_args.amount)
    );

    // get the portal fee
    uint256 gains = (_args.amount - swappedIn) / _args.routers.length;

    // set transfer context (handled by portal, already routed)
    s.aavePortalsTransfers[_id] = portaled;
    s.routedTransfers[_id] = _args.routers;

    bytes memory message = buildMessage(_id);

    uint256 initLiquidity = s.routerBalances[_router0][_local];

    vm.expectCall(_adopted, abi.encodeWithSelector(IERC20.approve.selector, _aavePool, portaled + fee));

    vm.expectCall(_aavePool, abi.encodeWithSelector(IAavePool.backUnbacked.selector, _adopted, portaled, fee));

    vm.expectEmit(true, true, true, true);
    emit AavePortalRepayment(_id, _adopted, portaled, fee);

    this.handle(_params.originDomain, uint32(_nonce), bytes32(abi.encodePacked(_originFacet)), message);

    assertEq(s.routerBalances[_router0][_local], initLiquidity + gains);
  }

  // should debit router local balance if there are sufficient funds to cover diff
  function test_BridgeFacet__handle_debitFromRouterLiquidityForPortalRepayment() public {
    // setup asset with adopted != local
    setAssetContext(_destinationDomain, false);

    // set remote context
    setRemoteRouterContext(_originFacet, _originDomain);

    // set original liquidity amount
    uint256 remainder = 0.01 ether;
    s.routerBalances[_router0][_local] = remainder;

    // get args
    (bytes32 _id, ExecuteArgs memory _args) = getExecuteArgs();

    // get the total debt in adopted
    uint256 portaled = (_args.amount * _liquidityFeeNumerator) / _liquidityFeeDenominator;
    uint256 fee = (portaled * _portalFeeNumerator) / _liquidityFeeDenominator;
    // set remainder -- comes from positive slippage
    uint256 swappedIn = portaled + fee + remainder;

    // set mock + storage (using external pool)
    vm.mockCall(_stableSwap, abi.encodeWithSelector(IStableSwap.swapExactOut.selector), abi.encode(swappedIn));
    vm.mockCall(
      _stableSwap,
      abi.encodeWithSelector(IStableSwap.calculateSwapFromAddress.selector),
      abi.encode(_args.amount)
    );
    vm.mockCall(
      _stableSwap,
      abi.encodeWithSelector(IStableSwap.calculateSwapOutFromAddress.selector),
      abi.encode(_args.amount)
    );

    // get the portal fee
    uint256 losses = (swappedIn - _args.amount) / _args.routers.length;

    // set transfer context (handled by portal, already routed)
    s.aavePortalsTransfers[_id] = portaled;
    s.routedTransfers[_id] = _args.routers;

    bytes memory message = buildMessage(_id);

    uint256 initLiquidity = s.routerBalances[_router0][_local];

    vm.expectCall(_adopted, abi.encodeWithSelector(IERC20.approve.selector, _aavePool, portaled + fee));

    vm.expectCall(_aavePool, abi.encodeWithSelector(IAavePool.backUnbacked.selector, _adopted, portaled, fee));

    vm.expectEmit(true, true, true, true);
    emit AavePortalRepayment(_id, _adopted, portaled, fee);

    this.handle(_params.originDomain, uint32(_nonce), bytes32(abi.encodePacked(_originFacet)), message);

    assertEq(s.routerBalances[_router0][_local], initLiquidity - losses);
  }

  // should emit a debt event and repay all principle + as much fee as possible if
  // insufficient _amount on reconcile
  function test_BridgeFacet__handle_emitDebtEventIfPortalPartiallyRepaid() public {
    // scenario:
    // - router used portal to execute a transaction
    // - on handle, router only has enough liquidity to pay the portal principle,
    //   but not the portal fee.
    // - expected debt: portal fee = principle * aaveFee / denom
    //   expected principle: fast = amount * liqFee / denom
    //   expected profit: profit = init + amount - fast - principle

    // get args
    (bytes32 _id, ExecuteArgs memory _args) = getExecuteArgs();

    // get the back unbacked amount
    uint256 portaled = (_args.amount * _liquidityFeeNumerator) / _liquidityFeeDenominator;

    // set transfer context (handled by portal, already routed)
    s.aavePortalsTransfers[_id] = portaled;
    s.routedTransfers[_id] = _args.routers;
    // set high transfer fee
    s.aavePortalFeeNumerator = 10;
    // set remote context
    setRemoteRouterContext(_originFacet, _originDomain);

    // get the portal fee
    uint256 portalFee = (portaled * s.aavePortalFeeNumerator) / _liquidityFeeDenominator;
    // get outstanding debt on fee
    uint256 feePayment = _args.amount - portaled;
    uint256 outstanding = portalFee - feePayment;

    bytes memory message = buildMessage(_id);

    uint256 initLiquidity = s.routerBalances[_router0][_local];

    vm.expectCall(_local, abi.encodeWithSelector(IERC20.approve.selector, _aavePool, _args.amount));

    vm.expectCall(_aavePool, abi.encodeWithSelector(IAavePool.backUnbacked.selector, _local, portaled, feePayment));

    vm.expectEmit(true, true, true, true);
    emit AavePortalRepaymentDebt(_id, _local, 0, outstanding);

    vm.expectEmit(true, true, true, true);
    emit AavePortalRepayment(_id, _local, portaled, feePayment);

    vm.expectEmit(true, true, true, true);
    emit Reconciled(_id, _params.originDomain, _args.routers, _adopted, _args.amount, address(this));

    this.handle(_params.originDomain, uint32(_nonce), bytes32(abi.encodePacked(_originFacet)), message);

    assertEq(s.routerBalances[_router0][_local], initLiquidity);
  }

  function test_BridgeFacet__handle_emitDebtEventIfPortalFeeNotRepaid() public {
    // uint256 feeNum = 5;
    // uint256 feeDenom = 10000;
    // uint256 amount = 1 ether;
    // uint256 feeNotPaid = (amount * feeNum) / feeDenom;
    // bytes32 transferId = keccak256("testTransferId");
    // bytes memory message = buildMessage(address(10), address(adopted), transferId, amount);
    // address[] memory routers = new address[](1);
    // routers[0] = router;
    // TestSetterFacet(address(connextDiamondProxy)).setTestAavePortalsTransfers(transferId, amount);
    // TestSetterFacet(address(connextDiamondProxy)).setTestRoutedTransfers(transferId, routers);
    // uint256 previousRouterBalance = connext.routerBalances(router, address(adopted));
    // vm.expectCall(address(adopted), abi.encodeWithSelector(IERC20.approve.selector, address(aavePool), amount));
    // vm.expectCall(
    //   address(aavePool),
    //   abi.encodeWithSelector(IAavePool.backUnbacked.selector, address(adopted), amount, 0)
    // );
    // vm.expectEmit(true, true, true, true);
    // emit AavePortalRepaymentDebt(transferId, address(adopted), 0, feeNotPaid);
    // vm.expectEmit(true, true, true, true);
    // emit AavePortalRepayment(transferId, address(adopted), amount, 0);
    // connext.handle(originDomain, 0, _destinationFacet, message);
    // assertEq(connext.routerBalances(router, address(adopted)), previousRouterBalance);
  }

  function test_BridgeFacet__handle_notRevertIfPortalRepayFails() public {
    // uint256 feeNum = 5;
    // uint256 feeDenom = 10000;
    // uint256 amount = 1 ether;
    // uint256 fee = (amount * feeNum) / feeDenom;
    // bytes32 transferId = keccak256("testTransferId");
    // bytes memory message = buildMessage(address(10), address(adopted), transferId, amount + fee);
    // address[] memory routers = new address[](1);
    // routers[0] = router;
    // TestSetterFacet(address(connextDiamondProxy)).setTestAavePortalsTransfers(transferId, amount);
    // TestSetterFacet(address(connextDiamondProxy)).setTestRoutedTransfers(transferId, routers);
    // // mock repay to fail
    // aavePool.setRevertCall(true);
    // uint256 previousRouterBalance = connext.routerBalances(router, address(adopted));
    // vm.expectCall(address(adopted), abi.encodeWithSelector(IERC20.approve.selector, address(aavePool), amount + fee));
    // vm.expectCall(
    //   address(aavePool),
    //   abi.encodeWithSelector(IAavePool.backUnbacked.selector, address(adopted), amount, fee)
    // );
    // vm.expectEmit(true, true, true, true);
    // emit AavePortalRepaymentDebt(transferId, address(adopted), amount, fee);
    // connext.handle(originDomain, 0, _destinationFacet, message);
    // // Amount should be credited to the router so it can later repay the debt
    // assertEq(connext.routerBalances(router, address(adopted)), previousRouterBalance + amount + fee);
  }
}

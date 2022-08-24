// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity 0.8.15;

import {IRootManager} from "../interfaces/IRootManager.sol";

import {Connector} from "./Connector.sol";

/**
 */
interface MultichainCall {
  function anyCall(
    address _to,
    bytes calldata _data,
    address _fallback,
    uint256 _toChainID,
    uint256 _flags
  ) external;

  function context()
    external
    view
    returns (
      address from,
      uint256 fromChainID,
      uint256 nonce
    );

  function executor() external view returns (address executor);
}

//AMB: MultichainCall(0xC10Ef9F491C9B59f936957026020C321651ac078) -  Chain agnostic
abstract contract BaseBSCConnector is Connector {
  address private immutable executor; // Is != amb, used only to retrieve sender context

  // ============ Constructor ============
  constructor(
    uint32 _domain,
    uint32 _mirrorDomain,
    address _amb,
    address _rootManager,
    address _mirrorConnector,
    uint256 _mirrorProcessGas,
    uint256 _processGas,
    uint256 _reserveGas
  )
    Connector(_domain, _mirrorDomain, _amb, _rootManager, _mirrorConnector, _mirrorProcessGas, _processGas, _reserveGas)
  {
    executor = MultichainCall(_amb).executor();
  }

  // ============ Public Fns ============

  /**
    @dev Receive function signature
  */
  function anyExecute(bytes memory _data) external returns (bool success, bytes memory result) {
    _processMessage(msg.sender, _data); // msg.sender not used
  }

  function _verifySender(address _expected) internal override returns (bool) {
    require(msg.sender == AMB, "!bridge");

    (address from, uint256 fromChainId, ) = MultichainCall(executor).context();
    return from == _expected; // TODO: convert chainId to domain and assert fromId==mirrorDomain
  }
}

contract BSCL2Connector is BaseBSCConnector {
  // ============ Constructor ============
  constructor(
    uint32 _domain,
    uint32 _mirrorDomain,
    address _amb,
    address _rootManager,
    address _mirrorConnector,
    uint256 _mirrorProcessGas,
    uint256 _processGas,
    uint256 _reserveGas
  )
    BaseBSCConnector(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorProcessGas,
      _processGas,
      _reserveGas
    )
  {}

  // ============ Private fns ============
  /**
   * @dev Sends `outboundRoot` to root manager on l1
   */
  function _sendMessage(bytes memory _data) internal override {
    // TODO: check access control to implement

    MultichainCall(AMB).anyCall(
      AMB, // Same address on every chain, using AMB as it is immutable
      // sending the encoded bytes of the string msg and decode on the destination chain
      _data,
      // If fallback (failure on 1 -> fallback on bsc): function anyFallback(address _to, bytes calldata _data) external;
      address(0),
      // chainid of mainnet
      1,
      // TODO: Using 0 flag to pay fee on mainnet (ok?) vs paying on BSC: '2' (then need to compute and send them)
      0
    );
  }

  /**
   * @dev Handles an incoming `aggregateRoot`
   * NOTE: Could store latest root sent and prove aggregate root
   */
  function _processMessage(
    address, // _sender -- not used
    bytes memory _data
  ) internal override {
    // enforce this came from connector on l2
    // require(_verifySender(AMB), "!l1Connector"); -> checked in update(..)
    // get the data (should be the aggregate root)
    require(_data.length == 32, "!length");
    // set the outbound root for BSC
    update(bytes32(_data));
    // get the state commitment root
    // ?
  }
}

contract BSCL1Connector is BaseBSCConnector {
  // ============ Constructor ============
  constructor(
    uint32 _domain,
    uint32 _mirrorDomain,
    address _amb,
    address _rootManager,
    address _mirrorConnector,
    uint256 _mirrorProcessGas,
    uint256 _processGas,
    uint256 _reserveGas
  )
    BaseBSCConnector(
      _domain,
      _mirrorDomain,
      _amb,
      _rootManager,
      _mirrorConnector,
      _mirrorProcessGas,
      _processGas,
      _reserveGas
    )
  {}

  // ============ Private fns ============
  /**
   * @dev Sends `aggregateRoot` to messaging on l2
   */
  function _sendMessage(bytes memory _data) internal override {
    require(msg.sender == ROOT_MANAGER, "!rootManager"); //TODO: change for custom errors

    MultichainCall(AMB).anyCall(
      AMB, // Same address on every chain, using AMB as it is immutable
      // sending the encoded bytes of the string msg and decode on the destination chain
      _data,
      // No fallback (failure on mainnet -> fallback on bsc via function anyFallback(address _to, bytes calldata _data) external;)
      address(0),
      // chainid of BSC
      56,
      // TODO: Using 0 flag to pay fee on BSC (ok?) vs paying on mainnet: '2' (then need to compute and send them)
      0
    );

    emit MessageSent(_data, msg.sender);
  }

  /**
   * @dev Handles an incoming `outboundRoot`
   */
  function _processMessage(address, bytes memory _data) internal override {
    // enforce this came from connector on l2
    require(_verifySender(mirrorConnector), "!l2Connector");
    // get the data (should be the outbound root)
    require(_data.length == 32, "!length");
    // set the outbound root for optimism
    IRootManager(ROOT_MANAGER).setOutboundRoot(mirrorDomain, bytes32(_data));
    // get the state commitment root
    // if state commitment root is <
    // emit MessageProcessed(_sender, _data, msg.sender);
  }
}

import { ExecutorData, ExecutorDataStatus, expect, mkAddress, mkBytes32 } from "@connext/nxtp-utils";
import { constants } from "ethers";
import Sinon, { stub, SinonStub } from "sinon";
import { MessageType } from "../../../src/lib/entities";
import {
  ExecutorVersionInvalid,
  GasEstimationFailed,
  MissingXCall,
  ParamsInvalid,
  ExecuteSlowCompleted,
  MissingTransfer,
  MissingExecutorData,
  ExecutorDataExpired,
} from "../../../src/lib/errors";
import { executeSlowPathData, storeExecutorData } from "../../../src/lib/operations/executor";
import { ctxMock, getOperationsStub, getHelpersStub } from "../../globalTestHook";
import { mock } from "../../mock";
const { requestContext } = mock.loggingContext("EXECUTOR-TEST");

describe("Operations:Executor", () => {
  let getGelatoRelayerAddressStub: SinonStub;
  let getTransferStub: SinonStub;
  let storeTransferStub: SinonStub;
  let getExecutorDataStub: SinonStub;
  let getExecutorDataStatusStub: SinonStub;
  let storeBackupDataStub: SinonStub;
  let setExecutorDataStatusStub: SinonStub;
  let storeExecutorDataStub: SinonStub;
  let publishStub: SinonStub;
  let sendExecuteSlowToRelayerStub: SinonStub;
  let getBackupDataStub: SinonStub;
  let upsertTaskStub: SinonStub;
  let pruneExecutorDataStub: SinonStub;
  beforeEach(() => {
    const { executors, transfers } = ctxMock.adapters.cache;

    getTransferStub = stub(transfers, "getTransfer");
    storeTransferStub = stub(transfers, "storeTransfers");
    getExecutorDataStub = stub(executors, "getExecutorData");
    getExecutorDataStatusStub = stub(executors, "getExecutorDataStatus");
    storeBackupDataStub = stub(executors, "storeBackupData");
    setExecutorDataStatusStub = stub(executors, "setExecutorDataStatus");
    storeExecutorDataStub = stub(executors, "storeExecutorData");
    getBackupDataStub = stub(executors, "getBackupData");
    upsertTaskStub = stub(executors, "upsertTask");
    pruneExecutorDataStub = stub(executors, "pruneExecutorData");
    publishStub = ctxMock.adapters.mqClient.publish as SinonStub;

    getGelatoRelayerAddressStub = stub();
    getHelpersStub.returns({
      relayer: {
        getGelatoRelayerAddress: getGelatoRelayerAddressStub,
      },
    });

    sendExecuteSlowToRelayerStub = stub();
    getOperationsStub.returns({
      relayer: {
        sendExecuteSlowToRelayer: sendExecuteSlowToRelayerStub,
      },
    });
  });
  describe("#storeExecutorData", () => {
    it("should throw if params invalid", async () => {
      const mockExecutorData = {
        transferId: mkBytes32(),
        origin: "13337",
        executorVersion: "0.0.1",
        relayerFee: {
          amount: "aaa",
          asset: "0x",
        },
        encodedData: "0xabcde",
      } as ExecutorData;

      await expect(storeExecutorData(mockExecutorData, requestContext)).to.be.rejectedWith(ParamsInvalid);
    });
    it("should throw if executor version isn't supported by the sequencer", async () => {
      ctxMock.config.supportedVersion = "0.0.2";
      const mockExecutorData = mock.entity.executorData({ executorVersion: "0.0.1" });
      await expect(storeExecutorData(mockExecutorData, requestContext)).to.be.rejectedWith(ExecutorVersionInvalid);
    });

    it("should throw if transfer doesn't exist in the cache", async () => {
      getTransferStub.resolves(undefined);
      (ctxMock.adapters.subgraph.getOriginTransferById as SinonStub).resolves(undefined);
      const mockExecutorData = mock.entity.executorData();
      await expect(storeExecutorData(mockExecutorData, requestContext)).to.be.rejectedWith(MissingXCall);
    });

    it("should throw if gas estimation fails", async () => {
      getTransferStub.resolves(undefined);
      const mockTransfer = mock.entity.xtransfer();
      (ctxMock.adapters.subgraph.getOriginTransferById as SinonStub).resolves(mockTransfer);
      storeTransferStub.resolves();
      getGelatoRelayerAddressStub.resolves(mkAddress("0x111"));
      (ctxMock.adapters.chainreader.getGasEstimateWithRevertCode as SinonStub).throws();
      const mockExecutorData = mock.entity.executorData();
      await expect(storeExecutorData(mockExecutorData, requestContext)).to.be.rejectedWith(GasEstimationFailed);
    });

    it("should throw if the slow data got already executed", async () => {
      getTransferStub.resolves(undefined);
      const mockTransfer = mock.entity.xtransfer();
      (ctxMock.adapters.subgraph.getOriginTransferById as SinonStub).resolves(mockTransfer);
      storeTransferStub.resolves();
      getGelatoRelayerAddressStub.resolves(mkAddress("0x111"));
      getExecutorDataStatusStub.resolves(ExecutorDataStatus.Completed);
      const mockExecutorData = mock.entity.executorData();
      await expect(storeExecutorData(mockExecutorData, requestContext)).to.be.rejectedWith(ExecuteSlowCompleted);
    });
    it("should store executor data in the backup cache if its already being processed", async () => {
      getTransferStub.resolves(undefined);
      const mockTransfer = mock.entity.xtransfer();
      (ctxMock.adapters.subgraph.getOriginTransferById as SinonStub).resolves(mockTransfer);
      storeTransferStub.resolves();
      getGelatoRelayerAddressStub.resolves(mkAddress("0x111"));
      getExecutorDataStatusStub.resolves(ExecutorDataStatus.Pending);
      storeBackupDataStub.resolves(1);
      const mockExecutorData = mock.entity.executorData();
      await storeExecutorData(mockExecutorData, requestContext);
      expect(storeBackupDataStub.callCount).to.be.eq(1);
      storeBackupDataStub.resolves(2);
      await storeExecutorData(mockExecutorData, requestContext);
      expect(storeBackupDataStub.callCount).to.be.eq(2);
    });
    it("should publish data to the message queue successfully", async () => {
      getTransferStub.resolves(undefined);
      const mockTransfer = mock.entity.xtransfer();
      (ctxMock.adapters.subgraph.getOriginTransferById as SinonStub).resolves(mockTransfer);
      storeTransferStub.resolves();
      getGelatoRelayerAddressStub.resolves(mkAddress("0x111"));
      getExecutorDataStatusStub.resolves(ExecutorDataStatus.None);
      setExecutorDataStatusStub.resolves();
      storeExecutorDataStub.resolves();
      storeBackupDataStub.resolves(1);
      publishStub.resolves();
      const mockExecutorData = mock.entity.executorData();
      await storeExecutorData(mockExecutorData, requestContext);
      expect(publishStub.callCount).to.be.eq(1);
      expect(storeBackupDataStub.callCount).to.be.eq(0);
    });
  });
  describe("#executeSlowPathData", () => {
    it("should throw if transfer doesn't exist", async () => {
      const mockTransferId = mkBytes32();
      getTransferStub.resolves(undefined);
      await expect(executeSlowPathData(mockTransferId, MessageType.ExecuteSlow, requestContext)).to.be.rejectedWith(
        MissingTransfer,
      );
    });

    it("should throw if the executor data is missing", async () => {
      const mockTransferId = mkBytes32();
      const mockTransfer = mock.entity.xtransfer({ transferId: mockTransferId });
      getTransferStub.resolves(mockTransfer);
      getExecutorDataStub.resolves(undefined);
      await expect(executeSlowPathData(mockTransferId, MessageType.ExecuteSlow, requestContext)).to.be.rejectedWith(
        MissingExecutorData,
      );
    });

    it("should throw if the status of executor data isn't pending", async () => {
      const mockTransferId = mkBytes32();
      const mockTransfer = mock.entity.xtransfer({ transferId: mockTransferId });
      getTransferStub.resolves(mockTransfer);
      getExecutorDataStub.resolves(mock.entity.executorData());
      getExecutorDataStatusStub.resolves(ExecutorDataStatus.Sent);
      await expect(executeSlowPathData(mockTransferId, MessageType.ExecuteSlow, requestContext)).to.be.rejectedWith(
        ExecutorDataExpired,
      );
    });

    it("should run a fallback mechanism by pulling the executor data from the backup cache", async () => {
      const mockTransferId = mkBytes32();
      const mockTransfer = mock.entity.xtransfer({ transferId: mockTransferId });

      const mockExecutorData = mock.entity.executorData({ transferId: mockTransferId });
      const mockExecutorBackupData1 = mock.entity.executorData({
        transferId: mockTransferId,
        encodedData: "0x11111",
      });
      const mockExecutorBackupData2 = mock.entity.executorData({
        transferId: mockTransferId,
        encodedData: "0x22222",
      });
      const mockTaskId = mkBytes32("0xmockTask");

      getTransferStub.resolves(mockTransfer);
      getExecutorDataStub.resolves(mockExecutorData);
      getExecutorDataStatusStub.resolves(ExecutorDataStatus.Pending);
      getBackupDataStub.resolves([mockExecutorBackupData1, mockExecutorBackupData2]);
      sendExecuteSlowToRelayerStub.onCall(0).throws("Failed to send to the gelato");
      sendExecuteSlowToRelayerStub.onCall(1).resolves(undefined);
      sendExecuteSlowToRelayerStub.onCall(2).resolves(mockTaskId);
      setExecutorDataStatusStub.resolves();
      upsertTaskStub.resolves();
      await expect(executeSlowPathData(mockTransferId, MessageType.ExecuteSlow, requestContext)).to.not.rejected;
      expect(sendExecuteSlowToRelayerStub.callCount).to.be.eq(3);
      expect(setExecutorDataStatusStub.callCount).to.be.eq(1);
      expect(upsertTaskStub.callCount).to.be.eq(1);
    });

    it("should prune all the executor data if fails", async () => {
      const mockTransferId = mkBytes32();
      const mockTransfer = mock.entity.xtransfer({ transferId: mockTransferId });

      const mockExecutorData = mock.entity.executorData({ transferId: mockTransferId });
      const mockExecutorBackupData1 = mock.entity.executorData({
        transferId: mockTransferId,
        encodedData: "0x11111",
      });
      const mockExecutorBackupData2 = mock.entity.executorData({
        transferId: mockTransferId,
        encodedData: "0x22222",
      });
      const mockTaskId = mkBytes32("0xmockTask");

      getTransferStub.resolves(mockTransfer);
      getExecutorDataStub.resolves(mockExecutorData);
      getExecutorDataStatusStub.resolves(ExecutorDataStatus.Pending);
      getBackupDataStub.resolves([mockExecutorBackupData1, mockExecutorBackupData2]);
      sendExecuteSlowToRelayerStub.onCall(0).throws("Failed to send to the gelato");
      sendExecuteSlowToRelayerStub.onCall(1).resolves(undefined);
      sendExecuteSlowToRelayerStub.onCall(2).resolves(undefined);
      setExecutorDataStatusStub.resolves();
      upsertTaskStub.resolves();
      pruneExecutorDataStub.resolves();
      await expect(executeSlowPathData(mockTransferId, MessageType.ExecuteSlow, requestContext)).to.not.rejected;
      expect(sendExecuteSlowToRelayerStub.callCount).to.be.eq(3);
      expect(setExecutorDataStatusStub.callCount).to.be.eq(0);
      expect(upsertTaskStub.callCount).to.be.eq(0);
      expect(pruneExecutorDataStub.callCount).to.be.eq(1);
    });
  });
});

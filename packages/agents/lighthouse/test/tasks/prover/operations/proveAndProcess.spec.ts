import { expect, mock } from "@connext/nxtp-utils";
import { SinonStub, stub } from "sinon";

import { proveAndProcess, processMessage } from "../../../../src/tasks/prover/operations/proveAndProcess";
import * as ProveAndProcessFns from "../../../../src/tasks/prover/operations/proveAndProcess";
import { encodedDataMock, mockXMessage1, mockXMessage2 } from "../../../mock";
import { proverCtxMock } from "../../../globalTestHook";
import { NoDestinationDomainForProof, NoTargetMessageRoot } from "../../../../src/errors";

describe("Operations: ProveAndProcess", () => {
  describe("#proveAndProcess", () => {
    let processMessageStub: SinonStub<
      [
        message: {
          destination?: { processed: boolean; returnData: string } | undefined;
          leaf: string;
          originDomain: string;
          destinationDomain: string;
          transferId: string;
          origin: { index: number; root: string; message: string };
        },
      ],
      Promise<void>
    >;

    beforeEach(() => {
      processMessageStub = stub(ProveAndProcessFns, "processMessage").resolves();
    });

    it.only("should process messages", async () => {
      (proverCtxMock.adapters.database.getUnProcessedMessages as SinonStub).resolves([mockXMessage1, mockXMessage2]);
      await proveAndProcess();
      expect(processMessageStub).to.be.calledWithExactly(mockXMessage1);
      expect(processMessageStub).to.be.calledWithExactly(mockXMessage2);
    });

    it("should not process if error but still work", async () => {
      processMessageStub.onFirstCall().rejects(new Error("error"));
      await expect(proveAndProcess()).to.be.fulfilled;
    });
  });

  describe("#processMessage", () => {
    it("should error if spoke connector not found", async () => {
      // await expect(processMessage({ ...mockXMessage1, destinationDomain: "1234" })).to.be.rejected;
      // expect(await processMessage({ ...mockXMessage1, destinationDomain: "1234" })).to.be.eventually.rejected;
    });

    it("should process a message", async () => {
      // await processMessage(mockXMessage1);
      // expect(proverCtxMock.adapters.relayer.send).to.be.called;
      // expect(proverCtxMock.adapters.relayer.send).to.be.calledOnceWith(
      //   +mock.chain.B,
      //   proverCtxMock.config.chains[mockXMessage1.destinationDomain].deployments.spokeConnector,
      //   encodedDataMock,
      // );
    });
  });
});

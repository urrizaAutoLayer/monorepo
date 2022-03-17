import { expect, mkAddress } from "@connext/nxtp-utils";
import Sinon, { stub, restore, reset, SinonStub } from "sinon";
import { getEnvConfig, getConfig, getDeployedTransactionManagerContract } from "../src/config";
import * as ConfigFns from "../src/config";
import { configMock, chainDataMock } from "./utils";
import { mock } from "./mock";

describe("Config", () => {
  let testChainId = 1336;
  let testAddress = "0xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  let contractDeployment: any;

  beforeEach(() => {
    contractDeployment = {
      [String(testChainId)]: {
        test: {
          name: "test",
          chainId: testChainId,
          contracts: {
            TransactionManager: {
              address: testAddress,
              abi: ["fakeAbi()"],
            },
            ConnextPriceOracle: {
              address: testAddress,
              abi: ["fakeAbi()"],
            },
            Multicall: {
              address: testAddress,
              abi: ["fakeAbi()"],
            },
          },
        },
      },
    };
  });

  afterEach(() => {
    restore();
    reset();
  });

  describe("#getDeployedTransactionManagerContract", () => {
    beforeEach(() => {
      Sinon.stub(ConfigFns, "getContractDeployments").returns(contractDeployment);
    });

    it("should undefined if no transaction manager", () => {
      const res = getDeployedTransactionManagerContract(0);
      expect(res).to.be.undefined;
    });

    it("happy func", () => {
      const res = getDeployedTransactionManagerContract(testChainId);
      expect(res).to.be.ok;
    });
  });

  describe("getEnvConfig", () => {
    it("should read config from NXTP Config with testnet network values overridden", () => {
      stub(process, "env").value({
        ...process.env,
        NXTP_CONFIG_FILE: "buggypath",
        NXTP_NETWORK: "testnet",
        NXTP_CONFIG: JSON.stringify(configMock),
      });

      expect(() => getEnvConfig(chainDataMock)).not.throw();
    });

    it("should error if transaction manager address is missing", () => {
      stub(process, "env").value({
        ...process.env,
        NXTP_NETWORK: "local",
        NXTP_CONFIG: JSON.stringify({
          ...configMock,
          chainConfig: {
            1337: {},
            1338: {},
          },
        }),
      });

      expect(() => getEnvConfig(chainDataMock)).throw("No transactionManager address");
    });

    it("should error if validation fails", () => {
      stub(process, "env").value({
        ...process.env,
        NXTP_NETWORK: "local",
        NXTP_CONFIG: JSON.stringify({
          ...configMock,
          chainConfig: {
            1337: { transactionManagerAddress: mkAddress("0xaaa"), subgraph: "http://example.com" },
            1338: { transactionManagerAddress: mkAddress("0xbbb"), subgraph: "http://example.com" },
          },
        }),
      });

      expect(() => getEnvConfig(chainDataMock)).throw("must have required property");
    });

    it("should read config from NXTP Config with local network values overridden", () => {
      stub(process, "env").value({
        ...process.env,
        NXTP_NETWORK: "local",
        NXTP_CONFIG: JSON.stringify(configMock),
      });

      let res;
      let error;

      try {
        res = getEnvConfig(chainDataMock);
      } catch (e) {
        error = e;
      }

      expect(error).to.be.undefined;
    });

    it("should read config from default filepath", () => {
      stub(process, "env").value({
        ...process.env,
        NXTP_CONFIG: JSON.stringify(configMock),
      });

      expect(() => getEnvConfig(chainDataMock)).not.throw();
    });

    it("should getEnvConfig", () => {
      stub(process, "env").value({
        ...process.env,
        NXTP_MNEMONIC: configMock.mnemonic,
        // NXTP_ADMIN_TOKEN: configMock.adminToken,
        NXTP_CHAIN_CONFIG: JSON.stringify(configMock.chains),
        NXTP_LOG_LEVEL: configMock.logLevel,
      });

      expect(() => getEnvConfig(chainDataMock)).not.throw();
    });
  });

  describe("getConfig", () => {
    it("should generate sequencer config from chainData in arguments", async () => {
      expect(() => getConfig(mock.chainData())).not.throw();
    });
    it("should generate sequencer config from external chainData", async () => {});
    it("should return sequencer config already created", async () => {});
  });
});

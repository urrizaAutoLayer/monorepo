import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const MAINNET_FORK_BLOCK = 15340000;

/**
 * Hardhat task for deploying the AMB Messaging Layer contracts.
 *
 * @param hre Hardhat environment to deploy to
 */
const func: DeployFunction = async (hre: HardhatRuntimeEnvironment): Promise<void> => {
  const chain = await hre.getChainId();
  if (chain !== "1337" && chain !== "1338") {
    throw new Error(
      "Mainnet fork deployment step is only intended for local test environment!" + ` Invalid chain: ${chain}`,
    );
  }

  console.log("\n============================= Mainnet Fork: Testbed Setup ===============================");

  console.log(`Setting up mainnet fork for block ${MAINNET_FORK_BLOCK}.`);
  hre.network.provider.request({
    method: "hardhat_reset",
    params: [
      {
        forking: {
          jsonRpcUrl:
            process.env.ETH_PROVIDER_URL || process.env.MAINNET_ETH_PROVIDER_URL || "https://cloudflare-eth.com",
          blockNumber: MAINNET_FORK_BLOCK,
        },
      },
    ],
  });
  console.log("Done.");

  console.log("Enabling automine...");
  hre.network.provider.request({
    method: "evm_setAutomine",
    params: [true],
  });
  console.log("Automine enabled.");
};

export default func;

func.tags = ["Fork", "prod", "local", "mainnet"];
func.dependencies = [];

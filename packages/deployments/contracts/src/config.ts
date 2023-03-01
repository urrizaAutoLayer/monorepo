import { config as envConfig } from "dotenv";
import { utils } from "ethers";

envConfig();
const urlOverride = process.env.ETH_PROVIDER_URL;
const chainId = parseInt(process.env.CHAIN_ID ?? "1337", 10);

const mnemonic =
  process.env.SUGAR_DADDY ||
  process.env.MNEMONIC ||
  "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";

const mainnetMnemonic = process.env.MAINNET_MNEMONIC;

export const hardhatNetworks = {
  hardhat: {
    allowUnlimitedContractSize: true,
  },
  localhost: {
    accounts: {
      accountsBalance: "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
      mnemonic,
    },
    chainId,
    saveDeployments: false,
    url: urlOverride || "http://localhost:8545",
    allowUnlimitedContractSize: true,
  },
  local_1337: {
    accounts: { mnemonic },
    chainId: 1337,
    url: "http://localhost:8547",
    saveDeployments: true,
    allowUnlimitedContractSize: true,
  },
  local_1338: {
    accounts: { mnemonic },
    chainId: 1338,
    url: "http://localhost:8546",
    saveDeployments: true,
    allowUnlimitedContractSize: true,
    companionNetworks: {
      hub: "local_1337",
    },
  },
  mainnet: {
    accounts: { mnemonic: mainnetMnemonic ?? mnemonic },
    chainId: 1,
    url: urlOverride || process.env.MAINNET_ETH_PROVIDER_URL || "https://cloudflare-eth.com",
    // gasPrice: utils.parseUnits("15", "gwei").toNumber(),
  },
  goerli: {
    accounts: { mnemonic },
    chainId: 5,
    url:
      urlOverride ||
      process.env.GOERLI_ETH_PROVIDER_URL ||
      "https://goerli.infura.io/v3/7672e2bf7cbe427e8cd25b0f1dde65cf",
    gasPrice: utils.parseUnits("50", "gwei").toNumber(),
  },
  optimism: {
    accounts: { mnemonic: mainnetMnemonic ?? mnemonic },
    chainId: 10,
    url: "https://mainnet.optimism.io",
    companionNetworks: {
      hub: "mainnet",
    },
    verify: {
      etherscan: {
        apiKey: process.env.OPTIMISM_ETHERSCAN_API_KEY!,
        apiUrl: "https://api-optimistic.etherscan.io/",
      },
    },
  },
  "optimism-goerli": {
    accounts: { mnemonic },
    chainId: 420,
    url:
      urlOverride ||
      process.env.OPTI_GOERLI_ETH_PROVIDER_URL ||
      "https://optimism-goerli.infura.io/v3/7672e2bf7cbe427e8cd25b0f1dde65cf",
    companionNetworks: {
      hub: "goerli",
    },
    verify: {
      etherscan: {
        apiKey: process.env.OPTIMISM_ETHERSCAN_API_KEY!,
        apiUrl: "https://api-goerli-optimistic.etherscan.io/",
      },
    },
  },
  bnb: {
    accounts: { mnemonic: mainnetMnemonic ?? mnemonic },
    chainId: 56,
    url: urlOverride || process.env.BNB_PROVIDER_URL || "https://bsc-dataseed.binance.org/",
    companionNetworks: {
      hub: "mainnet",
    },
    verify: {
      etherscan: {
        apiKey: process.env.BNBSCAN_API_KEY!,
      },
    },
  },
  chapel: {
    accounts: { mnemonic },
    chainId: 97,
    url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    companionNetworks: {
      hub: "goerli",
    },
    verify: {
      etherscan: {
        apiKey: process.env.BNBSCAN_API_KEY!,
      },
    },
  },
  xdai: {
    accounts: { mnemonic: mainnetMnemonic ?? mnemonic },
    chainId: 100,
    companionNetworks: {
      hub: "mainnet",
    },
    url: urlOverride || process.env.XDAI_PROVIDER_URL || "https://rpc.gnosischain.com/",
    verify: {
      etherscan: {
        apiKey: process.env.GNOSISSCAN_API_KEY!,
        apiUrl: "https://api.gnosisscan.io",
      },
    },
  },
  matic: {
    accounts: { mnemonic: mainnetMnemonic ?? mnemonic },
    chainId: 137,
    url: urlOverride || process.env.MATIC_PROVIDER_URL || "https://1rpc.io/matic",
    companionNetworks: {
      hub: "mainnet",
    },
    gasPrice: utils.parseUnits("200", "gwei").toNumber(),
    verify: {
      etherscan: {
        apiKey: process.env.POLYGONSCAN_API_KEY!,
      },
    },
  },
  ftm: {
    accounts: { mnemonic: mainnetMnemonic ?? mnemonic },
    chainId: 250,
    url: urlOverride || process.env.FTM_PROVIDER_URL || "https://rpcapi.fantom.network/",
  },
  "arbitrum-one": {
    accounts: { mnemonic: mainnetMnemonic ?? mnemonic },
    chainId: 42161,
    url: "https://arb1.arbitrum.io/rpc",
    companionNetworks: {
      hub: "mainnet",
    },
    etherscan: {
      apiKey: process.env.ARBISCAN_API_KEY!,
      apiUrl: "https://api.arbiscan.io/",
    },
  },
  mumbai: {
    accounts: { mnemonic },
    chainId: 80001,
    url: "https://rpc.ankr.com/polygon_mumbai",
    companionNetworks: {
      hub: "goerli",
    },
    verify: {
      etherscan: {
        apiKey: process.env.POLYGONSCAN_API_KEY!,
      },
    },
  },
  "arbitrum-goerli": {
    accounts: { mnemonic },
    chainId: 421613,
    url:
      urlOverride ||
      process.env.ARBITRUM_GOERLI_ETH_PROVIDER_URL ||
      "https://arbitrum-goerli.infura.io/v3/7672e2bf7cbe427e8cd25b0f1dde65cf",
    companionNetworks: {
      hub: "goerli",
    },
    verify: {
      etherscan: {
        apiKey: process.env.ARBISCAN_API_KEY!,
        apiUrl: "https://api-goerli.arbiscan.io/",
      },
    },
  },
  "gnosis-testnet": {
    accounts: { mnemonic },
    chainId: 10200,
    url: urlOverride || process.env.GNOSIS_TESTNET_PROVIDER_URL || "https://rpc.chiadochain.net",
    companionNetworks: {
      hub: "goerli",
    },
    verify: {
      etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY!,
        apiUrl: "https://blockscout.chiadochain.net/api",
      },
    },
  },
  consensys: {
    accounts: { mnemonic },
    chainId: 59140,
    // gasPrice: utils.parseUnits("15", "gwei").toNumber(),
    url: urlOverride || process.env.CONSENSYS_PROVIDER_URL || "https://consensys-zkevm-goerli-prealpha.infura.io/v3/",
    companionNetworks: {
      hub: "goerli",
    },
  },
};

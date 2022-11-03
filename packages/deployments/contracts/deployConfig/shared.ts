import { BigNumber, constants } from "ethers";

/**
 * AMB information contained below is used for setting up the testbed environment in deployment step
 * 00_testDeployFork.ts in lieu of forking chains.
 *
 * NOTE: Information was gathered at block number 15348540 on Ethereum mainnet.
 */

export type AMBContractInfo = {
  address: string;
  code: string;
  storage: string[];
};

export type AMBInfo = {
  hub: AMBContractInfo;
  spoke: AMBContractInfo;
};

export const OPTIMISM_AMB: AMBInfo = {
  hub: {
    address: "0x25ace71c97B33Cc4729CF772ae268934F7ab5fA1",
    code: "0x60806040818152306000908152600160208181528383205483825293832063bf40fac160e01b909552608490815284546002610100938216159390930260001901169190910460a481905291936001600160a01b039093169263bf40fac192909190819060c490849080156100b55780601f1061008a576101008083540402835291602001916100b5565b820191906000526020600020905b81548152906001019060200180831161009857829003601f168201915b50509250505060206040518083038186803b1580156100d357600080fd5b505afa1580156100e7573d6000803e3d6000fd5b505050506040513d60208110156100fd57600080fd5b505190506001600160a01b0381166101465760405162461bcd60e51b81526004018080602001828103825260238152602001806101cc6023913960400191505060405180910390fd5b600080826001600160a01b03166000366040518083838082843760405192019450600093509091505080830381855af49150503d80600081146101a5576040519150601f19603f3d011682016040523d82523d6000602084013e6101aa565b606091505b509092509050600182151514156101c357805160208201f35b805160208201fdfe5461726765742061646472657373206d75737420626520696e697469616c697a65642ea2646970667358221220d96dd78b72a44c11bfa8efb98d29ee53776a02c67052599da176325fcbf95b6464736f6c63430007060033",
    storage: [
      "0x000000000000000000000001de1fcfb0851916ca5101820a69b13a4e276bd81f",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000009ba6e03d8b90de867373db8cf1a58d2f7f006b3a",
    ],
  },
  spoke: {
    address: "0x4200000000000000000000000000000000000007",
    code: "0x608060405234801561001057600080fd5b50600436106100885760003560e01c8063a71198691161005b578063a71198691461012a578063b1b1b2091461014a578063cbd4ece91461016d578063ecc704281461018057600080fd5b806321d800ec1461008d5780633dbb202b146100c55780636e296e45146100da57806382e3702d14610107575b600080fd5b6100b061009b366004610826565b60006020819052908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6100d86100d3366004610942565b610197565b005b6100e26102e2565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100bc565b6100b0610115366004610826565b60026020526000908152604090205460ff1681565b6005546100e29073ffffffffffffffffffffffffffffffffffffffff1681565b6100b0610158366004610826565b60016020526000908152604090205460ff1681565b6100d861017b3660046109ad565b61038b565b61018960035481565b6040519081526020016100bc565b60006101a784338560035461078d565b80516020808301919091206000908152600290915260409081902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055517fcafa81dc0000000000000000000000000000000000000000000000000000000081529091507342000000000000000000000000000000000000009063cafa81dc9061023c908490600401610a89565b600060405180830381600087803b15801561025657600080fd5b505af115801561026a573d6000803e3d6000fd5b505050508373ffffffffffffffffffffffffffffffffffffffff167fcb0f7ffd78f9aee47a248fae8db181db6eee833039123e026dcbff529522e52a3385600354866040516102bc9493929190610aa3565b60405180910390a26001600360008282546102d79190610aef565b909155505050505050565b60045460009073ffffffffffffffffffffffffffffffffffffffff1661dead141561036e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f78446f6d61696e4d65737361676553656e646572206973206e6f74207365740060448201526064015b60405180910390fd5b5060045473ffffffffffffffffffffffffffffffffffffffff1690565b60055473ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffeeeeffffffffffffffffffffffffffffffffeeef330173ffffffffffffffffffffffffffffffffffffffff161461046a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f50726f7669646564206d65737361676520636f756c64206e6f7420626520766560448201527f7269666965642e000000000000000000000000000000000000000000000000006064820152608401610365565b60006104788585858561078d565b8051602080830191909120600081815260019092526040909120549192509060ff1615610527576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f50726f7669646564206d6573736167652068617320616c72656164792062656560448201527f6e2072656365697665642e0000000000000000000000000000000000000000006064820152608401610365565b73ffffffffffffffffffffffffffffffffffffffff8616734200000000000000000000000000000000000000141561059957600090815260016020819052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016909117905550610787565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff878116919091179091556040516000918816906105f2908790610b2e565b6000604051808303816000865af19150503d806000811461062f576040519150601f19603f3d011682016040523d82523d6000602084013e610634565b606091505b5050600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001661dead1790559050801515600114156106d557600082815260016020819052604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169092179091555183917f4641df4a962071e12719d8c8c8e5ac7fc4d97b927346a3d7a335b1f7517e133c91a2610701565b60405182907f99d0e048484baa1b1540b1367cb128acd7ab2946d1ed91ec10e3c85e4bf51b8f90600090a25b600083334360405160200161071893929190610b4a565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181528151602092830120600090815291829052902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055505050505b50505050565b6060848484846040516024016107a69493929190610b9c565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fcbd4ece9000000000000000000000000000000000000000000000000000000001790529050949350505050565b60006020828403121561083857600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461086357600080fd5b919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f8301126108a857600080fd5b813567ffffffffffffffff808211156108c3576108c3610868565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561090957610909610868565b8160405283815286602085880101111561092257600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060006060848603121561095757600080fd5b6109608461083f565b9250602084013567ffffffffffffffff81111561097c57600080fd5b61098886828701610897565b925050604084013563ffffffff811681146109a257600080fd5b809150509250925092565b600080600080608085870312156109c357600080fd5b6109cc8561083f565b93506109da6020860161083f565b9250604085013567ffffffffffffffff8111156109f657600080fd5b610a0287828801610897565b949793965093946060013593505050565b60005b83811015610a2e578181015183820152602001610a16565b838111156107875750506000910152565b60008151808452610a57816020860160208601610a13565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610a9c6020830184610a3f565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff85168152608060208201526000610ad26080830186610a3f565b905083604083015263ffffffff8316606083015295945050505050565b60008219821115610b29577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500190565b60008251610b40818460208701610a13565b9190910192915050565b60008451610b5c818460208901610a13565b60609490941b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001691909301908152601481019190915260340192915050565b600073ffffffffffffffffffffffffffffffffffffffff808716835280861660208401525060806040830152610bd56080830185610a3f565b90508260608301529594505050505056fea26469706673582212202e10f5e906e4d6b76a9239c97481d533896c41191186b3ec3ca5feab5203fde664736f6c63430008090033",
    storage: [
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x000000000000000000000000000000000000000000000000000000000001aa33",
      "0x000000000000000000000000000000000000000000000000000000000000dead",
      "0x00000000000000000000000025ace71c97b33cc4729cf772ae268934f7ab5fa1",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
    ],
  },
};

/**
 * Configuration scheme for Messaging contract deployments.
 */

// Contract prefixes for Connector contracts.
export const HUB_PREFIX = "Hub";
export const SPOKE_PREFIX = "Spoke";

const DEFAULT_PROCESS_GAS = BigNumber.from("850000");
const DEFAULT_RESERVE_GAS = BigNumber.from("15000");
const DEFAULT_DELAY_BLOCKS = 0;

export type RelayerConfig = {
  [chain: number]: {
    relayerFeeVault: string;
  };
};

export const RELAYER_CONFIGS: {
  local: RelayerConfig;
  testnet: RelayerConfig;
  mainnet: RelayerConfig;
} = {
  local: {
    1337: {
      relayerFeeVault: constants.AddressZero,
    },
    1338: {
      relayerFeeVault: constants.AddressZero,
    },
  },
  testnet: {
    5: {
      relayerFeeVault: "",
    },
  },
  mainnet: {
    1: {
      relayerFeeVault: "",
    },
  },
};

export type MessagingProtocolConfig = {
  // The chain ID of the hub. For production environment, should be Ethereum Mainnet (1).
  hub: number;
  configs: {
    // Map of chain ID => configs.
    [chain: number]: {
      prefix: string; // The chain's name and the Connector name prefix.
      // Official AMB contract addresses.
      networkName?: string;
      ambs: {
        hub: string;
        spoke: string;
      };
      processGas: BigNumber;
      reserveGas: BigNumber;
      delayBlocks: number;
      custom?: {
        hub?: { [key: string]: string | BigNumber };
        spoke?: { [key: string]: string | BigNumber };
      };
    };
  };
};

export const MESSAGING_PROTOCOL_CONFIGS: Record<string, MessagingProtocolConfig> = {
  local: {
    hub: 1337,
    configs: {
      1337: {
        prefix: "Mainnet",
        ambs: {
          hub: constants.AddressZero,
          spoke: constants.AddressZero,
        },
        processGas: DEFAULT_PROCESS_GAS,
        reserveGas: DEFAULT_RESERVE_GAS,
        delayBlocks: DEFAULT_DELAY_BLOCKS,
      },
      1338: {
        prefix: "Optimism",
        ambs: {
          hub: OPTIMISM_AMB.hub.address,
          spoke: OPTIMISM_AMB.spoke.address,
        },
        processGas: DEFAULT_PROCESS_GAS,
        reserveGas: DEFAULT_RESERVE_GAS,
        delayBlocks: DEFAULT_DELAY_BLOCKS,
        custom: {
          hub: {
            // https://goerli.etherscan.io/address/0x9c945aC97Baf48cB784AbBB61399beB71aF7A378
            stateCommitmentChain: "0x9c945aC97Baf48cB784AbBB61399beB71aF7A378",
          },
        },
      },
    },
  },
  testnet: {
    hub: 5, // Goerli hub.
    configs: {
      // TODO: Configs for rinkeby, ropsten, etc.
      // Optimism goerli:
      420: {
        prefix: "Optimism",
        ambs: {
          // L1CrossDomainMessenger
          // https://kovan.etherscan.io/address/0x22f24361d548e5faafb36d1437839f080363982b
          // hub: "0x22F24361D548e5FaAfb36d1437839f080363982B",

          // https://goerli.etherscan.io/address/0x5086d1eEF304eb5284A0f6720f79403b4e9bE294
          hub: "0x5086d1eEF304eb5284A0f6720f79403b4e9bE294", // L1 cross domain messenger
          spoke: "0x4200000000000000000000000000000000000007",
        },
        processGas: DEFAULT_PROCESS_GAS,
        reserveGas: DEFAULT_RESERVE_GAS,
        delayBlocks: DEFAULT_DELAY_BLOCKS,
        custom: {
          hub: {
            // https://goerli.etherscan.io/address/0x9c945aC97Baf48cB784AbBB61399beB71aF7A378
            stateCommitmentChain: "0x9c945aC97Baf48cB784AbBB61399beB71aF7A378",
          },
        },
      },
      // // Sokol testnet (for Gnosis):
      // 77: {
      //   prefix: "Gnosis",
      //   ambs: {
      //     // https://kovan.etherscan.io/address/0xfe446bef1dbf7afe24e81e05bc8b271c1ba9a560#code
      //     hub: "0xFe446bEF1DbF7AFE24E81e05BC8B271C1BA9a560",
      //     // https://blockscout.com/poa/sokol/address/0xFe446bEF1DbF7AFE24E81e05BC8B271C1BA9a560/contracts
      //     spoke: "0xFe446bEF1DbF7AFE24E81e05BC8B271C1BA9a560",
      //   },
      //   processGas: DEFAULT_PROCESS_GAS,
      //   reserveGas: DEFAULT_RESERVE_GAS,
      // },
      // Gnosis Chiado chain
      // 100100: {
      //   prefix: "Gnosis",
      //   ambs: {
      //     // https://docs.gnosischain.com/about/networks/chiado
      //     hub: "0x5816D9EdC3D30F501A098bC26A313Ae8BeB7B8ad",
      //     spoke: "0x2f018c1118B0DC28E395d054e80fE44c61904892",
      //   },
      //   processGas: DEFAULT_PROCESS_GAS,
      //   reserveGas: DEFAULT_RESERVE_GAS,
      //   delayBlocks: DEFAULT_DELAY_BLOCKS,
      // },
      // Arbitrum nitro goerli testnet:
      // https://developer.offchainlabs.com/docs/Useful_Addresses
      // 421613: {
      //   prefix: "Arbitrum",
      //   ambs: {
      //     // https://goerli.etherscan.io/address/0x6BEbC4925716945D46F0Ec336D5C2564F419682C
      //     hub: "0x6BEbC4925716945D46F0Ec336D5C2564F419682C",
      //     // https://goerli-rollup-explorer.arbitrum.io/address/0x0000000000000000000000000000000000000064
      //     spoke: "0x0000000000000000000000000000000000000064",
      //   },
      //   processGas: DEFAULT_PROCESS_GAS,
      //   reserveGas: DEFAULT_RESERVE_GAS,
      //   delayBlocks: DEFAULT_DELAY_BLOCKS,
      //   custom: {
      //     hub: {
      //       defaultGasPrice: DEFAULT_RESERVE_GAS,
      //       // https://goerli.etherscan.io/address/0x45Af9Ed1D03703e480CE7d328fB684bb67DA5049
      //       outbox: "0x45Af9Ed1D03703e480CE7d328fB684bb67DA5049",
      //     },
      //   },
      // },
      80001: {
        prefix: "Polygon",
        ambs: {
          // FxRoot on goerli
          // https://goerli.etherscan.io/address/0x3d1d3E34f7fB6D26245E6640E1c50710eFFf15bA
          hub: "0x3d1d3E34f7fB6D26245E6640E1c50710eFFf15bA",
          // FxChild on mumbai
          // https://mumbai.polygonscan.com/address/0xCf73231F28B7331BBe3124B907840A94851f9f11
          spoke: "0xCf73231F28B7331BBe3124B907840A94851f9f11",
        },
        processGas: DEFAULT_PROCESS_GAS,
        reserveGas: DEFAULT_RESERVE_GAS,
        delayBlocks: DEFAULT_DELAY_BLOCKS,
        custom: {
          hub: {
            // https://goerli.etherscan.io/address/0x2890ba17efe978480615e330ecb65333b880928e
            checkpointManager: "0x2890bA17EfE978480615e330ecB65333b880928e",
          },
        },
      },
      97: {
        prefix: "Multichain",
        networkName: "Chapel",
        ambs: {
          // FxRoot on goerli
          // https://goerli.etherscan.io/address/0x965f84D915a9eFa2dD81b653e3AE736555d945f4
          hub: "0x965f84D915a9eFa2dD81b653e3AE736555d945f4",
          // FxChild on chapel/bsc testnet
          // https://testnet.bscscan.com/address/0x484ff472d8b592E46EBC39964e84f7F758C49045
          spoke: "0x484ff472d8b592E46EBC39964e84f7F758C49045",
        },
        processGas: DEFAULT_PROCESS_GAS,
        reserveGas: DEFAULT_RESERVE_GAS,
        delayBlocks: DEFAULT_DELAY_BLOCKS,
        custom: {
          hub: {
            mirrorChainId: "97",
          },
          spoke: {
            mirrorChainId: "5",
          },
        },
      },
      5: {
        prefix: "Mainnet",
        ambs: {
          hub: constants.AddressZero,
          spoke: constants.AddressZero,
        },
        processGas: DEFAULT_PROCESS_GAS,
        reserveGas: DEFAULT_RESERVE_GAS,
        delayBlocks: DEFAULT_DELAY_BLOCKS,
      },
    },
  },
  mainnet: {
    hub: 1,
    configs: {
      1: {
        prefix: "Mainnet",
        ambs: {
          hub: constants.AddressZero,
          spoke: constants.AddressZero,
        },
        processGas: DEFAULT_PROCESS_GAS,
        reserveGas: DEFAULT_RESERVE_GAS,
        delayBlocks: DEFAULT_DELAY_BLOCKS,
      },
      10: {
        prefix: "Optimism",
        ambs: {
          // L1CrossDomainMessenger
          // https://github.com/ethereum-optimism/optimism/blob/develop/packages/contracts/deployments/mainnet/Proxy__OVM_L1CrossDomainMessenger.json#L2
          hub: "0x25ace71c97B33Cc4729CF772ae268934F7ab5fA1",
          // L2CrossDomainMessenger
          // see: https://github.com/ethereum-optimism/optimism-tutorial/tree/main/cross-dom-comm
          spoke: "0x4200000000000000000000000000000000000007",
        },
        // TODO: 2mil gas for opti (going L1 => L2)? Is that correct?
        processGas: BigNumber.from("2000000"),
        reserveGas: DEFAULT_RESERVE_GAS,
        delayBlocks: DEFAULT_DELAY_BLOCKS,
        custom: {
          hub: {
            // https://github.com/ethereum-optimism/optimism/tree/develop/packages/contracts/deployments/mainnet
            stateCommitmentChain: "0xBe5dAb4A2e9cd0F27300dB4aB94BeE3A233AEB19",
          },
        },
      },
      100: {
        prefix: "Gnosis",
        ambs: {
          // https://etherscan.io/address/0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e
          hub: "0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e",
          // https://blockscout.com/xdai/mainnet/address/0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59
          spoke: "0x75Df5AF045d91108662D8080fD1FEFAd6aA0bb59",
        },
        processGas: DEFAULT_PROCESS_GAS,
        reserveGas: DEFAULT_RESERVE_GAS,
        delayBlocks: DEFAULT_DELAY_BLOCKS,
      },
      // Polygon
      137: {
        prefix: "Polygon",
        ambs: {
          // FxRoot on mainnet
          // https://static.matic.network/network/mainnet/v1/index.json
          hub: "0xfe5e5D361b2ad62c541bAb87C45a0B9B018389a2",
          spoke: "0x8397259c983751DAf40400790063935a11afa28a",
        },
        delayBlocks: DEFAULT_DELAY_BLOCKS,
        processGas: DEFAULT_PROCESS_GAS,
        reserveGas: DEFAULT_RESERVE_GAS,
        custom: {
          hub: {
            // https://static.matic.network/network/mainnet/v1/index.json
            // RootChainProxy
            checkpointManager: "0x86E4Dc95c7FBdBf52e33D563BbDB00823894C287",
          },
        },
      },
      // Arbitrum one
      // https://developer.offchainlabs.com/docs/Useful_Addresses
      42161: {
        prefix: "Arbitrum",
        ambs: {
          // https://etherscan.io/address/0x4Dbd4fc535Ac27206064B68FfCf827b0A60BAB3f
          hub: "0x4Dbd4fc535Ac27206064B68FfCf827b0A60BAB3f",
          // https://arbiscan.io/address/0x0000000000000000000000000000000000000064
          spoke: "0x0000000000000000000000000000000000000064",
        },
        processGas: DEFAULT_PROCESS_GAS,
        reserveGas: DEFAULT_RESERVE_GAS,
        delayBlocks: DEFAULT_DELAY_BLOCKS,
        custom: {
          hub: {
            defaultGasPrice: DEFAULT_RESERVE_GAS,
            // https://etherscan.io/address/0x0B9857ae2D4A3DBe74ffE1d7DF045bb7F96E4840
            outbox: "0x0B9857ae2D4A3DBe74ffE1d7DF045bb7F96E4840",
          },
        },
      },
    },
  },
};

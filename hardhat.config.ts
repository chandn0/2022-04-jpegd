import dotenv from "dotenv";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-web3"; //For openzeppelin
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-gas-reporter";
import "hardhat-abi-exporter";
import "solidity-coverage";
import "@typechain/hardhat";
import "@openzeppelin/hardhat-upgrades";

dotenv.config();

module.exports = {
  defaultNetwork: "hardhat",
  gasReporter: {
    showTimeSpent: true,
    currency: "USD",
  },
  networks: {
    buildbear: {
      url: "https://rpc.dev.buildbear.io/smooth-cliegg-lars-4f2b2361",

    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
            details: {
              yul: false,
            },
          },
        },
      },
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./tests",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 200000,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  abiExporter: {
    path: "./abi",
    clear: true,
    flat: true,
    spacing: 2,
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
  },
};

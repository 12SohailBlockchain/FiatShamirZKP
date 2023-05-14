require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const mnemonic = "YOUR INFURE KEY HERE";
const mnemonic = "YOUR WALLET MNEMONIC";

module.exports = {
    defaultNetwork: "bsctestnet",
  networks: {
    hardhat: {
    },
    bsctestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: { mnemonic: mnemonic }
    },
    bscmainnet: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 20000000000,
      accounts: { mnemonic: mnemonic }
    }
  },
  etherscan: {
    // Your API key for BSCscan
    // Obtain one at https://bscscan.com/
    apiKey: "YOUR ETHERSCAN API KEY HERE"
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ],
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
}

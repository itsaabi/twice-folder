require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-ethers");



// Replace with your own Alchemy API key and private key
const ALCHEMY_API_KEY = "gndg_9QFKzlKyqBzTfBXtoUEB4PFqKyA";
const SEPOLIA_PRIVATE_KEY = "9aa1e0b421b83467650fefa5848cab85462dadf9fdd5504aa62fcc41fed1c120";

module.exports = {
    solidity: {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          viaIR: true, // Enable IR-based compilation
        },
      },
      networks: {
        sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
            accounts: [SEPOLIA_PRIVATE_KEY],
        },
    },
    etherscan: {
        apiKey: "2WS1MEZMGJJ7NF43Z2RRZ2AW855KNUIWGV",
      },
    sourcify: {
        enabled: true
      },
};

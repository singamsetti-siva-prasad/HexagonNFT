require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const { ALCHEMY_URL, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: ALCHEMY_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

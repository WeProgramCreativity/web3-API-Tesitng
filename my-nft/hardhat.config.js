/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.1",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {url: "https://eth-sepolia.g.alchemy.com/v2/YmcmH2qnDdJOEyvqOAUiO35esbPOLZBp",
     accounts: [`0x${"16eae96ced06cf3a5d5f9da38614878766b1b6484fbd46f4fdc094f1bb9933b6"}`]
    }
  }
}
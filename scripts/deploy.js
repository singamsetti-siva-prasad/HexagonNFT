// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");

async function main() {
  const Hexagonfactory = await ethers.getContractFactory("HEXAGON");
  const hexagonERC721 = await Hexagonfactory.deploy();
  await hexagonERC721.deployed();
  console.log("Contract is deployed to address:", hexagonERC721.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x83815958a890c06dD1C7A95DC82C55B4B6e723fA

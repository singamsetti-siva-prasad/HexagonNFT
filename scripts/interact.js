require("dotenv").config();
const { ethers } = require("hardhat");

const { ALCHEMY_URL, PRIVATE_KEY, CONTRACT_ADDRESS, ALCHEMY_API_KEY } =
  process.env;

//creating an instance of deployed contract to interact
//grabing ABI
const contract = require("/home/sivaprasads/EthereumProjects/NFT/artifacts/contracts/HEXAGON.sol/HEXAGON.json");
console.log(JSON.stringify(contract.abi));

//Provider -this a node provider that gives you read and wrrite access to the blockchain
const alchemyProvider = new ethers.providers.AlchemyProvider(
  (network = "goerli"),
  ALCHEMY_API_KEY
);

//signer

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

//contract
const HEXAGONContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contract.abi,
  signer
);

async function main() {
  //     //reading from contract
  //     const message = await helloWorldContract.message();
  //     console.log("The message is: " + message);

  //   //updating contract
  console.log("minting the nft...");
  const tx = await HEXAGONContract.safeMint(
    "0x6941A58dAC4159EB6c91Dd5DE7FF0411C0DEE49E",
    "https://gateway.pinata.cloud/ipfs/QmX499st7dRu1Zgte6NR3Fr2i1WGiGPLHUXBd2oGimqW6d"
  );
  await tx.wait();
  console.log("token is minted to");

  //   //reading updated value
  //   const newMessage = await helloWorldContract.message();
  //     console.log("The new message is: " + newMessage);
}

main();

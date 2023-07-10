const hre = require("hardhat");

async function main() {
 const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding")
 const crowdfunding = await CrowdFunding.deploy()

 await crowdfunding.deployed();

 console.log(`CrowdFunding deployed to ${crowdfunding.address}`)
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

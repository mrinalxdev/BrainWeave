
const hre = require("hardhat");

async function main() {


  const lock = await hre.ethers.deployContract("Lock");

  await lock.waitForDeployment();

  console.log(
    `Lock deployed on ${lock.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// 0x8f789106ef402B69D81589Ec791D0579F61bb59F


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


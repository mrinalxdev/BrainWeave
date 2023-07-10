
const hre = require("hardhat");

async function main() {
  const Bitpay = await hre.ethers.getContractFactory("Paypal");
  const bitpay = await Bitpay.deploy();
  
  await bitpay.deployed();

  console.log("BitPay deployed to :", bitpay.address)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

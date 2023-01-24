var WagyuInfo = artifacts.require("WagyuInfo");
var Transaction = artifacts.require("Transaction");

module.exports = async function(deployer) {
  // deploy a contract
  await deployer.deploy(WagyuInfo);
  await deployer.deploy(Transaction)
  //access information about your deployed contract instance
  const instance = await WagyuInfo.deployed();
  const instance1 = await Transaction.deployed();
}

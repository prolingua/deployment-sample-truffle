const HelloFantom = artifacts.require("HelloFantom");

module.exports = async function(deployer) {
    await deployer.deploy(HelloFantom);
    const helloFantom = await HelloFantom.deployed();
};
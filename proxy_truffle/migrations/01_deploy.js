// const { deployProxy } = require('@openzeppelin/truffle-upgrades');

// const NUM1 = artifacts.require('./contracts/NUM1');


// module.exports = async function (deployer) {
//     const instance1 = await deployProxy(NUM1, [42], { deployer });
//     console.log('Deployed', instance1.address);
//   };

const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const NUM1 = artifacts.require('NUM1');
const NUM2 = artifacts.require('NUM2');

module.exports = async function (deployer) {
  const existing = await NUM1.deployed();
  const instance = await upgradeProxy(existing.address, NUM2, { deployer });
  console.log("Upgraded", instance.address);
};

  
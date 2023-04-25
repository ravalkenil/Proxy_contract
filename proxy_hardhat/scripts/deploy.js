const {ethers,upgrades} =require("hardhat");

async function main(){
  const NUM1= await ethers.getContractFactory("NUM1")
  console.log(" num vesrtion deployed");
  const num1=await upgrades.deployProxy(NUM1,[10],{
    initializer:"update",
  })
  await num1.deployed();
  console.log("adress",num1.address);
}
main()
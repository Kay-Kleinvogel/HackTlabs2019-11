const sc = artifacts.require("./InsuranceContractStepChallenge.sol")


const insurees= ["0x4C874ea5Fe3eB717AC9E66594C42063030c0Dc79", "0x06a7fd3dfe316EB58d74eA9231D0551D941ae429"];
const insurer= "0x794dFCA328deFBb96915A0307B423627f818Be04";
const doc ="0xf287f229d141896F9f41423F9c9Cc261d0861976";



module.exports = function(deployer) {
	deployer.deploy(sc, insurees, insurer, doc );
};


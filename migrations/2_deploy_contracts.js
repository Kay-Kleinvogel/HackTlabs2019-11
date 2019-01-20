const sc = artifacts.require("./InsuranceContractStepChallenge.sol")

module.exports = function(deployer) {
	deployer.deploy(sc);
};


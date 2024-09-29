// This file is used to deploy the contract to the blockchain network.
const Voting = artifacts.require("Voting");

module.exports = function (deployer) {
  const candidates = ["Candidate1", "Candidate2", "Candidate3"];
  deployer.deploy(Voting, candidates);
};

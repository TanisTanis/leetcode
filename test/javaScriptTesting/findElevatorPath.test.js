const { expect, assert } = require("chai");
const should = require("chai").should();

const { es1, es2 } = require("../data/elevatorPaths");

const findElevatorPath = require("../../javaScript/findElevatorPath");

describe("Find Elevator Path", () => {
  describe("Core Functionality", () => {
    it("Should output no paths given an impossible destination", () => {
      let res1 = findElevatorPath(es1, "C", "3-2");
      expect(res1).to.be.a("string");
      expect(res1).to.equal("No available paths found");

      let res2 = findElevatorPath(es1, "A", "2-2");
      res2.should.be.a("string");
      res2.should.equal("No available paths found");
    });

    it("Should output a single path if only one valid path exists", () => {
      let res3 = findElevatorPath(es2, "D", "5-4");
      assert.equal(typeof res3, "string");
      assert.equal(res3, "D -> D -> D.A -> A");

      let res4 = findElevatorPath(es2, "A", "5-2");
      expect(res4).to.be.a("string");
      expect(res4).to.equal("A.C -> C");
    });
  });

});

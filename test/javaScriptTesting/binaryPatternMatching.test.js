const binaryPatternMatching = require("../../javaScript/binaryPatternMatching");

const { expect, assert } = require("chai");
const should = require("chai").should();

describe("Binary Pattern Matching", () => {
  describe("Simple Functionality", () => {
    it("Should work on simple patterns", () => {
      let result1 = binaryPatternMatching("010", "opo");
      expect(result1).to.equal(1);

      let result2 = binaryPatternMatching("111111", "prstlmnpqtr");
      expect(result2).to.equal(6);

      let result5 = binaryPatternMatching("0000", "aeiouaeiouy");
      assert.equal(result5, 8);

      let result6 = binaryPatternMatching("0110", "prstyllyqqa");
      result6.should.equal(2);
    });
  });

  describe("Error Handling", () => {
    it("Should return zero if not given a pattern or string", () => {
      let result3 = binaryPatternMatching("", "omasdp");
      assert.equal(result3, 0);

      let result4 = binaryPatternMatching("110", "");
      assert.equal(result4, 0);
    });

    it("should throw if not given correct inputs", () => {
      let fn = () => binaryPatternMatching([1, 2, 3], { a: 1 });
      expect(fn).to.throw("Invalid inputs");
    });
  });
});

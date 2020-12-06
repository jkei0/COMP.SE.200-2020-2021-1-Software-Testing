import chai from "chai";
import castArray from "../src/castArray.js";
const expect = chai.expect;

describe("castArray", () => {
  describe("Test with differnt type of inputs", () => {
    it("Number", () => {
      expect(castArray(1)).to.eql([1]);
    });
    it("String", () => {
      expect(castArray("Good Test")).to.eql(["Good Test"]);
    });
    it("Object", () => {
      expect(castArray({"b":1, "c":0})).to.eql([{"b":1, "c":0}]);
    });
    it("Empty", () => {
      expect(castArray()).to.eql([]);
    });
    it("Array", () => {
      expect(castArray([1,2,3,4])).to.eql([1,2,3,4]);
    });
    it("Null", () => {
      expect(castArray(null)).to.eql([null]);
    });
    it("Undefined", () => {
      expect(castArray(undefined)).to.eql([undefined]);
    });
    it("True", () => {
      expect(castArray(true)).to.eql([true]);
    });
    it("False", () => {
      expect(castArray(false)).to.eql([false]);
    });
    it("Object that contains array", () => {
      expect(castArray({'a':[1,2,3]})).to.eql([{'a':[1,2,3]}]);
    });
  });
});

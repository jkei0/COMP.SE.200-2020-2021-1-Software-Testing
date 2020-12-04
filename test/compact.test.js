import chai from "chai";
import compact from "../src/compact.js";
const expect = chai.expect;

describe("Compact", () => {
  describe("Bugs", () => {
    it("Seems to remove first value", () => {
      expect(compact([1,1,1])).to.eql([1,1,1])
    });
    it("Seems to remove first legal value", () => {
      expect(compact([0,1,2,3])).to.eql([1,2,3])
    });
  });
  describe("Tests to alter known bugs", () => {
    it("Removes nulls", () => {
      expect(compact([1,2,null,null,3])).to.eql([2,3]);
    });
    it("Removes falses", () => {
      expect(compact([1,2,false,false,3])).to.eql([2,3]);
    });
    it("Removes zeros", () => {
      expect(compact([1,2,0,0,3])).to.eql([2,3]);
    });
    it("Removes ''", () => {
      expect(compact([1,2,'','',3])).to.eql([2,3]);
    });
    it("Removes undefined", () => {
      expect(compact([1,2,undefined,undefined,3])).to.eql([2,3]);
    });
    it("Removes NaN", () => {
      expect(compact([1,2,NaN,NaN,3])).to.eql([2,3]);
    });
    it("Check with all combined", () => {
      expect(compact([NaN, "1", "a", 0, 3, undefined, 4, 7, false, null, ""])).to.eql(["a", 3, 4, 7]);
    });
    it("Check with array only containing falsey values", () => {
      expect(compact([false, null, 0, "", undefined, NaN])).to.eql([]);
    });
  });
});

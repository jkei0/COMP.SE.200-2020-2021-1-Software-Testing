import chai from "chai";
import at from "../src/at.js";
const expect = chai.expect;

describe("At", () => {
  describe("Test with JSON object", () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    it("Pick some path", () => {
      expect(at(object, ['a[0].b.c', 'a[1]'])).to.eql([3,4]);
    });
    it("Illegal index", () => {
      expect(at(object, ['a[10].b.c'])).to.eql([undefined]); // no error handling
    });
    it("Illegal variable", () => {
      // fills all slots with undefined
      expect(at(object, ['z[0].b.c', ['a[1]']])).to.eql([undefined, 4]);
    });
  });
});

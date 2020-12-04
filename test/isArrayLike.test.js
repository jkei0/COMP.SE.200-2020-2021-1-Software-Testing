import chai from "chai";
import isArrayLike from "../src/isArrayLike.js";
const expect = chai.expect;

describe("isArrayLike", () => {
  it("Test with function", () => {
    expect(isArrayLike(function() {return arguments}())).to.eql(false);
  });
  it("Test with array", () => {
    expect(isArrayLike([1,2,3])).to.eql(true);
  });
  it("Test with string", () => {
    expect(isArrayLike("test string")).to.eql(true);
  });
  it("Test with integer", () => {
    expect(isArrayLike(12345)).to.eql(false);
  });
});

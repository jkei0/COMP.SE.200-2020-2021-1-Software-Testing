import chai from "chai";
import isArgument from "../src/isArgument.js";
const expect = chai.expect;

describe("isArgument", () => {
  it("Test with function", () => {
    expect(isArgument(function() {return arguments}())).to.eql(true);
  });
  it("Test with array", () => {
    expect(isArgument([1,2,3])).to.eql(false);
  });
  it("Test with string", () => {
    expect(isArgument("test string")).to.eql(false);
  });
});

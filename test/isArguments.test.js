import chai from "chai";
import isArguments from "../src/isArguments.js";
const expect = chai.expect;

describe("isArgument", () => {
  it("Test with function", () => {
    expect(isArguments(function() {return arguments}())).to.eql(true);
  });
  it("Test with array", () => {
    expect(isArguments([1,2,3])).to.eql(false);
  });
  it("Test with string", () => {
    expect(isArguments("test string")).to.eql(false);
  });
});

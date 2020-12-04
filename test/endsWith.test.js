import chai from "chai";
import endsWith from "../src/endsWith.js";
const expect = chai.expect;

describe("endsWith", () => {
  it("Test last letter", () => {
    expect(endsWith("abc", "c")).to.eql(true);
  });
  it("Test false case", () => {
    expect(endsWith("abc", "a")).to.eql(false);
  });
  it("Test second to last letter", () => {
    expect(endsWith("abc", "b", 2)).to.eql(true);
  });
  it("Test with numbers", () => {
    expect(endsWith("123", "3")).to.eql(true);
  });
  it("Test with false case with numbers", () => {
    expect(endsWith("1234", "3")).to.eql(false);
  });
});

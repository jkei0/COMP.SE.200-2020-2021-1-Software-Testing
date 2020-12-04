import chai from "chai";
import defaultToAny from "../src/defaultToAny.js";
const expect = chai.expect;

describe("defaultToAny", () => {
  it("Should return value", () => {
    expect(defaultToAny(1,10,20)).to.eql(1);
  });
  it("Value undefined", () => {
    expect(defaultToAny(undefined,10,20)).to.eql(10);
  });
  it("Value NaN", () => {
    expect(defaultToAny(NaN,10,20)).to.eql(10);
  });
  it("Value null", () => {
    expect(defaultToAny(null,10,20)).to.eql(10);
  });
  it("Multiple illegal values in defaultvalues", () => {
    expect(defaultToAny(null,undefined,NaN,null,20)).to.eql(20);
  });
  it("Only illegal values", () => {
    expect(defaultToAny(null, null, undefined, NaN, NaN, null)).to.eql(null);
  });
});

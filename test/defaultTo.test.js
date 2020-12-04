import chai from "chai";
import defaultTo from "../src/defaultTo.js";
const expect = chai.expect;

describe("defaultTo", () => {
  it("Returns default value with NaN", () => {
    expect(defaultTo(NaN, 10)).to.eql(10);
  });
  it("Returns default value with nulls", () => {
    expect(defaultTo(null, 10)).to.eql(10);
  });
  it("Returns default value with undefined", () => {
    expect(defaultTo(undefined, 10)).to.eql(10);
  });
  it("Returns given value when its legit", () => {
    expect(defaultTo(123,10)).to.eql(123);
  });
  it("Returns default value when it is NaN", () => {
    expect(defaultTo(undefined, NaN)).to.eql(NaN);
  });
  it("Returns default value when it is string", () => {
    expect(defaultTo(NaN, "test")).to.eql("test");
  });
  it("Returns value when it is array", () => {
    expect(defaultTo([1,2,3,4], 10)).to.eql([1,2,3,4]);
  });
});

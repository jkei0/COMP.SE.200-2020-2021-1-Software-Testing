import chai from "chai";
import drop from "../src/drop.js";
const expect = chai.expect;

describe("Drop", () => {
  it("Test that drops one element", () => {
    expect(drop([1,2,3])).to.eql([2,3]);
  });
  it("Test that drops multiple elements", () => {
    expect(drop([1,2,3,4],3)).to.eql([4]);
  });
  it("Test that works with strings", () => {
    expect(drop(["bizz", "bazz", "buzz"],2)).to.eql(["buzz"]);
  });
  it("Test that works with zero", () => {
    expect(drop([1,2,3,4],0)).to.eql([1,2,3,4]);
  });
  it("Test that drops all elements", () => {
    expect(drop([1,2,3,4],4)).to.eql([]);
  });
  it("Test that drops all elements, number > array length", () => {
    expect(drop([1,2,3,4],8)).to.eql([]);
  });
});

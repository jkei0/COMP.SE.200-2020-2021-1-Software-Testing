import chai from "chai";
import difference from "../src/difference.js";
const expect = chai.expect;

describe("Difference", () => {
  it("Test with simple arrays", () => {
    expect(difference([2,1], [2,3])).to.eql([1])
  });
  it("Test with strings", () => {
    expect(difference(["bizz", "bazz", "buzz"], ["bizz, bazz"])).to.eql(["buzz"]);
  });
  it("Test with empty filter array", () => {
    expect(difference([2,1], [])).to.eql([2,1]);
  });
  it("Test with empty array", () => {
    expect(difference([], [2,3])).to.eql([]);
  });
});

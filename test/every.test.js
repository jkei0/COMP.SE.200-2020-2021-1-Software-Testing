import chai from "chai";
import every from "../src/every.js";
const expect = chai.expect;

describe("Every", () => {
  it("Test with boolean functions, should return true", () => {
    expect(every([true, true, false, true], Boolean)).to.eql(true);
  });
  it("Test with boolean functions, should return false", () => {
    expect(every([true, 1, true, false, true], Boolean)).to.eql(true);
  });
});

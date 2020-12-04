import chai from "chai";
import divide from "../src/divide.js";
const expect = chai.expect;

describe("Divide", () => {
  it("Test with two positive integers", () => {
    expect(divide(4,2)).to.eql(2)
  });
  it("Test with two negative integers", () => {
    expect(divide(-8,-2)).to.eql(4)
  });
  it("Test with positive and negative integer", () => {
    expect(divide(-4,2)).to.eql(-2);
    expect(divide(4,-2)).to.eql(-2);
  });
  it("Test with two positive floating numbers", () => {
    expect(divide(4.2,2.1)).to.eql(2);
  });
  it("Test with two negative floating numbers", () => {
    expect(divide(-3.4,3.4)).to.eql(-1)
  });
  it("Test with positive and negative floating numebr", () => {
    expect(divide(4.2,-2.1)).to.eql(-2);
    expect(divide(4.2,-2.1)).to.eql(-2);
  });
  it("Test with zero", () => {
    expect(divide(0,34)).to.eql(0);
  });
  it("dividend zero", () => {
    expect(divide(3,0)).to.eql(NaN);
  })
});

import chai from "chai";
import clamp from "../src/clamp.js";
const expect = chai.expect;

describe("Clamp", () => {
  it("Test with positive numbers", () => {
    expect(clamp(15,10,20)).to.eql(15)
  });
  it("Test with negative numbers", () => {
    expect(clamp(-15,-10,-20)).to.eql(-15)
  });
  it("Clamp number below bounds", () => {
    expect(clamp(5,15,20)).to.eql(15)
  });
  it("Clamp number above bounds", () => {
    expect(clamp(30,15,20)).to.eql(20)
  });
  it("Same numbers", () => {
    expect(clamp(22,22,22)).to.eql(22)
  });
  it("Same upper and lower bound ", () => {
    expect(clamp(33,15,15)).to.eql(15)
  });
});

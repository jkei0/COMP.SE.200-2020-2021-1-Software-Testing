import chai from "chai";
import add from "../src/add.js";
const expect = chai.expect;

describe("Add", () => {
  describe("Test with two integers", () => {
    it("Two positive numbers", () => {
      expect(add(5, 4)).to.eql(9);
    });
    it("One positive and one negative number, result positive", () => {
      expect(add(5,-4)).to.eql(1);
    });
    it("One positive and one negative number, result negative", () => {
      expect(add(-12, 4)).to.eql(-8);
    });
    it("Two negative numbers", () => {
      expect(add(-33,-120)).to.eql(-153);
    });
  });

  describe("Test with floating-point numbers", () => {
    it("Two positive float numbers", () => {
      expect(add(5.4,10.1)).to.eql(15.5);
    });
    it("Two negative float numbers", () => {
      expect(add(-3.333, -4.444)).to.eql(-7.777);
    });
    it("One negative, one positive float, result positive", () => {
      expect(add(-12.33, 53.59)).to.eql(41.26);
    });
    it("One negative, one positive float, result negative", () => {
      expect(add(4.9, -9.2)).to.eql(-4.3);
    });
    it("Float number and integer", () => {
      expect(add(5, 5.9)).to.eql(10.9);
    });
    it("Different number of decimals", () => {
      expect(add(11.23, 1.112345)).to.eql(12.342345);
    });
  });
});

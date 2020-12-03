import chai from "chai";
import capitalize from "../src/capitalize.js";
const expect = chai.expect;

describe("Capitalize", () => {
  describe("Test with one word inputs", () => {
    it("Everything small letters", () => {
      expect(capitalize("small")).to.eql("Small");
    });
    it("Every letter capitalized", () => {
      expect(capitalize("SMALL")).to.eql("Small");
    });
    it("Word contains numbers", () => {
      expect(capitalize("SMA11LL")).to.eql("Sma11ll");
    });
    it("Word starts with number", () => {
      expect(capitalize("1small")).to.eql("1small");
    });
  });
  describe("Test with multiple word inputs", () => {
    it("Two words", () => {
      expect(capitalize("good test")).to.eql("Good test");
    });
    it("Input starts with space", () => {
      expect(capitalize(" good test")).to.eql(" good test");
    });
  });
});

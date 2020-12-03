import chai from "chai";
import ceil from "../src/ceil.js";
const expect = chai.expect;

describe("Ceil", () => {
  describe("Tests with different imputs", () => {
    it("Test with float value", () => {
      expect(ceil(4.005)).to.eql(5);
    });
    it("Test with given precision", () => {
      expect(ceil(4.12345, 2)).to.eql(4.13);
    })
    it("Test with negative prcision", () => {
      expect(ceil(1234.234, -2)).to.eql(1300);
    })
    it("Test with precision 0", () => {
      expect(ceil(1235.234, 0)).to.eql(1236);
    });
    it("Test with high precision", () => {
      expect(ceil(1235.234, 10)).to.eql(1235.234);
    });
    it("Test rounding up with negative precision", () => {
      expect(ceil(1250.34,-2)).to.eql(1300);
    });
    it("Test rounding up with precision", () => {
      expect(ceil(345.23555, 3)).to.eql(345.236);
    });
    it("Test with negative number", () => {
      expect(ceil(-1234.55)).to.eql(-1234);
    });
    it("Test with negative number and precision", () => {
      expect(ceil(-1230.33333, 3)).to.eql(-1230.333);
    });
    it("Test with negative number and negative precision", () => {
      expect(ceil(-1254.345, -2)).to.eql(-1200);
    });
  });
});

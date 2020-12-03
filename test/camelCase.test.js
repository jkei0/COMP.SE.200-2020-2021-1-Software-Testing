import chai from "chai";
import camelCase from "../src/camelCase.js";
const expect = chai.expect;

// returns space before camelCase word
describe("CamelCase", () => {
  describe("Different marks", () => {
    it("Returns space before actual word", () => {
      expect(camelCase("foo bar")).to.eql("fooBar");
    });
    it("Spaces", () => {
      expect(camelCase("foo bar")).to.eql(" fooBar");
    });
    it("Hyphens", () => {
      expect(camelCase("---foo-----bar----")).to.eql(" fooBar");
    });
    it("Underlines", () => {
      expect(camelCase("__foo__bar__")).to.eql(" fooBar");
    });
    it("Dots", () => {
      expect(camelCase("..foo..bar..")).to.eql(" fooBar");
    });
    it("All caps", () => {
      expect(camelCase(" FOO BAR ")).to.eql(" fooBar");
    })
    it("Multiple words", () => {
      expect(camelCase("foo bar xiz")).to.eql(" fooBarXiz");
    })
    it("Random capitalization", () => {
      expect(camelCase("fOoF bRRAa xIzZ")).to.eql(" foofBrraaXizz");
    })
    it("Multiple words, different marks, random capitalization", () => {
      expect(camelCase("--__fOoORRR_ BBAArr---XIIIIZ___")).to.eql(" fooorrBbaarrXiiiiz");
    });
    it("Numbers in word", () => {
      expect(camelCase("foo1 b1ar")).to.eql(" foo1B1ar");
    })
  });
});

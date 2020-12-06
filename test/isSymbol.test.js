import chai from "chai"
import isSymbol from "../src/isSymbol.js"
const expect = chai.expect

describe("isSymbol", () => {
   it("test symbols", () =>{
      expect(isSymbol(Symbol.iterator)).to.eql(true)
      expect(isSymbol(Symbol())).to.eql(true)
   });
   it("test non-symbols", () =>{
      expect(isSymbol('a')).to.eql(false)
      expect(isSymbol('*')).to.eql(false)
      expect(isSymbol('1')).to.eql(false)
      expect(isSymbol(5)).to.eql(false)
      expect(isSymbol("Hello world!")).to.eql(false)
      expect(isSymbol(true)).to.eql(false)
      expect(isSymbol(null)).to.eql(false)
   });
  })
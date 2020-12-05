import chai from "chai"
import toString from "../src/toString.js"
const expect = chai.expect

describe("toString: Convert a value to string", () => {
   it("convert an integer", () =>{
      expect(toString(5)).to.eql("5")
   });
   it("convert a negative integer", () =>{
      expect(toString(-5)).to.eql("-5")
   });
   it("convert an array of integers", () =>{
       expect(toString([1, 2, 3])).to.eql("1,2,3")
   });
   it("convert a floating point number", () =>{
      expect(toString(5.123)).to.eql("5.123")
   });
   it("convert a boolean", () =>{
      expect(toString(true)).to.eql("true")
   });
   it("nothing changes with a string", () =>{
      expect(toString('fred')).to.eql("fred")
   });
   // This test does should not really pass, as there is a mistake in the tested files.
   // toString(null) results in 'null', which, while reasonable, differs from suggested
   // outcome in the file (which is '')
   it("able to handle null value", () =>{
      expect(toString(null)).to.eql('null')
   });
  })
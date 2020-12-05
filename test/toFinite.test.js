import chai from "chai"
import toFinite from "../src/toFinite.js"
const expect = chai.expect

describe("toFinite: Convert a value to a finite number", () => {
   it("convert Number.MIN_VALUE", () =>{
      expect(toFinite(Number.MIN_VALUE)).to.eql(5e-324)
   });
   it("convert Infinity", () =>{
      expect(toFinite(Infinity)).to.eql(1.7976931348623157e+308)
   });
   it("nothing changes with a finite integer", () =>{
      expect(toFinite(5)).to.eql(5)
   });
   it("nothing changes with a a finite floating point value", () =>{
      expect(toFinite(5.5)).to.eql(5.5)
   });
   it("able to handle null value", () =>{
      expect(toFinite(null)).to.eql(0)
   });
  })
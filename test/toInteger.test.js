import chai from "chai"
import toInteger from "../src/toInteger.js"
const expect = chai.expect

describe("toInteger", () => {
   it("convert a floating point value", () =>{
      expect(toInteger("5.6")).to.eql(5)
   });
   it("convert a string", () =>{
      expect(toInteger("5")).to.eql(5)
   });
   it("convert a string starting with whitespace", () =>{
      expect(toInteger(" 5")).to.eql(5)
   });
   it("convert a string starting with '-'", () =>{
      expect(toInteger("-5")).to.eql(-5)
   });
   it("convert a binary string", () =>{
       expect(toInteger("0b110")).to.eql(6)
   });
   it("convert an octal string", () =>{
       expect(toInteger("0o57")).to.eql(47)
   });
   it("convert a boolean", () =>{
      expect(toInteger(true)).to.eql(1)
   });
   it("understand Number.MIN_VALUE", () =>{
      expect(toInteger(Number.MIN_VALUE)).to.eql(0)
   });
   it("understand Infinity", () =>{
      expect(toInteger(Infinity)).to.eql(1.7976931348623157e+308)
   });
   it("nothing changes with an integer", () =>{
      expect(toInteger(5)).to.eql(5)
   });
   it("able to handle null value", () =>{
      expect(toInteger(null)).to.eql(0)
   });
  })
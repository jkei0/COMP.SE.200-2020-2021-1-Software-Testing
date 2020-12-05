import chai from "chai"
import toNumber from "../src/toNumber.js"
const expect = chai.expect

describe("toNumber: Convert a value to a number", () => {
   it("convert a string", () =>{
      expect(toNumber("5.2")).to.eql(5.2)
   });
   it("convert a string starting with whitespace", () =>{
      expect(toNumber(" 5")).to.eql(5)
   });
   it("convert a string starting with '-'", () =>{
      expect(toNumber("-5")).to.eql(-5)
   });
   it("convert a binary string", () =>{
       expect(toNumber("0b110")).to.eql(6)
   });
   it("convert an octal string", () =>{
       expect(toNumber("0o57")).to.eql(47)
   });
   it("convert a boolean", () =>{
      expect(toNumber(true)).to.eql(1)
   });
   it("understand Number.MIN_VALUE", () =>{
      expect(toNumber(Number.MIN_VALUE)).to.eql(5e-324)
   });
   it("understand Infinity", () =>{
      expect(toNumber(Infinity)).to.eql(Infinity)
   });
   it("nothing changes with a number", () =>{
      expect(toNumber(5.2)).to.eql(5.2)
   });
   it("able to handle null value", () =>{
      expect(toNumber(null)).to.eql(0)
   });
  })
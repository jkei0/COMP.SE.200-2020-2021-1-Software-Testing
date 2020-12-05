import chai from "chai"
import upperFirst from "../src/upperFirst.js"
const expect = chai.expect

describe("upperFirst: Convert first character os string to upper case", () => {
   it("change lower case to upper case", () =>{
      expect(upperFirst('fred')).to.eql("Fred")
   });
   it("nothing changes with upper case letter", () =>{
       expect(upperFirst('Fred')).to.eql("Fred")
   });
   it("nothing changes with a number", () =>{
      expect(upperFirst('1fred')).to.eql("1fred")
   });
   it("nothing changes with a space", () =>{
      expect(upperFirst(' fred')).to.eql(" fred")
   });
   it("handles empty string", () =>{
      expect(upperFirst('')).to.eql('')
   });
   it("able to handle null value", () =>{
      expect(upperFirst(null)).to.eql('')
   });
  })
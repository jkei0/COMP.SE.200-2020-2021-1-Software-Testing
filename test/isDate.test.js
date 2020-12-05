import chai from "chai"
import isDate from "../src/isDate.js"
const expect = chai.expect

describe("isDate", () => {
   it("test date objects", () =>{
      expect(isDate(new Date)).to.eql(true)
      expect(isDate(new Date(77477744))).to.eql(true)
      expect(isDate(new Date("Mon April 23 2012"))).to.eql(true)
   });
   it("test things that aren't data objects", () =>{
      expect(isDate('a')).to.eql(false)
      expect(isDate(true)).to.eql(false)
      expect(isDate([5, 3, 2020])).to.eql(false)
      expect(isDate("Mon April 23 2012")).to.eql(false)
      expect(isDate(new Object)).to.eql(false)
      expect(isDate(null)).to.eql(false)
   });
  })
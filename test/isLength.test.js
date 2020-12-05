import chai from "chai"
import isLength from "../src/isLength.js"
const expect = chai.expect

describe("isLength", () => {
   it("test lengths", () =>{
      expect(isLength(3)).to.eql(true)
      expect(isLength(100)).to.eql(true)
   });
   it("test non-lengths", () =>{
      expect(isLength(0)).to.eql(true)
      expect(isLength(-1)).to.eql(false)
      expect(isLength('3')).to.eql(false)
      expect(isLength(3.5)).to.eql(false)
      expect(isLength(Number.MIN_VALUE)).to.eql(false)
      expect(isLength(Infinity)).to.eql(false)
      expect(isLength("Hello world!")).to.eql(false)
      expect(isLength(true)).to.eql(false)
      expect(isLength(null)).to.eql(false)
   });
  })
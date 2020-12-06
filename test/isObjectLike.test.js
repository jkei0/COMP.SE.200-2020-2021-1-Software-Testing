import chai from "chai"
import isObjectLike from "../src/isObjectLike.js"
const expect = chai.expect

describe("isObjectLike", () => {
   it("test object like things", () =>{
      expect(isObjectLike(new Object)).to.eql(true)
      expect(isObjectLike({})).to.eql(true)
      expect(isObjectLike([1, 2, 3])).to.eql(true)
   });
   it("test things that aren't like like objects", () =>{
      expect(isObjectLike('a')).to.eql(false)
      expect(isObjectLike(Function)).to.eql(false)
      expect(isObjectLike(5)).to.eql(false)
      expect(isObjectLike("Hello world!")).to.eql(false)
      expect(isObjectLike(true)).to.eql(false)
      expect(isObjectLike(null)).to.eql(false)
   });
  })
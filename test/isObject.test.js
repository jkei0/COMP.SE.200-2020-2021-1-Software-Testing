import chai from "chai"
import isObject from "../src/isObject.js"
const expect = chai.expect

describe("isObject", () => {
   it("test objects", () =>{
      expect(isObject(new Object)).to.eql(true)
      expect(isObject({})).to.eql(true)
      expect(isObject([1, 2, 3])).to.eql(true)
      expect(isObject(Function)).to.eql(true)
   });
   it("test non-objects", () =>{
      expect(isObject('a')).to.eql(false)
      expect(isObject(5)).to.eql(false)
      expect(isObject("Hello world!")).to.eql(false)
      expect(isObject(true)).to.eql(false)
      expect(isObject(null)).to.eql(false)
   });
  })
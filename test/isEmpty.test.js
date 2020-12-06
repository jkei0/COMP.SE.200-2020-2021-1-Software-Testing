import chai from "chai"
import isEmpty from "../src/isEmpty.js"
const expect = chai.expect

describe("isEmpty", () => {
   it("test things that are considered empty", () =>{
      expect(isEmpty(null)).to.eql(true)
      expect(isEmpty(true)).to.eql(true)
      expect(isEmpty(1)).to.eql(true)
      expect(isEmpty(Function)).to.eql(true)
      expect(isEmpty([])).to.eql(true)
      expect(isEmpty("")).to.eql(true)
      expect(isEmpty(new Object)).to.eql(true)
   });
   it("test things that aren't considered empty", () =>{
      expect(isEmpty('a')).to.eql(false)
      expect(isEmpty([5])).to.eql(false)
      expect(isEmpty("Hello world!")).to.eql(false)
      expect(isEmpty({'a': 1})).to.eql(false)
   });
  })
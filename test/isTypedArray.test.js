import chai from "chai"
import isTypedArray from "../src/isTypedArray.js"
const expect = chai.expect

describe("isTypedArray", () => {
   it("test typed arrays", () =>{
      expect(isTypedArray(new Uint8Array)).to.eql(true)
      expect(isTypedArray(new Int8Array)).to.eql(true)
   });
   it("test things that aren't typed arrays", () =>{
      expect(isTypedArray(5)).to.eql(false)
      expect(isTypedArray("Hello world!")).to.eql(false)
      expect(isTypedArray(true)).to.eql(false)
      expect(isTypedArray(null)).to.eql(false)
   });
  })
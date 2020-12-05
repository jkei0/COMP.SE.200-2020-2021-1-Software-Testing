import chai from "chai"
import isBuffer from "../src/isBuffer.js"
const expect = chai.expect

describe("isBuffer", () => {
   // isBuffer() doesn't seem to produce true results at all
   it("test example buffer", () =>{
      expect(isBuffer(new Buffer(2))).to.eql(true)
   });
   it("test another buffer", () =>{
      expect(isBuffer(new ArrayBuffer(8))).to.eql(true)
   });
   it("test non-buffers", () =>{
      expect(isBuffer('a')).to.eql(false)
      expect(isBuffer(true)).to.eql(false)
      expect(isBuffer([5, 3, 2020])).to.eql(false)
      expect(isBuffer("Mon April 23 2012")).to.eql(false)
      expect(isBuffer(new Uint8Array(2))).to.eql(false)
      expect(isBuffer(null)).to.eql(false)
   });
  })
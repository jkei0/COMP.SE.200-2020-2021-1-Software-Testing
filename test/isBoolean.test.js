import chai from "chai"
import isBoolean from "../src/isBoolean.js"
const expect = chai.expect

describe("isBoolean", () => {
   it("test booleans", () =>{
      expect(isBoolean(true)).to.eql(true)
      expect(isBoolean(false)).to.eql(true)
      expect(isBoolean(new Boolean(true))).to.eql(true)
   });
   it("test non-booleans", () =>{
      expect(isBoolean('y')).to.eql(false)
      expect(isBoolean("true")).to.eql(false)
      expect(isBoolean(1)).to.eql(false)
      expect(isBoolean(0)).to.eql(false)
      expect(isBoolean([])).to.eql(false)
      expect(isBoolean(new Object)).to.eql(false)
      expect(isBoolean(null)).to.eql(false)
   });
  })
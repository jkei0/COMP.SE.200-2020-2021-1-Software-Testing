import chai from "chai"
import map from "../src/map.js"
const expect = chai.expect

describe("map", () => {
   it("map square(n) function", () =>{
      function square(n) { return n * n }
      expect(map([4, 8], square)).to.eql([16, 64])
   });
   it("can handle an empty array", () =>{
      function square(n) { return n * n }
      expect(map([], square)).to.eql([])
   });
   it("can handle dividing by zero", () =>{
      function bad_division(n) { return (n / (n-3)) }
      expect(map([5, 4, 3, 2], bad_division)).to.eql([2.5, 4, Infinity, -2])
   });
   it("can handle null values", () =>{
      function bad_function(n) { return null }
      expect(map(null, bad_function)).to.eql([])
      expect(map([1, 2], bad_function)).to.eql([null, null])
   });
  })
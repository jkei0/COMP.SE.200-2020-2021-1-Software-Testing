import chai from "chai"
import reduce from "../src/reduce.js"
const expect = chai.expect

describe("reduce", () => {
   it("provided simple reduce test", () =>{
      expect(reduce([1, 2], (sum, n) => sum + n, 0)).to.eql(3)
   });
   it("provided simple reduce test with empty array", () =>{
      expect(reduce([], (sum, n) => sum + n, 0)).to.eql(0)
   });
   it("provided simple reduce test with a nonsense null returning function", () =>{
      expect(reduce([1, 2], function() {return null} )).to.eql(null)
   });
   it("provided, more complex, reduce test", () =>{
      expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
               (result[value] || (result[value] = [])).push(key)
               return result
            }, {}))
      .to.eql({ '1': ['a', 'c'], '2': ['b'] })
   });
  })
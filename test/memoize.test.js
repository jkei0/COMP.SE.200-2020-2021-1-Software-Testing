import chai from "chai"
import memoize from "../src/memoize.js"
const expect = chai.expect

describe("memoize", () => {
   it("provided tests", () =>{
      const object = { 'a': 1, 'b': 2 }
      const other = { 'c': 3, 'd': 4 }

      const values = memoize(values)
      expect(values(object)).to.eql([1, 2])

      expect(values(other)).to.eql([3, 4])

      object.a = 2
      expect(values(object)).to.eql([1, 2])

      values.cache.set(object, ['a', 'b'])
      expect(values(object)).to.eql(['a', 'b'])

      memoize.Cache = WeakMap
   });
  })
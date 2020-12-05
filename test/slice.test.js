import chai from "chai"
import slice from "../src/slice.js"
const expect = chai.expect

describe("slice: creates an array slice from start to end-1", () => {
   it("works as expected ", () =>{
      expect(slice(['fred', 'barney', 'pebbles'], 0, 2))
      .to.eql(['fred', 'barney'])
      expect(slice(['fred', 'barney', 'pebbles', 'somebody else'], 2))
      .to.eql(['pebbles', 'somebody else'])
   });
   it("works as expected with a negative start", () =>{
      expect(slice(['fred', 'barney', 'pebbles', 'somebody else'], -2))
      .to.eql(['pebbles', 'somebody else'])
   });
   it("works as expected with a negative end", () =>{
      expect(slice(['fred', 'barney', 'pebbles', 'somebody else'], 0, -2))
      .to.eql(['fred', 'barney'])
   });
   it("works as expected with an end value greater than array size", () =>{
      expect(slice(['fred', 'barney', 'pebbles', 'somebody else'], 0, 6))
      .to.eql(['fred', 'barney', 'pebbles', 'somebody else', undefined, undefined])
   });
   it("nothing changes with an empty array", () =>{
      expect(slice([], -2, -5)).to.eql([])
   });
   it("able to handle null value", () =>{
      expect(slice(null)).to.eql([])
   });
  })
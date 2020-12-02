import chai from "chai"
import words from "../src/words.js"
const expect = chai.expect

describe("Words", () => {
   it("removes ',' and '&' characters", () =>{
       expect(words('fred, barney, & pebbles')).to.eql(['fred', 'barney', 'pebbles'])
   });
  })
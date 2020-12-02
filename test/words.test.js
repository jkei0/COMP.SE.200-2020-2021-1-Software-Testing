import chai from "chai"
import words from "../COMP.SE.200-2020-assignment-master/src/words.js"
const expect = chai.expect

describe("Words", () => {
   it("removes ',' and '&' characters", () =>{
       expect(words('fred, barney, & pebbles')).to.eql(['fred', 'barney', 'pebbles'])
   });
  })
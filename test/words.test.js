import chai from "chai"
import words from "../src/words.js"
const expect = chai.expect

describe("Words: separates words in a string(with numbers included as different words)", () => {
   it("seperates words on space", () =>{
      expect(words('fred barney pebbles')).to.eql(['fred', 'barney', 'pebbles'])
   });
   it("removes ',' and '&' characters", () =>{
       expect(words('fred, barney, & pebbles')).to.eql(['fred', 'barney', 'pebbles'])
   });
   it("seperates words on non-letter and n characters", () =>{
      expect(words('fred,barney&pebbles4me')).to.eql(['fred', 'barney', 'pebbles', '4', 'me'])
   });
   it("handles empty string", () =>{
      expect(words('')).to.eql([])
   });
   it("works on an internet link", () =>{
      expect(words('https://github.com/tgcslearningtech/COMP.SE.200-2020-assignment '))
      .to.eql(['https', 'github', 'com', 'tgcslearningtech', 'COMP', 'SE', '200', '2020', 'assignment'])
   });
   it("works on some arbitary string of common characters", () =>{
      expect(words('asym/A(Sn80SAT@£ss*"a')).to.eql(['asym', 'A', 'Sn', '80', 'SAT', 'ss', 'a'])
   });
   it("works with Finnish characters 'ä' and 'ö'", () =>{
      expect(words('¨ssö|24a*äa')).to.eql(['ssö', '24', 'a', 'äa'])
   });
  })
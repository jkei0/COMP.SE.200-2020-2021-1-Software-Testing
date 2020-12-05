import chai from "chai"
import keys from "../src/keys.js"
const expect = chai.expect

describe("keys", () => {
   it("provided tests", () =>{
      function Foo() { 
         this.a = 1
         this.b = 2
      }
      Foo.prototype.c = 3
      
      expect(keys(new Foo)).to.eql(['a', 'b'])
      expect(keys('hi')).to.eql(['0', '1'])
   });
  })
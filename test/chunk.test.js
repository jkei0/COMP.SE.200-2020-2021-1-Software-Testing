import chai from "chai";
import chunk from "../src/chunk.js";
const expect = chai.expect;

describe("Chunk", () => {
  it("Test evenly chunked array", () => {
    expect(chunk(['a','b','c','d'], 2)).to.eql([['a','b'], ['c','d']]);
  });
  it("Array that can't be chunked evenly", () => {
    expect(chunk([1,2,3,4,5],4)).to.eql([[1,2,3,4], [5]]);
  });
  it("Chunk parameter bigger than array", () => {
    expect(chunk(['a','b','c','d'],7)).to.eql([['a','b','c','d']]);
  });
  it("With default size ", () => {
    expect(chunk(['a','b','c','d'])).to.eql([['a'],['b'],['c'],['d']]);
  });
});

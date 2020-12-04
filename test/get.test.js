import chai from "chai";
import get from "../src/get.js";
const expect = chai.expect;

describe("Get", () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] }
  it("Get legal value", () => {
    expect(get(object, 'a[0].b.c')).to.eql(3);
  });
  it("Should return undefined when defaultvalue not set", () => {
    expect(get(object, 'a[5].b.c')).to.eql(undefined);
  });
  it("Should return defaultvalue", () => {
    expect(get(object, 'a[5].b.c', '5')).to.eql('5');
  });
});

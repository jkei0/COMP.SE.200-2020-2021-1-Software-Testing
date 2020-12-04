import chai from "chai";
import filter from "../src/filter.js";
const expect = chai.expect;

describe("Filter", () => {
  const users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false }
  ]
  it("Test with simple object", () => {
    expect(filter(users, ({active}) => active)).to.eql([ { user: 'barney', active: true } ])
  });
});

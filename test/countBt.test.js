import chai from "chai";
import countBy from "../src/countBy.js";
const expect = chai.expect;

describe("countBy", () => {
  it("Basic functionality", () => {
    const users = [
      {'user': 'barney', 'active': true},
      {'user': 'betty', 'active': true},
      {'user': 'fred', 'active': false}
    ]
    expect(countBy(users, value=>value.active)).to.eql({'true': 2, 'false': 1});
  });
});

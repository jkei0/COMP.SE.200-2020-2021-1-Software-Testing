import chai from "chai";
import eq from "../src/eq.js";
const expect = chai.expect;

describe("eq", () => {
  const object = {'a' : 1};
  const other_object = {'b' : 1};
  const string = "Test";
  const number = 2;
  const boolean_value = true;
  it("Test same objects", () => {
    expect(eq(object, object)).to.eql(true);
  });
  it("Test different objects", () => {
    expect(eq(object, other_object)).to.eql(false);
  });
  it("Test same string", () => {
    expect(eq(string, string)).to.eql(true);
  });
  it("Test string and object", () => {
    expect(eq(object, string)).to.eql(false);
  });
  it("Test same number", () => {
    expect(eq(number, number)).to.eql(true);
  });
  it("Test with same boolean value", () => {
    expect(eq(boolean_value, boolean_value)).to.eql(true);
  });
  it("number and boolean value", () => {
    // 1 === false in JS
    expect(eq(1, boolean_value)).to.eql(false);
  });
});

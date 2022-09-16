const randomStrings = require("../index");

describe("Testing funcionalities of randomStrings", () => {
  test("Test funcionality", () => {
    expect(typeof randomStrings()).toBe("string");
  });
});

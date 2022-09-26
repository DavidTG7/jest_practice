const randomStrings = require("../index");

describe("Testing funcionalities of randomStrings", () => {
  test("Test funcionality", () => {
    expect(typeof randomStrings()).toBe("string");
  });

  test("Prove there is no a city", () => {
    expect(randomStrings()).not.toMatch("Guatarilla");
  });
});

const isInteger = require("./isInteger");

test("integer test", () => {
  expect(isInteger(2)).toBe(true);
});

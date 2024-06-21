import * as f from "./functions";

// capitalize
test("Capitalize 1 - all lower", () => {
  expect(f.capitalize("first")).toBe("First");
});

test("Capitalize 2 - all caps", () => {
  expect(f.capitalize("FIRST")).toBe("FIRST");
});

test("Capitalize 3 - first cap", () => {
  expect(f.capitalize("First")).toBe("First");
});

test("Capitalize 4 - nothing", () => {
  expect(f.capitalize("")).toBe("");
});

test("Capitalize 5 - first number", () => {
  expect(f.capitalize("1first")).toBe("1first");
});

// reverseString

// calculator

// caesarCipher

// analyzeArray

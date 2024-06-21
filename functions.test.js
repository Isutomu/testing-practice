// capitalize
test("Capitalize 1 - all lower", () => {
  expect(capitalize("first").toBe("First"));
});

test("Capitalize 2 - all caps", () => {
  expect(capitalize("FIRST").toBe("FIRST"));
});

test("Capitalize 3 - first cap", () => {
  expect(capitalize("First").toBe("First"));
});

test("Capitalize 4 - nothing", () => {
  expect(capitalize("").toBe(""));
});

test("Capitalize 5 - first number", () => {
  expect(capitalize("1first").toBe("1first"));
});

// reverseString

// calculator

// caesarCipher

// analyzeArray

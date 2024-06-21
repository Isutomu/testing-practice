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
test("Reverse 1 - normal", () => {
  expect(f.reverse("equals")).toBe("slauqe");
});

test("Reverse 2 - palindrome", () => {
  expect(f.reverse("lol")).toBe("lol");
});

test("Reverse 3 - containing caps", () => {
  expect(f.reverse("LmAo")).toBe("oAmL");
});

test("Reverse 4 - nothing", () => {
  expect(f.reverse("")).toBe("");
});

test("Reverse 5 - with numbers", () => {
  expect(f.reverse("equ1als")).toBe("sla1uqe");
});

// calculator

// caesarCipher

// analyzeArray

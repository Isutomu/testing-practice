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
test("Calculator 1 - add positives", () => {
  expect(f.calculator.add(1, 2)).toBe(3);
});

test("Calculator 2 - add different signs", () => {
  expect(f.calculator.add(1, -2)).toBe(-1);
});

test("Calculator 3 - add neutral element", () => {
  expect(f.calculator.add(1, 0)).toBe(1);
});

test("Calculator 4 - subtract positives, minuend as the higher", () => {
  expect(f.calculator.subtract(2, 1)).toBe(1);
});

test("Calculator 5 - subtract positives, minuend as the lower", () => {
  expect(f.calculator.subtract(1, 2)).toBe(-1);
});

test("Calculator 6 - subtract negatives", () => {
  expect(f.calculator.subtract(-2, -1)).toBe(-1);
});

test("Calculator 7 - subtract neutral element", () => {
  expect(f.calculator.subtract(2, 0)).toBe(2);
});

test("Calculator 8 - divide positives", () => {
  expect(f.calculator.divide(4, 2)).toBe(2);
});

test("Calculator 9 - divide positives, resulting float", () => {
  expect(f.calculator.divide(3, 2)).toBeCloseTo(1.5);
});

test("Calculator 10 - divide negatives", () => {
  expect(f.calculator.divide(-6, -2)).toBe(3);
});

test("Calculator 11 - divide with one being negative", () => {
  expect(f.calculator.divide(2, -1)).toBe(-2);
});

test("Calculator 12 - divide 0", () => {
  expect(f.calculator.divide(0, 1)).toBe(0);
});

test("Calculator 13 - divide positive by 0", () => {
  expect(f.calculator.divide(1, 0)).toBe(Infinity);
});

test("Calculator 14 - divide negative by 0", () => {
  expect(f.calculator.divide(-1, 0)).toBe(-Infinity);
});

test("Calculator 15 - divide 0 by 0", () => {
  expect(f.calculator.divide(0, 0)).toBe(NaN);
});

test("Calculator 16 - multiply positives", () => {
  expect(f.calculator.multiply(10, 3)).toBe(30);
});

test("Calculator 17 - multiply with one being negative", () => {
  expect(f.calculator.multiply(8, -3)).toBe(-24);
});

test("Calculator 18 - multiply negatives", () => {
  expect(f.calculator.multiply(-7, -4)).toBe(28);
});

test("Calculator 19 - multiply element neutral", () => {
  expect(f.calculator.multiply(10, 0)).toBe(0);
});

// caesarCipher
test("Caesar cipher - only lowercase letters", () => {
  expect(f.caesarCipher("xyz", 3)).toBe("abc");
});

test("Caesar cipher - only uppercase letters", () => {
  expect(f.caesarCipher("xab", 4)).toBe("bef");
});

test("Caesar cipher - mixed case letters", () => {
  expect(f.caesarCipher("YaBM", 5)).toBe("DfGR");
});

test("Caesar cipher - letters and non letters", () => {
  expect(f.caesarCipher("Ya. B!M", 2)).toBe("Ac. D!O");
});

// analyzeArray
test("Analyze array - one element", () => {
  expect(f.analyzeArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

test("Analyze array - three elements different values", () => {
  expect(f.analyzeArray([2, 3, 1])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test("Analyze array - three equal elements", () => {
  expect(f.analyzeArray([2, 2, 2])).toEqual({
    average: 2,
    min: 2,
    max: 2,
    length: 3,
  });
});

test("Analyze array - empty array", () => {
  expect(f.analyzeArray([])).toBeNull();
});

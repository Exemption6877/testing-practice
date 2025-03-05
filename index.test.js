import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index";

test("Capitalize string elephant", () => {
  expect(capitalize("elephant")).toEqual("Elephant");
});

test("Reverse string Elephant", () => {
  expect(reverseString("Elephant")).toEqual("tnahpelE");
});

// Calculator
test("Calculator add function #1", () => {
  expect(calculator.add(5, 4)).toBe(9);
});

test("Calculator add function #2", () => {
  expect(calculator.add(5, -7)).toBe(-2);
});

test("Calculator subtract function #1", () => {
  expect(calculator.subtract(5, 2)).toBe(3);
});

test("Calculator subtract function #2", () => {
  expect(calculator.subtract(-5, 2)).toBe(-7);
});

test("Calculator divide function #1", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

test("Calculator divide function #2", () => {
  expect(calculator.divide(9, 3)).toBe(3);
});

test("Calculator multiply function #1", () => {
  expect(calculator.multiply(10, 2)).toBe(20);
});

test("Calculator multiply function #2", () => {
  expect(calculator.multiply(9, 3)).toBe(27);
});

// Caesar Cipher
test("Caesar Cipher test #1: Jumping to first letters", () => {
  expect(caesarCipher("xyz", 3)).toEqual("abc");
});

test("Caesar Cipher test #2: lettercasing preservation", () => {
  expect(caesarCipher("heLLo", 3)).toEqual("khOOr");
});

test("Caesar Cipher test #3: punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toEqual("Khoor, Zruog!");
});

// Analyze array
const object = analyzeArray([1, 8, 3, 4, 2, 6]);
test("Analyze Array average", () => {
  expect(object.average).toBe(4);
});

test("Analyze Array min", () => {
  expect(object.min).toBe(1);
});
test("Analyze Array max", () => {
  expect(object.max).toBe(8);
});
test("Analyze Array length", () => {
  expect(object.length).toBe(6);
});

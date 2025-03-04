import capitalize from "./index";
import { reverseString } from "./index";

test("Capitalize string elephant", () => {
  expect(capitalize("elephant")).toEqual("Elephant");
});

test("Reverse string Elephant", () => {
  expect(reverseString("Elephant")).toEqual("tnahpelE");
});

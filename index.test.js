import capitalize from "./index";

test("Capitalize elephant", () => {
  expect(capitalize("elephant")).toEqual("Elephant");
});

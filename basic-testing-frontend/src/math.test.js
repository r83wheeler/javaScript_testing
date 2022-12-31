import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  // Arrange phase
  const numbers = [1, 2];

  // Act phase
  const result = add(numbers);

  // Assert phase
  const expectedResult = numbers.reduce(
    (preValue, curValue) => preValue + curValue,
    0
  );
  expect(result).toBe(expectedResult);
});

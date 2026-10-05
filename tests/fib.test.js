import { iteratorFib, recursiveFib } from "../src/fib.js";

describe("test fibonacci sequence", () => {
  test("handle 1", () => {
    expect(iteratorFib(1)).toEqual([0]);
    expect(recursiveFib(1)).toEqual([0]);
  });
  test("handle 0", () => {
    expect(iteratorFib(0)).toEqual([]);
    expect(recursiveFib(0)).toEqual([]);
  });
  test("handle small number", () => {
    expect(iteratorFib(5)).toEqual([0, 1, 1, 2, 3]);
    expect(recursiveFib(5)).toEqual([0, 1, 1, 2, 3]);
  });
  test("handle big number", () => {
    expect(iteratorFib(22)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181, 6765, 10946,
    ]);
    expect(recursiveFib(22)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181, 6765, 10946,
    ]);
  });
  test("handle negative number", () => {
    expect(iteratorFib(-1)).toBe("Negative value not allowed");
    expect(recursiveFib(-1)).toBe("Negative value not allowed");
  });
  test("handle NaN", () => {
    expect(iteratorFib(NaN)).toBe("Unexpected type of data");
    expect(recursiveFib(NaN)).toBe("Unexpected type of data");
  });
});

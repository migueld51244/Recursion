import { recursiveMergeSort } from "../src/mergeSort.js";

describe("test recursiveMergeSort function", () => {
  test("handle empty array", () => {
    expect(recursiveMergeSort([])).toEqual([]);
  });
  test("handle single value array", () => {
    expect(recursiveMergeSort([32])).toEqual([32]);
  });
  test("handle already sorted array", () => {
    expect(recursiveMergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  test("handle unsorted array", () => {
    expect(recursiveMergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13,
    ]);
  });
  test("handle unsorted even array", () => {
    expect(recursiveMergeSort([105, 79, 100, 110])).toEqual([
      79, 100, 105, 110,
    ]);
  });
  test("handle unsorted uneven array", () => {
    expect(recursiveMergeSort([41, 1, 0])).toEqual([0, 1, 41]);
  });
});

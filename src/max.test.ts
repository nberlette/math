import assert from "node:assert";
import { describe, it } from "node:test";
import { assertSameValue } from "./internal/_test_utils.ts";
import { max } from "./max.ts";

const cases: Array<number[]> = [
  [1, 2, 3],
  [-10, -5, -1],
  [1, -1, 0],
  [NaN, 1, 2],
  [0.0, -0],
  [Infinity, 1],
  [],
];

describe("max", () => {
  it("is a function", () => {
    assert.strictEqual(typeof max, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(max.length, 0);
  });

  it("matches Math.max", () => {
    const native = Math.max;
    for (const args of cases) {
      const expected = native(...args);
      const actual = max(...args);
      assertSameValue(actual, expected);
    }
  });
});

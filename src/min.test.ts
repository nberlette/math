import assert from "node:assert";
import { describe, it } from "node:test";
import { assertSameValue } from "./internal/_test_utils.ts";
import { min } from "./min.ts";

const cases: Array<number[]> = [
  [1, 2, 3],
  [-10, -5, -1],
  [1, -1, 0],
  [NaN, 1, 2],
  [0.0, -0],
  [-Infinity, 1],
  [],
];

describe("min", () => {
  it("is a function", () => {
    assert.strictEqual(typeof min, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(min.length, 0);
  });

  it("matches Math.min", () => {
    const native = Math.min;
    for (const args of cases) {
      const expected = native(...args);
      const actual = min(...args);
      assertSameValue(actual, expected);
    }
  });
});

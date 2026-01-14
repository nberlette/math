import assert from "node:assert";
import { describe, it } from "node:test";
import { isPositiveZero } from "./positive_zero.ts";

const cases = [0, -0, 1, -1, NaN, Infinity, -Infinity];

describe("isPositiveZero", () => {
  it("is a function", () => {
    assert.strictEqual(typeof isPositiveZero, "function");
  });

  it("matches Object.is(x, 0) and not -0", () => {
    for (const value of cases) {
      const expected = Object.is(value, 0) && !Object.is(value, -0);
      assert.strictEqual(isPositiveZero(value), expected);
    }
  });
});

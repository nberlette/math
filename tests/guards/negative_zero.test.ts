import assert from "node:assert";
import { describe, it } from "node:test";
import { isNegativeZero } from "./negative_zero.ts";

const cases = [0, -0, 1, -1, NaN, Infinity, -Infinity];

describe("isNegativeZero", () => {
  it("is a function", () => {
    assert.strictEqual(typeof isNegativeZero, "function");
  });

  it("matches Object.is(x, -0)", () => {
    for (const value of cases) {
      assert.strictEqual(isNegativeZero(value), Object.is(value, -0));
    }
  });
});

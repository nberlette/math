import assert from "node:assert";
import { describe, it } from "node:test";
import { isPositiveInfinity } from "./positive_infinity.ts";

const cases = [0, 1, -1, Infinity, -Infinity, NaN];

describe("isPositiveInfinity", () => {
  it("is a function", () => {
    assert.strictEqual(typeof isPositiveInfinity, "function");
  });

  it("identifies +Infinity", () => {
    for (const value of cases) {
      assert.strictEqual(isPositiveInfinity(value), value === Infinity);
    }
  });
});

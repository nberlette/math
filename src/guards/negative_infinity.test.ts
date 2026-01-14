import assert from "node:assert";
import { describe, it } from "node:test";
import { isNegativeInfinity } from "./negative_infinity.ts";

const cases = [0, 1, -1, Infinity, -Infinity, NaN];

describe("isNegativeInfinity", () => {
  it("is a function", () => {
    assert.strictEqual(typeof isNegativeInfinity, "function");
  });

  it("identifies -Infinity", () => {
    for (const value of cases) {
      assert.strictEqual(isNegativeInfinity(value), value === -Infinity);
    }
  });
});

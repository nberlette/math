import assert from "node:assert";
import { describe, it } from "node:test";
import { isFloat16 } from "../../src/float16/guards.ts";
import { roundFloat16 } from "../../src/float16/round.ts";

const cases = [0, -0, 1, -1, 0.1, 0.5, 3.14, 42, Infinity, -Infinity, NaN];

describe("isFloat16", () => {
  it("is a function", () => {
    assert.strictEqual(typeof isFloat16, "function");
  });

  it("matches roundFloat16 equivalence", () => {
    for (const value of cases) {
      const expected = typeof value === "number" && !Number.isNaN(value) &&
        value === roundFloat16(value);
      assert.strictEqual(isFloat16(value), expected);
    }
  });
});

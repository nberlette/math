import assert from "node:assert";
import { describe, it } from "node:test";
import { roundFloat32 } from "./round.ts";

const cases = [0, -0, 1, -1, 3.14, 42, Infinity, -Infinity, NaN];

describe("roundFloat32", () => {
  it("is a function", () => {
    assert.strictEqual(typeof roundFloat32, "function");
  });

  it("matches Math.fround", () => {
    for (const value of cases) {
      const expected = Math.fround(value);
      const actual = roundFloat32(value);
      if (Number.isNaN(expected)) {
        assert.ok(Number.isNaN(actual));
      } else {
        assert.strictEqual(actual, expected);
      }
    }
  });
});

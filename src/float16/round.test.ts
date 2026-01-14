import assert from "node:assert";
import { describe, it } from "node:test";
import { roundFloat16 } from "./round.ts";

const cases = [0, -0, 1, -1, 3.14, 42, Infinity, -Infinity, NaN];

describe("roundFloat16", () => {
  it("is a function", () => {
    assert.strictEqual(typeof roundFloat16, "function");
  });

  it("matches Math.f16round when available", () => {
    const native = Math.f16round as ((x: number) => number) | undefined;
    if (typeof native !== "function") {
      return;
    }
    for (const value of cases) {
      const expected = native(value);
      const actual = roundFloat16(value);
      if (Number.isNaN(expected)) {
        assert.ok(Number.isNaN(actual));
      } else {
        assert.strictEqual(actual, expected);
      }
    }
  });
});

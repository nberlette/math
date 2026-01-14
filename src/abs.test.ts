import assert from "node:assert";
import { describe, it } from "node:test";
import { assertSameValue } from "./internal/_test_utils.ts";
import { abs } from "./abs.ts";

const cases: number[] = [
  -2.5,
  -1,
  -0.0,
  0.0,
  0.5,
  1,
  2,
  10,
  Infinity,
  -Infinity,
  NaN,
];

describe("abs", () => {
  it("is a function", () => {
    assert.strictEqual(typeof abs, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(abs.length, 1);
  });

  it("matches Math.abs", () => {
    const native = Math.abs;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = abs(input);
      assertSameValue(actual, expected);
    }
  });
});

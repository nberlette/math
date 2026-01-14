import assert from "node:assert";
import { describe, it } from "node:test";
import { assertSameValue } from "./internal/_test_utils.ts";
import { clz32 } from "./clz32.ts";

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

describe("clz32", () => {
  it("is a function", () => {
    assert.strictEqual(typeof clz32, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(clz32.length, 1);
  });

  it("matches Math.clz32", () => {
    const native = Math.clz32;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = clz32(input);
      assertSameValue(actual, expected);
    }
  });
});

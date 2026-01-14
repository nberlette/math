import assert from "node:assert";
import { describe, it } from "node:test";
import { assertSameValue } from "./internal/_test_utils.ts";
import { ceil } from "./ceil.ts";

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

describe("ceil", () => {
  it("is a function", () => {
    assert.strictEqual(typeof ceil, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(ceil.length, 1);
  });

  it("matches Math.ceil", () => {
    const native = Math.ceil;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = ceil(input);
      assertSameValue(actual, expected);
    }
  });
});

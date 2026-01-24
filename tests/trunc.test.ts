import assert from "node:assert";
import { describe, it } from "node:test";
import { assertSameValue } from "./internal/_test_utils.ts";
import { trunc } from "./trunc.ts";

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

describe("trunc", () => {
  it("is a function", () => {
    assert.strictEqual(typeof trunc, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(trunc.length, 1);
  });

  it("matches Math.trunc", () => {
    const native = Math.trunc;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = trunc(input);
      assertSameValue(actual, expected);
    }
  });
});

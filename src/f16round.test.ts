import assert from "node:assert";
import { describe, it } from "node:test";
import { assertSameValue } from "./internal/_test_utils.ts";
import { f16round } from "./f16round.ts";

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

describe("f16round", () => {
  it("is a function", () => {
    assert.strictEqual(typeof f16round, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(f16round.length, 1);
  });

  it("matches Math.f16round", () => {
    const native = Math.f16round;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = f16round(input);
      assertSameValue(actual, expected);
    }
  });
});

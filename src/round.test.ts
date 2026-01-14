import assert from "node:assert";
import { describe, it } from "node:test";
import { assertSameValue } from "./internal/_test_utils.ts";
import { round } from "./round.ts";

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

describe("round", () => {
  it("is a function", () => {
    assert.strictEqual(typeof round, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(round.length, 1);
  });

  it("matches Math.round", () => {
    const native = Math.round;
    if (typeof native !== "function") {
      return;
    }
    for (const input of cases) {
      const expected = native(input);
      const actual = round(input);
      assertSameValue(actual, expected);
    }
  });
});

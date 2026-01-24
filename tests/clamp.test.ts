import assert from "node:assert";
import { describe, it } from "node:test";
import { clamp } from "./clamp.ts";

const cases: Array<[number, number, number]> = [
  [-1, 0, 1],
  [0.5, 0, 1],
  [2, 0, 1],
  [10, -5, 5],
  [-10, -5, 5],
];

describe("clamp", () => {
  it("is a function", () => {
    assert.strictEqual(typeof clamp, "function");
  });

  it("has the expected arity", () => {
    assert.strictEqual(clamp.length, 3);
  });

  it("matches the min/max definition", () => {
    for (const [value, lower, upper] of cases) {
      const expected = Math.min(Math.max(value, lower), upper);
      const actual = clamp(value, lower, upper);
      assert.strictEqual(actual, expected);
    }
  });
});

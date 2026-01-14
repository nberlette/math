import assert from "node:assert";
import { describe, it } from "node:test";
import { isFinite } from "./finite.ts";

const cases: unknown[] = [
  0,
  1,
  -1,
  1.5,
  NaN,
  Infinity,
  -Infinity,
  "1",
];

describe("isFinite", () => {
  it("is a function", () => {
    assert.strictEqual(typeof isFinite, "function");
  });

  it("matches Number.isFinite for numbers", () => {
    const numericCases = [0, 1, -1, 1.5, NaN, Infinity, -Infinity];
    for (const value of numericCases) {
      assert.strictEqual(isFinite(value), Number.isFinite(value));
    }
  });

  it("returns false for non-numbers", () => {
    for (const value of cases) {
      if (typeof value !== "number") {
        assert.strictEqual(isFinite(value), false);
      }
    }
  });
});

import assert from "node:assert";
import { describe, it } from "node:test";
import { isSafeInteger } from "./safe_integer.ts";

const cases = [
  0,
  1,
  -1,
  Number.MAX_SAFE_INTEGER,
  Number.MIN_SAFE_INTEGER,
  Number.MAX_SAFE_INTEGER + 1,
  Number.MIN_SAFE_INTEGER - 1,
  1.5,
  NaN,
  Infinity,
];

describe("isSafeInteger", () => {
  it("is a function", () => {
    assert.strictEqual(typeof isSafeInteger, "function");
  });

  it("matches Number.isSafeInteger", () => {
    for (const value of cases) {
      assert.strictEqual(isSafeInteger(value), Number.isSafeInteger(value));
    }
  });
});

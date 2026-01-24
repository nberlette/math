import assert from "node:assert";
import { describe, it } from "node:test";
import * as constants from "./index.ts";

const mathKeys = [
  "E",
  "LN2",
  "LN10",
  "LOG2E",
  "LOG10E",
  "PI",
  "SQRT1_2",
  "SQRT2",
] as const;

const numberKeys = [
  "EPSILON",
  "MAX_SAFE_INTEGER",
  "MIN_SAFE_INTEGER",
  "MAX_VALUE",
  "MIN_VALUE",
  "POSITIVE_INFINITY",
  "NEGATIVE_INFINITY",
] as const;

describe("constants/index", () => {
  it("exposes Math constants", () => {
    for (const key of mathKeys) {
      assert.strictEqual(constants[key], Math[key]);
    }
  });

  it("exposes Number constants", () => {
    for (const key of numberKeys) {
      assert.strictEqual(constants[key], Number[key]);
    }
  });

  it("exposes NaN and zeros", () => {
    assert.ok(Number.isNaN(constants.NAN));
    assert.ok(Object.is(constants.POSITIVE_ZERO, 0));
    assert.ok(Object.is(constants.NEGATIVE_ZERO, -0));
  });
});

import assert from "node:assert";
import { describe, it } from "node:test";
import { isNegativeInfinity, isPositiveInfinity } from "./infinity.ts";

describe("guards/infinity", () => {
  it("re-exports positive/negative infinity checks", () => {
    assert.strictEqual(isPositiveInfinity(Infinity), true);
    assert.strictEqual(isNegativeInfinity(-Infinity), true);
  });
});

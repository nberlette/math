import assert from "node:assert";
import { describe, it } from "node:test";
import { NEGATIVE_INFINITY, POSITIVE_INFINITY } from "../../src/constants/infinity.ts";

describe("constants/infinity", () => {
  it("exports positive and negative infinity", () => {
    assert.strictEqual(POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
    assert.strictEqual(NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
  });
});

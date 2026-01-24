import assert from "node:assert";
import { describe, it } from "node:test";
import { NEGATIVE_INFINITY } from "./negative_infinity.ts";

describe("NEGATIVE_INFINITY", () => {
  it("is a number", () => {
    assert.strictEqual(typeof NEGATIVE_INFINITY, "number");
  });

  it("matches Number.NEGATIVE_INFINITY", () => {
    assert.strictEqual(NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY);
  });
});

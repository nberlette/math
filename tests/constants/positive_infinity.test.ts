import assert from "node:assert";
import { describe, it } from "node:test";
import { POSITIVE_INFINITY } from "./positive_infinity.ts";

describe("POSITIVE_INFINITY", () => {
  it("is a number", () => {
    assert.strictEqual(typeof POSITIVE_INFINITY, "number");
  });

  it("matches Number.POSITIVE_INFINITY", () => {
    assert.strictEqual(POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
  });
});

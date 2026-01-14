import assert from "node:assert";
import { describe, it } from "node:test";
import { MAX_SAFE_INTEGER } from "./max_safe_integer.ts";

describe("MAX_SAFE_INTEGER", () => {
  it("is a number", () => {
    assert.strictEqual(typeof MAX_SAFE_INTEGER, "number");
  });

  it("matches Number.MAX_SAFE_INTEGER", () => {
    assert.strictEqual(MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
  });
});

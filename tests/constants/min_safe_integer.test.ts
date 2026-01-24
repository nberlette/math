import assert from "node:assert";
import { describe, it } from "node:test";
import { MIN_SAFE_INTEGER } from "./min_safe_integer.ts";

describe("MIN_SAFE_INTEGER", () => {
  it("is a number", () => {
    assert.strictEqual(typeof MIN_SAFE_INTEGER, "number");
  });

  it("matches Number.MIN_SAFE_INTEGER", () => {
    assert.strictEqual(MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
  });
});

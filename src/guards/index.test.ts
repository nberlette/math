import assert from "node:assert";
import { describe, it } from "node:test";
import * as guards from "./index.ts";

describe("guards/index", () => {
  it("exposes guard functions", () => {
    assert.strictEqual(typeof guards.isFinite, "function");
    assert.strictEqual(typeof guards.isNaN, "function");
    assert.strictEqual(typeof guards.isInteger, "function");
    assert.strictEqual(typeof guards.isSafeInteger, "function");
  });

  it("matches native counterparts for sample values", () => {
    assert.strictEqual(guards.isFinite(1), Number.isFinite(1));
    assert.strictEqual(guards.isSafeInteger(10), Number.isSafeInteger(10));
    assert.strictEqual(guards.isNumberInteger(10), Number.isInteger(10));
  });
});

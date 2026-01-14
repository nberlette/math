import assert from "node:assert";
import { describe, it } from "node:test";
import { MAX_VALUE } from "./max_value.ts";

describe("MAX_VALUE", () => {
  it("is a number", () => {
    assert.strictEqual(typeof MAX_VALUE, "number");
  });

  it("matches Number.MAX_VALUE", () => {
    assert.strictEqual(MAX_VALUE, Number.MAX_VALUE);
  });
});

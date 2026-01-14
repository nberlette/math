import assert from "node:assert";
import { describe, it } from "node:test";
import { MIN_VALUE } from "./min_value.ts";

describe("MIN_VALUE", () => {
  it("is a number", () => {
    assert.strictEqual(typeof MIN_VALUE, "number");
  });

  it("matches Number.MIN_VALUE", () => {
    assert.strictEqual(MIN_VALUE, Number.MIN_VALUE);
  });
});

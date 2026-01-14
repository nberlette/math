import assert from "node:assert";
import { describe, it } from "node:test";
import { NEGATIVE_ZERO } from "./negative_zero.ts";

describe("NEGATIVE_ZERO", () => {
  it("is -0", () => {
    assert.strictEqual(typeof NEGATIVE_ZERO, "number");
    assert.ok(Object.is(NEGATIVE_ZERO, -0));
  });

  it("is not +0", () => {
    assert.ok(!Object.is(NEGATIVE_ZERO, 0));
  });
});

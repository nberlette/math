import assert from "node:assert";
import { describe, it } from "node:test";
import { POSITIVE_ZERO } from "./positive_zero.ts";

describe("POSITIVE_ZERO", () => {
  it("is +0", () => {
    assert.strictEqual(typeof POSITIVE_ZERO, "number");
    assert.ok(Object.is(POSITIVE_ZERO, 0));
  });

  it("is not -0", () => {
    assert.ok(!Object.is(POSITIVE_ZERO, -0));
  });
});

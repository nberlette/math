import assert from "node:assert";
import { describe, it } from "node:test";
import { SQRT2 } from "./sqrt2.ts";

describe("SQRT2", () => {
  it("is a number", () => {
    assert.strictEqual(typeof SQRT2, "number");
  });

  it("matches Math.SQRT2", () => {
    assert.strictEqual(SQRT2, Math.SQRT2);
  });
});

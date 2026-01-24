import assert from "node:assert";
import { describe, it } from "node:test";
import { LN10 } from "./ln10.ts";

describe("LN10", () => {
  it("is a number", () => {
    assert.strictEqual(typeof LN10, "number");
  });

  it("matches Math.LN10", () => {
    assert.strictEqual(LN10, Math.LN10);
  });
});

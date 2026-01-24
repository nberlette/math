import assert from "node:assert";
import { describe, it } from "node:test";
import { LN2 } from "./ln2.ts";

describe("LN2", () => {
  it("is a number", () => {
    assert.strictEqual(typeof LN2, "number");
  });

  it("matches Math.LN2", () => {
    assert.strictEqual(LN2, Math.LN2);
  });
});

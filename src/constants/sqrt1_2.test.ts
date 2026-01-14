import assert from "node:assert";
import { describe, it } from "node:test";
import { SQRT1_2 } from "./sqrt1_2.ts";

describe("SQRT1_2", () => {
  it("is a number", () => {
    assert.strictEqual(typeof SQRT1_2, "number");
  });

  it("matches Math.SQRT1_2", () => {
    assert.strictEqual(SQRT1_2, Math.SQRT1_2);
  });
});

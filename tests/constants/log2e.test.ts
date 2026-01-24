import assert from "node:assert";
import { describe, it } from "node:test";
import { LOG2E } from "../../src/constants/log2e.ts";

describe("LOG2E", () => {
  it("is a number", () => {
    assert.strictEqual(typeof LOG2E, "number");
  });

  it("matches Math.LOG2E", () => {
    assert.strictEqual(LOG2E, Math.LOG2E);
  });
});

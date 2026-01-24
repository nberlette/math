import assert from "node:assert";
import { describe, it } from "node:test";
import { E } from "./e.ts";

describe("E", () => {
  it("is a number", () => {
    assert.strictEqual(typeof E, "number");
  });

  it("matches Math.E", () => {
    assert.strictEqual(E, Math.E);
  });
});

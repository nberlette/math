import assert from "node:assert";
import { describe, it } from "node:test";
import { LOG10E } from "./log10e.ts";

describe("LOG10E", () => {
  it("is a number", () => {
    assert.strictEqual(typeof LOG10E, "number");
  });

  it("matches Math.LOG10E", () => {
    assert.strictEqual(LOG10E, Math.LOG10E);
  });
});

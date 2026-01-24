import assert from "node:assert";
import { describe, it } from "node:test";
import { PI } from "./pi.ts";

describe("PI", () => {
  it("is a number", () => {
    assert.strictEqual(typeof PI, "number");
  });

  it("matches Math.PI", () => {
    assert.strictEqual(PI, Math.PI);
  });
});

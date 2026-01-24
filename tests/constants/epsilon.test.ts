import assert from "node:assert";
import { describe, it } from "node:test";
import { EPSILON } from "../../src/constants/epsilon.ts";

describe("EPSILON", () => {
  it("is a number", () => {
    assert.strictEqual(typeof EPSILON, "number");
  });

  it("matches Number.EPSILON", () => {
    assert.strictEqual(EPSILON, Number.EPSILON);
  });
});

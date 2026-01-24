import assert from "node:assert";
import { describe, it } from "node:test";
import type { Finite } from "./finite.ts";

const finiteValue = 1 as Finite;

describe("types/finite", () => {
  it("supports finite branding", () => {
    assert.strictEqual(typeof finiteValue, "number");
  });
});

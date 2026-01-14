import assert from "node:assert";
import { describe, it } from "node:test";
import { NAN, NaN as NaNValue } from "./nan.ts";

describe("NAN", () => {
  it("is a number", () => {
    assert.strictEqual(typeof NAN, "number");
  });

  it("matches Number.NaN", () => {
    assert.ok(Number.isNaN(NAN));
    assert.ok(Number.isNaN(Number.NaN));
  });

  it("exports NaN alias", () => {
    assert.ok(Number.isNaN(NaNValue));
  });
});

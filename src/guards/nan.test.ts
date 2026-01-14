import assert from "node:assert";
import { describe, it } from "node:test";
import { isNaN, NAN, NaN as NaNValue } from "./nan.ts";

const cases: unknown[] = [0, 1, NaN, "foo", "42", null, undefined];

describe("isNaN", () => {
  it("is a function", () => {
    assert.strictEqual(typeof isNaN, "function");
  });

  it("matches global isNaN", () => {
    for (const value of cases) {
      assert.strictEqual(
        isNaN(value as number),
        globalThis.isNaN(value as number),
      );
    }
  });
});

describe("NAN", () => {
  it("is NaN", () => {
    assert.ok(Number.isNaN(NAN));
    assert.ok(Number.isNaN(NaNValue));
  });
});

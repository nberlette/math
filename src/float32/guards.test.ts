import assert from "node:assert";
import { describe, it } from "node:test";
import { isFiniteFloat32, isFloat32 } from "./guards.ts";
import { roundFloat32 } from "./round.ts";

const cases = [0, -0, 1, -1, 0.1, 0.5, 3.14, 42, Infinity, -Infinity, NaN];

describe("isFloat32", () => {
  it("is a function", () => {
    assert.strictEqual(typeof isFloat32, "function");
  });

  it("matches roundFloat32 equivalence", () => {
    for (const value of cases) {
      const expected = typeof value === "number" && !Number.isNaN(value) &&
        value === roundFloat32(value);
      assert.strictEqual(isFloat32(value), expected);
    }
  });
});

describe("isFiniteFloat32", () => {
  it("is a function", () => {
    assert.strictEqual(typeof isFiniteFloat32, "function");
  });

  it("checks float32 and finiteness", () => {
    for (const value of cases) {
      const expected = typeof value === "number" && Number.isFinite(value) &&
        value === roundFloat32(value);
      assert.strictEqual(isFiniteFloat32(value), expected);
    }
  });
});

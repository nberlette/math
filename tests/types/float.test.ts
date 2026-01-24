import assert from "node:assert";
import { describe, it } from "node:test";
import type { Double, Float, Float16, Float32, Float64 } from "./float.ts";

const floatValue = 1 as Float;
const float16Value = 1 as Float16;
const float32Value = 1 as Float32;
const float64Value = 1 as Float64;
const doubleValue = 1 as Double;

describe("types/float", () => {
  it("supports float branding", () => {
    assert.strictEqual(typeof floatValue, "number");
    assert.strictEqual(typeof float16Value, "number");
    assert.strictEqual(typeof float32Value, "number");
    assert.strictEqual(typeof float64Value, "number");
    assert.strictEqual(typeof doubleValue, "number");
  });
});

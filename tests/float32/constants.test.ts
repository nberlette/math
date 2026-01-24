import assert from "node:assert";
import { describe, it } from "node:test";
import float32, {
  FLOAT32_EXPONENT_BIAS,
  FLOAT32_EXPONENT_BITS,
  FLOAT32_MANTISSA_BITS,
  FLOAT32_NAN,
  FLOAT32_NEGATIVE_INFINITY,
  FLOAT32_NEGATIVE_ZERO,
  FLOAT32_POSITIVE_INFINITY,
  FLOAT32_POSITIVE_ZERO,
} from "./constants.ts";

describe("float32/constants", () => {
  it("exposes expected numeric constants", () => {
    assert.strictEqual(typeof FLOAT32_NAN, "number");
    assert.strictEqual(FLOAT32_POSITIVE_INFINITY, 0x7F800000);
    assert.strictEqual(FLOAT32_NEGATIVE_INFINITY, 0xFF800000);
    assert.strictEqual(FLOAT32_NEGATIVE_ZERO, 0x80000000);
    assert.strictEqual(FLOAT32_POSITIVE_ZERO, 0x00000000);
    assert.strictEqual(FLOAT32_EXPONENT_BITS, 8);
    assert.strictEqual(FLOAT32_MANTISSA_BITS, 23);
    assert.strictEqual(FLOAT32_EXPONENT_BIAS, 127);
  });

  it("matches default export shape", () => {
    assert.strictEqual(float32.exponent, FLOAT32_EXPONENT_BITS);
    assert.strictEqual(float32.mantissa, FLOAT32_MANTISSA_BITS);
    assert.strictEqual(float32.bias, FLOAT32_EXPONENT_BIAS);
    assert.strictEqual(float32.nan, FLOAT32_NAN);
    assert.strictEqual(float32.positive_infinity, FLOAT32_POSITIVE_INFINITY);
    assert.strictEqual(float32.negative_infinity, FLOAT32_NEGATIVE_INFINITY);
    assert.strictEqual(float32.negative_zero, FLOAT32_NEGATIVE_ZERO);
    assert.strictEqual(float32.positive_zero, FLOAT32_POSITIVE_ZERO);
  });
});

import assert from "node:assert";
import { describe, it } from "node:test";
import float16, {
  FLOAT16_EXPONENT_BIAS,
  FLOAT16_EXPONENT_BITS,
  FLOAT16_MANTISSA_BITS,
  FLOAT16_NAN,
  FLOAT16_NEGATIVE_INFINITY,
  FLOAT16_NEGATIVE_ZERO,
  FLOAT16_POSITIVE_INFINITY,
  FLOAT16_POSITIVE_ZERO,
} from "./constants.ts";

describe("float16/constants", () => {
  it("exposes expected numeric constants", () => {
    assert.strictEqual(typeof FLOAT16_NAN, "number");
    assert.strictEqual(FLOAT16_POSITIVE_INFINITY, 0x7C00);
    assert.strictEqual(FLOAT16_NEGATIVE_INFINITY, 0xFC00);
    assert.strictEqual(FLOAT16_NEGATIVE_ZERO, 0x8000);
    assert.strictEqual(FLOAT16_POSITIVE_ZERO, 0x0000);
    assert.strictEqual(FLOAT16_EXPONENT_BITS, 0x5);
    assert.strictEqual(FLOAT16_MANTISSA_BITS, 0xA);
    assert.strictEqual(FLOAT16_EXPONENT_BIAS, 0xF);
  });

  it("matches default export shape", () => {
    assert.strictEqual(float16.exponent, FLOAT16_EXPONENT_BITS);
    assert.strictEqual(float16.mantissa, FLOAT16_MANTISSA_BITS);
    assert.strictEqual(float16.bias, FLOAT16_EXPONENT_BIAS);
    assert.strictEqual(float16.nan, FLOAT16_NAN);
    assert.strictEqual(float16.positive_infinity, FLOAT16_POSITIVE_INFINITY);
    assert.strictEqual(float16.negative_infinity, FLOAT16_NEGATIVE_INFINITY);
    assert.strictEqual(float16.negative_zero, FLOAT16_NEGATIVE_ZERO);
    assert.strictEqual(float16.positive_zero, FLOAT16_POSITIVE_ZERO);
  });
});

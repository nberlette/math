import assert from "node:assert";
import { describe, it } from "node:test";
import type {
  FloatPrecision,
  P16,
  P32,
  P64,
  P8,
  Precision,
} from "./precision.ts";

const p8Value = 8 as P8;
const p16Value = 16 as P16;
const p32Value = 32 as P32;
const p64Value = 64 as P64;
const precisionValue = 32 as Precision;
const floatPrecisionValue = 32 as FloatPrecision;

describe("types/precision", () => {
  it("supports precision literals", () => {
    assert.strictEqual(p8Value, 8);
    assert.strictEqual(p16Value, 16);
    assert.strictEqual(p32Value, 32);
    assert.strictEqual(p64Value, 64);
    assert.strictEqual(precisionValue, 32);
    assert.strictEqual(floatPrecisionValue, 32);
  });
});

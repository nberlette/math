import assert from "node:assert";
import { describe, it } from "node:test";
import type {
  Finite,
  Float,
  Integer,
  Precision,
  SafeInteger,
} from "./index.ts";

const finiteValue = 1 as Finite;
const floatValue = 1 as Float;
const integerValue = 1 as Integer;
const precisionValue = 32 as Precision;
const safeValue = 1 as SafeInteger;

describe("types/index", () => {
  it("re-exports type helpers", () => {
    assert.strictEqual(typeof finiteValue, "number");
    assert.strictEqual(typeof floatValue, "number");
    assert.strictEqual(typeof integerValue, "number");
    assert.strictEqual(precisionValue, 32);
    assert.strictEqual(typeof safeValue, "number");
  });
});

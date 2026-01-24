import assert from "node:assert";
import { describe, it } from "node:test";
import type {
  BigInt64,
  BigUint64,
  Int16,
  Int32,
  Int64,
  Int8,
  Integer,
  Uint16,
  Uint32,
  Uint64,
  Uint8,
  Unsigned,
} from "./integer.ts";

const intValue = 1 as Integer;
const uintValue = 1 as Unsigned;
const int8Value = 1 as Int8;
const uint8Value = 1 as Uint8;
const int16Value = 1 as Int16;
const uint16Value = 1 as Uint16;
const int32Value = 1 as Int32;
const uint32Value = 1 as Uint32;
const int64Value = 1 as Int64;
const uint64Value = 1 as Uint64;
const bigint64Value = 1n as BigInt64;
const biguint64Value = 1n as BigUint64;

describe("types/integer", () => {
  it("supports integer branding", () => {
    assert.strictEqual(typeof intValue, "number");
    assert.strictEqual(typeof uintValue, "number");
    assert.strictEqual(typeof int8Value, "number");
    assert.strictEqual(typeof uint8Value, "number");
    assert.strictEqual(typeof int16Value, "number");
    assert.strictEqual(typeof uint16Value, "number");
    assert.strictEqual(typeof int32Value, "number");
    assert.strictEqual(typeof uint32Value, "number");
    assert.strictEqual(typeof int64Value, "number");
    assert.strictEqual(typeof uint64Value, "number");
    assert.strictEqual(typeof bigint64Value, "bigint");
    assert.strictEqual(typeof biguint64Value, "bigint");
  });
});

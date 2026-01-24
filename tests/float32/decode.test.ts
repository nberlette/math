import assert from "node:assert";
import { describe, it } from "node:test";
import { decodeFloat32 } from "./decode.ts";

const cases = [
  0x00000000,
  0x80000000,
  0x3F800000,
  0xBF800000,
  0x7F800000,
  0xFF800000,
  0x40490FDB,
];

describe("decodeFloat32", () => {
  it("is a function", () => {
    assert.strictEqual(typeof decodeFloat32, "function");
  });

  it("decodes known bit patterns", () => {
    assert.strictEqual(Object.is(decodeFloat32(0x00000000), 0), true);
    assert.strictEqual(Object.is(decodeFloat32(0x80000000), -0), true);
    assert.strictEqual(decodeFloat32(0x3F800000), 1);
    assert.strictEqual(decodeFloat32(0xBF800000), -1);
    assert.strictEqual(decodeFloat32(0x7F800000), Infinity);
    assert.strictEqual(decodeFloat32(0xFF800000), -Infinity);
  });

  it("matches DataView float32 decoding", () => {
    const view = new DataView(new ArrayBuffer(4));
    for (const bits of cases) {
      view.setUint32(0, bits);
      const expected = view.getFloat32(0);
      const actual = decodeFloat32(bits);
      assert.strictEqual(actual, expected);
    }
  });
});

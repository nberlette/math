import assert from "node:assert";
import { describe, it } from "node:test";
import { decodeFloat16 } from "./decode.ts";

const cases = [0x0000, 0x8000, 0x3C00, 0xBC00, 0x7C00, 0xFC00, 0x7E00, 0x4248];

describe("decodeFloat16", () => {
  it("is a function", () => {
    assert.strictEqual(typeof decodeFloat16, "function");
  });

  it("decodes known bit patterns", () => {
    assert.strictEqual(Object.is(decodeFloat16(0x0000), 0), true);
    assert.strictEqual(Object.is(decodeFloat16(0x8000), -0), true);
    assert.strictEqual(decodeFloat16(0x3C00), 1);
    assert.strictEqual(decodeFloat16(0xBC00), -1);
    assert.strictEqual(decodeFloat16(0x7C00), Infinity);
    assert.strictEqual(decodeFloat16(0xFC00), -Infinity);
    assert.ok(Number.isNaN(decodeFloat16(0x7E00)));
  });

  it("matches DataView float16 decoding when available", () => {
    const view = new DataView(new ArrayBuffer(2));
    const getFloat16 =
      (view as unknown as { getFloat16?: (offset: number) => number })
        .getFloat16;
    if (typeof getFloat16 !== "function") {
      return;
    }
    for (const bits of cases) {
      view.setUint16(0, bits);
      const expected = getFloat16.call(view, 0);
      const actual = decodeFloat16(bits);
      if (Number.isNaN(expected)) {
        assert.ok(Number.isNaN(actual));
      } else {
        assert.strictEqual(actual, expected);
      }
    }
  });
});

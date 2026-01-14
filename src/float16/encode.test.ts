import assert from "node:assert";
import { describe, it } from "node:test";
import { encodeFloat16 } from "./encode.ts";

const cases = [0, -0, 1, -1, 3.14, 42, Infinity, -Infinity];

describe("encodeFloat16", () => {
  it("is a function", () => {
    assert.strictEqual(typeof encodeFloat16, "function");
  });

  it("returns a 16-bit unsigned integer", () => {
    for (const value of cases) {
      const encoded = encodeFloat16(value);
      assert.ok(encoded >= 0 && encoded <= 0xFFFF);
    }
  });

  it("matches DataView float16 encoding when available", () => {
    const view = new DataView(new ArrayBuffer(2));
    const setFloat16 = (view as unknown as {
      setFloat16?: (offset: number, value: number) => void;
    }).setFloat16;
    const getUint16 = view.getUint16.bind(view);
    if (typeof setFloat16 !== "function") {
      return;
    }
    for (const value of cases) {
      setFloat16.call(view, 0, value);
      const expected = getUint16(0);
      const actual = encodeFloat16(value);
      assert.strictEqual(actual, expected);
    }
  });
});

import assert from "node:assert";
import { describe, it } from "node:test";
import { encodeFloat32 } from "./encode.ts";

const cases = [0, -0, 1, -1, 3.14, 42, Infinity, -Infinity];

describe("encodeFloat32", () => {
  it("is a function", () => {
    assert.strictEqual(typeof encodeFloat32, "function");
  });

  it("matches DataView float32 encoding", () => {
    const view = new DataView(new ArrayBuffer(4));
    for (const value of cases) {
      view.setFloat32(0, value);
      const expected = view.getUint32(0);
      const actual = encodeFloat32(value);
      assert.strictEqual(actual, expected);
    }
  });
});

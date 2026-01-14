import assert from "node:assert";
import { describe, it } from "node:test";
import * as ieee754 from "./ieee754.ts";

describe("ieee754", () => {
  it("re-exports float16 utilities", () => {
    assert.strictEqual(typeof ieee754.encodeFloat16, "function");
    assert.strictEqual(typeof ieee754.decodeFloat16, "function");
    assert.strictEqual(typeof ieee754.roundFloat16, "function");
  });

  it("re-exports float32 utilities", () => {
    assert.strictEqual(typeof ieee754.encodeFloat32, "function");
    assert.strictEqual(typeof ieee754.decodeFloat32, "function");
    assert.strictEqual(typeof ieee754.roundFloat32, "function");
  });
});

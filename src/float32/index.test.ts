import assert from "node:assert";
import { describe, it } from "node:test";
import * as float32 from "./index.ts";

describe("float32/index", () => {
  it("exports float32 utilities", () => {
    assert.strictEqual(typeof float32.encodeFloat32, "function");
    assert.strictEqual(typeof float32.decodeFloat32, "function");
    assert.strictEqual(typeof float32.roundFloat32, "function");
    assert.strictEqual(typeof float32.isFloat32, "function");
    assert.strictEqual(typeof float32.isFiniteFloat32, "function");
  });
});

import assert from "node:assert";
import { describe, it } from "node:test";
import * as float16 from "./index.ts";

describe("float16/index", () => {
  it("exports float16 utilities", () => {
    assert.strictEqual(typeof float16.encodeFloat16, "function");
    assert.strictEqual(typeof float16.decodeFloat16, "function");
    assert.strictEqual(typeof float16.roundFloat16, "function");
    assert.strictEqual(typeof float16.isFloat16, "function");
  });
});

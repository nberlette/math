import assert from "node:assert";
import { describe, it } from "node:test";
import type { SafeInteger } from "./safe_integer.ts";

const safeValue = 1 as SafeInteger;

describe("types/safe_integer", () => {
  it("supports safe integer branding", () => {
    assert.strictEqual(typeof safeValue, "number");
  });
});

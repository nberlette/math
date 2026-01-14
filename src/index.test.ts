import assert from "node:assert";
import { describe, it } from "node:test";
import * as math from "./index.ts";
import mathDefault from "./index.ts";
import { assertClose, assertSameValue } from "./internal/_test_utils.ts";

describe("index", () => {
  it("exports a default namespace", () => {
    assert.ok(mathDefault != null && typeof mathDefault === "object");
    assert.strictEqual(mathDefault.abs, math.abs);
  });

  it("exposes core constants", () => {
    assertSameValue(math.PI, Math.PI);
    assertSameValue(math.E, Math.E);
    assertSameValue(math.EPSILON, Number.EPSILON);
  });

  it("matches native Math for sample functions", () => {
    assertSameValue(math.abs(-2), Math.abs(-2));
    assertClose(math.sin(Math.PI / 3), Math.sin(Math.PI / 3));
    assertClose(math.log(2), Math.log(2));
  });
});

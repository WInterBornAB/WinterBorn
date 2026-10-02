import test from "node:test";
import assert from "node:assert/strict";
import { shouldResetScroll } from "../src/lib/scroll-restoration.ts";

test("resets ordinary visits to the top", () => {
  assert.equal(shouldResetScroll(""), true);
  assert.equal(shouldResetScroll("#top"), true);
});

test("preserves explicit section anchors", () => {
  assert.equal(shouldResetScroll("#products"), false);
  assert.equal(shouldResetScroll("#about"), false);
  assert.equal(shouldResetScroll("#contact"), false);
});

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path: string) => readFileSync(path, "utf8");

test("WinterBorn exposes descriptive canonical metadata", () => {
  const layout = read("src/app/layout.tsx");

  assert.match(
    layout,
    /WinterBorn AB – Digitala produkter för spel, träning och fritid/
  );
  assert.match(layout, /https:\/\/www\.winterborn\.se/);
  assert.match(layout, /canonical:\s*"\/"\/);
  assert.match(layout, /Remote Raid och WNTR Training/);
});

test("WinterBorn exposes sitemap and robots routes", () => {
  const sitemap = read("src/app/sitemap.ts");
  const robots = read("src/app/robots.ts");

  assert.match(sitemap, /https:\/\/www\.winterborn\.se/);
  assert.match(robots, /allow:\s*"\/"\/);
  assert.match(robots, /https:\/\/www\.winterborn\.se\/sitemap\.xml/);
});

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path: string) => readFileSync(path, "utf8");

test("WinterBorn exposes descriptive canonical metadata", () => {
  const layout = read("src/app/layout.tsx");

  assert.ok(
    layout.includes(
      "WinterBorn AB – Digitala produkter för spel, träning och fritid"
    )
  );
  assert.ok(layout.includes("https://www.winterborn.se"));
  assert.ok(layout.includes('canonical: "/"'));
  assert.ok(layout.includes("Remote Raid och WNTR Training"));
});

test("WinterBorn exposes sitemap and robots routes", () => {
  const sitemap = read("src/app/sitemap.ts");
  const robots = read("src/app/robots.ts");

  assert.ok(sitemap.includes("https://www.winterborn.se"));
  assert.ok(robots.includes('allow: "/"'));
  assert.ok(
    robots.includes("https://www.winterborn.se/sitemap.xml")
  );
});

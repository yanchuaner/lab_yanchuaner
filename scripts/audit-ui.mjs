import { readdir, readFile } from "node:fs/promises";
import { extname, join, relative } from "node:path";

const root = new URL("../", import.meta.url).pathname.replace(/^\/(.:)/, "$1");
const sourceRoot = join(root, "src");
const allowedColorFile = join(sourceRoot, "app", "globals.css");
const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".css"]);
const rules = [
  { name: "raw hex color", pattern: /#[0-9a-fA-F]{3,8}\b/g },
  { name: "raw rgb/hsl color", pattern: /\b(?:rgb|rgba|hsl|hsla)\s*\(/g },
  { name: "fixed Tailwind color", pattern: /\b(?:bg|text|border)-(?:white|black|gray|slate|zinc|neutral|stone)-?\d*\b/g }
];

async function collect(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => entry.isDirectory() ? collect(join(directory, entry.name)) : [join(directory, entry.name)]));
  return nested.flat();
}

const failures = [];
for (const file of await collect(sourceRoot)) {
  if (!sourceExtensions.has(extname(file)) || file === allowedColorFile) continue;
  const content = await readFile(file, "utf8");
  for (const rule of rules) {
    for (const match of content.matchAll(rule.pattern)) {
      const line = content.slice(0, match.index).split("\n").length;
      failures.push(`${relative(root, file)}:${line} ${rule.name}: ${match[0]}`);
    }
  }
}

if (failures.length) {
  console.error("UI token audit failed:\n" + failures.join("\n"));
  process.exit(1);
}

console.log("UI token audit passed.");

import { readdir, readFile } from "node:fs/promises";
import { extname, join, relative } from "node:path";

const root = new URL("../", import.meta.url).pathname.replace(/^\/(.:)/, "$1");
const roots = ["src", "content", "docs"];
const extensions = new Set([".ts", ".tsx", ".md", ".mdx"]);
const failures = [];

async function collect(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => entry.isDirectory() ? collect(join(directory, entry.name)) : [join(directory, entry.name)]));
  return nested.flat();
}

for (const directory of roots) {
  for (const file of await collect(join(root, directory))) {
    if (!extensions.has(extname(file))) continue;
    const content = await readFile(file, "utf8");
    const patterns = [
      { label: "placeholder href", regex: /href=["']#["']/g },
      { label: "placeholder Markdown link", regex: /\]\(#\)/g },
      { label: "insecure public link", regex: /(?:href=|repositoryUrl:\s*)["']http:\/\/(?!localhost|127\.0\.0\.1)/g }
    ];
    for (const pattern of patterns) {
      for (const match of content.matchAll(pattern.regex)) {
        const line = content.slice(0, match.index).split("\n").length;
        failures.push(`${relative(root, file)}:${line} ${pattern.label}`);
      }
    }
  }
}

if (failures.length) {
  console.error("Link audit failed:\n" + failures.join("\n"));
  process.exit(1);
}

console.log("Link audit passed.");

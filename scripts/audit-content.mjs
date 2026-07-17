import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import matter from "gray-matter";

const root = new URL("../", import.meta.url).pathname.replace(/^\/(.:)/, "$1");
const locales = ["zh", "en"];
const sharedFields = ["id", "category", "difficulty", "minutes", "lessons", "order", "accent"];
const requiredFields = [...sharedFields, "title", "summary"];

async function readLocale(locale) {
  const directory = join(root, "content", locale, "guides");
  const files = (await readdir(directory)).filter(file => file.endsWith(".mdx")).sort();
  const documents = new Map();
  for (const file of files) {
    const source = await readFile(join(directory, file), "utf8");
    const { data, content } = matter(source);
    for (const field of requiredFields) {
      if (data[field] === undefined || data[field] === "") throw new Error(`${locale}/${file}: missing ${field}`);
    }
    const id = file.slice(0, -4);
    if (data.id !== id) throw new Error(`${locale}/${file}: id must match filename`);
    if (!content.includes("## ")) throw new Error(`${locale}/${file}: guide needs section headings`);
    documents.set(id, data);
  }
  return documents;
}

const [zh, en] = await Promise.all(locales.map(readLocale));
if ([...zh.keys()].join("|") !== [...en.keys()].join("|")) throw new Error("Chinese and English guide ids do not match");

for (const [id, zhData] of zh) {
  const enData = en.get(id);
  for (const field of sharedFields) {
    if (zhData[field] !== enData[field]) throw new Error(`${id}: ${field} differs between locales`);
  }
}

console.log(`Content audit passed: ${zh.size} bilingual guides.`);

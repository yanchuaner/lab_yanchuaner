import "server-only";

import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import matter from "gray-matter";
import type { CategoryId, Difficulty, Guide, TranslationStatus } from "./content";
import type { Locale } from "./i18n";

const contentRoot = join(process.cwd(), "content");
const locales: Locale[] = ["zh", "en"];
const categoryIds: CategoryId[] = ["foundation", "miniapp", "app", "agent", "hardware", "open"];
const difficulties: Difficulty[] = ["Beginner", "Intermediate"];
const translationStatuses: TranslationStatus[] = ["missing", "draft", "reviewed"];

interface GuideDocument {
  body: string;
  guide: Omit<Guide, "title" | "summary"> & { title: string; summary: string; order: number };
}

function requiredString(data: Record<string, unknown>, key: string, file: string) {
  const value = data[key];
  if (typeof value !== "string" || !value.trim()) throw new Error(`${file}: ${key} must be a non-empty string`);
  return value.trim();
}

function requiredNumber(data: Record<string, unknown>, key: string, file: string) {
  const value = data[key];
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) throw new Error(`${file}: ${key} must be a non-negative number`);
  return value;
}

async function readGuide(locale: Locale, id: string): Promise<GuideDocument> {
  const file = join(contentRoot, locale, "guides", `${id}.mdx`);
  const source = await readFile(file, "utf8");
  const { data, content } = matter(source);
  const category = requiredString(data, "category", file);
  const difficulty = requiredString(data, "difficulty", file);
  if (!categoryIds.includes(category as CategoryId)) throw new Error(`${file}: unsupported category ${category}`);
  if (!difficulties.includes(difficulty as Difficulty)) throw new Error(`${file}: unsupported difficulty ${difficulty}`);

  return {
    body: content,
    guide: {
      id: requiredString(data, "id", file),
      title: requiredString(data, "title", file),
      summary: requiredString(data, "summary", file),
      category: category as CategoryId,
      difficulty: difficulty as Difficulty,
      minutes: requiredNumber(data, "minutes", file),
      lessons: requiredNumber(data, "lessons", file),
      order: requiredNumber(data, "order", file),
      accent: requiredString(data, "accent", file),
      translationStatus: locale === "zh" ? requiredString(data, "translationStatus", file) as TranslationStatus : "reviewed"
    }
  };
}

async function readOptionalEnglishGuide(id: string) {
  try {
    return await readGuide("en", id);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw error;
  }
}

export async function getGuideIds() {
  const [zhIds, enIds] = await Promise.all(locales.map(async locale => {
    const files = await readdir(join(contentRoot, locale, "guides"));
    return files.filter(file => file.endsWith(".mdx")).map(file => file.slice(0, -4)).sort();
  }));
  const orphanEnglish = enIds.filter(id => !zhIds.includes(id));
  if (orphanEnglish.length) throw new Error(`English guides need a Chinese source: ${orphanEnglish.join(", ")}`);
  return zhIds;
}

export async function getGuidePair(id: string) {
  const [zh, en] = await Promise.all([readGuide("zh", id), readOptionalEnglishGuide(id)]);
  if (!translationStatuses.includes(zh.guide.translationStatus)) throw new Error(`${id}: unsupported translationStatus ${zh.guide.translationStatus}`);
  if (zh.guide.translationStatus === "missing" && en) throw new Error(`${id}: translationStatus is missing but an English file exists`);
  if (zh.guide.translationStatus !== "missing" && !en) throw new Error(`${id}: translationStatus ${zh.guide.translationStatus} requires an English file`);
  const sharedKeys = ["id", "category", "difficulty", "minutes", "lessons", "order", "accent"] as const;
  if (en) {
    for (const key of sharedKeys) {
      if (zh.guide[key] !== en.guide[key]) throw new Error(`${id}: frontmatter field ${key} must match across locales`);
    }
  }
  if (zh.guide.id !== id) throw new Error(`${id}: frontmatter id must match filename`);
  return { zh, en };
}

export async function getGuideSummaries(): Promise<Guide[]> {
  const ids = await getGuideIds();
  const pairs = await Promise.all(ids.map(getGuidePair));
  return pairs
    .sort((a, b) => a.zh.guide.order - b.zh.guide.order)
    .map(({ zh, en }) => ({
      id: zh.guide.id,
      category: zh.guide.category,
      difficulty: zh.guide.difficulty,
      minutes: zh.guide.minutes,
      lessons: zh.guide.lessons,
      accent: zh.guide.accent,
      translationStatus: zh.guide.translationStatus,
      title: { zh: zh.guide.title, en: en?.guide.title ?? zh.guide.title },
      summary: { zh: zh.guide.summary, en: en?.guide.summary ?? zh.guide.summary }
    }));
}

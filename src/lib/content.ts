import type { Localized } from "./i18n";

export type CategoryId = "foundation" | "miniapp" | "app" | "agent" | "hardware" | "open";
export type Difficulty = "Beginner" | "Intermediate";
export type TranslationStatus = "missing" | "draft" | "reviewed";

export interface Category {
  id: CategoryId;
  icon: string;
  title: Localized;
  description: Localized;
  count: number;
}

export interface Guide {
  id: string;
  category: CategoryId;
  title: Localized;
  summary: Localized;
  difficulty: Difficulty;
  minutes: number;
  lessons: number;
  accent: string;
  translationStatus: TranslationStatus;
}

export interface Project {
  id: string;
  category: CategoryId;
  title: Localized;
  summary: Localized;
  status: "Active" | "Planning";
  progress: number;
  contributors: number;
  tags: string[];
}

export const categories: Category[] = [
  { id: "foundation", icon: "terminal", title: { zh: "工程基础", en: "Engineering Basics" }, description: { zh: "Git、命令行与协作习惯", en: "Git, command line, and teamwork" }, count: 12 },
  { id: "miniapp", icon: "blocks", title: { zh: "小程序", en: "Mini Programs" }, description: { zh: "从页面到一款可发布的小程序", en: "From screens to a publishable mini app" }, count: 8 },
  { id: "app", icon: "smartphone", title: { zh: "App 开发", en: "App Development" }, description: { zh: "跨端应用与产品实践", en: "Cross-platform apps and product craft" }, count: 7 },
  { id: "agent", icon: "sparkles", title: { zh: "AI 与 Agent", en: "AI & Agents" }, description: { zh: "把模型能力做成可靠工具", en: "Turn models into reliable tools" }, count: 10 },
  { id: "hardware", icon: "cpu", title: { zh: "硬件与航天", en: "Hardware & Space" }, description: { zh: "传感器、嵌入式与仰望星空", en: "Sensors, embedded systems, and space" }, count: 6 },
  { id: "open", icon: "users", title: { zh: "校友开源", en: "Alumni Open Source" }, description: { zh: "真实项目、复盘与共建入口", en: "Real projects, retrospectives, and contribution" }, count: 9 }
];

export const projects: Project[] = [
  { id: "digital-harbor", category: "open", title: { zh: "燕中校友数字母港", en: "Yanzhong Alumni Digital Harbor" }, summary: { zh: "持续完善面向校友、师生与共建者的公益数字平台。", en: "Evolving the public-interest digital home for alumni, students, and builders." }, status: "Active", progress: 72, contributors: 11, tags: ["Next.js", "TypeScript", "Design System"] },
  { id: "campus-miniapp", category: "miniapp", title: { zh: "燕中校园助手", en: "Yanzhong Campus Companion" }, summary: { zh: "探索活动、资源与校园服务在移动端的轻量入口。", en: "A lightweight mobile entry point for events, resources, and campus services." }, status: "Planning", progress: 24, contributors: 5, tags: ["Mini Program", "UX", "API"] },
  { id: "knowledge-agent", category: "agent", title: { zh: "燕中知识助手", en: "Yanzhong Knowledge Agent" }, summary: { zh: "让公开校史与共建文档更容易被检索、理解与引用。", en: "Make public school history and project docs easier to find, understand, and cite." }, status: "Active", progress: 46, contributors: 7, tags: ["RAG", "AI", "Open Data"] }
];

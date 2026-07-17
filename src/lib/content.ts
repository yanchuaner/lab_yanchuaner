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
  status: "Production" | "Pilot" | "Building";
  repositoryUrl: string;
  homepageUrl?: string;
  intro: Localized;
  highlights: Localized[];
  audience: Localized[];
  roadmap: Array<{ title: Localized; done: boolean }>;
  license?: string;
  tags: string[];
}

export interface LearningPath {
  id: string;
  title: Localized;
  summary: Localized;
  outcome: Localized;
  difficulty: Difficulty;
  status: "Ready" | "Growing";
  guideIds: string[];
}

export interface ReferenceItem {
  id: string;
  group: "terminal" | "git" | "quality";
  title: Localized;
  description: Localized;
  command: string;
}

export const categories: Category[] = [
  { id: "foundation", icon: "terminal", title: { zh: "工程基础", en: "Engineering Basics" }, description: { zh: "Git、命令行与协作习惯", en: "Git, command line, and teamwork" }, count: 3 },
  { id: "miniapp", icon: "blocks", title: { zh: "小程序", en: "Mini Programs" }, description: { zh: "从页面到一款可发布的小程序", en: "From screens to a publishable mini app" }, count: 1 },
  { id: "app", icon: "smartphone", title: { zh: "App 开发", en: "App Development" }, description: { zh: "跨端应用与产品实践", en: "Cross-platform apps and product craft" }, count: 0 },
  { id: "agent", icon: "sparkles", title: { zh: "AI 与 Agent", en: "AI & Agents" }, description: { zh: "把模型能力做成可靠工具", en: "Turn models into reliable tools" }, count: 1 },
  { id: "hardware", icon: "cpu", title: { zh: "硬件与航天", en: "Hardware & Space" }, description: { zh: "传感器、嵌入式与仰望星空", en: "Sensors, embedded systems, and space" }, count: 0 },
  { id: "open", icon: "users", title: { zh: "校友开源", en: "Alumni Open Source" }, description: { zh: "真实项目、复盘与共建入口", en: "Real projects, retrospectives, and contribution" }, count: 0 }
];

export const learningPaths: LearningPath[] = [
  {
    id: "open-source-starter",
    title: { zh: "开源协作入门", en: "Open-source Starter" },
    summary: { zh: "从看懂项目开始，完成第一次贡献，再把协作入口写清楚。", en: "Understand a repository, make a first contribution, and improve its collaboration entry point." },
    outcome: { zh: "完成一个经过检查的 Pull Request，并交付一份可帮助后来者的 README。", en: "Complete a reviewed Pull Request and deliver a README that helps the next contributor." },
    difficulty: "Beginner", status: "Ready",
    guideIds: ["terminal-project-basics", "git-first-contribution", "readme-that-helps"]
  },
  {
    id: "mini-program-prototype",
    title: { zh: "小程序原型实践", en: "Mini Program Prototype" },
    summary: { zh: "围绕真实校园场景，先完成最小数据流与手机体验。", en: "Build a minimal data flow and mobile experience around a real campus scenario." },
    outcome: { zh: "做出可在微信开发者工具中运行的校园活动清单。", en: "Build a campus event list that runs in WeChat DevTools." },
    difficulty: "Beginner", status: "Growing",
    guideIds: ["miniapp-campus-tool"]
  },
  {
    id: "reliable-agent-basics",
    title: { zh: "可靠 Agent 基础", en: "Reliable Agent Basics" },
    summary: { zh: "从可验证输出出发，理解工具、引用与停止条件。", en: "Start from verifiable output and learn tools, citations, and stop conditions." },
    outcome: { zh: "完成一个能标注来源、承认未知并限制工具范围的资料整理 Agent。", en: "Build a research agent that cites sources, admits unknowns, and constrains tool access." },
    difficulty: "Intermediate", status: "Growing",
    guideIds: ["agent-from-zero"]
  }
];

export const referenceItems: ReferenceItem[] = [
  { id: "location", group: "terminal", title: { zh: "确认当前目录", en: "Show current directory" }, description: { zh: "运行任何项目命令前，先确认终端所在位置。", en: "Confirm where the terminal is before running project commands." }, command: "pwd\n# PowerShell: Get-Location" },
  { id: "files", group: "terminal", title: { zh: "列出项目文件", en: "List project files" }, description: { zh: "快速查看未被忽略的文件，建立项目全貌。", en: "See tracked project files and build a quick mental map." }, command: "rg --files" },
  { id: "search", group: "terminal", title: { zh: "搜索代码文本", en: "Search source text" }, description: { zh: "在指定目录中定位函数、文案或待办标记。", en: "Locate functions, copy, or task markers in a directory." }, command: "rg \"PATTERN\" src" },
  { id: "status", group: "git", title: { zh: "查看工作区状态", en: "Check working tree" }, description: { zh: "用紧凑格式确认新增、修改和删除的文件。", en: "See added, modified, and deleted files in compact form." }, command: "git status --short" },
  { id: "branch", group: "git", title: { zh: "查看与建立分支", en: "Inspect and create a branch" }, description: { zh: "确认当前分支，再为独立任务创建新分支。", en: "Confirm the current branch and create one for a focused task." }, command: "git branch --show-current\ngit switch -c docs/improve-readme" },
  { id: "diff", group: "git", title: { zh: "复核准备提交的改动", en: "Review staged changes" }, description: { zh: "提交前逐行确认暂存区只包含当前任务。", en: "Verify that the staged diff contains only the current task." }, command: "git diff --cached" },
  { id: "unstage", group: "git", title: { zh: "取消暂存文件", en: "Unstage a file" }, description: { zh: "保留工作区内容，只把误选文件移出暂存区。", en: "Keep working changes while removing a file from staging." }, command: "git restore --staged path/to/file" },
  { id: "checks", group: "quality", title: { zh: "运行发布前检查", en: "Run release checks" }, description: { zh: "以当前 Lab 仓库为例，依次检查类型、规范、内容与构建。", en: "For this Lab repository, verify types, rules, content, and build." }, command: "pnpm typecheck\npnpm lint\npnpm audit:ui\npnpm audit:content\npnpm build" }
];

export const projects: Project[] = [
  {
    id: "digital-harbor", category: "open", title: { zh: "燕中校友数字母港", en: "Yanzhong Alumni Digital Harbor" },
    summary: { zh: "连接校友、在校生与老师的公益数字平台，也是燕中生态的主入口。", en: "The public-interest digital home connecting alumni, students, and teachers." },
    status: "Production", repositoryUrl: "https://github.com/yanchuaner/web_yanchuaner", homepageUrl: "https://yanchuaner.cn", license: "MIT",
    intro: { zh: "项目围绕校友联络、信息发布、故事投稿、活动管理与资料维护展开。前台、个人中心和运营后台共同组成一条完整服务链路，并对主题、双语、移动端、隐私和安全边界做了系统建设。", en: "The project covers alumni connections, publishing, stories, events, and profile maintenance. Its public site, member center, and operations console form one complete service workflow." },
    highlights: [
      { zh: "星空通讯录、校友故事、活动与电子纪念卡", en: "Alumni directory, stories, events, and digital keepsake card" },
      { zh: "完整的内容运营、审核与注册策略后台", en: "Operations console for content, review, and registration policy" },
      { zh: "亮暗主题、中英界面和移动端完整适配", en: "Light/dark themes, bilingual UI, and responsive mobile experience" }
    ],
    audience: [
      { zh: "Next.js、TypeScript 与设计系统贡献者", en: "Next.js, TypeScript, and design-system contributors" },
      { zh: "内容编辑、测试与校友服务志愿者", en: "Content editors, testers, and alumni-service volunteers" }
    ],
    roadmap: [
      { title: { zh: "公开站点与核心校友服务上线", en: "Launch the public site and core alumni services" }, done: true },
      { title: { zh: "统一前后台 UI、双语与主题体系", en: "Unify public/admin UI, localization, and themes" }, done: true },
      { title: { zh: "小范围真实用户试运营与反馈收束", en: "Run a focused pilot and consolidate feedback" }, done: false }
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "SQLite"]
  },
  {
    id: "alumni-mini-program", category: "miniapp", title: { zh: "燕中校友数字母港小程序", en: "Yanzhong Alumni Mini Program" },
    summary: { zh: "承载校友身份、动态、活动与个人服务的微信移动入口。", en: "A WeChat entry point for alumni identity, updates, events, and member services." },
    status: "Pilot", repositoryUrl: "https://github.com/yanchuaner/mp_yanchuaner", homepageUrl: "https://yanchuaner.cn",
    intro: { zh: "小程序与数字母港网站共享业务底座，首版聚焦微信登录、身份资料、校友动态、活动报名和个人隐私设置。它不是主站的简单缩小版，而是为移动端高频任务重新组织的轻量入口。", en: "The mini program shares the Digital Harbor backend while focusing on WeChat login, identity profiles, alumni updates, event registration, and privacy controls." },
    highlights: [
      { zh: "微信登录、校友认证状态与资料维护", en: "WeChat login, verification status, and profile management" },
      { zh: "校友动态、活动报名与报名记录", en: "Alumni updates, event registration, and participation history" },
      { zh: "Taro 跨端架构与共享 API 契约", en: "Taro architecture and shared API contracts" }
    ],
    audience: [
      { zh: "小程序、React/Taro 与移动交互开发者", en: "Mini Program, React/Taro, and mobile UX developers" },
      { zh: "愿意参与真实手机流程测试的校友", en: "Alumni willing to test real mobile workflows" }
    ],
    roadmap: [
      { title: { zh: "身份、动态与活动核心流程完成", en: "Complete identity, updates, and event flows" }, done: true },
      { title: { zh: "微信开发者工具联调与质量检查", en: "Integrate with WeChat DevTools and quality gates" }, done: true },
      { title: { zh: "小范围首测与移动体验修正", en: "Run a focused pilot and refine mobile UX" }, done: false }
    ],
    tags: ["Taro", "React", "TypeScript", "WeChat"]
  },
  {
    id: "yczx-code", category: "agent", title: { zh: "YCZX Code", en: "YCZX Code" },
    summary: { zh: "面向学生开发者的轻量级 CLI Coding Agent 暑期共建项目。", en: "A summer-built lightweight CLI coding agent for student developers." },
    status: "Building", repositoryUrl: "https://github.com/yanchuaner/yczx_code",
    intro: { zh: "项目以可运行、可演示、可复盘为目标，逐步建设代码库理解、工具调用、任务规划、权限确认与日志记录能力。学习路线、开发路线和代码在同一仓库协同演进。", en: "The project is building a runnable and explainable coding agent with repository understanding, tool use, planning, permission checks, and execution logs." },
    highlights: [
      { zh: "Python CLI、Agent Core 与模型适配", en: "Python CLI, agent core, and model adapters" },
      { zh: "文件工具、命令执行与权限确认", en: "File tools, shell execution, and permission controls" },
      { zh: "学习路线、评测与演示任务同步建设", en: "Learning roadmap, evaluations, and demo tasks" }
    ],
    audience: [
      { zh: "希望系统学习 AI Agent 工程的同学", en: "Students learning practical AI agent engineering" },
      { zh: "Python、CLI、测试与开发者工具贡献者", en: "Python, CLI, testing, and developer-tool contributors" }
    ],
    roadmap: [
      { title: { zh: "第一性原理、技术栈与学习路线确定", en: "Define principles, stack, and learning roadmap" }, done: true },
      { title: { zh: "搭建可运行的 CLI 与 Agent Core", en: "Build a runnable CLI and agent core" }, done: false },
      { title: { zh: "完成真实任务演示、评测与复盘", en: "Ship real demos, evaluations, and retrospective" }, done: false }
    ],
    tags: ["Python", "CLI", "LLM", "Agent"]
  },
  {
    id: "yanzhong-ai", category: "agent", title: { zh: "燕中 AI", en: "Yanzhong AI" },
    summary: { zh: "为燕中生态提供多模型对话、图像生成、预算限流与内部接入的统一底座。", en: "A shared AI foundation for model access, image generation, budgets, and internal services." },
    status: "Pilot", repositoryUrl: "https://github.com/yanchuaner/ai_yanchuaner", homepageUrl: "https://ai.yanchuaner.cn",
    intro: { zh: "项目以 LiteLLM、PostgreSQL 与 Open WebUI 组成受控的内部 AI 工作台。当前重点是稳定性、权限、预算与安全边界，不建设公开售卖型 API 中转服务。", en: "The project combines LiteLLM, PostgreSQL, and Open WebUI into a controlled internal AI workspace focused on reliability, access, budgets, and security." },
    highlights: [
      { zh: "统一文本与图像模型入口", en: "Unified text and image model access" },
      { zh: "虚拟 Key、预算、RPM 限流与使用审计", en: "Virtual keys, budgets, RPM limits, and usage auditing" },
      { zh: "Docker Compose 部署、备份与健康检查", en: "Docker Compose deployment, backups, and health checks" }
    ],
    audience: [
      { zh: "AI 基础设施、Docker 与安全方向贡献者", en: "AI infrastructure, Docker, and security contributors" },
      { zh: "参与内部工具试用与场景验证的同学", en: "Students testing internal tools and use cases" }
    ],
    roadmap: [
      { title: { zh: "单渠道模型网关 PoC 与流式调用验证", en: "Validate gateway PoC and streaming requests" }, done: true },
      { title: { zh: "预算、限流、图像生成与备份链路", en: "Validate budgets, limits, images, and backups" }, done: true },
      { title: { zh: "多渠道故障切换与身份集成", en: "Add provider failover and identity integration" }, done: false }
    ],
    tags: ["LiteLLM", "Open WebUI", "PostgreSQL", "Docker"]
  }
];

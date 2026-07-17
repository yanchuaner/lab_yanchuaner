export type Locale = "zh" | "en";
export type Localized = Record<Locale, string>;

export const messages = {
  zh: {
    brand: "燕中科创实验室",
    brandShort: "燕中 Lab",
    home: "探索",
    paths: "学习路径",
    guides: "实作指南",
    projects: "共建项目",
    reference: "速查手册",
    contribute: "参与共建",
    search: "搜索教程、项目或关键词",
    searchShort: "搜索",
    theme: "切换主题",
    language: "切换语言",
    menu: "打开导航",
    close: "关闭导航",
    eyebrow: "YANCHUAN OPEN LAB",
    heroTitle: "从好奇出发，把想法做成作品",
    heroCopy: "一份为燕中同学整理的科创学习地图。跟着路径入门，在真实项目中练习，也把你的经验留给后来者。",
    startLearning: "开始学习",
    browseProjects: "浏览项目",
    learningMap: "学习地图",
    chooseDirection: "选择一个方向，从第一件能完成的小作品开始。",
    featured: "本周推荐",
    featuredCopy: "短而完整的内容，比堆满链接更适合第一次动手。",
    activeProjects: "正在共建",
    activeProjectsCopy: "公开目标、当前进度与参与方式，让贡献从一开始就清楚。",
    viewAll: "查看全部",
    continue: "继续学习",
    lessons: "节内容",
    minutes: "分钟",
    contributors: "位共建者",
    progress: "当前进度",
    projectDetails: "项目详情",
    projectIntro: "项目说明",
    roadmap: "路线图",
    repository: "代码仓库",
    joinProject: "参与项目",
    outcomes: "你将完成",
    prerequisites: "开始之前",
    statusActive: "共建中",
    statusPlanning: "筹备中",
    difficultyBeginner: "零基础",
    difficultyIntermediate: "进阶",
    footer: "由燕中校友与同学共同维护",
    mainSite: "返回数字母港",
    empty: "没有找到匹配内容",
    skip: "跳到主要内容"
    ,projectOverviewCopy: "项目以真实需求为起点，以公开协作为方法。每个任务都应有清晰背景、可验证结果和适合新贡献者的说明，让第一次参与也不会无从下手。"
    ,roadmapScope: "梳理需求与贡献边界"
    ,roadmapCore: "完成核心体验与文档"
    ,roadmapTrial: "邀请真实用户试用"
    ,roadmapReview: "公开复盘并持续迭代"
    ,complete: "已完成"
    ,nextPhase: "下一阶段"
    ,guideOutcomeBuild: "完成一份可以运行或提交的作品"
    ,guideOutcomeReason: "理解每一步背后的工程理由"
    ,guideOutcomeVerify: "知道遇到问题时去哪里查证"
    ,guidePrerequisiteCopy: "不要求已有项目经验。准备一台电脑，并留出一段不被打断的时间。"
    ,chineseOnlyTitle: "本教程暂仅提供中文"
    ,chineseOnlyCopy: "界面仍保持英文；正文展示经过审核的中文原文，欢迎参与翻译。"
    ,chineseOnlyBadge: "中文内容"
    ,translationDraft: "英文草稿"
  },
  en: {
    brand: "Yanzhong Innovation Lab",
    brandShort: "Yanzhong Lab",
    home: "Explore",
    paths: "Learning Paths",
    guides: "Build Guides",
    projects: "Projects",
    reference: "Reference",
    contribute: "Contribute",
    search: "Search guides, projects, or topics",
    searchShort: "Search",
    theme: "Switch theme",
    language: "Switch language",
    menu: "Open navigation",
    close: "Close navigation",
    eyebrow: "YANCHUAN OPEN LAB",
    heroTitle: "Start with curiosity. Build something real.",
    heroCopy: "A practical innovation map for Yanzhong students and alumni. Learn along a path, practice in real projects, and leave useful knowledge for those who follow.",
    startLearning: "Start learning",
    browseProjects: "Browse projects",
    learningMap: "Learning map",
    chooseDirection: "Pick a direction and begin with one small thing you can finish.",
    featured: "Weekly picks",
    featuredCopy: "Short, complete guides make a better first step than a wall of links.",
    activeProjects: "Building together",
    activeProjectsCopy: "Clear goals, visible progress, and practical ways to contribute.",
    viewAll: "View all",
    continue: "Continue",
    lessons: " lessons",
    minutes: " min",
    contributors: " contributors",
    progress: "Progress",
    projectDetails: "Project details",
    projectIntro: "Overview",
    roadmap: "Roadmap",
    repository: "Repository",
    joinProject: "Join project",
    outcomes: "What you will build",
    prerequisites: "Before you start",
    statusActive: "Active",
    statusPlanning: "Planning",
    difficultyBeginner: "Beginner",
    difficultyIntermediate: "Intermediate",
    footer: "Maintained by Yanzhong alumni and students",
    mainSite: "Back to Digital Harbor",
    empty: "No matching content",
    skip: "Skip to main content"
    ,projectOverviewCopy: "This project starts from real needs and uses open collaboration as its method. Every task should have context, a verifiable outcome, and guidance that welcomes first-time contributors."
    ,roadmapScope: "Define needs and contribution scope"
    ,roadmapCore: "Ship the core experience and docs"
    ,roadmapTrial: "Invite real users to test"
    ,roadmapReview: "Share findings and keep iterating"
    ,complete: "Complete"
    ,nextPhase: "Next phase"
    ,guideOutcomeBuild: "Finish something you can run or submit"
    ,guideOutcomeReason: "Understand the engineering reason behind each step"
    ,guideOutcomeVerify: "Know where to verify answers when blocked"
    ,guidePrerequisiteCopy: "No prior project experience required. Bring a computer and set aside one focused session."
    ,chineseOnlyTitle: "This guide is currently available in Chinese"
    ,chineseOnlyCopy: "The interface remains in English while the reviewed Chinese source is shown. Translation contributions are welcome."
    ,chineseOnlyBadge: "Chinese content"
    ,translationDraft: "English draft"
  }
} as const;

export type MessageKey = keyof typeof messages.zh;

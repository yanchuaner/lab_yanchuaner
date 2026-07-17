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
    primaryNav: "主导航",
    mobileNav: "移动端导航",
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
    progress: "当前进度",
    projectIntro: "项目说明",
    roadmap: "路线图",
    repository: "代码仓库",
    outcomes: "你将完成",
    prerequisites: "开始之前",
    difficultyBeginner: "零基础",
    difficultyIntermediate: "进阶",
    footer: "由燕中校友与同学共同维护",
    mainSite: "返回数字母港",
    empty: "没有找到匹配内容",
    skip: "跳到主要内容"
    ,complete: "已完成"
    ,nextPhase: "下一阶段"
    ,guideOutcomeBuild: "完成一份可以运行或提交的作品"
    ,guideOutcomeReason: "理解每一步背后的工程理由"
    ,guideOutcomeVerify: "知道遇到问题时去哪里查证"
    ,chineseOnlyTitle: "本教程暂仅提供中文"
    ,chineseOnlyCopy: "界面仍保持英文；正文展示经过审核的中文原文，欢迎参与翻译。"
    ,chineseOnlyBadge: "中文内容"
    ,translationDraft: "英文草稿"
    ,statusProduction: "已上线"
    ,statusPilot: "内测中"
    ,statusBuilding: "开发中"
    ,projectHighlights: "已实现能力"
    ,projectAudience: "适合谁参与"
    ,visitProject: "访问项目"
    ,openIssues: "查看任务"
    ,projectLicense: "开源协议"
    ,projectSubmitTitle: "也想展示你的项目？"
    ,projectSubmitCopy: "如果你是燕中校友或在校生，正在维护一个真实、可介绍、愿意共建的科创项目，可以联系燕中校友汇管理员。我们会与你核实项目边界、仓库与参与方式后再公开展示。"
    ,contactAdmin: "联系管理员"
    ,verifiedRepository: "公开仓库"
    ,phase: "当前阶段"
    ,pathReady: "完整路径"
    ,pathGrowing: "持续补充"
    ,pathOutcome: "完成作品"
    ,pathDuration: "预计用时"
    ,pathSteps: "个阶段"
    ,pathIntro: "不必一次学完所有技术。选择一条路径，按顺序完成能验证的小作品，再进入真实项目。"
    ,pathStart: "开始这条路径"
    ,pathContinue: "查看现有内容"
    ,pathSequence: "学习顺序"
    ,pathGrowingNote: "这条路径已经可以开始，但后续阶段仍在整理。新增内容不会改变现有教程的可用性。"
    ,referenceIntro: "把常用命令放在手边。先理解命令会读取或改变什么，再复制到自己的项目中。"
    ,referenceTerminal: "终端与查找"
    ,referenceGit: "Git 协作"
    ,referenceQuality: "质量检查"
    ,copyCommand: "复制命令"
    ,copied: "已复制"
    ,notFoundTitle: "这里还没有实验记录"
    ,notFoundCopy: "链接可能已经调整，或者这份内容仍在整理。你可以返回学习地图继续探索。"
    ,backHome: "返回探索页"
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
    primaryNav: "Primary navigation",
    mobileNav: "Mobile navigation",
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
    progress: "Progress",
    projectIntro: "Overview",
    roadmap: "Roadmap",
    repository: "Repository",
    outcomes: "What you will build",
    prerequisites: "Before you start",
    difficultyBeginner: "Beginner",
    difficultyIntermediate: "Intermediate",
    footer: "Maintained by Yanzhong alumni and students",
    mainSite: "Back to Digital Harbor",
    empty: "No matching content",
    skip: "Skip to main content"
    ,complete: "Complete"
    ,nextPhase: "Next phase"
    ,guideOutcomeBuild: "Finish something you can run or submit"
    ,guideOutcomeReason: "Understand the engineering reason behind each step"
    ,guideOutcomeVerify: "Know where to verify answers when blocked"
    ,chineseOnlyTitle: "This guide is currently available in Chinese"
    ,chineseOnlyCopy: "The interface remains in English while the reviewed Chinese source is shown. Translation contributions are welcome."
    ,chineseOnlyBadge: "Chinese content"
    ,translationDraft: "English draft"
    ,statusProduction: "Live"
    ,statusPilot: "Pilot"
    ,statusBuilding: "In development"
    ,projectHighlights: "What works today"
    ,projectAudience: "Who can contribute"
    ,visitProject: "Visit project"
    ,openIssues: "View tasks"
    ,projectLicense: "License"
    ,projectSubmitTitle: "Want to showcase your project?"
    ,projectSubmitCopy: "If you are a Yanzhong alumnus or student building a real, presentable project that welcomes collaboration, contact the Yanzhong Alumni Hub administrator. We will verify its scope, repository, and contribution path before publishing it."
    ,contactAdmin: "Contact administrator"
    ,verifiedRepository: "Public repository"
    ,phase: "Current phase"
    ,pathReady: "Complete path"
    ,pathGrowing: "Growing"
    ,pathOutcome: "Final outcome"
    ,pathDuration: "Estimated time"
    ,pathSteps: " stages"
    ,pathIntro: "You do not need to learn every technology at once. Choose a path, finish verifiable work in order, then join a real project."
    ,pathStart: "Start this path"
    ,pathContinue: "View available content"
    ,pathSequence: "Learning sequence"
    ,pathGrowingNote: "You can start this path now, while later stages are still being prepared. New material will not invalidate the guides already published."
    ,referenceIntro: "Keep common commands close. Understand what each command reads or changes before using it in your project."
    ,referenceTerminal: "Terminal & search"
    ,referenceGit: "Git workflow"
    ,referenceQuality: "Quality checks"
    ,copyCommand: "Copy command"
    ,copied: "Copied"
    ,notFoundTitle: "No experiment is recorded here yet"
    ,notFoundCopy: "The link may have moved, or this material is still being prepared. Return to the learning map to keep exploring."
    ,backHome: "Back to Explore"
  }
} as const;

export type MessageKey = keyof typeof messages.zh;

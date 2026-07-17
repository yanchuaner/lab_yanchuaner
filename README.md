# 燕中科创实验室 / Yanzhong Lab

面向燕中校友与在校生的科创学习与开源共建平台。站点用学习路径组织知识，用可验证的实作教程帮助第一次动手，并集中展示燕中生态中的真实公开项目。

- 计划域名：`https://lab.yanchuaner.cn`
- 当前阶段：暑期内容建设与联合发布准备
- 开源协议：MIT

## 当前能力

- 三条学习路径，其中“开源协作入门”已经形成从项目阅读、Pull Request 到 README 的完整路径。
- 五篇中文实作教程；英文翻译可按 `missing / draft / reviewed` 渐进补齐。
- 命令速查页，支持搜索与复制。
- 四个真实燕中生态项目，展示当前阶段、能力、参与对象、路线图、仓库与线上入口。
- 全局中英 UI、亮暗主题、移动端布局、减少动态效果与 404 页面。
- sitemap、robots、健康检查、Docker standalone 构建与 CI 发布门槛。

## 本地运行

要求 Node.js 22 和 pnpm 10：

```bash
pnpm install
pnpm dev
```

访问 `http://localhost:3000`。

## 内容结构

```text
content/
├── zh/guides/       # 中文是教程发布必需项
└── en/guides/       # 英文按状态渐进补齐
```

教程由服务端编译 MDX。中文 frontmatter 使用：

```yaml
translationStatus: missing # missing | draft | reviewed
```

英文缺失时，英文界面会明确标注并展示中文原文，不使用运行时机器翻译。新增或修改教程后运行 `pnpm audit:content`。

## 质量检查

```bash
pnpm release:check
```

该命令依次执行类型检查、ESLint、UI 令牌审计、内容审计和生产构建。相同检查也在 GitHub Actions 中运行。

## 项目结构

```text
src/app/            # App Router 页面、metadata、sitemap 与健康接口
src/components/     # 页面组合组件与统一基础组件
src/lib/            # 内容模型、服务端 MDX 加载、字典与站点配置
content/            # 中英文教程正文
scripts/            # UI 与内容审计
docs/               # 设计、内容、部署与发布规范
```

## 文档

- [设计系统](docs/design-system.md)
- [知识内容与语言策略](docs/content-guide.md)
- [部署指南](docs/deployment.md)
- [发布检查清单](docs/launch-checklist.md)
- [参与共建](CONTRIBUTING.md)

## 项目展示

如果你是燕中校友或在校生，正在维护一个真实、可介绍、愿意共建的科创项目，可以通过数字母港联系燕中校友汇管理员。项目公开前会核实范围、仓库、当前阶段和参与方式。

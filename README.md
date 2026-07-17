# 燕中科创实验室 / Yanzhong Lab

面向燕中校友与在校生的双语科创知识库 Demo。以学习路径、实作指南和真实项目为核心，不做泛资讯门户。

## 本地运行

```bash
npm install
npm run dev
```

访问 `http://localhost:3000`。教程正文位于 `content/{zh,en}/guides`，由服务端编译 MDX。中文是发布必需项，英文可按 `missing / draft / reviewed` 状态渐进补齐；缺少英文时自动回退中文原文。

## 项目标准

- [设计系统](docs/design-system.md)：主题令牌、组件、响应式、交互、动效和无障碍规范。
- [知识内容与双语写作标准](docs/content-guide.md)：教程结构、双语同步、事实引用和发布审核。
- [参与共建](CONTRIBUTING.md)：本地检查与提交要求。

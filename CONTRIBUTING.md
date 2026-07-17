# 参与共建

感谢参与燕中科创实验室。提交前请先阅读：

- [设计系统](docs/design-system.md)
- [知识内容与双语写作标准](docs/content-guide.md)

## 开发检查

```bash
pnpm install
pnpm typecheck
pnpm lint
pnpm audit:ui
pnpm audit:content
pnpm build
```

一次提交只解决一个清晰问题。UI 变化应同时检查中文/英文、亮色/暗色以及 375px/768px/1440px 三种宽度；内容变化必须同步两种语言并实际走完操作步骤。

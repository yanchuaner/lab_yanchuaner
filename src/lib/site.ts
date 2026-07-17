export const siteConfig = {
  name: "燕中科创实验室",
  englishName: "Yanzhong Innovation Lab",
  description: "面向燕中校友与在校生的科创学习路径、实作教程与开源项目共建平台。",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://lab.yanchuaner.cn",
  repository: "https://github.com/yanchuaner/lab_yanchuaner"
} as const;

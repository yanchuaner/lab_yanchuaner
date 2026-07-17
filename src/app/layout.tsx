import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/components/AppProvider";
import { SiteShell } from "@/components/SiteShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "燕中科创实验室 | Yanzhong Lab", template: "%s | 燕中科创实验室" },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: "燕中校友与同学", url: "https://yanchuaner.cn" }],
  keywords: ["燕川中学", "燕中", "科创", "开源", "编程教程", "校友共建"],
  openGraph: { type: "website", locale: "zh_CN", alternateLocale: "en_US", siteName: siteConfig.name, title: "燕中科创实验室", description: siteConfig.description },
  twitter: { card: "summary", title: "燕中科创实验室", description: siteConfig.description }
};

const themeScript = `(function(){try{var t=localStorage.getItem('lab-theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body><AppProvider><SiteShell>{children}</SiteShell></AppProvider></body></html>;
}

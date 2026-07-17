import type { Metadata } from "next";
import "./globals.css";
import { AppProvider } from "@/components/AppProvider";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = { title: "燕中科创实验室 | Yanzhong Lab", description: "面向燕中校友与同学的科创学习与项目共建平台" };

const themeScript = `(function(){try{var t=localStorage.getItem('lab-theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body><AppProvider><SiteShell>{children}</SiteShell></AppProvider></body></html>;
}

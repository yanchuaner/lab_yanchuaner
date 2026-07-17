"use client";

import Link from "next/link";
import { useState } from "react";
import { FlaskConical, Github, Languages, Menu, Moon, Search, Sun, X } from "lucide-react";
import { useApp } from "./AppProvider";

const nav = [
  ["home", "/"], ["paths", "/paths"], ["guides", "/guides"], ["projects", "/projects"], ["reference", "/reference"]
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const { t, theme, toggleTheme, toggleLocale } = useApp();
  const [open, setOpen] = useState(false);

  return <>
    <a className="skip-link" href="#main">{t("skip")}</a>
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" aria-label={t("brand")}><span className="brand-mark"><FlaskConical size={19} /></span><span>{t("brandShort")}</span></Link>
        <nav className="desktop-nav" aria-label="Primary">{nav.map(([key, href]) => <Link key={key} href={href}>{t(key)}</Link>)}</nav>
        <div className="header-actions">
          <button className="icon-button search-button" aria-label={t("searchShort")}><Search size={18} /><span>{t("searchShort")}</span><kbd>⌘ K</kbd></button>
          <button className="icon-button" onClick={toggleLocale} aria-label={t("language")}><Languages size={18} /></button>
          <button className="icon-button" onClick={toggleTheme} aria-label={t("theme")}>{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button className="icon-button mobile-menu" onClick={() => setOpen(!open)} aria-label={open ? t("close") : t("menu")}>{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile">{nav.map(([key, href]) => <Link key={key} href={href} onClick={() => setOpen(false)}>{t(key)}</Link>)}</nav>}
    </header>
    <main id="main">{children}</main>
    <footer><div><span>{t("footer")}</span><div><a href="https://yanchuaner.cn">{t("mainSite")}</a><a href="#" aria-label="GitHub"><Github size={18} /></a></div></div></footer>
  </>;
}

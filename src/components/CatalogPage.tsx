"use client";

import Link from "next/link";
import { ArrowRight, Mail, Search } from "lucide-react";
import { useState } from "react";
import { categories, projects, type Guide } from "@/lib/content";
import { useApp } from "./AppProvider";
import { Badge } from "./ui";

export function CatalogPage({ mode, guideItems = [] }: { mode: "paths" | "guides" | "projects" | "reference"; guideItems?: Guide[] }) {
  const { locale, t } = useApp();
  const [query, setQuery] = useState("");
  const title = t(mode);
  const items = mode === "projects" ? projects : mode === "guides" ? guideItems : categories;
  const filtered = items.filter((item) => {
    const detail = "description" in item ? item.description.zh : item.summary.zh;
    return `${item.title.zh} ${item.title.en} ${detail}`.toLowerCase().includes(query.toLowerCase());
  });
  const categoryLinks = categories.map(category => {
    const matches = mode === "projects" ? projects.filter(item => item.category === category.id) : guideItems.filter(item => item.category === category.id);
    return { category, matches };
  }).filter(item => item.matches.length > 0);

  return <div className="catalog-layout"><aside><p className="aside-label">{t("learningMap")}</p>{categoryLinks.map(({ category, matches }) => <a href={`#${matches[0].id}`} key={category.id}>{category.title[locale]}<span>{matches.length}</span></a>)}</aside><div className="catalog-main"><div className="page-intro"><span className="eyebrow"><i />{t("eyebrow")}</span><h1>{title}</h1><p>{t(mode === "projects" ? "activeProjectsCopy" : "chooseDirection")}</p></div><label className="catalog-search"><Search size={18} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder={t("search")} /></label><div className="catalog-cards">{filtered.map((item) => { const isProject = "repositoryUrl" in item; const href = isProject ? `/projects/${item.id}` : "minutes" in item ? `/guides/${item.id}` : `/guides?category=${item.id}`; const projectStatus = isProject ? t(item.status === "Production" ? "statusProduction" : item.status === "Pilot" ? "statusPilot" : "statusBuilding") : ""; return <Link href={href} className="catalog-card" id={item.id} key={item.id}><div><div className="badge-row"><Badge tone={isProject && item.status === "Production" ? "success" : isProject ? "info" : "neutral"}>{isProject ? projectStatus : "minutes" in item ? t(item.difficulty === "Beginner" ? "difficultyBeginner" : "difficultyIntermediate") : `${item.count} ${t("lessons")}`}</Badge>{!isProject && "translationStatus" in item && locale === "en" && item.translationStatus !== "reviewed" && <Badge tone="info">{t(item.translationStatus === "draft" ? "translationDraft" : "chineseOnlyBadge")}</Badge>}</div><h2>{item.title[locale]}</h2><p>{("description" in item ? item.description : item.summary)[locale]}</p>{isProject && <div className="tag-list catalog-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>}</div><ArrowRight size={19} /></Link>; })}{filtered.length === 0 && <div className="empty-state">{t("empty")}</div>}</div>{mode === "projects" && <section className="project-submit"><span><Mail size={22} /></span><div><h2>{t("projectSubmitTitle")}</h2><p>{t("projectSubmitCopy")}</p></div><a className="button button-secondary" href="https://yanchuaner.cn/contact">{t("contactAdmin")} <ArrowRight size={16} /></a></section>}</div></div>;
}

"use client";

import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { categories, guides, projects } from "@/lib/content";
import { useApp } from "./AppProvider";
import { Badge } from "./ui";

export function CatalogPage({ mode }: { mode: "paths" | "guides" | "projects" | "reference" }) {
  const { locale, t } = useApp();
  const [query, setQuery] = useState("");
  const title = t(mode);
  const items = mode === "projects" ? projects : mode === "guides" ? guides : categories;
  const filtered = items.filter((item) => {
    const detail = "description" in item ? item.description.zh : item.summary.zh;
    return `${item.title.zh} ${item.title.en} ${detail}`.toLowerCase().includes(query.toLowerCase());
  });

  return <div className="catalog-layout"><aside><p className="aside-label">{t("learningMap")}</p>{categories.map(category => <a href={`#${category.id}`} key={category.id}>{category.title[locale]}<span>{category.count}</span></a>)}</aside><div className="catalog-main"><div className="page-intro"><span className="eyebrow"><i />{t("eyebrow")}</span><h1>{title}</h1><p>{t(mode === "projects" ? "activeProjectsCopy" : "chooseDirection")}</p></div><label className="catalog-search"><Search size={18} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder={t("search")} /></label><div className="catalog-cards">{filtered.map((item) => { const isProject = "progress" in item; const href = isProject ? `/projects/${item.id}` : "minutes" in item ? `/guides/${item.id}` : `/guides?category=${item.id}`; const anchor = "category" in item ? item.category : item.id; return <Link href={href} className="catalog-card" id={anchor} key={item.id}><div><Badge tone={isProject ? "success" : "neutral"}>{isProject ? t(item.status === "Active" ? "statusActive" : "statusPlanning") : "minutes" in item ? t(item.difficulty === "Beginner" ? "difficultyBeginner" : "difficultyIntermediate") : `${item.count} ${t("lessons")}`}</Badge><h2>{item.title[locale]}</h2><p>{("description" in item ? item.description : item.summary)[locale]}</p></div><ArrowRight size={19} /></Link>; })}{filtered.length === 0 && <div className="empty-state">{t("empty")}</div>}</div></div></div>;
}

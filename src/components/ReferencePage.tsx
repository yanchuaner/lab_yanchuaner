"use client";

import { Check, Copy, Search } from "lucide-react";
import { useState } from "react";
import { referenceItems } from "@/lib/content";
import { useApp } from "./AppProvider";

const groups = ["terminal", "git", "quality"] as const;

export function ReferencePage() {
  const { locale, t } = useApp();
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const filtered = referenceItems.filter(item => `${item.title.zh} ${item.title.en} ${item.description.zh} ${item.command}`.toLowerCase().includes(query.toLowerCase()));

  const copy = (id: string, command: string) => {
    setCopied(id);
    navigator.clipboard.writeText(command).catch(() => {
      const textarea = document.createElement("textarea");
      textarea.value = command;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    });
    window.setTimeout(() => setCopied(current => current === id ? null : current), 1600);
  };

  const groupTitle = (group: typeof groups[number]) => t(group === "terminal" ? "referenceTerminal" : group === "git" ? "referenceGit" : "referenceQuality");

  return <div className="reference-shell"><header className="page-intro"><span className="eyebrow"><i />{t("eyebrow")}</span><h1>{t("reference")}</h1><p>{t("referenceIntro")}</p></header><label className="catalog-search reference-search"><Search size={18} /><input value={query} onChange={event => setQuery(event.target.value)} placeholder={t("search")} /></label>{groups.map(group => { const items = filtered.filter(item => item.group === group); if (!items.length) return null; return <section className="reference-group" key={group}><h2>{groupTitle(group)}</h2><div className="reference-grid">{items.map(item => <article className="reference-card" key={item.id}><div><h3>{item.title[locale]}</h3><p>{item.description[locale]}</p></div><pre><code>{item.command}</code></pre><button className="copy-button" onClick={() => copy(item.id, item.command)} aria-label={`${t("copyCommand")}：${item.title[locale]}`}>{copied === item.id ? <Check size={15} /> : <Copy size={15} />}{t(copied === item.id ? "copied" : "copyCommand")}</button></article>)}</div></section>; })}{filtered.length === 0 && <div className="empty-state">{t("empty")}</div>}</div>;
}

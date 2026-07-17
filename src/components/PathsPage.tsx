"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Route } from "lucide-react";
import { learningPaths, type Guide } from "@/lib/content";
import { useApp } from "./AppProvider";
import { Badge } from "./ui";

export function PathsPage({ guides }: { guides: Guide[] }) {
  const { locale, t } = useApp();
  const minutesFor = (ids: string[]) => ids.reduce((total, id) => total + (guides.find(guide => guide.id === id)?.minutes ?? 0), 0);

  return <div className="paths-shell">
    <header className="page-intro paths-intro"><span className="eyebrow"><i />{t("eyebrow")}</span><h1>{t("paths")}</h1><p>{t("pathIntro")}</p></header>
    <div className="path-card-grid">{learningPaths.map((path, index) => <Link href={`/paths/${path.id}`} className="path-card" key={path.id}>
      <div className="path-card-top"><span className="path-number">0{index + 1}</span><Badge tone={path.status === "Ready" ? "success" : "info"}>{t(path.status === "Ready" ? "pathReady" : "pathGrowing")}</Badge></div>
      <div className="path-icon"><Route size={22} /></div><h2>{path.title[locale]}</h2><p>{path.summary[locale]}</p>
      <div className="path-meta"><span><CheckCircle2 size={15} /> {path.guideIds.length}{t("pathSteps")}</span><span><Clock3 size={15} /> {minutesFor(path.guideIds)}{t("minutes")}</span></div>
      <div className="path-outcome"><small>{t("pathOutcome")}</small><strong>{path.outcome[locale]}</strong></div>
      <span className="continue">{t(path.status === "Ready" ? "pathStart" : "pathContinue")} <ArrowRight size={15} /></span>
    </Link>)}</div>
  </div>;
}

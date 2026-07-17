"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, Clock3, Route } from "lucide-react";
import type { Guide, LearningPath } from "@/lib/content";
import { useApp } from "./AppProvider";
import { Badge, ButtonLink } from "./ui";

export function PathDetailPage({ path, guides }: { path: LearningPath; guides: Guide[] }) {
  const { locale, t } = useApp();
  const steps = path.guideIds.map(id => guides.find(guide => guide.id === id)).filter((guide): guide is Guide => Boolean(guide));
  const totalMinutes = steps.reduce((total, guide) => total + guide.minutes, 0);

  return <div className="detail-shell path-detail">
    <Link className="back-link" href="/paths"><ArrowLeft size={16} /> {t("paths")}</Link>
    <section className="path-detail-hero"><div><Badge tone={path.status === "Ready" ? "success" : "info"}>{t(path.status === "Ready" ? "pathReady" : "pathGrowing")}</Badge><h1>{path.title[locale]}</h1><p>{path.summary[locale]}</p><div className="path-meta"><span><CheckCircle2 size={15} /> {steps.length}{t("pathSteps")}</span><span><Clock3 size={15} /> {totalMinutes}{t("minutes")}</span></div></div><div className="path-goal"><Route size={22} /><small>{t("pathOutcome")}</small><strong>{path.outcome[locale]}</strong></div></section>
    {path.status === "Growing" && <div className="path-growing-note">{t("pathGrowingNote")}</div>}
    <section className="path-sequence"><h2>{t("pathSequence")}</h2><ol>{steps.map((guide, index) => <li key={guide.id}><span>{index + 1}</span><div><Badge>{t(guide.difficulty === "Beginner" ? "difficultyBeginner" : "difficultyIntermediate")}</Badge><h3>{guide.title[locale]}</h3><p>{guide.summary[locale]}</p><small><Clock3 size={14} /> {guide.minutes}{t("minutes")} · {guide.lessons}{t("lessons")}</small></div><Link href={`/guides/${guide.id}`} aria-label={guide.title[locale]}><ArrowRight size={19} /></Link></li>)}</ol></section>
    {steps[0] && <div className="path-primary-action"><ButtonLink href={`/guides/${steps[0].id}`}>{t("pathStart")} <ArrowRight size={16} /></ButtonLink></div>}
  </div>;
}

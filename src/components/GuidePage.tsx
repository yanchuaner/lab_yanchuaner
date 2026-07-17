"use client";

import Link from "next/link";
import { ArrowLeft, Check, Clock, ListChecks, Play } from "lucide-react";
import { guides } from "@/lib/content";
import { useApp } from "./AppProvider";
import { Badge, ButtonLink } from "./ui";

export function GuidePage({ id }: { id: string }) {
  const { locale, t } = useApp();
  const guide = guides.find(item => item.id === id) ?? guides[0];
  const outcomes = locale === "zh" ? ["完成一份可以运行或提交的作品", "理解每一步背后的工程理由", "知道遇到问题时去哪里查证"] : ["Finish something you can run or submit", "Understand the engineering reason behind each step", "Know where to verify answers when blocked"];
  const prerequisites = locale === "zh" ? "不要求已有项目经验。准备一台电脑，并留出一段不被打断的时间。" : "No prior project experience required. Bring a computer and set aside one focused session.";
  return <div className="detail-shell"><Link className="back-link" href="/guides"><ArrowLeft size={16} /> {t("guides")}</Link><section className="project-hero"><div><Badge>{t(guide.difficulty === "Beginner" ? "difficultyBeginner" : "difficultyIntermediate")}</Badge><h1>{guide.title[locale]}</h1><p>{guide.summary[locale]}</p><div className="tag-list"><span><Clock size={12} /> {guide.minutes}{t("minutes")}</span><span><ListChecks size={12} /> {guide.lessons}{t("lessons")}</span></div></div><div className="project-sidebar"><ButtonLink href="#lesson-1"><Play size={16} /> {t("startLearning")}</ButtonLink></div></section><div className="detail-grid"><article><section><h2>{t("outcomes")}</h2><ul className="outcome-list">{outcomes.map(item => <li key={item}><Check size={17} /> {item}</li>)}</ul></section><section id="lesson-1"><h2>{t("prerequisites")}</h2><p>{prerequisites}</p></section></article><aside className="project-sidebar"><div><span>{t("progress")}</span><strong>0 / {guide.lessons}</strong></div></aside></div></div>;
}

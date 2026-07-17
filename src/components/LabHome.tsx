"use client";

import Link from "next/link";
import { ArrowRight, Route } from "lucide-react";
import { learningPaths, projects, type Guide } from "@/lib/content";
import { useApp } from "./AppProvider";
import { Badge, ButtonLink, SectionHeading } from "./ui";

export function LabHome({ guides }: { guides: Guide[] }) {
  const { locale, t } = useApp();
  const difficulty = (value: string) => t(value === "Beginner" ? "difficultyBeginner" : "difficultyIntermediate");
  const status = (value: string) => t(value === "Production" ? "statusProduction" : value === "Pilot" ? "statusPilot" : "statusBuilding");

  return <>
    <section className="hero"><div className="hero-copy"><span className="eyebrow"><i />{t("eyebrow")}</span><h1>{t("heroTitle")}</h1><p>{t("heroCopy")}</p><div className="hero-actions"><ButtonLink href="/paths">{t("startLearning")} <ArrowRight size={17} /></ButtonLink><ButtonLink href="/projects" variant="secondary">{t("browseProjects")}</ButtonLink></div></div><LabVisual /></section>

    <section className="content-section"><SectionHeading title={t("learningMap")} copy={t("chooseDirection")} /><div className="category-grid">{learningPaths.map((item, index) => <Link className="category-card" href={`/paths/${item.id}`} key={item.id}><span className="category-icon"><Route size={22} /></span><div><h3>{item.title[locale]}</h3><p>{item.summary[locale]}</p></div><span className="category-count">0{index + 1}</span></Link>)}</div></section>

    <section className="content-band"><div className="content-section"><SectionHeading title={t("featured")} copy={t("featuredCopy")} action={<Link className="text-link" href="/guides">{t("viewAll")} <ArrowRight size={15} /></Link>} /><div className="guide-grid">{guides.slice(0, 3).map((guide, index) => <Link href={`/guides/${guide.id}`} className="guide-card" key={guide.id}><div className={`guide-art art-${guide.accent}`}><span>0{index + 1}</span><i /><i /><i /></div><div className="guide-body"><div><Badge>{difficulty(guide.difficulty)}</Badge><span className="meta">{guide.minutes}{t("minutes")}</span></div><h3>{guide.title[locale]}</h3><p>{guide.summary[locale]}</p><span className="continue">{t("continue")} <ArrowRight size={15} /></span></div></Link>)}</div></div></section>

    <section className="content-section"><SectionHeading title={t("activeProjects")} copy={t("activeProjectsCopy")} action={<Link className="text-link" href="/projects">{t("viewAll")} <ArrowRight size={15} /></Link>} /><div className="project-list">{projects.map((project) => <Link href={`/projects/${project.id}`} className="project-row" key={project.id}><div className="project-main"><div><Badge tone={project.status === "Production" ? "success" : "info"}>{status(project.status)}</Badge><h3>{project.title[locale]}</h3><p>{project.summary[locale]}</p></div><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="project-repo-meta"><span>{t("verifiedRepository")}</span><strong>GitHub</strong></div><ArrowRight className="row-arrow" size={19} /></Link>)}</div></section>
  </>;
}

function LabVisual() {
  return <div className="lab-visual" aria-hidden="true"><div className="visual-toolbar"><i /><i /><i /><span>lab://first-build</span></div><div className="code-lines"><span><b>01</b> const idea = <em>&quot;curiosity&quot;</em>;</span><span><b>02</b> learn(<strong>idea</strong>);</span><span><b>03</b> build(<strong>together</strong>);</span><span><b>04</b> share(<strong>whatWorked</strong>);</span></div><div className="orbit"><span /><i /><b /></div><div className="visual-status"><i /> BUILD READY</div></div>;
}

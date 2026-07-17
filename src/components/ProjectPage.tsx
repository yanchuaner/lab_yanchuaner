"use client";

import Link from "next/link";
import { ArrowLeft, Check, CheckCircle2, Circle, ExternalLink, GitBranch, Github, Users } from "lucide-react";
import type { Project } from "@/lib/content";
import { useApp } from "./AppProvider";
import { Badge, ButtonLink } from "./ui";

export function ProjectPage({ project }: { project: Project }) {
  const { locale, t } = useApp();
  const status = t(project.status === "Production" ? "statusProduction" : project.status === "Pilot" ? "statusPilot" : "statusBuilding");

  return <div className="detail-shell">
    <Link className="back-link" href="/projects"><ArrowLeft size={16} /> {t("projects")}</Link>
    <section className="project-hero project-showcase-hero">
      <div>
        <div className="badge-row"><Badge tone={project.status === "Production" ? "success" : "info"}>{status}</Badge><Badge>{t("verifiedRepository")}</Badge></div>
        <h1>{project.title[locale]}</h1>
        <p>{project.summary[locale]}</p>
        <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      </div>
      <div className="project-facts"><span>{t("phase")}</span><strong>{status}</strong>{project.license && <><span>{t("projectLicense")}</span><strong>{project.license}</strong></>}</div>
    </section>
    <div className="detail-grid project-detail-grid">
      <article>
        <section><h2>{t("projectIntro")}</h2><p>{project.intro[locale]}</p></section>
        <section><h2>{t("projectHighlights")}</h2><ul className="project-feature-list">{project.highlights.map(item => <li key={item.zh}><Check size={18} /><span>{item[locale]}</span></li>)}</ul></section>
        <section><h2>{t("projectAudience")}</h2><ul className="project-feature-list audience-list">{project.audience.map(item => <li key={item.zh}><Users size={18} /><span>{item[locale]}</span></li>)}</ul></section>
        <section><h2>{t("roadmap")}</h2><ol className="roadmap">{project.roadmap.map((step, index) => <li key={step.title.zh}><span>{step.done ? <CheckCircle2 size={18} /> : <Circle size={16} />}</span><div><strong>{step.title[locale]}</strong><small>{t(step.done ? "complete" : "nextPhase")}</small></div></li>)}</ol></section>
      </article>
      <aside className="project-sidebar project-action-panel">
        <ButtonLink href={project.repositoryUrl} external><Github size={17} /> {t("repository")} <ExternalLink size={14} /></ButtonLink>
        {project.homepageUrl && <ButtonLink href={project.homepageUrl} variant="secondary" external><ExternalLink size={17} /> {t("visitProject")}</ButtonLink>}
        <ButtonLink href={`${project.repositoryUrl}/issues`} variant="secondary" external><GitBranch size={17} /> {t("openIssues")}</ButtonLink>
      </aside>
    </div>
  </div>;
}

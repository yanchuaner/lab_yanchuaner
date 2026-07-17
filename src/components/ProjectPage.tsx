"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink, GitBranch, Github, Users } from "lucide-react";
import { projects } from "@/lib/content";
import { useApp } from "./AppProvider";
import { Badge, ButtonLink } from "./ui";

export function ProjectPage({ id }: { id: string }) {
  const { locale, t } = useApp();
  const project = projects.find(item => item.id === id) ?? projects[0];
  const steps = [t("roadmapScope"), t("roadmapCore"), t("roadmapTrial"), t("roadmapReview")];
  return <div className="detail-shell"><Link className="back-link" href="/projects"><ArrowLeft size={16} /> {t("projects")}</Link><section className="project-hero"><div><Badge tone={project.status === "Active" ? "success" : "info"}>{t(project.status === "Active" ? "statusActive" : "statusPlanning")}</Badge><h1>{project.title[locale]}</h1><p>{project.summary[locale]}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="project-meter"><strong>{project.progress}%</strong><span>{t("progress")}</span><div><i style={{ width: `${project.progress}%` }} /></div><small><Users size={15} /> {project.contributors}{t("contributors")}</small></div></section><div className="detail-grid"><article><section><h2>{t("projectIntro")}</h2><p>{t("projectOverviewCopy")}</p></section><section><h2>{t("roadmap")}</h2><ol className="roadmap">{steps.map((step, index) => <li key={step}><span>{index < 2 ? <CheckCircle2 size={18} /> : index + 1}</span><div><strong>{step}</strong><small>{t(index < 2 ? "complete" : "nextPhase")}</small></div></li>)}</ol></section></article><aside className="project-sidebar"><ButtonLink href="#"> <Github size={17} /> {t("repository")} <ExternalLink size={14} /></ButtonLink><ButtonLink href="#" variant="secondary"><GitBranch size={17} /> {t("joinProject")}</ButtonLink><div><span>{t("contributors")}</span><strong>{project.contributors}</strong></div></aside></div></div>;
}

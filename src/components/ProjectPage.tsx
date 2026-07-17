"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink, GitBranch, Github, Users } from "lucide-react";
import { projects } from "@/lib/content";
import { useApp } from "./AppProvider";
import { Badge, ButtonLink } from "./ui";

export function ProjectPage({ id }: { id: string }) {
  const { locale, t } = useApp();
  const project = projects.find(item => item.id === id) ?? projects[0];
  const steps = locale === "zh" ? ["梳理需求与贡献边界", "完成核心体验与文档", "邀请真实用户试用", "公开复盘并持续迭代"] : ["Define needs and contribution scope", "Ship the core experience and docs", "Invite real users to test", "Share findings and keep iterating"];
  return <div className="detail-shell"><Link className="back-link" href="/projects"><ArrowLeft size={16} /> {t("projects")}</Link><section className="project-hero"><div><Badge tone={project.status === "Active" ? "success" : "info"}>{t(project.status === "Active" ? "statusActive" : "statusPlanning")}</Badge><h1>{project.title[locale]}</h1><p>{project.summary[locale]}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="project-meter"><strong>{project.progress}%</strong><span>{t("progress")}</span><div><i style={{ width: `${project.progress}%` }} /></div><small><Users size={15} /> {project.contributors}{t("contributors")}</small></div></section><div className="detail-grid"><article><section><h2>{t("projectIntro")}</h2><p>{locale === "zh" ? "这个项目以真实需求为起点，以公开协作为方法。每个任务都应有清晰背景、可验证结果和适合新贡献者的说明，让第一次参与也不会无从下手。" : "This project starts from real needs and uses open collaboration as its method. Every task should have context, a verifiable outcome, and guidance that welcomes first-time contributors."}</p></section><section><h2>{t("roadmap")}</h2><ol className="roadmap">{steps.map((step, index) => <li key={step}><span>{index < 2 ? <CheckCircle2 size={18} /> : index + 1}</span><div><strong>{step}</strong><small>{index < 2 ? (locale === "zh" ? "已完成" : "Complete") : (locale === "zh" ? "下一阶段" : "Next phase")}</small></div></li>)}</ol></section></article><aside className="project-sidebar"><ButtonLink href="#"> <Github size={17} /> {t("repository")} <ExternalLink size={14} /></ButtonLink><ButtonLink href="#" variant="secondary"><GitBranch size={17} /> {t("joinProject")}</ButtonLink><div><span>{t("contributors")}</span><strong>{project.contributors}</strong></div></aside></div></div>;
}

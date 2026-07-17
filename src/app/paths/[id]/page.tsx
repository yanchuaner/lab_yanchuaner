import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PathDetailPage } from "@/components/PathDetailPage";
import { learningPaths } from "@/lib/content";
import { getGuideSummaries } from "@/lib/content-server";

export function generateStaticParams() { return learningPaths.map(path => ({ id: path.id })); }

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const path = learningPaths.find(item => item.id === id);
  return path ? { title: `${path.title.zh} | 燕中科创实验室`, description: path.summary.zh } : {};
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const path = learningPaths.find(item => item.id === id);
  if (!path) notFound();
  return <PathDetailPage path={path} guides={await getGuideSummaries()} />;
}

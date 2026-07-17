import { GuidePage } from "@/components/GuidePage";
import { GuideArticle } from "@/components/GuideArticle";
import { getGuideIds, getGuideSummaries } from "@/lib/content-server";
import { notFound } from "next/navigation";

export async function generateStaticParams() { return (await getGuideIds()).map(id => ({ id })); }

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const guide = (await getGuideSummaries()).find(item => item.id === id);
  if (!guide) notFound();
  return <GuidePage guide={guide}><GuideArticle id={id} /></GuidePage>;
}

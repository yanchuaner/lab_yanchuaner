import { LabHome } from "@/components/LabHome";
import { getGuideSummaries } from "@/lib/content-server";
export default async function Home() { return <LabHome guides={await getGuideSummaries()} />; }

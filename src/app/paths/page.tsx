import { PathsPage } from "@/components/PathsPage";
import { getGuideSummaries } from "@/lib/content-server";

export default async function Page() {
  return <PathsPage guides={await getGuideSummaries()} />;
}

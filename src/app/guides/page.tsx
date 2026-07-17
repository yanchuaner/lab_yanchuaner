import { CatalogPage } from "@/components/CatalogPage";
import { getGuideSummaries } from "@/lib/content-server";
export default async function Page() { return <CatalogPage mode="guides" guideItems={await getGuideSummaries()} />; }

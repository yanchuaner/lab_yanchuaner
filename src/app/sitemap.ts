import type { MetadataRoute } from "next";
import { getGuideIds } from "@/lib/content-server";
import { learningPaths, projects } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const staticRoutes = ["", "/paths", "/guides", "/projects", "/reference"];
  const guideRoutes = (await getGuideIds()).map(id => `/guides/${id}`);
  const pathRoutes = learningPaths.map(path => `/paths/${path.id}`);
  const projectRoutes = projects.map(project => `/projects/${project.id}`);
  return [...staticRoutes, ...guideRoutes, ...pathRoutes, ...projectRoutes].map(route => ({ url: `${siteConfig.url}${route}`, lastModified: now, changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : route.split("/").length === 2 ? 0.8 : 0.7 }));
}

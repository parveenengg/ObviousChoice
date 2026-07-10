import { MetadataRoute } from "next";
import { getContentSlugs } from "@/lib/mdx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = "https://parveenkumar.co";

  // Static routes
  const routes = ["", "/thinking", "/frameworks", "/newsletter"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic routes
  const thinkingSlugs = getContentSlugs("thinking").map((slug) => ({
    url: `${siteUrl}/thinking/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const frameworkSlugs = getContentSlugs("frameworks").map((slug) => ({
    url: `${siteUrl}/frameworks/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...thinkingSlugs, ...frameworkSlugs];
}

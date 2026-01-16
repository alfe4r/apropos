import type { MetadataRoute } from "next";
import { getPageSlugs } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://apropos.ai";
  const staticPages = ["", ...getPageSlugs()].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date()
  }));

  return staticPages;
}

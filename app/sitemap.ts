import type { MetadataRoute } from "next";
import { site } from "@/lib/content";

export const dynamic = "force-static";

const baseUrl = `https://${site.domain}`;

const routes = [
  "",
  "/about",
  "/services",
  "/services/consulting-compliance",
  "/services/professional-services",
  "/services/ai-automation",
  "/engagement",
  "/why-us",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}

import type { MetadataRoute } from "next";
import { getSiteUrl } from "./site-url";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();
  const sitemap = base ? new URL("/sitemap.xml", base).toString() : undefined;
  return { rules: { userAgent: "*", allow: "/" }, ...(sitemap ? { sitemap } : {}) };
}

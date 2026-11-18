import type { MetadataRoute } from "next";
import { getSiteUrl } from "./site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  if (!base) return [];

  return ["/", "/o-meni", "/casovi", "/kako-izgleda-cas", "/cenovnik", "/faq", "/kontakt", "/privacy"].map((path) => ({ url: new URL(path, base).toString() }));
}

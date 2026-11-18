export function getSiteUrl(): URL | undefined {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configuredUrl) return undefined;

  try {
    const url = new URL(configuredUrl);
    if (url.protocol === "https:" || url.hostname === "localhost") return url;
  } catch {
    return undefined;
  }

  return undefined;
}

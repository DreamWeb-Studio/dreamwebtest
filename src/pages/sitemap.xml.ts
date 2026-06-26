import type { APIRoute } from "astro";
import { sitemapEntries, site } from "../data/site";

export const GET: APIRoute = () => {
  const lastmod = "2026-06-26";
  const urls = sitemapEntries
    .map(
      (entry) => `  <url>
    <loc>${site.domain}${entry.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};

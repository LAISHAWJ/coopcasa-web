import type { APIRoute } from 'astro';
import { siteConfig } from '@data/siteConfig';

export const GET: APIRoute = () => {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', siteConfig.url)}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};

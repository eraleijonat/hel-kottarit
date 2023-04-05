import { getStores } from '$app/stores';
import { SITE_URL } from '$env/static/private';
import { pageLinks } from '../../lib/logic';

export async function GET() {
	if (!SITE_URL) {
		throw new Error('SITE_URL not defined');
	}

	return new Response(
		`
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      <url>
        <loc>${SITE_URL}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
    ${pageLinks
			.filter((pl) => pl.visibleOnNav)
			.map(
				(link) => `
    <url>
        <loc>${SITE_URL}${link.path}</loc>
        <changefreq>daily</changefreq>
        <priority>0.7</priority>
      </url>
    `
			)}
    </urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}

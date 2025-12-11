// app/sitemap.xml/route.ts
import { getProducts } from "@/lib/api";

export async function GET() {
  let products = [];

  try {
    products = await getProducts();
  } catch (e) {
    console.warn("⚠ Sitemap API fetch failed, using empty list.");
  }

  const baseUrl = "https://next-seo-demo.com";

  let xml = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
  `;

  xml += products
    .map((p: any) => {
      return `
        <url>
          <loc>${baseUrl}/products/${p.id}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
        </url>
      `;
    })
    .join("");

  xml += `</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}

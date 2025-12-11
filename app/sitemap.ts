import { getProducts } from "@/lib/api";

export default async function sitemap() {
  const products = await getProducts();

  const productUrls = products.map((p: any) => ({
    url: `https://gujarat-mitra-seo.com/products/${p.id}`,
    lastModified: new Date().toISOString(),
  }));

  return [
    {
      url: "https://gujarat-mitra-seo.com",
      lastModified: new Date().toISOString(),
    },
    ...productUrls,
  ];
}

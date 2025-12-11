import { getProducts } from "@/lib/api";

export default async function sitemap() {
  const products = await getProducts();

  const productUrls = products.map((p: any) => ({
    url: `https://next-seo-demo.com/products/${p.id}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://next-seo-demo.com",
      lastModified: new Date(),
    },
    ...productUrls,
  ];
}

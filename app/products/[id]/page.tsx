import SeoJsonLd from "@/components/seoJsonLd";
import { getProduct } from "@/lib/api";
import dynamicComponent from "next/dynamic";

const ProductDetails = dynamicComponent(() => import("@/components/products/details"));

export const dynamic = "force-dynamic"; // force SSR at runtime
export const revalidate = 0;            // avoid build API calls

export async function generateMetadata({ params }: any) {
  try {
    const product = await getProduct(params.id);

    return {
      title: product.title,
      description: product.description,
      alternates: {
        canonical: `https://next-seo-demo.com/products/${product.id}`,
      },
      openGraph: {
        title: product.title,
        description: product.description,
        images: [product.image],
        url: `https://next-seo-demo.com/products/${product.id}`,
        type: "website",
      },
    };
  } catch (err) {
    return {
      title: "Product Not Found",
      description: "This product does not exist.",
    };
  }
}

export default async function ProductDetailPage({ params }: any) {
  const product = await getProduct(params.id); // SSR runtime fetch

  return (
    <>
      <SeoJsonLd product={product} />
      <ProductDetails product={product} />
    </>
  );
}

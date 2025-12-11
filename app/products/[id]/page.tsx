import SeoJsonLd from "@/components/seoJsonLd";
import { getProduct } from "@/lib/api";
import dynamic from "next/dynamic";
const ProductDetails = dynamic(() => import('@/components/products/details'));

export async function generateMetadata({params}: any) {
  const { id } = await params;
  const product = await getProduct(id);

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
}

export default async function ProductDetailPage({params}: any) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <>
      <SeoJsonLd product={product} />
      <ProductDetails product={product} />
    </>
  );
}
import ProductList from "@/components/products/list";
import { getProducts } from "@/lib/api";

export const metadata = {
  title: "All Products",
  description: "Browse our complete product collection.",
};

// ❗ Prevent build-time API calls
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ProductsPage() {
  const products = await getProducts(); // runs at runtime, not build

  return (
    <div>
      <h1 className="hidden">Products</h1>
      <ProductList products={products} />
    </div>
  );
}

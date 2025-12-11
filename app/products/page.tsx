import ProductList from "@/components/products/list";
import { getProducts } from "@/lib/api";

export const metadata = {
  title: "All Products",
  description: "Browse our complete product collection.",
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="hidden">Products</h1>
      <ProductList products={products} />
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import Rating from "./rating";

export default function ProductList({ products }: any) {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-8">
        <Link href="/" className="hover:text-purple-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 font-medium">Products</span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products?.map((p: any) => (
          <Link key={p.id} href={`/products/${p.id}`} className="group">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full">

              {/* Image */}
              <div className="relative aspect-square bg-gray-50">
                 <Image
										src={p.image}
										alt={p.title}
										fill
										className="object-contain p-4"
										priority
										sizes="(max-width: 1024px) 100vw, 50vw"
								/>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 mb-3 line-clamp-2 flex-grow">
                  {p.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <Rating product={p} />
                  <span className="text-sm text-gray-600">{p.rating?.rate}</span>
                </div>

                {/* Price + Button */}
                <div className="flex items-center justify-between pt-3">
                  <span className="text-2xl font-bold text-purple-600">
                    ${p.price}
                  </span>

                  <button
                    aria-label="View Product"
                    className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition-colors"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

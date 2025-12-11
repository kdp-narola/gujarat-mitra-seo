'use client';

import { useState } from "react";
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductDetails = ({ product }: any) => {
  const { title, description, image, price, category, rating } = product;

  const [quantity, setQuantity] = useState(1);
  const [fav, setFav] = useState(false);

  const inc = () => setQuantity((q) => q + 1);
  const dec = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <section className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-6 flex gap-2">
          <Link href="/" className="hover:underline">Home</Link>
          /
          <Link href="/products" className="hover:underline">Products</Link>
          /
          <span className="text-gray-900">{category}</span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-2xl shadow-md p-6">
          {/* Image */}
          <div className="h-full bg-gray-50 rounded-xl flex items-center justify-center">
            <div className="relative w-full aspect-square max-h-[400px] lg:max-h-full h-full bg-gray-50 rounded-xl flex items-center justify-center">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain p-4"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            {/* Favorite */}
            <button
              onClick={() => setFav(!fav)}
              className="absolute top-2 right-2 bg-white p-2 rounded-full shadow"
            >
              <Heart
                className={fav ? "w-6 h-6 fill-red-500 text-red-500" : "w-6 h-6 text-gray-400"}
              />
            </button>
          </div>
            </div>


          {/* Details */}
          <div className="flex flex-col">
            {/* Category */}
            <span className="w-fit bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full mb-2">
              {category}
            </span>

            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < Math.floor(rating?.rate || 0)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>
              <span className="font-semibold">{rating?.rate || "N/A"}</span>
              <span className="text-xs text-gray-500">({rating?.count || 0})</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-purple-600">${price}</h2>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h3 className="font-semibold mb-1">Description</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-semibold mb-1">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-full overflow-hidden">
                  <button onClick={dec} className="px-4 py-2 hover:bg-gray-100">
                    <Minus size={16} />
                  </button>
                  <span className="px-6 py-2 font-semibold">{quantity}</span>
                  <button onClick={inc} className="px-4 py-2 hover:bg-gray-100">
                    <Plus size={16} />
                  </button>
                </div>
                <span className="font-bold text-purple-600">
                  ${(price * quantity).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row w-full gap-4 mb-6">
              <button className="w-full bg-purple-600 text-white py-3 rounded-full flex items-center justify-center gap-2 font-semibold">
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button className="px-6 py-3 w-full rounded-full border font-semibold">Buy Now</button>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6 mt-4">
              {[
                { icon: Truck, text: "Free Shipping", sub: "Over $50" },
                { icon: Shield, text: "Secure Payment", sub: "Protected" },
                { icon: RotateCcw, text: "Easy Returns", sub: "30 Days" },
              ].map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex items-start gap-2">
                    <Icon size={18} className="text-purple-600" />
                    <div>
                      <p className="text-sm font-semibold">{f.text}</p>
                      <p className="text-xs text-gray-500">{f.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

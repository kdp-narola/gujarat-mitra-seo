import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  images: {
    domains: ["example.com", "fakestoreapi.com", "cdn.dummyjson.com"],
  },
};

export default nextConfig;

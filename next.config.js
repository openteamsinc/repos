const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  images: {
    domains: ['avatars.githubusercontent.com', 'storage.googleapis.com', 'github.com', 'lh3.googleusercontent.com', 'images.unsplash.com'],
  },
};

module.exports = withMDX(nextConfig);

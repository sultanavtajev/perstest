import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx"],
  // Andre Next.js-konfigurasjoner her om nødvendig
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);

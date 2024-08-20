/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "www",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

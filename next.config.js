/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "www.thecocktaildb.com"],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cryptochanger.to", "content-api.changenow.io", "crogecoin.com"],
  },
};

module.exports = nextConfig;

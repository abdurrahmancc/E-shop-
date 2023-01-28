/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/shop",
        destination: "/shop/1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

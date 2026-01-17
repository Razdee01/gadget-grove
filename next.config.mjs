/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // The double star means ALLOW ALL WEBSITES
      },
    ],
  },
};

export default nextConfig;

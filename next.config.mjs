/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.BASE_PATH ? process.env.BASE_PATH : "",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.discordapp.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;

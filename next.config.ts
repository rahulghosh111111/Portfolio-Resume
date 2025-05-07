import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.simpleicons.org', 'res.cloudinary.com'], // Add this line to allow loading images from Simple Icons
  },
};

export default nextConfig;

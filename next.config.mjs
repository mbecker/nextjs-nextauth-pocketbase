/** @type {import('next').NextConfig} */

/* ---
Allow basically all domains / hotsnames for the oauth avatar urls
*/

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;

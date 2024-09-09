/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '**',
            pathname: '/**',
          },
        ],
      },
};


export default nextConfig;


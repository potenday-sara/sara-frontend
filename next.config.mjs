const API_URL = process.env.API_URL || 'http://localhost:3000';
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  distDir: './.next', // Changes the build output directory to `./dist/`.
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL}/:path*/`,
      },

    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    missingSuspenseWithCSRBailout: false,
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/main',
        permanent: true,
      },
    ]
  },

  trailingSlash: true,

  webpack(config, {dev, isServer}) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  }
}

export default nextConfig
const API_URL = process.env.API_URL || 'http://localhost:3000';
/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: './dist', // Changes the build output directory to `./dist/`.
  async rewrites() {
    console.log("run rewrites", )
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.API_URL}/:path*/`,
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
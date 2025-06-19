import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  images: {
    domains: [
      'cdn.jsdelivr.net',
      'skillicons.dev',
    ],
  },
  webpack(config: Configuration) {
    config.module?.rules?.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/assets/[name][hash][ext]',
      },
    });

    return config;
  },
};

export default nextConfig;
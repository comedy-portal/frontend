import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
    images: {
        unoptimized: true,
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'fastly.picsum.photos',
                port: '',
            },
        ],
    },
}

export default nextConfig

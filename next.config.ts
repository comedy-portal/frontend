import type { NextConfig } from 'next'
import withPWA from 'next-pwa'

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

export default withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
})(nextConfig as any)

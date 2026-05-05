import type { NextConfig } from 'next'
// TEMP TEST: PWA is disabled to compare production behavior with TripAdvancer.
// Restore this import together with the wrapped export below.
// import withPWA from 'next-pwa'

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
            {
                protocol: 'https',
                hostname: 'static-maps.yandex.ru',
                port: '',
            },
        ],
    },
}

// TEMP TEST: PWA is disabled to make this easy to revert after the Vercel/RU availability check.
// export default withPWA({
//     dest: 'public',
//     register: true,
//     skipWaiting: true,
//     disable: process.env.NODE_ENV === 'development',
// })(nextConfig as any)

export default nextConfig

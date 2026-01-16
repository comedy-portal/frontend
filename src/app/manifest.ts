import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        id: '/',
        name: 'Comedy Portal',
        short_name: 'Comedy Portal',
        description: 'Comedy Portal – ваш портал в мир комедии!',

        start_url: '/',
        scope: '/',

        display: 'standalone',
        display_override: ['window-controls-overlay', 'standalone', 'fullscreen'],
        orientation: 'portrait',

        background_color: '#ffffff',
        theme_color: '#ffffff',

        categories: ['entertainment', 'video'],

        icons: [
            {
                src: '/icons/icon-192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icons/icon-512.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/icons/icon-512-maskable.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'maskable',
            },
        ],

        screenshots: [
            {
                src: '/images/welcome/content-many.jpg',
                sizes: '1280x1231',
                type: 'image/jpg',
                form_factor: 'wide',
            },
            {
                src: '/images/welcome/top.jpg',
                sizes: '1280x1231',
                type: 'image/jpg',
                form_factor: 'wide',
            },
            {
                src: '/images/welcome/review.jpg',
                sizes: '1280x1231',
                type: 'image/jpg',
                form_factor: 'wide',
            },
            {
                src: '/images/welcome/reviews.jpg',
                sizes: '1280x1231',
                type: 'image/jpg',
                form_factor: 'wide',
            },
            {
                src: '/images/welcome/watchlists.jpg',
                sizes: '1280x1231',
                type: 'image/jpg',
                form_factor: 'wide',
            },
            {
                src: '/images/welcome/subscriptions.jpg',
                sizes: '1280x1231',
                type: 'image/jpg',
                form_factor: 'wide',
            },
            {
                src: '/images/welcome/content-submit.jpg',
                sizes: '1280x1231',
                type: 'image/jpg',
                form_factor: 'wide',
            },
            {
                src: '/images/welcome/mobile/content-many.jpg',
                sizes: '800x1573',
                type: 'image/png',
                form_factor: 'narrow',
            },
            {
                src: '/images/welcome/mobile/top.jpg',
                sizes: '800x1573',
                type: 'image/png',
                form_factor: 'narrow',
            },
            {
                src: '/images/welcome/mobile/review.jpg',
                sizes: '800x1573',
                type: 'image/png',
                form_factor: 'narrow',
            },
            {
                src: '/images/welcome/mobile/reviews.jpg',
                sizes: '800x1573',
                type: 'image/png',
                form_factor: 'narrow',
            },
            {
                src: '/images/welcome/mobile/watchlists.jpg',
                sizes: '800x1573',
                type: 'image/png',
                form_factor: 'narrow',
            },
            {
                src: '/images/welcome/mobile/subscriptions.jpg',
                sizes: '800x1573',
                type: 'image/png',
                form_factor: 'narrow',
            },
            {
                src: '/images/welcome/mobile/content-submit.jpg',
                sizes: '800x1573',
                type: 'image/png',
                form_factor: 'narrow',
            },
        ],

        protocol_handlers: [
            {
                protocol: 'web+comedyportal',
                url: '/?link=%s',
            },
        ],
    }
}

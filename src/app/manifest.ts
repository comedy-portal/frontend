import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        id: '/',
        name: 'Comedy Portal',
        short_name: 'Comedy Portal',
        description: 'Камеди Портал – Агрегатор лучших стендапов и популярных шоу!',

        start_url: '/',
        scope: '/',

        display: 'standalone',
        display_override: ['window-controls-overlay', 'standalone', 'fullscreen'],
        orientation: 'portrait',

        background_color: '#030712',
        theme_color: '#030712',

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
                src: '/images/screenshots/desktop/content-many.jpg',
                sizes: '1280x1231',
                type: 'image/jpg',
                form_factor: 'wide',
            },
            {
                src: '/images/screenshots/desktop/top.jpg',
                sizes: '1280x1231',
                type: 'image/jpg',
                form_factor: 'wide',
            },
            {
                src: '/images/screenshots/desktop/review.jpg',
                sizes: '1280x1231',
                type: 'image/jpg',
                form_factor: 'wide',
            },
            {
                src: '/images/screenshots/desktop/reviews.jpg',
                sizes: '1280x1231',
                type: 'image/jpg',
                form_factor: 'wide',
            },
            {
                src: '/images/screenshots/desktop/watchlists.jpg',
                sizes: '1280x1231',
                type: 'image/jpg',
                form_factor: 'wide',
            },
            {
                src: '/images/screenshots/desktop/subscriptions.jpg',
                sizes: '1280x1231',
                type: 'image/jpg',
                form_factor: 'wide',
            },
            {
                src: '/images/screenshots/desktop/content-submit.jpg',
                sizes: '1280x1231',
                type: 'image/jpg',
                form_factor: 'wide',
            },
            {
                src: '/images/screenshots/mobile/content-many.jpg',
                sizes: '800x1573',
                type: 'image/png',
                form_factor: 'narrow',
            },
            {
                src: '/images/screenshots/mobile/top.jpg',
                sizes: '800x1573',
                type: 'image/png',
                form_factor: 'narrow',
            },
            {
                src: '/images/screenshots/mobile/review.jpg',
                sizes: '800x1573',
                type: 'image/png',
                form_factor: 'narrow',
            },
            {
                src: '/images/screenshots/mobile/reviews.jpg',
                sizes: '800x1573',
                type: 'image/png',
                form_factor: 'narrow',
            },
            {
                src: '/images/screenshots/mobile/watchlists.jpg',
                sizes: '800x1573',
                type: 'image/png',
                form_factor: 'narrow',
            },
            {
                src: '/images/screenshots/mobile/subscriptions.jpg',
                sizes: '800x1573',
                type: 'image/png',
                form_factor: 'narrow',
            },
            {
                src: '/images/screenshots/mobile/content-submit.jpg',
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

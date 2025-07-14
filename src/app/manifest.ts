import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Comedy Portal',
        short_name: 'Comedy Portal',
        description: 'Comedy Portal – ваш портал в мир комедии!',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}

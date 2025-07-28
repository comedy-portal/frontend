import classNames from 'classnames'
import type { Metadata, Viewport } from 'next'

import { GoogleAnalytics } from '@next/third-parties/google'
import { Roboto } from 'next/font/google'

import { TailwindIndicator } from '@/components/ui/tailwind-indicator'

import './globals.css'

import { Providers } from './providers'

const roboto = Roboto({
    subsets: ['latin', 'cyrillic'],
})

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

// prettier-ignore
export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_DOMAIN as string),
    alternates: {
        canonical: '/',
    },
    title: 'Comedy Portal – Ваш портал в мир комедии: смотреть юмор онлайн, стендап, комедии, шоу.',
    description: 'Откройте Comedy Portal – Ваш портал в мир комедии! Смотрите лучшие стендап-выступления, комедийные шоу и фильмы онлайн. Оценивайте контент, читайте отзывы и находите новый юмор каждый день.',
    appleWebApp: {
        title: 'Comedy Portal',
    },
    openGraph: {
        title: 'Comedy Portal – Ваш портал в мир комедии',
        type: 'website',
        locale: 'ru_RU',
        url: '/',
        siteName: 'Comedy Portal',
    },
    twitter: {
        title: 'Comedy Portal – Ваш портал в мир комедии',
        card: 'summary_large_image',
    },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru" className={classNames('h-full', roboto.className)}>
            <head>
                <meta name="verify-admitad" content="42d1abdfa5" />
                <link rel="icon" href="/favicon.png" type="image/png" />
            </head>
            <body className="h-full antialiased">
                <Providers>{children}</Providers>
                <TailwindIndicator />
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string} />
            </body>
        </html>
    )
}

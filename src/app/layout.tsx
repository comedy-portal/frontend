import classNames from 'classnames'
import type { Metadata, Viewport } from 'next'

import { GoogleAnalytics } from '@next/third-parties/google'
import { Roboto } from 'next/font/google'

import YandexMetrika from '@/components/features/common/yandex-metrika'
import { TailwindIndicator } from '@/components/ui/tailwind-indicator'
import { createMetadata } from '@/utils/helpers/metadata'

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
    viewportFit: 'cover',
}

// prettier-ignore
export const metadata: Metadata = {
    ...createMetadata({
        title: 'Камеди Портал',
        description: 'Лучшие стендапы и популярные шоу с оценками, рецензиями и Вашей персональной историей просмотров.',
        path: '/',
        type: 'website',
        keywords: [
            'Камеди Портал',
            'русский стендап',
            'комедийный портал',
            'стендап концерты',
            'рецензии на стендап',
            'топ стендап концертов',
        ],
    }),
    appleWebApp: {
        title: 'Камеди Портал',
    },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru" className={classNames('h-full', roboto.className)}>
            <head>
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="verify-admitad" content="42d1abdfa5" />
                <meta name="yandex-verification" content="14610f2354e7c899" />
                <link rel="icon" href="/favicon.png" type="image/png" />
                <link rel="apple-touch-icon" href="/icons/icon-192.png" />
            </head>
            <body className="h-full antialiased">
                <Providers>{children}</Providers>
                <TailwindIndicator />
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string} />
                <YandexMetrika />
            </body>
        </html>
    )
}

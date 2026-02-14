import classNames from 'classnames'
import type { Metadata, Viewport } from 'next'

import { GoogleAnalytics } from '@next/third-parties/google'
import { Roboto } from 'next/font/google'

import YandexMetrika from '@/components/features/common/yandex-metrika'
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
    viewportFit: 'cover',
}

// prettier-ignore
export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_DOMAIN as string),
    alternates: {
        canonical: '/',
    },
    title: 'Камеди Портал',
    description: 'Агрегатор лучших стендапов и шоу - с оценками, рецензиями и Вашей персональной историей просмотров.',
    appleWebApp: {
        title: 'Камеди Портал',
    },
    openGraph: {
        type: 'website',
        title: 'Камеди Портал',
        description: 'Агрегатор лучших стендапов и шоу - с оценками, рецензиями и Вашей персональной историей просмотров.',
        locale: 'ru_RU',
        url: '/',
        siteName: 'Камеди Портал',
    },
    twitter: {
        title: 'Камеди Портал',
        description: 'Агрегатор лучших стендапов и шоу - с оценками, рецензиями и Вашей персональной историей просмотров.',
        card: 'summary_large_image',
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

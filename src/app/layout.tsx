import classNames from 'classnames'
import type { Viewport } from 'next'

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

import classNames from 'classnames'
import type { Metadata } from 'next'

import { GoogleAnalytics } from '@next/third-parties/google'
import { Roboto } from 'next/font/google'

import { Footer } from '@/components/features/layout/footer/footer'
import { HeaderAuthWrapper } from '@/components/features/layout/header/header-auth-wrapper'
import { TailwindIndicator } from '@/components/ui/tailwind-indicator'

import './globals.css'

import { Providers } from './providers'

const roboto = Roboto({
    subsets: ['latin', 'cyrillic'],
})

// prettier-ignore
export const metadata: Metadata = {
    title: 'Comedy Portal – ваш портал в мир комедии: смотреть юмор онлайн, стендап, комедии, шоу.',
    description: 'Откройте Comedy Portal – ваш портал в мир комедии! Смотрите лучшие стендап-выступления, комедийные шоу и фильмы онлайн. Оценивайте контент, читайте отзывы и находите новый юмор каждый день.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={classNames('h-full', roboto.className)}>
            <body className="h-full antialiased">
                <Providers>
                    <div className="flex min-h-full flex-col">
                        <HeaderAuthWrapper />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </div>
                </Providers>
                <TailwindIndicator />
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string} />
            </body>
        </html>
    )
}

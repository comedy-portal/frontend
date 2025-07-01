import type { Metadata } from 'next'

import { Roboto } from 'next/font/google'

import { Footer } from '@/components/features/layout/footer/footer'
import { Header } from '@/components/features/layout/header/header'
import { TailwindIndicator } from '@/components/ui/tailwind-indicator'

import './globals.css'

import { Providers } from './providers'

const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin', 'cyrillic'],
})

// prettier-ignore
export const metadata: Metadata = {
    title: 'Comedy Portal – ваш портал в мир комедии: смотреть юмор онлайн, стендап, комедии, шоу.',
    description: 'Откройте Comedy Portal – ваш портал в мир комедии! Смотрите лучшие стендап-выступления, комедийные шоу и фильмы онлайн. Оценивайте контент, читайте отзывы и находите новый юмор каждый день.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="h-full">
            <body className={`${roboto.variable} h-full antialiased`}>
                <Providers>
                    <div className="flex min-h-full flex-col">
                        <Header />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </div>
                </Providers>
                <TailwindIndicator />
            </body>
        </html>
    )
}

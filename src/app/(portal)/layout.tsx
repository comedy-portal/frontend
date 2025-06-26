import { ReactNode } from 'react'

import type { Metadata } from 'next/types'

import { Footer } from '@/components/features/layout/footer/footer'
import { Header } from '@/components/features/layout/header/header'

export const metadata: Metadata = {
    robots: 'noindex, nofollow',
}

export default function PortalLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    )
}

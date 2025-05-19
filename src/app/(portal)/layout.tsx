import { ReactNode } from 'react'

import type { Metadata } from 'next/types'

import { Header } from '@/components/features/layout/header/header'
import { Footer } from '@/components/ui/footer'

export const metadata: Metadata = {
    robots: 'noindex, nofollow',
}

export default function PortalLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="container flex-1 py-12">{children}</main>
            <Footer />
        </div>
    )
}

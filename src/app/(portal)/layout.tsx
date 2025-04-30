import { ReactNode } from 'react'

import type { Metadata } from 'next/types'

import { Footer } from '@/components/ui/footer'
import { Header } from '@/components/ui/header'

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

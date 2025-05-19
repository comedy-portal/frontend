import { ReactNode } from 'react'
import { CloseButton } from 'react-bootstrap'

import Link from 'next/link'
import type { Metadata } from 'next/types'

import { Logo } from '@/components/ui/logo'

export const metadata: Metadata = {
    robots: 'noindex, nofollow',
}

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="relative size-full">
            <Logo className="absolute top-4 left-3 text-black" />
            <Link href="/">
                <CloseButton className="fixed top-4 right-4" aria-label="Hide" />
            </Link>
            <div className="flex size-full items-center justify-center">
                <div className="mx-auto w-full max-w-[400px] p-6">{children}</div>
            </div>
        </div>
    )
}

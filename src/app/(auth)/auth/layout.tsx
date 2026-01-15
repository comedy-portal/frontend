import { ReactNode } from 'react'

import { MicIcon } from 'lucide-react'

import Link from 'next/link'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
    robots: 'noindex, nofollow',
}

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-950 p-4 sm:p-16">
            <div className="space-y-4">
                <Link href="/" className="relative flex h-full items-center gap-x-2 whitespace-nowrap text-white">
                    <MicIcon size={32} strokeWidth={2} />
                    <div className="text-[18px] leading-none font-extrabold uppercase">ComedyPortal</div>
                </Link>
                <div className="box-content flex flex-col items-center gap-y-8 rounded-2xl bg-white px-8 py-16 sm:w-104 sm:p-16">
                    {children}
                </div>
            </div>
        </div>
    )
}

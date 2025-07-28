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
            <div className="box-content flex w-104 flex-col items-center gap-y-8 rounded-2xl bg-white px-8 py-16 sm:p-16">
                <Link href="/" className="relative flex h-full items-center gap-x-2 whitespace-nowrap text-gray-950">
                    <MicIcon size={32} strokeWidth={2} />
                    <div>
                        <div className="mb-0.5 text-[12px] leading-none font-semibold">Альфа</div>
                        <div className="text-[18px] leading-none font-extrabold uppercase">ComedyPortal</div>
                    </div>
                </Link>
                {children}
            </div>
        </div>
    )
}

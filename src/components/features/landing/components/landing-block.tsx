import { ReactNode } from 'react'

import { ChevronRightIcon } from 'lucide-react'

import Link from 'next/link'

type LandingBlockTypes = {
    children: ReactNode
    title: string
    moreTitle: string
    url: string
}

export const LandingBlock = ({ children, title, moreTitle, url }: LandingBlockTypes) => {
    return (
        <section className="flex flex-col gap-y-6">
            <div className="flex items-center justify-between">
                <Link href={url} className="flex items-center justify-between gap-x-2">
                    <h3 className="text-2xl font-semibold">{title}</h3>
                    <ChevronRightIcon size={24} className="block sm:hidden" />
                </Link>
                <Link
                    href={url}
                    className="mt-1 hidden items-center text-sm text-nowrap text-blue-500 hover:text-blue-700 sm:inline-flex"
                >
                    {moreTitle}
                </Link>
            </div>
            {children}
        </section>
    )
}

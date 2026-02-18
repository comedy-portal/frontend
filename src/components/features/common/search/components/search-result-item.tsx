import { ReactNode } from 'react'

import Link from 'next/link'

type SearchResultItemProps = {
    title: string
    icon: ReactNode
    href: string
    hideResults: () => void
}

export const SearchResultItem = (props: SearchResultItemProps) => {
    return (
        <Link
            href={props.href}
            className="group relative block cursor-pointer rounded-lg hover:bg-gray-100"
            onClick={props.hideResults}
        >
            <div className="flex items-center gap-x-2 px-2 py-2">
                <div className="shrink-0 text-gray-300">{props.icon}</div>
                <div className="overflow-hidden">
                    <div className="text-gray-650 line-clamp-1 text-sm font-semibold wrap-break-word">
                        {props.title}
                    </div>
                </div>
            </div>
        </Link>
    )
}

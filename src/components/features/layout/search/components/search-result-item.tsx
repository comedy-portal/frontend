import { ReactNode } from 'react'

import Link from 'next/link'

type SearchResultItemProps = {
    title: string
    info?: string
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
            <div className="flex items-center gap-x-2 px-3 py-2">
                <div className="flex-shrink-0 text-gray-500">{props.icon}</div>
                <div className="overflow-hidden">
                    <div className="hover-animated text-gray-650 line-clamp-1 text-sm font-bold break-words">
                        {props.title}
                    </div>
                    {props.info && <div className="line-clamp-1 text-sm break-words text-gray-400">{props.info}</div>}
                </div>
            </div>
        </Link>
    )
}

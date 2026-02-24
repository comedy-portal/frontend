import { ReactNode } from 'react'

import Link from 'next/link'

type SearchResultItemProps = {
    title: string
    info?: string
    href: string
    hideResults: () => void
}

export const SearchResultItem = (props: SearchResultItemProps) => {
    return (
        <Link href={props.href} className="block rounded-lg p-2 hover:bg-gray-100" onClick={props.hideResults}>
            <div className="overflow-hidden">
                <div className="text-gray-650 line-clamp-1 text-sm font-semibold wrap-break-word">{props.title}</div>
                {props.info && <div className="line-clamp-1 text-xs wrap-break-word text-gray-400">{props.info}</div>}
            </div>
        </Link>
    )
}

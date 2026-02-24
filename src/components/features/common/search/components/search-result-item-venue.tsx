import { ReactNode } from 'react'

import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'

type SearchResultItemVenueProps = {
    name: string
    slug: string
    city: string
    address: string
    hideResults: () => void
}

export const SearchResultItemVenue = (props: SearchResultItemVenueProps) => {
    return (
        <Link
            href={`/venues/${props.slug}`}
            className="group relative block cursor-pointer rounded-lg hover:bg-gray-100"
            onClick={props.hideResults}
        >
            <div className="overflow-hidden">
                <div className="text-gray-650 line-clamp-1 text-sm font-semibold wrap-break-word">{props.name}</div>
                <div className="line-clamp-1 text-xs wrap-break-word text-gray-400">
                    {props.city}, {props.address}
                </div>
            </div>
        </Link>
    )
}

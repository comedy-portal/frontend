import { ChevronRightIcon } from 'lucide-react'

import Link from 'next/link'

import { Rating } from '@/components/ui/rating'
import { ContentType } from '@/utils/enums/common'

type UserWatchlistsFeedItemProps = {
    id: number
    type: ContentType
    name: string
    year: number
    avgRating: number
    reviewsCount: number
}

export const UserWatchlistsFeedItem = (props: UserWatchlistsFeedItemProps) => {
    return (
        <Link
            href={`/content/${props.type.toLowerCase()}/${props.id}`}
            className="flex cursor-pointer items-center justify-between gap-x-4 rounded bg-gray-100 px-4 py-2 text-black! no-underline! hover:bg-gray-200"
        >
            <div className="flex min-w-0 flex-1 items-center gap-x-4">
                <Rating value={props.avgRating} className="flex-shrink-0" />
                <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-black">{props.name}</div>
                    <div className="text-sm">{props.year}</div>
                </div>
            </div>
            <ChevronRightIcon strokeWidth={1.5} className="flex-shrink-0" />
        </Link>
    )
}

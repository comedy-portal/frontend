import { ChevronRightIcon } from 'lucide-react'

import Link from 'next/link'

import { ContentDate } from '@/components/ui/content-date'
import { ContentRating } from '@/components/ui/content-rating'
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
            href={`/content/${props.type}/${props.id}`}
            className="flex cursor-pointer items-center justify-between rounded bg-gray-50 px-4 py-2 text-black! no-underline! hover:bg-gray-100"
        >
            <div className="space-y-2">
                <div className="font-semibold text-black">{props.name}</div>
                <div className="flex items-center gap-x-2">
                    <ContentDate year={props.year} />
                    <ContentRating avgRating={props.avgRating} reviewsCount={props.reviewsCount} />
                </div>
            </div>
            <ChevronRightIcon />
        </Link>
    )
}

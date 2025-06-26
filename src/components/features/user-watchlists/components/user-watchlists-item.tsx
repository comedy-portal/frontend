import { ChevronRightIcon } from 'lucide-react'

import Link from 'next/link'

import { ContentDate } from '@/components/ui/content-date'
import { ContentRating } from '@/components/ui/content-rating'

export const UserWatchlistsItem = () => {
    return (
        <Link
            href="#"
            className="flex cursor-pointer items-center justify-between rounded bg-gray-50 px-4 py-2 text-black! no-underline! hover:bg-gray-100"
        >
            <div className="space-y-2">
                <div className="font-semibold text-black">Лично</div>
                <div className="flex items-center gap-x-2">
                    <ContentDate year={2023} />
                    <ContentRating avgRating={4.5} reviewsCount={10} />
                </div>
            </div>
            <ChevronRightIcon />
        </Link>
    )
}

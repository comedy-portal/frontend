import Link from 'next/link'

import { RatingHistogram } from '@/components/ui/rating-histogram'

export const UsersFeedItem = () => {
    return (
        <div className="flex items-center justify-between rounded-lg bg-white p-4">
            <div>
                <div className="font-bold">Username</div>
                <div className="text-sm text-gray-500">На сайте 4 дня</div>
            </div>
            <div className="flex items-center gap-x-16">
                <div className="text-lg font-bold">10 / 5</div>
                <div>
                    <RatingHistogram ratings={[1, 10, 1, 4, 2, 6, 10, 14, 8, 9]} size={44} />
                </div>
            </div>
        </div>
    )
}

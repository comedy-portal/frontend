import { CircleUserIcon } from 'lucide-react'

import { Share } from '@/components/features/common/share'
import { RatingHistogram } from '@/components/ui/rating-histogram'
import { ContentType } from '@/utils/enums/common'
import { formatDuration } from '@/utils/helpers/registration-date-format'

import { UserSidebarReviewsWithTypes } from './components/user-sidebar-reviews-with-types'
import { UserSidebarStatRow } from './components/user-sidebar-stat-row'

type UserSidebarProps = {
    username: string
    daysSinceRegistration: number
    _count: {
        reviews: number
        watchlists: number
        textReviewsCount: number
        reviewsByType: Partial<Record<ContentType, number>>
        reviewsByMark: Record<number, number>
    }
}

export const UserSidebar = (props: UserSidebarProps) => {
    return (
        // <div className="sticky top-28.75 flex flex-col gap-y-6">
        <div className="flex flex-col gap-y-6">
            <div className="relative space-y-6 rounded-2xl bg-white p-12">
                <div className="absolute -top-6 left-1/2 size-12 -translate-x-1/2 rounded-full bg-gray-100" />

                <div className="flex flex-col items-center space-y-4">
                    <CircleUserIcon size={100} />
                    <div className="text-center">
                        <div className="text-2xl font-bold">{props.username}</div>
                        <div>На сайте {formatDuration(props.daysSinceRegistration)}</div>
                    </div>
                </div>

                <hr className="border-dashed border-gray-300" />

                <ul className="flex flex-col gap-y-3">
                    <UserSidebarReviewsWithTypes
                        total={props._count?.reviews ?? 0}
                        reviewsByType={props._count.reviewsByType}
                    />
                    <UserSidebarStatRow label="Написано рецензий" value={props._count?.textReviewsCount ?? 0} />
                    <UserSidebarStatRow label="Добавлено в избранное" value={props._count?.watchlists ?? 0} />
                </ul>

                <div className="absolute -bottom-6 left-1/2 size-12 -translate-x-1/2 rounded-full bg-gray-100" />
            </div>

            <RatingHistogram ratings={Array.from({ length: 10 }, (_, i) => props._count.reviewsByMark[i + 1] ?? 0)} />
            <Share title={props.username} url={`${process.env.NEXT_PUBLIC_WEBSITE_DOMAIN}/users/${props.username}`} />
        </div>
    )
}

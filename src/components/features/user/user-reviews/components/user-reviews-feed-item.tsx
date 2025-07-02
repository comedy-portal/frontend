import Link from 'next/link'

import { Rating } from '@/components/ui/rating'
import { ContentType } from '@/utils/enums/common'

import { UserReviewsFeedItemControls } from './user-reviews-feed-item-controls'

type UserReviewsFeedItemProps = {
    id: number
    contentId: number
    type: ContentType
    name: string
    text: string | null
    rating: number
    createdAt: string
    isMyReview?: boolean
}

export const UserReviewsFeedItem = (props: UserReviewsFeedItemProps) => {
    return (
        <div className="space-y-4 rounded-lg bg-gray-100 p-4">
            <div className="flex items-center gap-x-4">
                <Rating value={props.rating} className="size-11" />
                <div>
                    <Link
                        href={`/content/${props.type.toLowerCase()}/${props.contentId}`}
                        className="text-base font-semibold text-black hover:text-blue-500"
                    >
                        {props.name}
                    </Link>
                    <div className="text-sm text-gray-500">
                        {new Date(props.createdAt).toLocaleDateString('ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </div>
                </div>
            </div>

            {props.text && <p>{props.text}</p>}
            {props.isMyReview && <UserReviewsFeedItemControls id={props.id} />}
        </div>
    )
}

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
        <div className="space-y-4 rounded-lg border border-gray-300 p-6">
            <div className="flex items-center justify-between gap-x-4">
                <div>
                    <Link href={`/content/${props.type.toLowerCase()}/${props.contentId}`} className="font-bold">
                        {props.name}
                    </Link>
                    <div className="text-gray-500">
                        {new Date(props.createdAt).toLocaleDateString('ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </div>
                </div>

                <div className="flex items-center gap-x-4">
                    {props.isMyReview && <UserReviewsFeedItemControls id={props.id} />}
                    <Rating value={props.rating} className="size-12" />
                </div>
            </div>

            {props.text && <div className="text-gray-700">{props.text}</div>}
        </div>
    )
}

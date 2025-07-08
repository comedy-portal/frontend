import Link from 'next/link'

import { Rating } from '@/components/ui/rating'

import { ContentReviewsFeedItemControls } from './content-reviews-feed-item-controls'

type ContentReviewsFeedItemProps = {
    id: number
    text: string | null
    rating: number
    username: string
    createdAt: string
    isMyReview?: boolean
}

export const ContentReviewsFeedItem = (props: ContentReviewsFeedItemProps) => {
    return (
        <div className="space-y-4 rounded-lg border border-gray-300 p-6">
            <div className="flex items-center justify-between gap-x-4">
                <div>
                    <Link href={`/users/${props.username}`} className="font-bold">
                        {props.username}
                    </Link>
                    <div className="text-gray-500">
                        {new Date(props.createdAt).toLocaleDateString('ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </div>
                </div>

                <Rating value={props.rating} className="size-12" />
            </div>

            {props.text && <div className="text-gray-700">{props.text}</div>}

            {props.isMyReview && <ContentReviewsFeedItemControls id={props.id} />}
        </div>
    )
}

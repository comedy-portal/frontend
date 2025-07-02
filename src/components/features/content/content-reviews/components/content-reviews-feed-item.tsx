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
        <div className="space-y-4 rounded-lg bg-gray-100 p-4">
            <div className="flex items-center gap-x-4">
                <Rating value={props.rating} />
                <div className="text-sm">
                    <Link href={`/users/${props.username}`} className="font-semibold text-black hover:text-blue-500">
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
            </div>

            {props.text && <p>{props.text}</p>}
            {props.isMyReview && <ContentReviewsFeedItemControls id={props.id} />}
        </div>
    )
}

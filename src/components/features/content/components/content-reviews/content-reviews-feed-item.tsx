import Link from 'next/link'

import { Rating } from '@/components/ui/rating'

import { ContentReviewsFeedItemComplaint } from './content-reviews-feed-item-complaint'
import { ContentReviewsFeedItemControls } from './content-reviews-feed-item-controls'

type ContentReviewsFeedItemProps = {
    id: number
    contentId: number
    userId: number
    text: string | null
    rating: number
    username: string
    createdAt: string
    activeUserId: number | null
    isAuth: boolean
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

                <div className="flex items-center gap-x-4">
                    {props.isAuth && props.activeUserId === props.userId ? (
                        <ContentReviewsFeedItemControls reviewId={props.id} contentId={props.contentId} />
                    ) : (
                        <ContentReviewsFeedItemComplaint reviewId={props.id} isAuth={props.isAuth} />
                    )}
                    <Rating value={props.rating} className="size-12" />
                </div>
            </div>

            {props.text && <div className="text-sm text-gray-700">{props.text}</div>}
        </div>
    )
}

import Link from 'next/link'

import { DescriptionBlock } from '@/components/ui/description-block'
import { Rating } from '@/components/ui/rating'

import { ContentReviewsFeedItemComplaint } from './content-reviews-feed-item-complaint'

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
        <div className="space-y-4 rounded-lg bg-white p-6">
            <div className="flex items-center gap-x-4">
                <Rating value={props.rating} isHighlight className="size-11 shrink-0" />
                <div>
                    <div className="text-sm text-gray-500">
                        {new Date(props.createdAt).toLocaleDateString('ru-RU', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                    </div>
                    <Link href={`/users/${props.username}`} className="line-clamp-1 max-h-6 font-bold" target="_blank">
                        {props.username}
                    </Link>
                </div>
            </div>

            {props.text && (
                <div className="text-sm text-gray-700">
                    <DescriptionBlock text={props.text} limit={500} />
                </div>
            )}

            {props.isAuth && props.activeUserId !== props.userId && (
                <ContentReviewsFeedItemComplaint reviewId={props.id} isAuth={props.isAuth} />
            )}
        </div>
    )
}

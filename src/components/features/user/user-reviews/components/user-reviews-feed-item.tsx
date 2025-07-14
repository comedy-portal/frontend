import Link from 'next/link'

import { Rating } from '@/components/ui/rating'
import { IReview } from '@/utils/types/review'

import { UserReviewsFeedItemAuthor } from './user-reviews-feed-item-author'
import { UserReviewsFeedItemControls } from './user-reviews-feed-item-controls'

type UserReviewsFeedItemProps = {
    review: IReview
    isMyReview?: boolean
}

export const UserReviewsFeedItem = ({ review, isMyReview }: UserReviewsFeedItemProps) => {
    return (
        <div className="space-y-4 rounded-lg border border-gray-300 p-6">
            <div className="flex items-center justify-between gap-x-4">
                <div>
                    <Link
                        href={`/content/${review.content.type.toLowerCase()}/${review.content.id}`}
                        className="font-bold"
                    >
                        {review.content.name}
                    </Link>
                    <div>
                        <UserReviewsFeedItemAuthor comedians={review.content.comedians} group={review.content.group} />
                    </div>
                </div>

                <div className="flex items-center gap-x-4">
                    {isMyReview && <UserReviewsFeedItemControls id={review.id} contentId={review.content.id} />}
                    <Rating value={review.mark} className="size-12" />
                </div>
            </div>

            {review.text && <div className="text-sm text-gray-700">{review.text}</div>}
        </div>
    )
}

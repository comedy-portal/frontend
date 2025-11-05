import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { Rating } from '@/components/ui/rating'
import { getAuthorDisplayNameForContent } from '@/utils/helpers/common'
import { IReview } from '@/utils/types/review'

import { UserReviewsFeedItemControls } from './user-reviews-feed-item-controls'

type UserReviewsFeedItemProps = {
    review: IReview
    isMyReview?: boolean
}

export const UserReviewsFeedItem = ({ review, isMyReview }: UserReviewsFeedItemProps) => {
    const author = getAuthorDisplayNameForContent(review.content)

    return (
        <div className="relative space-y-4 rounded-lg border border-gray-300 p-6">
            <div className="flex flex-row-reverse items-center justify-between">
                <div className="absolute -top-px -right-px flex items-center gap-x-4 rounded-bl-lg bg-white pb-1 pl-1 md:static md:top-auto md:right-auto">
                    <div className="hidden md:block">
                        {isMyReview && <UserReviewsFeedItemControls id={review.id} contentId={review.content.id} />}
                    </div>
                    <Rating value={review.mark} isHighlight className="size-12" />
                </div>

                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <Link href={`/content/${review.content.type.toLowerCase()}/${review.content.id}`}>
                        <ImageWithFallback
                            src={review.content.contentImages?.[0]?.url || ''}
                            width={76}
                            height={48}
                            className="aspect-video w-full rounded-lg align-top md:h-12 md:w-auto"
                            alt={review.content.name}
                        />
                    </Link>

                    <div>
                        {author && (
                            <Link href={author.url} className="text-sm text-gray-500 hover:text-gray-950">
                                {author.name}
                            </Link>
                        )}
                        <Link
                            href={`/content/${review.content.type.toLowerCase()}/${review.content.id}`}
                            className="line-clamp-2 max-h-12 font-bold"
                            target="_blank"
                        >
                            {review.content.name}
                            {review.content.year && ` (${review.content.year})`}
                        </Link>
                    </div>
                </div>
            </div>

            {review.text && <div className="text-sm">{review.text}</div>}

            <div className="flex items-center justify-between gap-x-4">
                <div className="text-gray-500">
                    {new Date(review.createdAt).toLocaleDateString('ru-RU', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })}
                </div>

                <div className="block md:hidden">
                    {isMyReview && <UserReviewsFeedItemControls id={review.id} contentId={review.content.id} />}
                </div>
            </div>
        </div>
    )
}

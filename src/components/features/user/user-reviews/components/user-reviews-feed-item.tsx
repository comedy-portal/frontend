import Link from 'next/link'

import { ContentBlockDate } from '@/components/features/common/content-block/components/content-block-date'
import { ContentBlockDuration } from '@/components/features/common/content-block/components/content-block-duration'
import { ContentBlockTag } from '@/components/features/common/content-block/components/content-block-tag'
import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { Rating } from '@/components/ui/rating'
import { categories } from '@/utils/dict/categories'
import { getAuthorDisplayNameForContent } from '@/utils/helpers/common'
import { IReview } from '@/utils/types/review'

import { UserReviewsFeedItemAuthor } from './user-reviews-feed-item-author'
import { UserReviewsFeedItemControls } from './user-reviews-feed-item-controls'

type UserReviewsFeedItemProps = {
    review: IReview
    isMyReview?: boolean
}

export const UserReviewsFeedItem = ({ review, isMyReview }: UserReviewsFeedItemProps) => {
    const author = getAuthorDisplayNameForContent(review.content)

    return (
        <div className="space-y-4 rounded-lg border border-gray-300 p-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-4">
                    <Link href={`/content/${review.content.type.toLowerCase()}/${review.content.id}`}>
                        <ImageWithFallback
                            src={review.content.contentImages?.[0]?.url || ''}
                            width={76}
                            height={48}
                            className="aspect-video h-12 rounded-lg align-top"
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

                <div className="flex items-center gap-x-4">
                    {isMyReview && <UserReviewsFeedItemControls id={review.id} contentId={review.content.id} />}
                    <Rating value={review.mark} isHighlight className="size-12" />
                </div>
            </div>

            {/* <div className="flex items-center gap-x-1">
                <ContentBlockTag
                    link={`/content/${review.content.type.toLowerCase()}`}
                    title={
                        categories.find(category => category.type === review.content.type.toLowerCase())?.label || ''
                    }
                />
                <ContentBlockDate year={review.content.year} />
            </div> */}

            {review.text && <div className="text-sm">{review.text}</div>}

            <div className="text-gray-500">
                {new Date(review.createdAt).toLocaleDateString('ru-RU', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </div>
        </div>

        // <div className="space-y-4 rounded-lg border border-gray-300 p-6">
        //     <div className="flex items-center justify-between gap-x-4">
        //         <div>
        //             <Link
        //                 href={`/content/${review.content.type.toLowerCase()}/${review.content.id}`}
        //                 className="font-bold"
        //             >
        //                 {review.content.name}
        //             </Link>
        //             <div></div>
        //             <div className="flex flex-col text-gray-500 lg:flex-row lg:items-center lg:gap-x-2.5">
        //                 <UserReviewsFeedItemAuthor comedians={review.content.comedians} group={review.content.group} />
        //                 <div className="hidden size-1 rounded-full bg-gray-950 lg:block" />
        // {new Date(review.createdAt).toLocaleDateString('ru-RU', {
        //     year: 'numeric',
        //     month: 'long',
        //     day: 'numeric',
        // })}
        //             </div>
        //         </div>

        // <div className="flex items-center gap-x-4">
        //     {isMyReview && <UserReviewsFeedItemControls id={review.id} contentId={review.content.id} />}
        //     <Rating value={review.mark} isHighlight className="size-12" />
        // </div>
        //     </div>

        //     {review.text && <div className="text-sm text-gray-700">{review.text}</div>}
        // </div>
    )
}

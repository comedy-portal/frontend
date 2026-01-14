import { ContentReviewsFeedItemSkeleton } from './content-reviews-feed-item-skeleton'

const BLOCK_QTY = 2

export const ContentReviewsFeedSkeleton = () => {
    return (
        <div role="status" className="animate-pulse space-y-3">
            {Array.from({ length: BLOCK_QTY }).map((_, i) => (
                <ContentReviewsFeedItemSkeleton key={`content-reviews-feed-item-skeleton-${i}`} />
            ))}
        </div>
    )
}

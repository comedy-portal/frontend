import { UserReviewsFeedItemSkeleton } from './user-reviews-feed-item-skeleton'

const BLOCK_QTY = 2

export const UserReviewsFeedSkeleton = () => {
    return (
        <div role="status" className="animate-pulse space-y-2">
            {Array.from({ length: BLOCK_QTY }).map((_, i) => (
                <UserReviewsFeedItemSkeleton key={`user-reviews-feed-item-skeleton-${i}`} />
            ))}
        </div>
    )
}

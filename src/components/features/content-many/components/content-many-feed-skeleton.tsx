import { ContentManyFeedItemSkeleton } from './content-many-feed-item-skeleton'

const BLOCK_QTY = 8

export const ContentManyFeedSkeleton = () => {
    return (
        <div role="status" className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: BLOCK_QTY }).map((_, i) => (
                <ContentManyFeedItemSkeleton key={`content-many-feed-item-skeleton-${i}`} />
            ))}
        </div>
    )
}

import { ContentFeedItemSkeleton } from './content-feed-item-skeleton'

const BLOCK_QTY = 8

export const ContentFeedSkeleton = () => {
    return (
        <div role="status" className="grid animate-pulse grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
            {Array.from({ length: BLOCK_QTY }).map((_, i) => (
                <ContentFeedItemSkeleton key={`content-feed-item-skeleton-${i}`} />
            ))}
        </div>
    )
}

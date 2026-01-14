import { ContentBlockSkeleton } from '@/components/features/common/content-block/content-block-skeleton'

const BLOCK_QTY = 8

export const ContentManyFeedSkeleton = () => {
    return (
        <div
            role="status"
            className="grid animate-pulse grid-cols-1 gap-3 md:grid-cols-2 md:gap-3 lg:grid-cols-3 xl:grid-cols-4"
        >
            {Array.from({ length: BLOCK_QTY }).map((_, i) => (
                <ContentBlockSkeleton key={`content-many-feed-item-skeleton-${i}`} className="h-70.25" />
            ))}
        </div>
    )
}

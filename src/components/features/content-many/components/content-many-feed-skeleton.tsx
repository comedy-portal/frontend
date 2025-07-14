import { ContentBlockSkeleton } from '@/components/ui/content-block/content-block-skeleton'

const BLOCK_QTY = 8

export const ContentManyFeedSkeleton = () => {
    return (
        <div role="status" className="grid animate-pulse grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {Array.from({ length: BLOCK_QTY }).map((_, i) => (
                <ContentBlockSkeleton key={`content-many-feed-item-skeleton-${i}`} />
            ))}
        </div>
    )
}

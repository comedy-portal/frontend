import { ContentBlockSkeleton } from '@/components/ui/content-block/content-block-skeleton'

const BLOCK_QTY = 4

export const LandingContentFeedSkeleton = () => {
    return (
        <div
            role="status"
            className="grid animate-pulse grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4"
        >
            {Array.from({ length: BLOCK_QTY }).map((_, i) => (
                <ContentBlockSkeleton key={`landing-content-feed-item-skeleton-${i}`} />
            ))}
        </div>
    )
}

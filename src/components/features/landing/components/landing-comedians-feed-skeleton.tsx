import { ComedianBlockSkeleton } from '@/components/ui/comedian-block/comedian-block-skeleton'

const BLOCK_QTY = 5

export const LandingComediansFeedSkeleton = () => {
    return (
        <div
            role="status"
            className="grid animate-pulse grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5"
        >
            {Array.from({ length: BLOCK_QTY }).map((_, i) => (
                <ComedianBlockSkeleton key={`landing-comedians-feed-item-skeleton-${i}`} />
            ))}
        </div>
    )
}

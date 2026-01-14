import { ComedianBlockSkeleton } from '@/components/features/common/comedian-block/comedian-block-skeleton'

const BLOCK_QTY = 10

export const ComediansGroupsFeedSkeleton = () => {
    return (
        <div
            role="status"
            className="grid animate-pulse grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5"
        >
            {Array.from({ length: BLOCK_QTY }).map((_, i) => (
                <ComedianBlockSkeleton key={`comedians-feed-item-skeleton-${i}`} />
            ))}
        </div>
    )
}

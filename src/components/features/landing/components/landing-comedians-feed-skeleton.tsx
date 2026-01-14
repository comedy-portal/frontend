import ScrollContainer from 'react-indiana-drag-scroll'

import { ComedianBlockSkeleton } from '@/components/features/common/comedian-block/comedian-block-skeleton'

const BLOCK_QTY = 6

export const LandingComediansFeedSkeleton = () => {
    return (
        <div role="status" className="animate-pulse">
            <ScrollContainer className="grid auto-cols-[minmax(200px,1fr)] grid-flow-col gap-4">
                {Array.from({ length: BLOCK_QTY }).map((_, i) => (
                    <ComedianBlockSkeleton key={`landing-comedians-feed-item-skeleton-${i}`} />
                ))}
            </ScrollContainer>
        </div>
    )
}

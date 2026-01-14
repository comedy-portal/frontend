import ScrollContainer from 'react-indiana-drag-scroll'

import { ContentBlockSkeleton } from '@/components/features/common/content-block/content-block-skeleton'

const BLOCK_QTY = 5

export const LandingContentFeedSkeleton = () => {
    return (
        <div role="status" className="animate-pulse">
            <ScrollContainer className="grid auto-cols-[278px] grid-flow-col gap-3 overflow-x-auto">
                {Array.from({ length: BLOCK_QTY }).map((_, i) => (
                    <ContentBlockSkeleton key={`landing-content-feed-item-skeleton-${i}`} className="h-67.5" />
                ))}
            </ScrollContainer>
        </div>
    )
}

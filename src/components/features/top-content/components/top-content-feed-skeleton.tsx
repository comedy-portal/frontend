import classNames from 'classnames'

import { ContentBlockRowSkeleton } from '@/components/features/common/content-block/content-block-row-skeleton'

const BLOCK_QTY = 8

export const TopContentFeedSkeleton = () => {
    return (
        <div
            role="status"
            className={classNames(
                'animate-pulse',
                'lg:block lg:space-y-2',
                'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6',
            )}
        >
            {Array.from({ length: BLOCK_QTY }).map((_, i) => (
                <ContentBlockRowSkeleton key={`top-content-feed-item-skeleton-${i}`} />
            ))}
        </div>
    )
}

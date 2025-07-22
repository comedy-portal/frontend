import classNames from 'classnames'

import { ContentBlockSkeleton } from '@/components/ui/content-block/content-block-skeleton'

const BLOCK_QTY = 3

export const UserWatchlistsFeedSkeleton = () => {
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
                <ContentBlockSkeleton key={`user-watchlists-feed-item-skeleton-${i}`} />
            ))}
        </div>
    )
}

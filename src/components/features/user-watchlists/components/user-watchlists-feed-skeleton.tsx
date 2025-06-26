import { UserWatchlistsFeedItemSkeleton } from './user-watchlists-feed-item-skeleton'

const BLOCK_QTY = 3

export const UserWatchlistsFeedSkeleton = () => {
    return (
        <div role="status" className="grid animate-pulse space-y-2">
            {Array.from({ length: BLOCK_QTY }).map((_, i) => (
                <UserWatchlistsFeedItemSkeleton key={`user-watchlists-feed-item-skeleton-${i}`} />
            ))}
        </div>
    )
}

import { NotificationsFeedItemSkeleton } from './notifications-feed-item-skeleton'

const BLOCK_QTY = 2

export const NotificationsFeedSkeleton = () => {
    return (
        <div role="status" className="animate-pulse space-y-3">
            {Array.from({ length: BLOCK_QTY }).map((_, i) => (
                <NotificationsFeedItemSkeleton key={`notifications-feed-item-skeleton-${i}`} />
            ))}
        </div>
    )
}

import { SubscriptionsFeedItemSkeleton } from './subscriptions-feed-item-skeleton'

const BLOCK_QTY = 2

export const SubscriptionsFeedSkeleton = () => {
    return (
        <div role="status" className="animate-pulse space-y-3">
            {Array.from({ length: BLOCK_QTY }).map((_, i) => (
                <SubscriptionsFeedItemSkeleton key={`subscriptions-feed-item-skeleton-${i}`} />
            ))}
        </div>
    )
}

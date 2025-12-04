import { SubscriptionType } from '@/redux/services/subscriptions/subscriptions.types'

export type ISubscription = {
    type: SubscriptionType.COMEDIAN | SubscriptionType.GROUP | SubscriptionType.VENUE
    createdAt: Date
    entity: {
        id: number
        name: string
        slug: string
    }
}

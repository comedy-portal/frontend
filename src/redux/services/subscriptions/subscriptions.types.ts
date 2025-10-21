import { ISubscription } from '@/utils/types/subscription'

export enum SubscriptionType {
    COMEDIAN = 'comedian',
    GROUP = 'group',
    VENUE = 'venue',
}

export type SubscribeInputs = {
    id: number
    type: SubscriptionType
}

export type UnsubscribeInputs = {
    id: number
    type: SubscriptionType
}

export type GetSubscriptionsResponse = ISubscription[]

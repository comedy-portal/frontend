export enum SubscriptionType {
    COMEDIAN = 'comedian',
    GROUP = 'group',
    VENUE = 'venue',
}

export type SubscribeInputs = {
    id: number
    type: SubscriptionType
}

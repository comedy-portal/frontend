import { api } from '@/redux/services/api'

import { GetSubscriptionsResponse, SubscribeInputs } from './subscriptions.types'

export const subscriptionsAPI = api.injectEndpoints({
    endpoints: build => ({
        getSubscriptions: build.query<GetSubscriptionsResponse, void>({
            query: () => 'subscriptions',
        }),
        subscribe: build.mutation<void, SubscribeInputs>({
            query: ({ type, id }) => ({
                url: 'subscriptions',
                method: 'POST',
                body: { type, id },
            }),
        }),
    }),
    overrideExisting: false,
})

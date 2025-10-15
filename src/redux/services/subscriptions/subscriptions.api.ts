import { api } from '@/redux/services/api'

import { SubscribeInputs } from './subscriptions.types'

export const subscriptionsAPI = api.injectEndpoints({
    endpoints: build => ({
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

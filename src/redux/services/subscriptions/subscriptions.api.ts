import { api } from '@/redux/services/api'

import { GetSubscriptionsResponse, SubscribeInputs, UnsubscribeInputs } from './subscriptions.types'

export const subscriptionsAPI = api.injectEndpoints({
    endpoints: build => ({
        getSubscriptions: build.query<GetSubscriptionsResponse, void>({
            query: () => 'subscriptions',
            providesTags: () => [{ type: 'Subscriptions', id: 'LIST' }],
        }),
        subscribe: build.mutation<void, SubscribeInputs>({
            query: inputs => ({
                url: 'subscriptions',
                method: 'POST',
                body: inputs,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Comedians', id },
                { type: 'Subscriptions', id: 'LIST' },
            ],
        }),
        unsubscribe: build.mutation<void, UnsubscribeInputs>({
            query: inputs => ({
                url: 'subscriptions',
                method: 'DELETE',
                body: inputs,
            }),
            invalidatesTags: (result, error, { id }) => [
                { type: 'Comedians', id },
                { type: 'Subscriptions', id: 'LIST' },
            ],
        }),
    }),
    overrideExisting: false,
})

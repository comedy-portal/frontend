import { api } from '@/redux/services/api'

import { GetNotificationsResponse } from './notification.types'

export const notificationAPI = api.injectEndpoints({
    endpoints: build => ({
        getNotifications: build.query<GetNotificationsResponse, void>({
            query: () => ({
                url: 'events',
            }),
        }),
    }),
    overrideExisting: false,
})

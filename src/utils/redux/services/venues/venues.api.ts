import { api } from '@/utils/redux/services/api'

import { GetVenuesParams, GetVenuesResponse } from './venues.types'

export const venuesAPI = api.injectEndpoints({
    endpoints: build => ({
        getVenues: build.query<GetVenuesResponse, GetVenuesParams>({
            query: params => ({
                url: 'venues',
                method: 'GET',
                params,
            }),
            providesTags: () => [{ type: 'Venues', id: 'LIST' }],
        }),
    }),
    overrideExisting: false,
})

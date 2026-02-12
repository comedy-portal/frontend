import { api } from '@/utils/redux/services/api'

import { GetVenueBySlugResponse, GetVenuesParams, GetVenuesResponse } from './venues.types'

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
        getVenueBySlug: build.query<GetVenueBySlugResponse, string>({
            query: slug => ({
                url: `venues/${slug}`,
                method: 'GET',
            }),
            providesTags: (result, error, slug) => [{ type: 'Venues', id: result?.id }],
        }),
    }),
    overrideExisting: false,
})

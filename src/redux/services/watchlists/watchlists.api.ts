import { api } from '@/redux/services/api'

import { GetWatchlistParams, GetWatchlistResponse } from './watchlists.type'

export const watchlistsAPI = api.injectEndpoints({
    endpoints: build => ({
        getWatchlist: build.query<GetWatchlistResponse, GetWatchlistParams>({
            query: params => {
                const searchParams = new URLSearchParams()

                Object.entries(params).forEach(([key, value]) => {
                    if (value !== undefined && key !== 'types') {
                        searchParams.append(key, String(value))
                    }
                })

                if (params.types?.length) {
                    params.types.forEach(t => searchParams.append('types', t))
                }

                return {
                    url: `watchlists?${searchParams.toString()}`,
                    method: 'GET',
                }
            },
            providesTags: () => [{ type: 'Watchlist', id: 'LIST' }],
        }),
        addToWatchlist: build.mutation<void, number>({
            query: contentId => ({
                url: 'watchlists',
                method: 'POST',
                body: { contentId },
            }),
            invalidatesTags: (result, error, contentId) => [
                { type: 'Watchlist', id: 'LIST' },
                { type: 'Content', id: 'LIST' },
                { type: 'Content', id: 'TOP' },
                { type: 'Content', id: 'TRENDS' },
                { type: 'Content', id: contentId },
                { type: 'Comedians' },
                { type: 'Groups' },
            ],
        }),
        deleteFromWatchlist: build.mutation<void, number>({
            query: contentId => ({
                url: 'watchlists',
                method: 'DELETE',
                body: { contentId },
            }),
            invalidatesTags: (result, error, contentId) => [
                { type: 'Watchlist', id: 'LIST' },
                { type: 'Content', id: 'LIST' },
                { type: 'Content', id: 'TOP' },
                { type: 'Content', id: 'TRENDS' },
                { type: 'Content', id: contentId },
                { type: 'Comedians' },
                { type: 'Groups' },
            ],
        }),
    }),
    overrideExisting: false,
})

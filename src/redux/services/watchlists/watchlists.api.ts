import { api } from '@/redux/services/api'

import { GetWatchlistParams, GetWatchlistResponse } from './watchlists.type'

export const watchlistsAPI = api.injectEndpoints({
    endpoints: build => ({
        getWatchlist: build.query<GetWatchlistResponse, GetWatchlistParams>({
            query: params => {
                const queryParams: Record<string, string | number | undefined> = {
                    username: params.username,
                    order: params.order,
                    sort_by: params.sort_by,
                    year: params.year,
                    min_rating: params.min_rating,
                    max_rating: params.max_rating,
                    cursor: params.cursor,
                }

                if (params.types && params.types.length > 0) {
                    queryParams.types = params.types.join(',')
                }

                return {
                    url: 'watchlists',
                    method: 'GET',
                    params: queryParams,
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

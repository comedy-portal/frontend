import { api } from '@/redux/services/api'

import { GetWatchlistParams, GetWatchlistResponse } from './watchlists.type'

export const watchlistsAPI = api.injectEndpoints({
    endpoints: build => ({
        getWatchlist: build.query<GetWatchlistResponse, GetWatchlistParams>({
            query: params => ({
                url: 'watchlists',
                method: 'GET',
                params: {
                    username: params.username,
                },
            }),
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
                { type: 'Content', id: contentId },
                { type: 'Comedians' },
                { type: 'Groups' },
                { type: 'Watchlist', id: 'LIST' },
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
                { type: 'Content', id: contentId },
                { type: 'Comedians' },
                { type: 'Groups' },
                { type: 'Watchlist', id: 'LIST' },
            ],
        }),
    }),
    overrideExisting: false,
})

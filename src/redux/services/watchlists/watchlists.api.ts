import { api } from '@/redux/services/api'

import { GetWatchlistParams, GetWatchlistResponse } from './watchlists.type'

export const watchlistsAPI = api.injectEndpoints({
    endpoints: build => ({
        getWatchlist: build.query<GetWatchlistResponse, GetWatchlistParams>({
            query: params => ({
                url: 'watchlists',
                method: 'GET',
                params,
            }),
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName
            },
            merge: (currentCache, newResponse, otherArgs) => {
                if (otherArgs.arg.cursor === undefined) {
                    return newResponse
                }

                if (currentCache) {
                    return {
                        ...newResponse,
                        items: [...currentCache.items, ...newResponse.items],
                    }
                }
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
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
                { type: 'Content', id: contentId },
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
                { type: 'Content', id: contentId },
            ],
        }),
    }),
    overrideExisting: false,
})

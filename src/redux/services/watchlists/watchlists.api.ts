import { api } from '@/redux/services/api'

export const watchlistsAPI = api.injectEndpoints({
    endpoints: build => ({
        addToWatchlist: build.mutation<void, number>({
            query: contentId => ({
                url: 'watchlists',
                method: 'POST',
                body: { contentId },
            }),
        }),
        deleteFromWatchlist: build.mutation<void, number>({
            query: contentId => ({
                url: 'watchlists',
                method: 'DELETE',
                body: { contentId },
            }),
        }),
    }),
    overrideExisting: false,
})

import { api } from '@/utils/redux/services/api'

import {
    CreateReviewInputs,
    CreateReviewResponse,
    DeleteReviewParams,
    GetReviewByIdResponse,
    GetReviewsParams,
    GetReviewsResponse,
    ReviewComplaintInputs,
    UpdateReviewInputs,
} from './reviews.types'

export const reviewsAPI = api.injectEndpoints({
    endpoints: build => ({
        getReviews: build.query<GetReviewsResponse, GetReviewsParams>({
            query: ({ types, ...rest }) => {
                const searchParams = new URLSearchParams()

                Object.entries(rest).forEach(([key, value]) => {
                    if (value !== undefined) {
                        searchParams.append(key, String(value))
                    }
                })

                if (types?.length) {
                    types.forEach(t => searchParams.append('types', t))
                }

                return {
                    url: `reviews?${searchParams.toString()}`,
                    method: 'GET',
                }
            },
            serializeQueryArgs: ({ queryArgs }) => {
                return JSON.stringify({
                    order: queryArgs.order,
                    sort_by: queryArgs.sort_by,
                    with_text: queryArgs.with_text,
                    types: queryArgs.types,
                })
            },
            merge: (currentCache, newResponse, { arg }) => {
                if (arg.cursor === undefined) {
                    return newResponse
                }

                if (currentCache) {
                    return {
                        ...newResponse,
                        items: [...currentCache.items, ...newResponse.items],
                    }
                }

                return newResponse
            },
            forceRefetch({ currentArg, previousArg }) {
                return JSON.stringify(currentArg) !== JSON.stringify(previousArg)
            },
            providesTags: [{ type: 'Reviews', id: 'LIST' }],
        }),
        getReviewsByContent: build.query<GetReviewsResponse, GetReviewsParams>({
            query: params => ({
                url: 'reviews',
                method: 'GET',
                params,
            }),
            serializeQueryArgs: ({ queryArgs }) => {
                return JSON.stringify({
                    order: queryArgs.order,
                    sort_by: queryArgs.sort_by,
                    with_text: queryArgs.with_text,
                })
            },
            merge: (currentCache, newResponse, { arg }) => {
                if (arg.cursor === undefined) {
                    return newResponse
                }

                if (currentCache) {
                    return {
                        ...newResponse,
                        items: [...currentCache.items, ...newResponse.items],
                    }
                }

                return newResponse
            },
            forceRefetch({ currentArg, previousArg }) {
                return JSON.stringify(currentArg) !== JSON.stringify(previousArg)
            },
            providesTags: (result, error, params) => [{ type: 'ReviewsByContent', id: params.content_id }],
        }),
        getReviewById: build.query<GetReviewByIdResponse, { id: number }>({
            query: ({ id }) => ({
                url: `reviews/${id}`,
                method: 'GET',
            }),
            providesTags: (result, error, { id }) => [{ type: 'Reviews', id }],
        }),
        createReview: build.mutation<CreateReviewResponse, CreateReviewInputs>({
            query: inputs => ({
                url: 'reviews',
                method: 'POST',
                body: inputs,
            }),
            invalidatesTags: (result, error, inputs) => [
                { type: 'Reviews', id: 'LIST' },
                { type: 'ReviewsByContent', id: inputs.contentId },
                { type: 'Content', id: 'LIST' },
                { type: 'Content', id: 'TOP' },
                { type: 'Content', id: 'TRENDS' },
                { type: 'Content', id: inputs.contentId },
                { type: 'Comedians' },
                { type: 'Groups' },
                { type: 'Watchlist', id: 'LIST' },
            ],
        }),
        updateReview: build.mutation<void, UpdateReviewInputs>({
            query: ({ id, ...inputs }) => ({
                url: `reviews/${id}`,
                method: 'PATCH',
                body: inputs,
            }),
            async onQueryStarted({ id, ...inputs }, { dispatch, getState, queryFulfilled }) {
                // Get all active cached queries for 'getReviews' that might contain this review
                const activeQueries = reviewsAPI.util
                    .selectInvalidatedBy(getState(), [{ type: 'Reviews', id: 'LIST' }])
                    .filter(entry => entry.endpointName === 'getReviews')

                let shouldInvalidateAll = false

                // Apply optimistic update to each cached query
                const patches = activeQueries.map(entry =>
                    dispatch(
                        reviewsAPI.util.updateQueryData(
                            'getReviews',
                            entry.originalArgs, // Use the actual query arguments
                            draft => {
                                const index = draft.items.findIndex(r => r.id === id)
                                if (index !== -1) {
                                    draft.items[index] = {
                                        ...draft.items[index],
                                        ...inputs,
                                    }
                                }
                            },
                        ),
                    ),
                )

                try {
                    await queryFulfilled
                    if (shouldInvalidateAll) {
                        dispatch(reviewsAPI.util.invalidateTags([{ type: 'Reviews', id: 'LIST' }]))
                    }
                } catch {
                    patches.forEach(patch => patch.undo())
                }
            },
            invalidatesTags: (result, error, inputs) => [
                { type: 'Reviews', id: inputs.id },
                { type: 'ReviewsByContent', id: inputs.contentId },
                { type: 'Content', id: 'LIST' },
                { type: 'Content', id: 'TOP' },
                { type: 'Content', id: 'TRENDS' },
                { type: 'Content', id: inputs.contentId },
                { type: 'Comedians' },
                { type: 'Groups' },
                { type: 'Watchlist', id: 'LIST' },
            ],
        }),

        deleteReview: build.mutation<void, DeleteReviewParams>({
            query: params => ({
                url: `reviews/${params.id}`,
                method: 'DELETE',
            }),
            async onQueryStarted(params, { dispatch, getState, queryFulfilled }) {
                const activeQueries = reviewsAPI.util
                    .selectInvalidatedBy(getState(), [{ type: 'Reviews', id: 'LIST' }])
                    .filter(entry => entry.endpointName === 'getReviews')

                const patches = activeQueries.map(entry =>
                    dispatch(
                        reviewsAPI.util.updateQueryData('getReviews', entry.originalArgs, draft => {
                            const before = draft.items.length
                            draft.items = draft.items.filter(r => r.id !== params.id)
                            if (draft.items.length < before) {
                                draft.total -= 1
                            }
                        }),
                    ),
                )

                try {
                    await queryFulfilled
                } catch {
                    patches.forEach(patch => patch.undo())
                }
            },
            invalidatesTags: (result, error, params) => [
                { type: 'Reviews', id: params.id },
                { type: 'ReviewsByContent', id: params.contentId },
                { type: 'Content', id: 'LIST' },
                { type: 'Content', id: 'TOP' },
                { type: 'Content', id: 'TRENDS' },
                { type: 'Content', id: params.contentId },
                { type: 'Comedians' },
                { type: 'Groups' },
                { type: 'Watchlist', id: 'LIST' },
            ],
        }),
        createReviewComplaint: build.mutation<void, ReviewComplaintInputs>({
            query: inputs => ({
                url: `reviews/${inputs.reviewId}/complaints`,
                method: 'POST',
                body: inputs,
            }),
        }),
    }),
    overrideExisting: false,
})

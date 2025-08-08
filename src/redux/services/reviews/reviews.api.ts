import { api } from '@/redux/services/api'

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
            query: params => ({
                url: 'reviews',
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
            providesTags: [{ type: 'Reviews', id: 'LIST' }],
        }),
        getReviewById: build.query<GetReviewByIdResponse, { id: number }>({
            query: ({ id }) => ({
                url: `reviews/${id}`,
                method: 'GET',
            }),
            providesTags: (result, error, { id }) => [{ type: 'Reviews', id }],
        }),
        createReview: build.mutation<CreateReviewResponse, CreateReviewInputs>({
            query: body => ({
                url: 'reviews',
                method: 'POST',
                body,
            }),
            invalidatesTags: (result, error, body) => [
                { type: 'Reviews', id: 'LIST' },
                { type: 'Content', id: 'LIST' },
                { type: 'Content', id: 'TOP' },
                { type: 'Content', id: body.contentId },
                { type: 'Comedians' },
                { type: 'Groups' },
                { type: 'Watchlist', id: 'LIST' },
            ],
        }),
        updateReview: build.mutation<void, UpdateReviewInputs>({
            query: ({ id, ...body }) => ({
                url: `reviews/${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: (result, error, body) => [
                { type: 'Reviews', id: 'LIST' },
                { type: 'Reviews', id: body.id },
                { type: 'Content', id: 'LIST' },
                { type: 'Content', id: 'TOP' },
                { type: 'Content', id: body.contentId },
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
            invalidatesTags: (result, error, params) => [
                { type: 'Reviews', id: 'LIST' },
                { type: 'Reviews', id: params.id },
                { type: 'Content', id: 'LIST' },
                { type: 'Content', id: 'TOP' },
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

import { api } from '@/redux/services/api'

import {
    CreateReviewInputs,
    CreateReviewResponse,
    GetReviewByIdResponse,
    GetReviewsParams,
    GetReviewsResponse,
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
            invalidatesTags: [{ type: 'Reviews', id: 'LIST' }],
        }),
        updateReview: build.mutation<void, UpdateReviewInputs>({
            query: ({ id, ...body }) => ({
                url: `reviews/${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Reviews'],
        }),
        deleteReview: build.mutation<void, { id: number }>({
            query: ({ id }) => ({
                url: `reviews/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{ type: 'Reviews', id: 'LIST' }],
        }),
    }),
    overrideExisting: false,
})

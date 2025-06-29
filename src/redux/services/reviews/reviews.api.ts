import { api } from '@/redux/services/api'

import {
    CreateReviewInputs,
    CreateReviewResponse,
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
            providesTags: (result, error, { content_id }) => [{ type: 'Reviews', id: content_id }],
        }),
        createReview: build.mutation<CreateReviewResponse, CreateReviewInputs>({
            query: body => ({
                url: 'reviews',
                method: 'POST',
                body,
            }),
            invalidatesTags: (result, error, { contentId }) => [{ type: 'Reviews', id: contentId }],
        }),
        updateReview: build.mutation<void, UpdateReviewInputs>({
            query: ({ id, ...body }) => ({
                url: `reviews/${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'Reviews', id }],
        }),
    }),
    overrideExisting: false,
})

import { api } from '@/redux/services/api'

import {
    GetContentByIdResponse,
    GetContentManyParams,
    GetContentManyResponse,
    GetTopContentParams,
    GetTopContentResponse,
} from './content.types'

export const contentAPI = api.injectEndpoints({
    endpoints: build => ({
        getContentMany: build.query<GetContentManyResponse, GetContentManyParams>({
            query: params => ({
                url: 'content',
                method: 'GET',
                params,
            }),
            serializeQueryArgs: ({ queryArgs }) => {
                return JSON.stringify({
                    type: queryArgs.type,
                    order: queryArgs.order,
                    sort_by: queryArgs.sort_by,
                    min_rating: queryArgs.min_rating,
                    max_rating: queryArgs.max_rating,
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
            providesTags: () => [{ type: 'Content', id: 'LIST' }],
        }),
        getTopContent: build.query<GetTopContentResponse, GetTopContentParams>({
            query: params => ({
                url: 'content/top',
                method: 'GET',
                params,
            }),
            providesTags: () => [{ type: 'Content', id: 'TOP' }],
        }),
        getContentById: build.query<GetContentByIdResponse, number>({
            query: id => ({
                url: `content/${id}`,
                method: 'GET',
            }),
            providesTags: (result, error, id) => [{ type: 'Content', id }],
        }),
    }),
    overrideExisting: false,
})

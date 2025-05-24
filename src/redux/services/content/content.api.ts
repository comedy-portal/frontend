import { api } from '@/redux/services/api'

import { GetContentManyParams, GetContentManyResponse } from './content.types'

export const contentAPI = api.injectEndpoints({
    endpoints: build => ({
        getContentMany: build.query<GetContentManyResponse, GetContentManyParams>({
            query: params => {
                const filteredParams = Object.fromEntries(
                    // Filter out undefined values from params
                    // and convert all values to strings
                    Object.entries(params).flatMap(([k, v]) => (v !== undefined ? [[k, String(v)]] : [])),
                )

                return 'content?' + new URLSearchParams(filteredParams).toString()
            },
            serializeQueryArgs: ({ queryArgs }) => {
                return JSON.stringify({
                    type: queryArgs.type,
                    order: queryArgs.order,
                    sort_by: queryArgs.sort_by,
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
            providesTags: ['ContentMany'],
        }),
    }),
    overrideExisting: false,
})

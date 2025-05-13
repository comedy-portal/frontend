import { api } from '@/redux/services/api'

import { GetContentManyParams, GetContentManyResponse } from './content.types'

export const contentAPI = api.injectEndpoints({
    endpoints: build => ({
        getContentMany: build.query<GetContentManyResponse, GetContentManyParams>({
            query: params => {
                return 'content?' + new URLSearchParams(params).toString()
            },
            serializeQueryArgs: ({ queryArgs }) => {
                const { cursor, ...rest } = queryArgs
                return JSON.stringify(rest)
            },
            merge: (currentCache, newResponse, { arg }) => {
                const cursor = Number(arg.cursor)

                if (!cursor || !currentCache) {
                    return newResponse
                }

                return {
                    ...newResponse,
                    items: [...currentCache.items, ...newResponse.items],
                }
            },
            forceRefetch({ currentArg, previousArg }) {
                return JSON.stringify(currentArg) !== JSON.stringify(previousArg)
            },
            providesTags: ['Content'],
        }),
    }),
    overrideExisting: false,
})

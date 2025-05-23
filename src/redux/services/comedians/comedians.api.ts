import { api } from '@/redux/services/api'

import { GetComediansParams, GetComediansResponse } from './comedians.types'

export const comediansAPI = api.injectEndpoints({
    endpoints: build => ({
        getComedians: build.query<GetComediansResponse, GetComediansParams>({
            query: params => {
                const filteredParams = Object.fromEntries(
                    Object.entries(params)
                        .filter(([_, value]) => value !== undefined)
                        .map(([key, value]) => [key, String(value)]),
                )

                return 'comedians?' + new URLSearchParams(filteredParams).toString()
            },
            serializeQueryArgs: ({ endpointName }) => endpointName,
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
            providesTags: ['Comedians'],
        }),
    }),
    overrideExisting: false,
})

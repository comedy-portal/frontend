import { api } from '@/redux/services/api'

import { GetComediansParams, GetComediansResponse } from './comedians.types'

export const comediansAPI = api.injectEndpoints({
    endpoints: build => ({
        getComedians: build.query<GetComediansResponse, GetComediansParams>({
            query: params => {
                const filteredParams = Object.fromEntries(
                    // Filter out undefined values from params
                    // and convert all values to strings
                    Object.entries(params).flatMap(([k, v]) => (v !== undefined ? [[k, String(v)]] : [])),
                )

                return 'comedians?' + new URLSearchParams(filteredParams).toString()
            },
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
            providesTags: ['Comedians'],
        }),
    }),
    overrideExisting: false,
})

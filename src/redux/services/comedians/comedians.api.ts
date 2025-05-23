import { api } from '@/redux/services/api'

import { GetComediansParams, GetComediansResponse } from './comedians.types'

export const comediansAPI = api.injectEndpoints({
    endpoints: build => ({
        getComedians: build.query<GetComediansResponse, GetComediansParams>({
            query: params => {
                return 'comedians?' + new URLSearchParams(params).toString()
            },
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName
            },
            merge: (currentCache, newResponse, otherArgs) => {
                if (otherArgs.arg.cursor === '0') {
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

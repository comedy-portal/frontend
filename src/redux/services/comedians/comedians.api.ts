import { api } from '@/redux/services/api'

import { GetComedianBySlugResponse, GetComediansParams, GetComediansResponse } from './comedians.types'

export const comediansAPI = api.injectEndpoints({
    endpoints: build => ({
        getComedians: build.query<GetComediansResponse, GetComediansParams>({
            query: params => ({
                url: 'comedians',
                method: 'GET',
                params,
            }),
            serializeQueryArgs: ({ queryArgs }) => {
                return JSON.stringify({
                    sort_by: queryArgs.sort_by,
                    order: queryArgs.order,
                    take: queryArgs.take,
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
            providesTags: () => [{ type: 'Comedians', id: 'LIST' }],
        }),
        getComedianBySlug: build.query<GetComedianBySlugResponse, string>({
            query: slug => ({
                url: `comedians/${slug}`,
                method: 'GET',
            }),
            providesTags: (result, error, slug) => [{ type: 'Comedians', id: result?.id }],
        }),
    }),
    overrideExisting: false,
})

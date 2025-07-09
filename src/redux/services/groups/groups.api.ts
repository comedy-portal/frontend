import { api } from '@/redux/services/api'

import { GetGroupsParams, GetGroupsResponse } from './groups.types'

export const groupsAPI = api.injectEndpoints({
    endpoints: build => ({
        getGroups: build.query<GetGroupsResponse, GetGroupsParams>({
            query: params => ({
                url: 'groups',
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
            providesTags: () => [{ type: 'Groups', id: 'LIST' }],
        }),
    }),
    overrideExisting: false,
})

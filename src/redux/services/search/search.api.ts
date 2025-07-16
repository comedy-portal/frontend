import { api } from '@/redux/services/api'

import { SearchParams, SearchResponse } from './search.types'

export const searchAPI = api.injectEndpoints({
    endpoints: build => ({
        search: build.query<SearchResponse, SearchParams>({
            query: params => ({
                url: 'search',
                params,
            }),
        }),
    }),
    overrideExisting: false,
})

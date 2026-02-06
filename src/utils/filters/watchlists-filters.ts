import { parseRating, parseTypes } from '@/utils/helpers/filters'

import { ContentType } from '../enums/common'

export enum WatchlistsUrlSortBy {
    DATE_DESC = 'date_desc',
    RATING_DESC = 'rating_desc',
    SAVED_AT_DESC = 'saved_at_desc',
}

export interface WatchlistsFiltersState {
    sort: WatchlistsUrlSortBy
    min_rating: number
    max_rating: number
    types: ContentType[]
}

export const DEFAULT_WATCHLISTS_FILTERS: WatchlistsFiltersState = {
    sort: WatchlistsUrlSortBy.SAVED_AT_DESC,
    min_rating: 0,
    max_rating: 10,
    types: [],
}

const VALID_WATCHLISTS_SORTS = new Set<WatchlistsUrlSortBy>([
    WatchlistsUrlSortBy.DATE_DESC,
    WatchlistsUrlSortBy.RATING_DESC,
    WatchlistsUrlSortBy.SAVED_AT_DESC,
])

export function parseWatchlistsFiltersFromSearchParams(params: URLSearchParams): WatchlistsFiltersState {
    const sortParam = params.get('sort') as WatchlistsUrlSortBy | null
    const sort = sortParam && VALID_WATCHLISTS_SORTS.has(sortParam) ? sortParam : DEFAULT_WATCHLISTS_FILTERS.sort

    return {
        sort,
        min_rating: parseRating(params.get('min_rating'), DEFAULT_WATCHLISTS_FILTERS.min_rating),
        max_rating: parseRating(params.get('max_rating'), DEFAULT_WATCHLISTS_FILTERS.max_rating),
        types: parseTypes(params.get('types')),
    }
}
export function buildWatchlistsFiltersQueryString(filters: WatchlistsFiltersState): string {
    const params = new URLSearchParams()

    if (filters.sort !== DEFAULT_WATCHLISTS_FILTERS.sort) params.set('sort', filters.sort)

    if (filters.min_rating !== DEFAULT_WATCHLISTS_FILTERS.min_rating)
        params.set('min_rating', String(filters.min_rating))

    if (filters.max_rating !== DEFAULT_WATCHLISTS_FILTERS.max_rating)
        params.set('max_rating', String(filters.max_rating))

    if (filters.types.length > 0) params.set('types', filters.types.join(','))

    return params.toString()
}

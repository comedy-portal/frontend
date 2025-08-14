export enum WatchlistsUrlSortBy {
    DATE_DESC = 'date_desc',
    RATING_DESC = 'rating_desc',
    SAVED_AT_DESC = 'saved_at_desc',
}

export interface WatchlistsFiltersState {
    sort: WatchlistsUrlSortBy
    min_rating: number
    max_rating: number
}

export const DEFAULT_WATCHLISTS_FILTERS: WatchlistsFiltersState = {
    sort: WatchlistsUrlSortBy.DATE_DESC,
    min_rating: 0,
    max_rating: 10,
}

const VALID_WATCHLISTS_SORTS = new Set<WatchlistsUrlSortBy>([
    WatchlistsUrlSortBy.DATE_DESC,
    WatchlistsUrlSortBy.RATING_DESC,
    WatchlistsUrlSortBy.SAVED_AT_DESC,
])

function parseRating(value: string | null, defaultValue: number): number {
    if (value === null) return defaultValue
    const num = Number(value)
    if (isNaN(num)) return defaultValue
    if (num < 0) return 0
    if (num > 10) return 10
    return num
}

export function parseWatchlistsFiltersFromSearchParams(params: URLSearchParams): WatchlistsFiltersState {
    const sortParam = params.get('sort') as WatchlistsUrlSortBy | null
    const sort = sortParam && VALID_WATCHLISTS_SORTS.has(sortParam) ? sortParam : DEFAULT_WATCHLISTS_FILTERS.sort

    return {
        sort,
        min_rating: parseRating(params.get('min_rating'), DEFAULT_WATCHLISTS_FILTERS.min_rating),
        max_rating: parseRating(params.get('max_rating'), DEFAULT_WATCHLISTS_FILTERS.max_rating),
    }
}

export function buildWatchlistsFiltersQueryString(filters: WatchlistsFiltersState): string {
    const params = new URLSearchParams()

    if (filters.sort !== DEFAULT_WATCHLISTS_FILTERS.sort) params.set('sort', filters.sort)
    if (filters.min_rating !== DEFAULT_WATCHLISTS_FILTERS.min_rating)
        params.set('min_rating', String(filters.min_rating))
    if (filters.max_rating !== DEFAULT_WATCHLISTS_FILTERS.max_rating)
        params.set('max_rating', String(filters.max_rating))

    return params.toString()
}

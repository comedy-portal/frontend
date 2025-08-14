export enum WatchlistUrlSortBy {
    DATE_DESC = 'date_desc',
    DATE_ASC = 'date_asc',
    RATING_DESC = 'rating_desc',
}

export interface WatchlistFiltersState {
    sort: WatchlistUrlSortBy
}

export const DEFAULT_WATCHLIST_FILTERS: WatchlistFiltersState = {
    sort: WatchlistUrlSortBy.DATE_DESC,
}

// prettier-ignore
const VALID_SORTS = new Set([
    WatchlistUrlSortBy.DATE_DESC,
    WatchlistUrlSortBy.DATE_ASC,
    WatchlistUrlSortBy.RATING_DESC,
])

export function parseWatchlistFilters(params: URLSearchParams): WatchlistFiltersState {
    const sort = params.get('sort') as WatchlistUrlSortBy
    return {
        sort: VALID_SORTS.has(sort) ? sort : DEFAULT_WATCHLIST_FILTERS.sort,
    }
}

export function buildWatchlistFilters(filters: WatchlistFiltersState): string {
    const params = new URLSearchParams()
    if (filters.sort !== DEFAULT_WATCHLIST_FILTERS.sort) params.set('sort', filters.sort)
    return params.toString()
}

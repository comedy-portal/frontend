import { ContentUrlSortBy } from '@/utils/enums/common'

export interface SortFiltersState {
    sort: ContentUrlSortBy
    min_rating: number
    max_rating: number
}

export const DEFAULT_SORT_FILTERS: SortFiltersState = {
    sort: ContentUrlSortBy.DATE_DESC,
    min_rating: 0,
    max_rating: 10,
}

// prettier-ignore
const VALID_SORTS = new Set([
    ContentUrlSortBy.DATE_DESC,
    ContentUrlSortBy.DATE_ASC,
    ContentUrlSortBy.RATING_DESC,
])

export function parseRating(value: string | null, defaultValue: number): number {
    if (value === null) return defaultValue
    const num = Number(value)
    if (isNaN(num)) return defaultValue
    if (num < 0) return 0
    if (num > 10) return 10
    return num
}

export function parseSortFiltersFromSearchParams(params: URLSearchParams): SortFiltersState {
    const sort = params.get('sort') as ContentUrlSortBy

    const min_rating = parseRating(params.get('min_rating'), DEFAULT_SORT_FILTERS.min_rating)
    const max_rating = parseRating(params.get('max_rating'), DEFAULT_SORT_FILTERS.max_rating)

    return {
        sort: VALID_SORTS.has(sort) ? sort : DEFAULT_SORT_FILTERS.sort,
        min_rating,
        max_rating,
    }
}

export function buildSortFiltersQueryString(filters: SortFiltersState): string {
    const params = new URLSearchParams()

    if (filters.sort !== DEFAULT_SORT_FILTERS.sort) {
        params.set('sort', filters.sort)
    }

    if (filters.min_rating !== DEFAULT_SORT_FILTERS.min_rating) {
        params.set('min_rating', String(filters.min_rating))
    }

    if (filters.max_rating !== DEFAULT_SORT_FILTERS.max_rating) {
        params.set('max_rating', String(filters.max_rating))
    }

    return params.toString()
}

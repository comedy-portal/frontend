export enum ContentUrlSortBy {
    DATE_DESC = 'date_desc',
    RATING_DESC = 'rating_desc',
}

export interface ContentFiltersState {
    sort: ContentUrlSortBy
    min_rating: number
    max_rating: number
}

export const DEFAULT_CONTENT_FILTERS: ContentFiltersState = {
    sort: ContentUrlSortBy.DATE_DESC,
    min_rating: 0,
    max_rating: 10,
}

// prettier-ignore
const VALID_SORTS = new Set([
    ContentUrlSortBy.DATE_DESC,
    ContentUrlSortBy.RATING_DESC,
])

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n))

export function parseContentFilters(params: URLSearchParams): ContentFiltersState {
    const sort = params.get('sort') as ContentUrlSortBy
    const minRaw = Number(params.get('min_rating'))
    const maxRaw = Number(params.get('max_rating'))

    const min_rating = Number.isFinite(minRaw) ? clamp(minRaw, 0, 10) : DEFAULT_CONTENT_FILTERS.min_rating

    const max_rating = Number.isFinite(maxRaw) ? clamp(maxRaw, 0, 10) : DEFAULT_CONTENT_FILTERS.max_rating

    return {
        sort: VALID_SORTS.has(sort) ? sort : DEFAULT_CONTENT_FILTERS.sort,
        min_rating,
        max_rating,
    }
}

export function buildContentFilters(filters: ContentFiltersState): string {
    const params = new URLSearchParams()

    if (filters.sort !== DEFAULT_CONTENT_FILTERS.sort) params.set('sort', filters.sort)
    if (filters.min_rating !== DEFAULT_CONTENT_FILTERS.min_rating) params.set('min_rating', String(filters.min_rating))
    if (filters.max_rating !== DEFAULT_CONTENT_FILTERS.max_rating) params.set('max_rating', String(filters.max_rating))

    return params.toString()
}

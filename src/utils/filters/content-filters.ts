import { parseRating, parseWithText } from '@/utils/helpers/filters'

export enum ContentUrlSortBy {
    DATE_DESC = 'date_desc',
    DATE_ASC = 'date_asc',
    RATING_DESC = 'rating_desc',
    RATING_ASC = 'rating_asc',
}

export interface ContentFiltersState {
    sort: ContentUrlSortBy
    min_rating: number
    max_rating: number
    year?: number
    not_watched: boolean
}

export const DEFAULT_CONTENT_FILTERS: ContentFiltersState = {
    sort: ContentUrlSortBy.DATE_DESC,
    min_rating: 0,
    max_rating: 10,
    year: undefined,
    not_watched: false,
}

const VALID_CONTENT_SORTS = new Set<ContentUrlSortBy>([
    ContentUrlSortBy.DATE_DESC,
    ContentUrlSortBy.DATE_ASC,
    ContentUrlSortBy.RATING_DESC,
    ContentUrlSortBy.RATING_ASC,
])

export function parseContentFiltersFromSearchParams(params: URLSearchParams): ContentFiltersState {
    const sortParam = params.get('sort') as ContentUrlSortBy | null
    const sort = sortParam && VALID_CONTENT_SORTS.has(sortParam) ? sortParam : DEFAULT_CONTENT_FILTERS.sort

    const yearParam = params.get('year')
    const year = yearParam !== null ? Number(yearParam) : undefined

    return {
        sort,
        min_rating: parseRating(params.get('min_rating'), DEFAULT_CONTENT_FILTERS.min_rating),
        max_rating: parseRating(params.get('max_rating'), DEFAULT_CONTENT_FILTERS.max_rating),
        year: !isNaN(year as number) ? (year as number) : undefined,
        not_watched: parseWithText(params.get('not_watched'), DEFAULT_CONTENT_FILTERS.not_watched),
    }
}

export function buildContentFiltersQueryString(filters: ContentFiltersState): string {
    const params = new URLSearchParams()

    if (filters.sort !== DEFAULT_CONTENT_FILTERS.sort) params.set('sort', filters.sort)
    if (filters.min_rating !== DEFAULT_CONTENT_FILTERS.min_rating) params.set('min_rating', String(filters.min_rating))
    if (filters.max_rating !== DEFAULT_CONTENT_FILTERS.max_rating) params.set('max_rating', String(filters.max_rating))
    if (filters.year !== undefined) params.set('year', String(filters.year))
    if (filters.not_watched !== DEFAULT_CONTENT_FILTERS.not_watched)
        params.set('not_watched', String(filters.not_watched))

    return params.toString()
}

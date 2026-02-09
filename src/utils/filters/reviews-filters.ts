import { ContentType } from '@/utils/enums/common'
import { parseTypes, parseWithText, parseYear } from '@/utils/helpers/filters'

export enum ReviewsUrlSortBy {
    DATE_DESC = 'date_desc',
    DATE_ASC = 'date_asc',
    MARK_DESC = 'mark_desc',
    MARK_ASC = 'mark_asc',
}

export interface ReviewsFiltersState {
    sort: ReviewsUrlSortBy
    types: ContentType[]
    content_min_year?: number
    content_max_year?: number
    with_text: boolean
}

export const DEFAULT_REVIEWS_FILTERS: ReviewsFiltersState = {
    sort: ReviewsUrlSortBy.DATE_DESC,
    types: [],
    content_min_year: undefined,
    content_max_year: undefined,
    with_text: false,
}

const VALID_REVIEWS_SORTS = new Set<ReviewsUrlSortBy>([
    ReviewsUrlSortBy.DATE_DESC,
    ReviewsUrlSortBy.DATE_ASC,
    ReviewsUrlSortBy.MARK_DESC,
    ReviewsUrlSortBy.MARK_ASC,
])

export function parseReviewsFiltersFromSearchParams(params: URLSearchParams): ReviewsFiltersState {
    const sortParam = params.get('sort') as ReviewsUrlSortBy | null
    const sort = sortParam && VALID_REVIEWS_SORTS.has(sortParam) ? sortParam : DEFAULT_REVIEWS_FILTERS.sort

    return {
        sort,
        types: parseTypes(params.get('types')),
        content_min_year: parseYear(params.get('content_min_year'), DEFAULT_REVIEWS_FILTERS.content_min_year, 1900),
        content_max_year: parseYear(params.get('content_max_year'), DEFAULT_REVIEWS_FILTERS.content_max_year, 1900),
        with_text: parseWithText(params.get('with_text'), DEFAULT_REVIEWS_FILTERS.with_text),
    }
}

export function buildReviewsFiltersQueryString(filters: ReviewsFiltersState): string {
    const params = new URLSearchParams()

    if (filters.sort !== DEFAULT_REVIEWS_FILTERS.sort) params.set('sort', filters.sort)
    if (filters.types.length > 0) params.set('types', filters.types.join(','))
    if (filters.content_min_year !== DEFAULT_REVIEWS_FILTERS.content_min_year)
        params.set('content_min_year', String(filters.content_min_year))
    if (filters.content_max_year !== DEFAULT_REVIEWS_FILTERS.content_max_year)
        params.set('content_max_year', String(filters.content_max_year))
    if (filters.with_text !== DEFAULT_REVIEWS_FILTERS.with_text) params.set('with_text', String(filters.with_text))

    return params.toString()
}

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
    min_year?: number
    max_year?: number
    with_text: boolean
}

export const DEFAULT_REVIEWS_FILTERS: ReviewsFiltersState = {
    sort: ReviewsUrlSortBy.DATE_DESC,
    types: [],
    min_year: undefined,
    max_year: undefined,
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
        min_year: parseYear(params.get('min_year'), DEFAULT_REVIEWS_FILTERS.min_year, 1900),
        max_year: parseYear(params.get('max_year'), DEFAULT_REVIEWS_FILTERS.max_year, 1900),
        with_text: parseWithText(params.get('with_text'), DEFAULT_REVIEWS_FILTERS.with_text),
    }
}

export function buildReviewsFiltersQueryString(filters: ReviewsFiltersState): string {
    const params = new URLSearchParams()

    if (filters.sort !== DEFAULT_REVIEWS_FILTERS.sort) params.set('sort', filters.sort)
    if (filters.types.length > 0) params.set('types', filters.types.join(','))
    if (filters.min_year !== DEFAULT_REVIEWS_FILTERS.min_year) params.set('min_year', String(filters.min_year))
    if (filters.max_year !== DEFAULT_REVIEWS_FILTERS.max_year) params.set('max_year', String(filters.max_year))
    if (filters.with_text !== DEFAULT_REVIEWS_FILTERS.with_text) params.set('with_text', String(filters.with_text))

    return params.toString()
}

export enum ReviewsUrlSortBy {
    DATE_DESC = 'date_desc',
    DATE_ASC = 'date_asc',
    MARK_DESC = 'mark_desc',
    MARK_ASC = 'mark_asc',
}

export interface ReviewsFiltersState {
    sort: ReviewsUrlSortBy
    with_text: boolean
}

export const DEFAULT_REVIEWS_FILTERS: ReviewsFiltersState = {
    sort: ReviewsUrlSortBy.DATE_DESC,
    with_text: false,
}

const VALID_REVIEWS_SORTS = new Set<ReviewsUrlSortBy>([
    ReviewsUrlSortBy.DATE_DESC,
    ReviewsUrlSortBy.DATE_ASC,
    ReviewsUrlSortBy.MARK_DESC,
    ReviewsUrlSortBy.MARK_ASC,
])

function parseWithText(value: string | null, defaultValue: boolean): boolean {
    if (value === null) return defaultValue
    return value === 'true'
}

export function parseReviewsFiltersFromSearchParams(params: URLSearchParams): ReviewsFiltersState {
    const sortParam = params.get('sort') as ReviewsUrlSortBy | null
    const sort = sortParam && VALID_REVIEWS_SORTS.has(sortParam) ? sortParam : DEFAULT_REVIEWS_FILTERS.sort

    return {
        sort,
        with_text: parseWithText(params.get('with_text'), DEFAULT_REVIEWS_FILTERS.with_text),
    }
}

export function buildReviewsFiltersQueryString(filters: ReviewsFiltersState): string {
    const params = new URLSearchParams()

    if (filters.sort !== DEFAULT_REVIEWS_FILTERS.sort) params.set('sort', filters.sort)
    if (filters.with_text !== DEFAULT_REVIEWS_FILTERS.with_text) params.set('with_text', String(filters.with_text))
    return params.toString()
}

import { ContentUrlSortBy } from '@/utils/enums/common'

export interface SortFiltersState {
    sort: ContentUrlSortBy
}

export const DEFAULT_SORT_FILTERS: SortFiltersState = {
    sort: ContentUrlSortBy.DATE_DESC,
}

// prettier-ignore
const VALID_SORTS = new Set([
    ContentUrlSortBy.DATE_DESC,
    ContentUrlSortBy.DATE_ASC,
    ContentUrlSortBy.RATING_DESC,
])

export function parseSortFiltersFromSearchParams(params: URLSearchParams): SortFiltersState {
    const sort = params.get('sort') as ContentUrlSortBy

    return {
        sort: VALID_SORTS.has(sort) ? sort : DEFAULT_SORT_FILTERS.sort,
    }
}

export function buildSortFiltersQueryString(filters: SortFiltersState): string {
    const params = new URLSearchParams()

    if (filters.sort !== DEFAULT_SORT_FILTERS.sort) {
        params.set('sort', filters.sort)
    }

    return params.toString()
}

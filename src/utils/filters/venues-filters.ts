export enum VenuesUrlSortBy {
    NAME_DESC = 'name_desc',
    CITY_DESC = 'city_desc',
}

export interface VenuesFiltersState {
    sort: VenuesUrlSortBy
}

export const DEFAULT_CONTENT_FILTERS: VenuesFiltersState = {
    sort: VenuesUrlSortBy.NAME_DESC,
}

const VALID_CONTENT_SORTS = new Set<VenuesUrlSortBy>([VenuesUrlSortBy.NAME_DESC, VenuesUrlSortBy.CITY_DESC])

export function parseVenuesFiltersFromSearchParams(params: URLSearchParams): VenuesFiltersState {
    const sortParam = params.get('sort') as VenuesUrlSortBy | null
    const sort = sortParam && VALID_CONTENT_SORTS.has(sortParam) ? sortParam : DEFAULT_CONTENT_FILTERS.sort

    return {
        sort,
    }
}

export function buildVenuesFiltersQueryString(filters: VenuesFiltersState): string {
    const params = new URLSearchParams()

    if (filters.sort !== DEFAULT_CONTENT_FILTERS.sort) params.set('sort', filters.sort)

    return params.toString()
}

import { parseCity } from '../helpers/filters'

export enum VenuesUrlSortBy {
    NAME_ASC = 'name_asc',
    CITY_ASC = 'city_asc',
}

export interface VenuesFiltersState {
    sort: VenuesUrlSortBy
    city?: string
}

export const DEFAULT_VENUES_FILTERS: VenuesFiltersState = {
    sort: VenuesUrlSortBy.NAME_ASC,
    city: undefined,
}

const VALID_VENUES_SORTS = new Set<VenuesUrlSortBy>([VenuesUrlSortBy.NAME_ASC, VenuesUrlSortBy.CITY_ASC])

export function parseVenuesFiltersFromSearchParams(params: URLSearchParams): VenuesFiltersState {
    const sortParam = params.get('sort') as VenuesUrlSortBy | null
    const sort = sortParam && VALID_VENUES_SORTS.has(sortParam) ? sortParam : DEFAULT_VENUES_FILTERS.sort
    const city = parseCity(params.get('city'), DEFAULT_VENUES_FILTERS.city)

    return {
        sort,
        city,
    }
}

export function buildVenuesFiltersQueryString(filters: VenuesFiltersState): string {
    const params = new URLSearchParams()

    if (filters.sort !== DEFAULT_VENUES_FILTERS.sort) {
        params.set('sort', filters.sort)
    }

    if (filters.city && filters.city !== DEFAULT_VENUES_FILTERS.city) {
        params.set('city', filters.city)
    }

    return params.toString()
}

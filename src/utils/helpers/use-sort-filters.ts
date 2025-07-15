import { useRouter, useSearchParams } from 'next/navigation'

import {
    SortFiltersState,
    buildSortFiltersQueryString,
    parseSortFiltersFromSearchParams,
} from '@/utils/helpers/sort-filters'

export const useSortFilters = (): [SortFiltersState, (filters: SortFiltersState) => void] => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const currentFilters = parseSortFiltersFromSearchParams(searchParams)

    const setFiltersToUrl = (filters: SortFiltersState) => {
        const newQuery = buildSortFiltersQueryString(filters)
        router.push(`?${newQuery}`)
    }

    return [currentFilters, setFiltersToUrl]
}

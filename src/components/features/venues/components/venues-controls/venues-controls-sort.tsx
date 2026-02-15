'use client'

import { Dropdown } from '@/components/ui/dropdown'
import { useQueryFilters } from '@/utils/filters/use-query-filters'
import {
    VenuesUrlSortBy,
    buildVenuesFiltersQueryString,
    parseVenuesFiltersFromSearchParams,
} from '@/utils/filters/venues-filters'

const SORT_OPTIONS = [
    { label: 'По названию', value: VenuesUrlSortBy.NAME_DESC },
    { label: 'По городу', value: VenuesUrlSortBy.CITY_DESC },
]

export const VenuesControlsSort = () => {
    const [filters, setFilters] = useQueryFilters(parseVenuesFiltersFromSearchParams, buildVenuesFiltersQueryString)

    const activeSortOption = SORT_OPTIONS.find(option => option.value === filters.sort) ?? SORT_OPTIONS[0]

    return (
        <Dropdown
            activeOption={activeSortOption.label}
            items={SORT_OPTIONS.map(option => ({
                label: option.label,
                onClick: () => {
                    setFilters({
                        ...filters,
                        sort: option.value,
                    })
                },
            }))}
        />
    )
}

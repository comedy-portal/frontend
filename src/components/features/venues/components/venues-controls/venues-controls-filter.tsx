'use client'

import { VenuesFilter } from '@/components/features/dialogs/filters/venues-filters/venues-filter'
import { FilterButton } from '@/components/ui/filter-button'
import { useQueryFilters } from '@/utils/filters/use-query-filters'
import {
    DEFAULT_VENUES_FILTERS,
    buildVenuesFiltersQueryString,
    parseVenuesFiltersFromSearchParams,
} from '@/utils/filters/venues-filters'

export const VenuesControlsFilter = () => {
    const [filters] = useQueryFilters(parseVenuesFiltersFromSearchParams, buildVenuesFiltersQueryString)

    return <FilterButton filterComponent={<VenuesFilter />} isActive={filters.city !== DEFAULT_VENUES_FILTERS.city} />
}

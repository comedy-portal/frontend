'use client'

import { WatchlistsFilter } from '@/components/features/dialogs/filters/watchlists-filter/watchlists-filter'
import { FilterButton } from '@/components/ui/filter-button'
import { useQueryFilters } from '@/utils/filters/use-query-filters'
import {
    DEFAULT_WATCHLISTS_FILTERS,
    buildWatchlistsFiltersQueryString,
    parseWatchlistsFiltersFromSearchParams,
} from '@/utils/filters/watchlists-filters'

export const UserWatchlistsControlsFilter = () => {
    const [filters] = useQueryFilters(parseWatchlistsFiltersFromSearchParams, buildWatchlistsFiltersQueryString)

    return (
        <FilterButton
            filterComponent={<WatchlistsFilter />}
            isActive={
                filters.min_rating !== DEFAULT_WATCHLISTS_FILTERS.min_rating ||
                filters.max_rating !== DEFAULT_WATCHLISTS_FILTERS.max_rating ||
                filters.types.length > 0
            }
        />
    )
}

'use client'

import { WatchlistsFilters } from '@/components/features/dialogs/filters/watchlists-filters/watchlists-filters'
import { FiltersButton } from '@/components/ui/filters-button'
import { useQueryFilters } from '@/utils/filters/use-query-filters'
import {
    DEFAULT_WATCHLISTS_FILTERS,
    buildWatchlistsFiltersQueryString,
    parseWatchlistsFiltersFromSearchParams,
} from '@/utils/filters/watchlists-filters'

export const WatchlistFiltersButton = () => {
    const [filters] = useQueryFilters(parseWatchlistsFiltersFromSearchParams, buildWatchlistsFiltersQueryString)

    const hasActiveFilters =
        filters.min_rating !== DEFAULT_WATCHLISTS_FILTERS.min_rating ||
        filters.max_rating !== DEFAULT_WATCHLISTS_FILTERS.max_rating

    return <FiltersButton filterComponent={<WatchlistsFilters />} isActive={hasActiveFilters} />
}

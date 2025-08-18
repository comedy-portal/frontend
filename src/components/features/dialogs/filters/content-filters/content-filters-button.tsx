'use client'

import { ContentFilters } from '@/components/features/dialogs/filters/content-filters/content-filters'
import { FiltersButton } from '@/components/ui/filters-button'
import {
    DEFAULT_CONTENT_FILTERS,
    buildContentFiltersQueryString,
    parseContentFiltersFromSearchParams,
} from '@/utils/filters/content-filters'
import { useQueryFilters } from '@/utils/filters/use-query-filters'

export const ContentFiltersButton = () => {
    const [filters] = useQueryFilters(parseContentFiltersFromSearchParams, buildContentFiltersQueryString)

    const hasActiveFilters =
        filters.sort !== DEFAULT_CONTENT_FILTERS.sort ||
        filters.min_rating !== DEFAULT_CONTENT_FILTERS.min_rating ||
        filters.max_rating !== DEFAULT_CONTENT_FILTERS.max_rating

    return <FiltersButton filterComponent={<ContentFilters />} isActive={hasActiveFilters} />
}

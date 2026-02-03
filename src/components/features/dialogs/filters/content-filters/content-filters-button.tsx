'use client'

import { ContentFilters } from '@/components/features/dialogs/filters/content-filters/content-filters'
import { FiltersButton } from '@/components/ui/filters-button'
import {
    DEFAULT_CONTENT_FILTERS,
    buildContentFiltersQueryString,
    parseContentFiltersFromSearchParams,
} from '@/utils/filters/content-filters'
import { useQueryFilters } from '@/utils/filters/use-query-filters'

type ContentFiltersButtonProps = {
    isAuth: boolean
}

export const ContentFiltersButton = ({ isAuth }: ContentFiltersButtonProps) => {
    const [filters] = useQueryFilters(parseContentFiltersFromSearchParams, buildContentFiltersQueryString)

    const hasActiveFilters =
        filters.min_rating !== DEFAULT_CONTENT_FILTERS.min_rating ||
        filters.max_rating !== DEFAULT_CONTENT_FILTERS.max_rating ||
        filters.not_watched !== DEFAULT_CONTENT_FILTERS.not_watched

    return <FiltersButton filterComponent={<ContentFilters isAuth={isAuth} />} isActive={hasActiveFilters} />
}

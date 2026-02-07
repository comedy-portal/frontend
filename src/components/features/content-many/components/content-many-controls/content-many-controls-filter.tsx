'use client'

import { ContentFilters } from '@/components/features/dialogs/filters/content-filters/content-filters'
import { FilterButton } from '@/components/ui/filter-button'
import {
    DEFAULT_CONTENT_FILTERS,
    buildContentFiltersQueryString,
    parseContentFiltersFromSearchParams,
} from '@/utils/filters/content-filters'
import { useQueryFilters } from '@/utils/filters/use-query-filters'

type ContentManyControlsFilterProps = {
    currentYear: number
    isAuth: boolean
}

export const ContentManyControlsFilter = ({ currentYear, isAuth }: ContentManyControlsFilterProps) => {
    const [filters] = useQueryFilters(parseContentFiltersFromSearchParams, buildContentFiltersQueryString)

    return (
        <FilterButton
            filterComponent={<ContentFilters currentYear={currentYear} isAuth={isAuth} />}
            isActive={
                filters.min_year !== DEFAULT_CONTENT_FILTERS.min_year ||
                filters.max_year !== DEFAULT_CONTENT_FILTERS.max_year ||
                filters.min_rating !== DEFAULT_CONTENT_FILTERS.min_rating ||
                filters.max_rating !== DEFAULT_CONTENT_FILTERS.max_rating ||
                filters.not_watched !== DEFAULT_CONTENT_FILTERS.not_watched
            }
        />
    )
}

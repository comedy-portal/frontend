'use client'

import { ReviewsFilter } from '@/components/features/dialogs/filters/reviews-filter/reviews-filters'
import { FilterButton } from '@/components/ui/filter-button'
import {
    DEFAULT_REVIEWS_FILTERS,
    buildReviewsFiltersQueryString,
    parseReviewsFiltersFromSearchParams,
} from '@/utils/filters/reviews-filters'
import { useQueryFilters } from '@/utils/filters/use-query-filters'

export const UserReviewsControlsFilter = () => {
    const [filters] = useQueryFilters(parseReviewsFiltersFromSearchParams, buildReviewsFiltersQueryString)

    return (
        <FilterButton
            filterComponent={<ReviewsFilter />}
            isActive={filters.with_text !== DEFAULT_REVIEWS_FILTERS.with_text || filters.types.length > 0}
        />
    )
}

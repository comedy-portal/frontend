'use client'

import { ReviewsFilter } from '@/components/features/dialogs/filters/reviews-filter/reviews-filters'
import { FilterButton } from '@/components/ui/filter-button'
import {
    DEFAULT_REVIEWS_FILTERS,
    buildReviewsFiltersQueryString,
    parseReviewsFiltersFromSearchParams,
} from '@/utils/filters/reviews-filters'
import { useQueryFilters } from '@/utils/filters/use-query-filters'

type UserReviewsControlsFilterProps = {
    currentYear: number
}

export const UserReviewsControlsFilter = ({ currentYear }: UserReviewsControlsFilterProps) => {
    const [filters] = useQueryFilters(parseReviewsFiltersFromSearchParams, buildReviewsFiltersQueryString)

    return (
        <FilterButton
            filterComponent={<ReviewsFilter currentYear={currentYear} />}
            isActive={
                filters.types.length > 0 ||
                filters.min_year !== DEFAULT_REVIEWS_FILTERS.min_year ||
                filters.max_year !== DEFAULT_REVIEWS_FILTERS.max_year ||
                filters.with_text !== DEFAULT_REVIEWS_FILTERS.with_text
            }
        />
    )
}

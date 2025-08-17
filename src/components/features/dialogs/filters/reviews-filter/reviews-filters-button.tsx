'use client'

import { FiltersButton } from '@/components/ui/filters-button'
import {
    DEFAULT_REVIEWS_FILTERS,
    buildReviewsFiltersQueryString,
    parseReviewsFiltersFromSearchParams,
} from '@/utils/filters/reviews-filters'
import { useQueryFilters } from '@/utils/filters/use-query-filters'

import { ReviewsFilters } from './reviews-filters'

export const ReviewsFiltersButton = () => {
    const [filters] = useQueryFilters(parseReviewsFiltersFromSearchParams, buildReviewsFiltersQueryString)

    const hasActiveFilters =
        filters.sort !== DEFAULT_REVIEWS_FILTERS.sort || filters.with_text !== DEFAULT_REVIEWS_FILTERS.with_text

    return <FiltersButton filterComponent={<ReviewsFilters />} isActive={hasActiveFilters} />
}

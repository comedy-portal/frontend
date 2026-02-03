'use client'

import { Dropdown } from '@/components/ui/dropdown'
import {
    ReviewsUrlSortBy,
    buildReviewsFiltersQueryString,
    parseReviewsFiltersFromSearchParams,
} from '@/utils/filters/reviews-filters'
import { useQueryFilters } from '@/utils/filters/use-query-filters'

const SORT_OPTIONS = [
    { label: 'Сначала новые', value: ReviewsUrlSortBy.DATE_DESC },
    { label: 'Сначала старые', value: ReviewsUrlSortBy.DATE_ASC },
    { label: 'По убыванию оценки', value: ReviewsUrlSortBy.MARK_DESC },
    { label: 'По возрастанию оценки', value: ReviewsUrlSortBy.MARK_ASC },
]

export const UserReviewsControlsSort = () => {
    const [filters, setFilters] = useQueryFilters(parseReviewsFiltersFromSearchParams, buildReviewsFiltersQueryString)
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

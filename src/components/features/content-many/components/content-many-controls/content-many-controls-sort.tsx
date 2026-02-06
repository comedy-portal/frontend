'use client'

import { Dropdown } from '@/components/ui/dropdown'
import {
    ContentUrlSortBy,
    buildContentFiltersQueryString,
    parseContentFiltersFromSearchParams,
} from '@/utils/filters/content-filters'
import { useQueryFilters } from '@/utils/filters/use-query-filters'

const SORT_OPTIONS = [
    { label: 'Сначала новые', value: ContentUrlSortBy.DATE_DESC },
    { label: 'Сначала старые', value: ContentUrlSortBy.DATE_ASC },
    { label: 'По убыванию рейтинга', value: ContentUrlSortBy.RATING_DESC },
    { label: 'По возрастанию рейтинга', value: ContentUrlSortBy.RATING_ASC },
]

export const ContentManyControlsSort = () => {
    const [filters, setFilters] = useQueryFilters(parseContentFiltersFromSearchParams, buildContentFiltersQueryString)

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

'use client'

import { Dropdown } from '@/components/ui/dropdown'
import { useQueryFilters } from '@/utils/filters/use-query-filters'
import {
    WatchlistsUrlSortBy,
    buildWatchlistsFiltersQueryString,
    parseWatchlistsFiltersFromSearchParams,
} from '@/utils/filters/watchlists-filters'

const SORT_OPTIONS = [
    { label: 'По дате сохранения', value: WatchlistsUrlSortBy.SAVED_AT_DESC },
    { label: 'По дате премьеры', value: WatchlistsUrlSortBy.DATE_DESC },
    { label: 'По рейтингу', value: WatchlistsUrlSortBy.RATING_DESC },
]
type UserReviewsSortProps = {
    onChange?: (value?: number) => void
}

export const UserWatchlistsControlsSort = ({ onChange }: UserReviewsSortProps) => {
    const [filters, setFilters] = useQueryFilters(
        parseWatchlistsFiltersFromSearchParams,
        buildWatchlistsFiltersQueryString,
    )

    const activeSortOption = SORT_OPTIONS.find(option => option.value === filters.sort) ?? SORT_OPTIONS[0]

    return (
        <Dropdown
            activeOption={activeSortOption.label}
            items={SORT_OPTIONS.map(option => ({
                label: option.label,
                onClick: () => {
                    onChange?.()
                    setFilters({
                        ...filters,
                        sort: option.value,
                    })
                },
            }))}
        />
    )
}

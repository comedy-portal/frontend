import { useCallback, useState } from 'react'

import { Button } from '@/components/ui/forms/button'
import { ContentType } from '@/utils/enums/common'
import { useQueryFilters } from '@/utils/filters/use-query-filters'
import {
    DEFAULT_WATCHLISTS_FILTERS,
    WatchlistsFiltersState,
    buildWatchlistsFiltersQueryString,
    parseWatchlistsFiltersFromSearchParams,
} from '@/utils/filters/watchlists-filters'
import { useDialog } from '@/utils/providers/dialog-provider'

import { FilterByRating } from '../components/filter-by-rating'
import { FilterByTypes } from '../components/filter-by-types'

export const WatchlistsFilter = () => {
    const dialog = useDialog()

    const [initialFilters, setFiltersToUrl] = useQueryFilters(
        parseWatchlistsFiltersFromSearchParams,
        buildWatchlistsFiltersQueryString,
    )

    const [filters, setFilters] = useState<WatchlistsFiltersState>(initialFilters)

    const handleTypesChange = useCallback((types: ContentType[]) => {
        setFilters(prev => ({
            ...prev,
            types: types,
        }))
    }, [])

    const handleRatingChange = useCallback((values: readonly number[]) => {
        setFilters(prev => ({
            ...prev,
            min_rating: values[0],
            max_rating: values[1],
        }))
    }, [])

    const handleApply = useCallback(() => {
        setFiltersToUrl(filters)
        dialog.close()
    }, [filters, setFiltersToUrl, dialog])

    const handleReset = useCallback(() => {
        setFilters(prev => ({
            ...DEFAULT_WATCHLISTS_FILTERS,
            sort: prev.sort,
        }))
    }, [])

    return (
        <div className="w-full space-y-4 sm:w-104">
            <h1 className="text-lg font-bold">Фильтр</h1>
            <hr className="border-gray-950" />

            <div className="space-y-8">
                <div className="space-y-4">
                    <FilterByTypes value={filters.types} onChange={handleTypesChange} />

                    <FilterByRating
                        minRating={filters.min_rating}
                        maxRating={filters.max_rating}
                        onChange={handleRatingChange}
                    />
                </div>

                <div className="space-x-2">
                    <Button onClick={handleApply}>Применить</Button>
                    <Button variant="outline" onClick={handleReset}>
                        Сбросить
                    </Button>
                </div>
            </div>
        </div>
    )
}

import { useCallback, useState } from 'react'

import { Button } from '@/components/ui/forms/button'
import {
    ContentFiltersState,
    DEFAULT_CONTENT_FILTERS,
    buildContentFiltersQueryString,
    parseContentFiltersFromSearchParams,
} from '@/utils/filters/content-filters'
import { useQueryFilters } from '@/utils/filters/use-query-filters'
import { useDialog } from '@/utils/providers/dialog-provider'

import 'react-range-slider-input/dist/style.css'

import { FilterByDate } from '../components/filter-by-date'
import { FilterByNotWatched } from '../components/filter-by-not-watched'
import { FilterByRating } from '../components/filter-by-rating'

type ContentFiltersProps = {
    currentYear: number
    isAuth: boolean
}

export const ContentFilters = ({ currentYear, isAuth }: ContentFiltersProps) => {
    const dialog = useDialog()

    const [initialFilters, setFiltersToUrl] = useQueryFilters(
        parseContentFiltersFromSearchParams,
        buildContentFiltersQueryString,
    )

    const [filters, setFilters] = useState<ContentFiltersState>(initialFilters)

    const handleDateChange = useCallback((range: [number, number]) => {
        setFilters(prev => ({
            ...prev,
            min_year: range[0],
            max_year: range[1],
        }))
    }, [])

    const handleRatingChange = useCallback((values: readonly number[]) => {
        setFilters(prev => ({
            ...prev,
            min_rating: values[0],
            max_rating: values[1],
        }))
    }, [])

    const handleNotWatchedChange = useCallback((value: boolean) => {
        setFilters(prev => ({
            ...prev,
            not_watched: value,
        }))
    }, [])

    const handleApply = useCallback(() => {
        setFiltersToUrl(filters)
        dialog.close()
    }, [filters, setFiltersToUrl, dialog])

    const handleReset = useCallback(() => {
        setFilters(prev => ({
            ...DEFAULT_CONTENT_FILTERS,
            sort: prev.sort,
        }))
    }, [])

    return (
        <div className="w-full space-y-4 sm:w-104">
            <h1 className="text-lg font-bold">Фильтр</h1>
            <hr className="border-gray-950" />

            <div className="space-y-8">
                <div className="space-y-4">
                    <FilterByDate
                        currentYear={currentYear}
                        value={[filters.min_year, filters.max_year]}
                        onChange={handleDateChange}
                    />
                    <hr className="border-gray-300" />

                    <FilterByRating
                        minRating={filters.min_rating}
                        maxRating={filters.max_rating}
                        onChange={handleRatingChange}
                    />
                    <hr className="border-gray-300" />

                    <FilterByNotWatched
                        isChecked={filters.not_watched}
                        onChange={() => handleNotWatchedChange(!filters.not_watched)}
                    />
                    <hr className="border-gray-300" />
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

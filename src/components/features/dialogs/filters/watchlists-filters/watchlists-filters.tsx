import { useCallback, useState } from 'react'
import RangeSlider from 'react-range-slider-input'

import { Button } from '@/components/ui/forms/button'
import { useQueryFilters } from '@/utils/filters/use-query-filters'
import {
    DEFAULT_WATCHLISTS_FILTERS,
    WatchlistsFiltersState,
    buildWatchlistsFiltersQueryString,
    parseWatchlistsFiltersFromSearchParams,
} from '@/utils/filters/watchlists-filters'
import { useDialog } from '@/utils/providers/dialog-provider'

import 'react-range-slider-input/dist/style.css'

import { FiltersTypes } from '../components/filters-types'

export const WatchlistsFilters = () => {
    const dialog = useDialog()
    const [initialFilters, setFiltersToUrl] = useQueryFilters(
        parseWatchlistsFiltersFromSearchParams,
        buildWatchlistsFiltersQueryString,
    )
    const [filters, setFilters] = useState<WatchlistsFiltersState>(initialFilters)

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

    const handleRatingChange = useCallback((values: readonly number[]) => {
        setFilters(prev => ({
            ...prev,
            min_rating: values[0],
            max_rating: values[1],
        }))
    }, [])

    return (
        <div className="flex w-full flex-col gap-y-6 sm:w-104">
            <h1 className="text-2xl font-bold">Фильтр</h1>

            <div className="flex flex-col gap-y-4">
                <label className="font-bold">Тип контента:</label>
                <FiltersTypes
                    value={filters.types}
                    onChange={types =>
                        setFilters(prev => ({
                            ...prev,
                            types: types,
                        }))
                    }
                />
            </div>

            <div className="flex flex-col gap-y-4">
                <label className="font-bold">Общий рейтинг:</label>
                <div className="flex items-center justify-between gap-x-4">
                    <div>{filters.min_rating}</div>
                    <RangeSlider
                        min={0}
                        max={10}
                        step={1}
                        value={[filters.min_rating, filters.max_rating]}
                        className="range"
                        onInput={handleRatingChange}
                    />
                    <div>{filters.max_rating}</div>
                </div>
            </div>

            <div className="flex gap-x-2 pt-2">
                <Button onClick={handleApply}>Применить</Button>
                <Button variant="outline" onClick={handleReset}>
                    Сбросить
                </Button>
            </div>
        </div>
    )
}

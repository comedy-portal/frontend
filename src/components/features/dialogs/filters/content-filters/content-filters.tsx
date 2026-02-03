import { useCallback, useState } from 'react'
import RangeSlider from 'react-range-slider-input'

import { Button } from '@/components/ui/forms/button'
import { Switcher } from '@/components/ui/forms/switcher'
import {
    ContentFiltersState,
    DEFAULT_CONTENT_FILTERS,
    buildContentFiltersQueryString,
    parseContentFiltersFromSearchParams,
} from '@/utils/filters/content-filters'
import { useQueryFilters } from '@/utils/filters/use-query-filters'
import { useDialog } from '@/utils/providers/dialog-provider'

import 'react-range-slider-input/dist/style.css'

type ContentFiltersProps = {
    isAuth: boolean
}

export const ContentFilters = ({ isAuth }: ContentFiltersProps) => {
    const dialog = useDialog()
    const [initialFilters, setFiltersToUrl] = useQueryFilters(
        parseContentFiltersFromSearchParams,
        buildContentFiltersQueryString,
    )
    const [filters, setFilters] = useState<ContentFiltersState>(initialFilters)

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

    return (
        <div className="flex w-full flex-col gap-y-6 sm:w-104">
            <h1 className="text-2xl font-bold">Фильтр</h1>

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

            {isAuth && (
                <div className="flex items-center gap-x-2">
                    <Switcher
                        checked={filters.not_watched}
                        onChange={() => handleNotWatchedChange(!filters.not_watched)}
                    />
                    <div className="cursor-pointer" onClick={() => handleNotWatchedChange(!filters.not_watched)}>
                        Скрыть просмотренные
                    </div>
                </div>
            )}

            <div className="flex gap-x-2 pt-2">
                <Button onClick={handleApply}>Применить</Button>
                <Button variant="outline" onClick={handleReset}>
                    Сбросить
                </Button>
            </div>
        </div>
    )
}

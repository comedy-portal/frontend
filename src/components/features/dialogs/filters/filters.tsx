import { useCallback, useState } from 'react'
import RangeSlider from 'react-range-slider-input'

import { Button } from '@/components/ui/forms/button'
import { Radio } from '@/components/ui/forms/radio'
import { ContentUrlSortBy } from '@/utils/enums/common'
import { DEFAULT_SORT_FILTERS, SortFiltersState } from '@/utils/helpers/sort-filters'
import { useSortFilters } from '@/utils/helpers/use-sort-filters'
import { useDialog } from '@/utils/providers/dialog-provider'

import 'react-range-slider-input/dist/style.css'

const SORT_OPTIONS = [
    { label: 'Сначала новые', value: ContentUrlSortBy.DATE_DESC },
    { label: 'Сначала старые', value: ContentUrlSortBy.DATE_ASC },
    { label: 'По популярности', value: ContentUrlSortBy.RATING_DESC },
]

export const Filters = () => {
    const dialog = useDialog()
    const [initialFilters, setFiltersToUrl] = useSortFilters()
    const [filters, setFilters] = useState<SortFiltersState>(initialFilters)

    const handleApply = useCallback(() => {
        setFiltersToUrl(filters)
        dialog.close()
    }, [filters, setFiltersToUrl, dialog])

    const handleReset = useCallback(() => {
        setFilters(DEFAULT_SORT_FILTERS)
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

            <div className="flex flex-col gap-y-2">
                <label className="font-bold">Сортировать по:</label>
                {SORT_OPTIONS.map(option => (
                    <Radio
                        key={option.value}
                        name="sort"
                        value={option.value}
                        checked={filters.sort === option.value}
                        onChange={() => setFilters(prev => ({ ...prev, sort: option.value }))}
                    >
                        {option.label}
                    </Radio>
                ))}
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

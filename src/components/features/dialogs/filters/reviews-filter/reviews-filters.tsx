import { useCallback, useState } from 'react'

import { Button } from '@/components/ui/forms/button'
import { Switcher } from '@/components/ui/forms/switcher'
import {
    DEFAULT_REVIEWS_FILTERS,
    ReviewsFiltersState,
    buildReviewsFiltersQueryString,
    parseReviewsFiltersFromSearchParams,
} from '@/utils/filters/reviews-filters'
import { useQueryFilters } from '@/utils/filters/use-query-filters'
import { useDialog } from '@/utils/providers/dialog-provider'

import { FiltersTypes } from '../components/filters-types'

export const ReviewsFilters = () => {
    const dialog = useDialog()
    const [initialFilters, setFiltersToUrl] = useQueryFilters(
        parseReviewsFiltersFromSearchParams,
        buildReviewsFiltersQueryString,
    )
    const [filters, setFilters] = useState<ReviewsFiltersState>(initialFilters)

    const handleApply = useCallback(() => {
        setFiltersToUrl(filters)
        dialog.close()
    }, [filters, setFiltersToUrl, dialog])

    const handleReset = useCallback(() => {
        setFilters(prev => ({
            ...DEFAULT_REVIEWS_FILTERS,
            sort: prev.sort,
        }))
    }, [])

    const handleWithTextChange = useCallback((value: boolean) => {
        setFilters(prev => ({
            ...prev,
            with_text: value,
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

            <div className="flex items-center gap-x-2">
                <Switcher checked={filters.with_text} onChange={() => handleWithTextChange(!filters.with_text)} />
                <div className="cursor-pointer" onClick={() => handleWithTextChange(!filters.with_text)}>
                    Показать только с рецензиями
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

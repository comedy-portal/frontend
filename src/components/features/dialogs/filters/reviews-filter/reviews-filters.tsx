import { useCallback, useState } from 'react'

import { Button } from '@/components/ui/forms/button'
import { ContentType } from '@/utils/enums/common'
import {
    DEFAULT_REVIEWS_FILTERS,
    ReviewsFiltersState,
    buildReviewsFiltersQueryString,
    parseReviewsFiltersFromSearchParams,
} from '@/utils/filters/reviews-filters'
import { useQueryFilters } from '@/utils/filters/use-query-filters'
import { useDialog } from '@/utils/providers/dialog-provider'

import { FilterByDate } from '../components/filter-by-date'
import { FilterByTypes } from '../components/filter-by-types'
import { FilterByWithText } from '../components/filter-by-with-text'

export const ReviewsFilter = () => {
    const dialog = useDialog()

    const [initialFilters, setFiltersToUrl] = useQueryFilters(
        parseReviewsFiltersFromSearchParams,
        buildReviewsFiltersQueryString,
    )

    const [filters, setFilters] = useState<ReviewsFiltersState>(initialFilters)

    const handleTypesChange = useCallback((types: ContentType[]) => {
        setFilters(prev => ({
            ...prev,
            types: types,
        }))
    }, [])

    const handleWithTextChange = useCallback((value: boolean) => {
        setFilters(prev => ({
            ...prev,
            with_text: value,
        }))
    }, [])

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

    return (
        <div className="w-full space-y-4 sm:w-104">
            <h1 className="text-lg font-bold">Фильтр</h1>
            <hr className="border-gray-950" />

            <div className="space-y-8">
                <div className="space-y-4">
                    <FilterByTypes value={filters.types} onChange={handleTypesChange} />
                    <hr className="border-gray-300" />

                    <FilterByDate currentYear={2026} value={[2010, 2026]} onChange={() => {}} />
                    <hr className="border-gray-300" />

                    <FilterByWithText
                        isChecked={filters.with_text}
                        onChange={() => handleWithTextChange(!filters.with_text)}
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

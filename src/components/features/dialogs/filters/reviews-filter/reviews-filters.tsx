import { useCallback, useState } from 'react'

import { useOverlay } from '@/components/providers/overlay-provider'
import { Button } from '@/components/ui/forms/button'
import { ContentType } from '@/utils/enums/common'
import {
    DEFAULT_REVIEWS_FILTERS,
    ReviewsFiltersState,
    buildReviewsFiltersQueryString,
    parseReviewsFiltersFromSearchParams,
} from '@/utils/filters/reviews-filters'
import { useQueryFilters } from '@/utils/filters/use-query-filters'

import { FilterByDate } from '../components/filter-by-date'
import { FilterByTypes } from '../components/filter-by-types'
import { FilterByWithText } from '../components/filter-by-with-text'

type ReviewsFilterProps = {
    currentYear: number
}

export const ReviewsFilter = ({ currentYear }: ReviewsFilterProps) => {
    const overlay = useOverlay()

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

    const handleDateChange = useCallback((range: [number, number]) => {
        setFilters(prev => ({
            ...prev,
            content_min_year: range[0],
            content_max_year: range[1],
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
        overlay.close()
    }, [filters, setFiltersToUrl, overlay])

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

                    <FilterByDate
                        currentYear={currentYear}
                        value={[filters.content_min_year, filters.content_max_year]}
                        onChange={handleDateChange}
                    />
                    <hr className="border-gray-300" />

                    <FilterByWithText
                        isChecked={filters.with_text}
                        onChange={() => handleWithTextChange(!filters.with_text)}
                    />
                    <hr className="border-gray-300" />
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                    <Button className="w-full sm:w-auto" onClick={handleApply}>
                        Применить
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto" onClick={handleReset}>
                        Сбросить
                    </Button>
                </div>
            </div>
        </div>
    )
}

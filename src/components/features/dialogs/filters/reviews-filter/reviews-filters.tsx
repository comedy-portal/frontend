import { useCallback, useState } from 'react'

import { Button } from '@/components/ui/forms/button'
import { Radio } from '@/components/ui/forms/radio'
import { Switcher } from '@/components/ui/forms/switcher'
import {
    DEFAULT_REVIEWS_FILTERS,
    ReviewsFiltersState,
    ReviewsUrlSortBy,
    buildReviewsFiltersQueryString,
    parseReviewsFiltersFromSearchParams,
} from '@/utils/filters/reviews-filters'
import { useQueryFilters } from '@/utils/filters/use-query-filters'
import { useDialog } from '@/utils/providers/dialog-provider'

const SORT_OPTIONS = [
    { label: 'Сначала новые', value: ReviewsUrlSortBy.DATE_DESC },
    { label: 'Сначала старые', value: ReviewsUrlSortBy.DATE_ASC },
    { label: 'По убыванию рейтинга', value: ReviewsUrlSortBy.MARK_DESC },
    { label: 'По возрастанию рейтинга', value: ReviewsUrlSortBy.MARK_ASC },
]

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
        setFilters(DEFAULT_REVIEWS_FILTERS)
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

            <div className="flex flex-col gap-y-2">
                <label className="font-bold">Сортировать:</label>
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

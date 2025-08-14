'use client'

import { useCallback, useState } from 'react'

import {
    ContentFiltersState,
    ContentUrlSortBy,
    DEFAULT_CONTENT_FILTERS,
    buildContentFilters,
    parseContentFilters,
} from '@/utils/helpers/filters/content-filters'
import { useQueryFilters } from '@/utils/hooks/use-query-filters'
import { useDialog } from '@/utils/providers/dialog-provider'

import { FiltersDialog } from './filters-dialog'

export const ContentFilters = () => {
    const dialog = useDialog()

    const [initialFilters, setFiltersToUrl] = useQueryFilters(parseContentFilters, buildContentFilters)
    const [filters, setFilters] = useState<ContentFiltersState>(initialFilters)

    const handleApply = useCallback(() => {
        setFiltersToUrl(filters)
        dialog.close()
    }, [filters, setFiltersToUrl, dialog])

    const handleReset = useCallback(() => {
        setFilters(DEFAULT_CONTENT_FILTERS)
    }, [])

    return (
        <FiltersDialog<ContentFiltersState>
            title="Фильтр"
            fields={[
                {
                    type: 'radio',
                    name: 'sort',
                    label: 'Сортировать:',
                    options: [
                        { label: 'По дате', value: ContentUrlSortBy.DATE_DESC },
                        { label: 'По популярности', value: ContentUrlSortBy.RATING_DESC },
                    ],
                },
                {
                    type: 'range',
                    label: 'Фильтровать по рейтингу:',
                    min: 0,
                    max: 10,
                    step: 1,
                    minName: 'min_rating',
                    maxName: 'max_rating',
                },
            ]}
            filters={filters}
            onChange={setFilters}
            onApply={handleApply}
            onReset={handleReset}
        />
    )
}

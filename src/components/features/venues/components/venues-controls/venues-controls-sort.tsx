'use client'

import { Dropdown } from '@/components/ui/dropdown'
import {
    ContentUrlSortBy,
    buildContentFiltersQueryString,
    parseContentFiltersFromSearchParams,
} from '@/utils/filters/content-filters'
import { useQueryFilters } from '@/utils/filters/use-query-filters'

const SORT_OPTIONS = [
    { label: 'Все площадки', value: '' },
    { label: 'Москва', value: 'Москва' },
    { label: 'Варшава', value: 'Варшава' },
]

export const VenuesControlsSort = () => {
    return (
        <Dropdown
            activeOption={'Все площадки'}
            items={SORT_OPTIONS.map(option => ({
                label: option.label,
                onClick: () => {
                    // setFilters({
                    //     ...filters,
                    //     sort: option.value,
                    // })
                },
            }))}
        />
    )
}

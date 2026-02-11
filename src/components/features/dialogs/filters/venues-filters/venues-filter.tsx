import { useCallback, useState } from 'react'

import { Button } from '@/components/ui/forms/button'
import { useQueryFilters } from '@/utils/filters/use-query-filters'
import {
    DEFAULT_VENUES_FILTERS,
    VenuesFiltersState,
    buildVenuesFiltersQueryString,
    parseVenuesFiltersFromSearchParams,
} from '@/utils/filters/venues-filters'
import { useDialog } from '@/utils/providers/dialog-provider'

import { FilterByCity } from '../components/filter-by-city'

export const VenuesFilter = () => {
    const dialog = useDialog()

    const [initialFilters, setFiltersToUrl] = useQueryFilters(
        parseVenuesFiltersFromSearchParams,
        buildVenuesFiltersQueryString,
    )

    const [filters, setFilters] = useState<VenuesFiltersState>(initialFilters)

    const handleTypesChange = useCallback((city: string) => {
        setFilters(prev => ({
            ...prev,
            city,
        }))
    }, [])

    const handleApply = useCallback(() => {
        setFiltersToUrl(filters)
        dialog.close()
    }, [filters, setFiltersToUrl, dialog])

    const handleReset = useCallback(() => {
        setFilters(prev => ({
            ...DEFAULT_VENUES_FILTERS,
            sort: prev.sort,
        }))
    }, [])

    return (
        <div className="w-full space-y-4 sm:w-104">
            <h1 className="text-lg font-bold">Фильтр</h1>
            <hr className="border-gray-950" />

            <div className="space-y-8">
                <div className="space-y-4">
                    <FilterByCity value={filters.city} onChange={handleTypesChange} />
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

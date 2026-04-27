import { useCallback, useState } from 'react'

import { useOverlay } from '@/components/providers/overlay-provider'
import { Button } from '@/components/ui/forms/button'
import { useQueryFilters } from '@/utils/filters/use-query-filters'
import {
    DEFAULT_VENUES_FILTERS,
    VenuesFiltersState,
    buildVenuesFiltersQueryString,
    parseVenuesFiltersFromSearchParams,
} from '@/utils/filters/venues-filters'
import { useVenueCities } from '@/utils/hooks/use-venue-cities'

import { FilterByCity } from '../components/filter-by-city'

export const VenuesFilter = () => {
    const overlay = useOverlay()
    const cities = useVenueCities()

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
        overlay.close()
    }, [filters, setFiltersToUrl, overlay])

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
                    <FilterByCity cities={cities} value={filters.city} onChange={handleTypesChange} />
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

'use client'

import { FunnelIcon } from 'lucide-react'

import { Filters } from '@/components/features/dialogs/filters/filters'
import { DEFAULT_SORT_FILTERS } from '@/utils/helpers/sort-filters'
import { useSortFilters } from '@/utils/helpers/use-sort-filters'
import { useDialog } from '@/utils/providers/dialog-provider'

export const ContentManyFilter = () => {
    const dialog = useDialog()
    const [filters] = useSortFilters()

    const handleClick = () => {
        dialog.open(<Filters />)
    }

    const hasActiveFilters =
        filters.sort !== DEFAULT_SORT_FILTERS.sort ||
        filters.min_rating !== DEFAULT_SORT_FILTERS.min_rating ||
        filters.max_rating !== DEFAULT_SORT_FILTERS.max_rating

    return (
        <div className="relative">
            <div
                className="hover:text-950 flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-gray-700 hover:border-gray-950"
                onClick={handleClick}
            >
                <FunnelIcon />
            </div>

            {hasActiveFilters && (
                <span className="absolute -top-1 -right-1 size-4 rounded-full border-2 border-white bg-red-400" />
            )}
        </div>
    )
}

'use client'

import { FunnelIcon } from 'lucide-react'

<<<<<<<< HEAD:src/components/features/content-many/components/content-many-filter-button.tsx
import { ContentFilters } from '@/components/features/dialogs/filters/content-filters'
import {
    DEFAULT_CONTENT_FILTERS,
    buildContentFilters,
    parseContentFilters,
} from '@/utils/helpers/filters/content-filters'
import { useQueryFilters } from '@/utils/hooks/use-query-filters'
import { useDialog } from '@/utils/providers/dialog-provider'

export const ContentFilterButton = () => {
    const dialog = useDialog()
    const [filters] = useQueryFilters(parseContentFilters, buildContentFilters)

    const handleClick = () => {
        dialog.open(<ContentFilters />)
    }

    const hasActiveFilters =
        filters.sort !== DEFAULT_CONTENT_FILTERS.sort ||
        filters.min_rating !== DEFAULT_CONTENT_FILTERS.min_rating ||
        filters.max_rating !== DEFAULT_CONTENT_FILTERS.max_rating

========
import { useDialog } from '@/utils/providers/dialog-provider'

type FiltersButtonProps = {
    filterComponent: React.ReactNode
    isActive: boolean
}

export const FiltersButton = ({ filterComponent, isActive }: FiltersButtonProps) => {
    const dialog = useDialog()

    const handleClick = () => {
        dialog.open(filterComponent)
    }

>>>>>>>> develop:src/components/ui/filters-button.tsx
    return (
        <div className="relative">
            <div
                className="hover:text-950 flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-gray-700 hover:border-gray-950"
                onClick={handleClick}
            >
                <FunnelIcon />
            </div>

            {isActive && (
                <span className="absolute -top-1 -right-1 size-4 rounded-full border-2 border-white bg-red-400" />
            )}
        </div>
    )
}

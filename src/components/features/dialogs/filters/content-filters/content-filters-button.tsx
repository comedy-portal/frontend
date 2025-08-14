'use client'

import { FunnelIcon } from 'lucide-react'

import { ContentFilters } from '@/components/features/dialogs/filters/content-filters/content-filters'
import {
    DEFAULT_CONTENT_FILTERS,
    buildContentFiltersQueryString,
    parseContentFiltersFromSearchParams,
} from '@/utils/filters/content-filters'
import { useQueryFilters } from '@/utils/filters/use-query-filters'
import { useDialog } from '@/utils/providers/dialog-provider'

export const ContentFiltersButton = () => {
    const dialog = useDialog()
    const [filters] = useQueryFilters(parseContentFiltersFromSearchParams, buildContentFiltersQueryString)

    const handleClick = () => {
        dialog.open(<ContentFilters />)
    }

    const hasActiveFilters =
        filters.sort !== DEFAULT_CONTENT_FILTERS.sort ||
        filters.min_rating !== DEFAULT_CONTENT_FILTERS.min_rating ||
        filters.max_rating !== DEFAULT_CONTENT_FILTERS.max_rating

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

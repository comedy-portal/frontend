'use client'

import { FunnelIcon } from 'lucide-react'

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

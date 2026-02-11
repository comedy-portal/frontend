'use client'

import { ListFilterIcon, ListFilterPlusIcon } from 'lucide-react'

import { useDialog } from '@/utils/providers/dialog-provider'

type FilterButtonProps = {
    filterComponent: React.ReactNode
    isActive: boolean
}

export const FilterButton = ({ filterComponent, isActive }: FilterButtonProps) => {
    const dialog = useDialog()

    const handleClick = () => {
        dialog.open(filterComponent)
    }

    return (
        <div
            className="flex cursor-pointer items-center gap-x-1.5 text-gray-700 hover:text-gray-950"
            onClick={handleClick}
        >
            <div className="relative">
                <ListFilterIcon />
                {isActive && (
                    <div className="absolute -top-0.5 -right-1 size-3 rounded-full border-2 border-white bg-red-500" />
                )}
            </div>
            Фильтр
        </div>
    )
}

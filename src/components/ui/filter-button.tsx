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
            className="relative flex cursor-pointer items-center gap-x-1.5 text-gray-700 hover:text-gray-950"
            onClick={handleClick}
        >
            {isActive ? <ListFilterPlusIcon /> : <ListFilterIcon />}
            Фильтр
        </div>
    )
}

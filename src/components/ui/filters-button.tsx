'use client'

import { FunnelIcon, FunnelXIcon } from 'lucide-react'

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
        <div className="relative flex cursor-pointer items-center gap-x-1.5" onClick={handleClick}>
            {isActive ? <FunnelXIcon /> : <FunnelIcon />}
            Фильтр
        </div>
    )
}

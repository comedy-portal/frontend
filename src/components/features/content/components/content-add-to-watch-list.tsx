'use client'

import { HeartPlusIcon } from 'lucide-react'

import { watchlistsAPI } from '@/redux/services/watchlists/watchlists.api'

type ContentAddToWatchListProps = {
    contentId: number
}

export const ContentAddToWatchList = ({ contentId }: ContentAddToWatchListProps) => {
    const [addToWatchlist] = watchlistsAPI.useAddToWatchlistMutation()
    // const [deleteFromWatchlist] = watchlistsAPI.useDeleteFromWatchlistMutation()

    const toggle = async () => {
        try {
            await addToWatchlist(contentId)
        } catch {
            alert('Ошибка при добавлении в список просмотра')
        }
    }

    return (
        <div className="flex items-center gap-x-2" onClick={toggle}>
            <HeartPlusIcon size={40} strokeWidth={1.5} stroke="rgb(87, 153, 239)" />
            <div className="cursor-pointer text-sm hover:text-blue-500">
                <div className="hidden sm:block">Смотреть</div>
                <div>позже</div>
            </div>
        </div>
    )
}

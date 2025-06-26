'use client'

import { BookmarkIcon } from 'lucide-react'

import { useRouter } from 'next/navigation'

import { watchlistsAPI } from '@/redux/services/watchlists/watchlists.api'

type ContentAddToWatchListProps = {
    contentId: number
    isInWatchlist: boolean
}

export const ContentAddToWatchList = ({ contentId, isInWatchlist }: ContentAddToWatchListProps) => {
    const router = useRouter()
    const [addToWatchlist] = watchlistsAPI.useAddToWatchlistMutation()
    const [deleteFromWatchlist] = watchlistsAPI.useDeleteFromWatchlistMutation()

    const toggle = async () => {
        try {
            await (isInWatchlist ? deleteFromWatchlist(contentId) : addToWatchlist(contentId))
            router.refresh()
        } catch {
            alert('Ошибка при добавлении в список просмотра')
        }
    }

    return (
        <div className="flex cursor-pointer items-center gap-x-2 hover:text-blue-500" onClick={toggle}>
            <BookmarkIcon
                size={40}
                strokeWidth={1.5}
                stroke="rgb(87, 153, 239)"
                fill={isInWatchlist ? 'rgb(87, 153, 239)' : 'none'}
            />
            <div className="text-sm">
                {isInWatchlist ? (
                    <div>
                        В списке
                        <br />
                        просмотра
                    </div>
                ) : (
                    <div>
                        Смотреть
                        <br />
                        позже
                    </div>
                )}
            </div>
        </div>
    )
}

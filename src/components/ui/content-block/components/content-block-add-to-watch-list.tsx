'use client'

import { BookmarkIcon } from 'lucide-react'

import { useRouter } from 'next/navigation'

import { SignUp } from '@/components/features/auth/sign-up'
import { watchlistsAPI } from '@/redux/services/watchlists/watchlists.api'
import { useDialog } from '@/utils/providers/dialog-provider'

type ContentAddToWatchListProps = {
    contentId: number
    isAuth: boolean
    isInWatchlist: boolean
}

export const ContentBlockAddToWatchList = ({ contentId, isAuth, isInWatchlist }: ContentAddToWatchListProps) => {
    const router = useRouter()
    const dialog = useDialog()
    const [addToWatchlist] = watchlistsAPI.useAddToWatchlistMutation()
    const [deleteFromWatchlist] = watchlistsAPI.useDeleteFromWatchlistMutation()

    const toggle = async () => {
        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }

        try {
            await (isInWatchlist ? deleteFromWatchlist(contentId) : addToWatchlist(contentId))
            router.refresh()
        } catch {
            alert('Ошибка при добавлении в список просмотра')
        }
    }

    return (
        <div className="cursor-pointer text-gray-500 hover:text-gray-700">
            <BookmarkIcon size={20} fill={isInWatchlist ? 'currentColor' : 'none'} onClick={toggle} />
        </div>
    )
}

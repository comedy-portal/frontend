'use client'

import { BookmarkIcon } from 'lucide-react'

import { useRouter } from 'next/navigation'

import { SignUp } from '@/components/features/auth/sign-up'
import { Button } from '@/components/ui/forms/button'
import { watchlistsAPI } from '@/redux/services/watchlists/watchlists.api'
import { useDialog } from '@/utils/providers/dialog-provider'

type ContentAddToWatchListProps = {
    contentId: number
    isAuth: boolean
    isInWatchlist: boolean
}

export const ContentAddToWatchList = ({ contentId, isAuth, isInWatchlist }: ContentAddToWatchListProps) => {
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
        <Button size="lg" variant="outline" className="flex items-center justify-center gap-x-2" onClick={toggle}>
            <BookmarkIcon
                size={24}
                strokeWidth={1.5}
                stroke="currentColor"
                fill={isInWatchlist ? 'currentColor' : 'none'}
            />
            {isInWatchlist ? 'В списке просмотра' : 'Смотреть позже'}
        </Button>
    )
}

'use client'

import { BookmarkIcon } from 'lucide-react'

import { useRouter } from 'next/navigation'

import { SignUp } from '@/components/features/auth/sign-up'
import { messages } from '@/messages'
import { watchlistsAPI } from '@/redux/services/watchlists/watchlists.api'
import { useDialog } from '@/utils/providers/dialog-provider'
import { useToast } from '@/utils/providers/toast-provider'

type ContentBlockBookmarkProps = {
    name: string
    contentId: number
    isAuth: boolean
    isInWatchlist?: boolean
}

export const ContentBlockBookmark = ({ name, contentId, isAuth, isInWatchlist }: ContentBlockBookmarkProps) => {
    const toast = useToast()
    const dialog = useDialog()
    const router = useRouter()

    const [addToWatchlist] = watchlistsAPI.useAddToWatchlistMutation()
    const [deleteFromWatchlist] = watchlistsAPI.useDeleteFromWatchlistMutation()

    const toggleWatchlist = async () => {
        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }

        try {
            await (isInWatchlist ? deleteFromWatchlist(contentId) : addToWatchlist(contentId))
            router.refresh()
            toast.success(name, isInWatchlist ? 'Удален из списка просмотра' : 'Добавлен в список просмотра')
        } catch {
            toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
        }
    }

    if (isInWatchlist) {
        return (
            <div className="cursor-pointer text-gray-700 hover:text-gray-950">
                <BookmarkIcon size={20} fill="currentColor" onClick={toggleWatchlist} />
            </div>
        )
    }

    return (
        <div className="cursor-pointer text-gray-300 hover:text-gray-950">
            <BookmarkIcon size={20} onClick={toggleWatchlist} />
        </div>
    )
}

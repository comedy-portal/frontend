'use client'

import { BookmarkIcon } from 'lucide-react'

import { useRouter } from 'next/navigation'

import { SignUp } from '@/components/features/auth/sign-up'
import { useDialog } from '@/components/providers/dialog-provider'
import { useToast } from '@/components/providers/toast-provider'
import { Button } from '@/components/ui/forms/button'
import { messages } from '@/messages'
import { watchlistsAPI } from '@/utils/redux/services/watchlists/watchlists.api'

type ContentAddToWatchListProps = {
    contentId: number
    isAuth: boolean
    isInWatchlist: boolean
}

export const ContentAddToWatchList = ({ contentId, isAuth, isInWatchlist }: ContentAddToWatchListProps) => {
    const toast = useToast()
    const dialog = useDialog()
    const router = useRouter()

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
            toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
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

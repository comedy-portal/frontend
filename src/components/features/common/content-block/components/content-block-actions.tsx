'use client'

import { BookmarkIcon, HeartIcon } from 'lucide-react'

import { useRouter } from 'next/navigation'

import { SignUp } from '@/components/features/auth/sign-up'
import { ReviewCreate } from '@/components/features/dialogs/reviews-form/review-create'
import { ReviewUpdate } from '@/components/features/dialogs/reviews-form/review-update'
import { Dropdown } from '@/components/ui/dropdown'
import { messages } from '@/messages'
import { watchlistsAPI } from '@/redux/services/watchlists/watchlists.api'
import { useDialog } from '@/utils/providers/dialog-provider'
import { useToast } from '@/utils/providers/toast-provider'

type ContentBlockActionsProps = {
    contentId: number
    myReviewId?: number
    isInWatchlist?: boolean
    isAuth: boolean
}

export const ContentBlockActions = ({ contentId, myReviewId, isInWatchlist, isAuth }: ContentBlockActionsProps) => {
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
            toast.success(
                isInWatchlist
                    ? 'Контент успешно удален из списка просмотра'
                    : 'Контент успешно добавлен в список просмотра',
            )
        } catch {
            toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
        }
    }

    const handleRateClick = () => {
        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }

        dialog.open(
            myReviewId ? <ReviewUpdate id={myReviewId} /> : <ReviewCreate initialMark={0} contentId={contentId} />,
        )
    }

    return (
        <Dropdown
            items={[
                {
                    label: isInWatchlist ? 'В списке просмотра' : 'Смотреть позже',
                    icon: <BookmarkIcon size={16} fill={isInWatchlist ? 'currentColor' : 'none'} />,
                    onClick: toggleWatchlist,
                },
                {
                    label: 'Оценить',
                    icon: <HeartIcon size={16} />,
                    onClick: handleRateClick,
                },
            ]}
            className="-mr-2"
        />
    )
}

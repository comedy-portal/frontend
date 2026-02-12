'use client'

import { SquarePenIcon, TrashIcon } from 'lucide-react'

import { useRouter } from 'next/navigation'

import { ReviewUpdate } from '@/components/features/dialogs/reviews-form/review-update'
import { useDialog } from '@/components/providers/dialog-provider'
import { useToast } from '@/components/providers/toast-provider'
import { Confirmation } from '@/components/ui/confirmation'
import { messages } from '@/messages'
import { reviewsAPI } from '@/utils/redux/services/reviews/reviews.api'

type ContentReviewsFeedItemProps = {
    reviewId: number
    contentId: number
}

export const ContentReviewsFeedItemControls = ({ reviewId, contentId }: ContentReviewsFeedItemProps) => {
    const dialog = useDialog()
    const toast = useToast()
    const router = useRouter()

    const [deleteReview] = reviewsAPI.useDeleteReviewMutation()

    const handleEditClick = () => {
        dialog.open(<ReviewUpdate id={reviewId} />)
    }

    const handleDeleteClick = () => {
        dialog.open(
            <Confirmation
                title="Удаление рецензии"
                message="Вы уверены, что хотите удалить эту рецензию? Это действие необратимо."
                onConfirm={async () => {
                    try {
                        await deleteReview({ id: reviewId, contentId })
                        router.refresh()
                        dialog.close()
                    } catch {
                        toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
                    }
                }}
            />,
        )
    }

    return (
        <div className="flex items-center justify-start gap-x-4">
            <div className="cursor-pointer text-xs text-gray-300 hover:text-gray-950" onClick={handleEditClick}>
                <SquarePenIcon />
            </div>
            <div className="cursor-pointer text-xs text-gray-300 hover:text-gray-950" onClick={handleDeleteClick}>
                <TrashIcon />
            </div>
        </div>
    )
}

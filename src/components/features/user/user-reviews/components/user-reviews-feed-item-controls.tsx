'use client'

import { SquarePenIcon, TrashIcon } from 'lucide-react'

import { ReviewUpdate } from '@/components/features/dialogs/reviews-form/review-update'
import { Confirmation } from '@/components/ui/confirmation'
import { messages } from '@/messages'
import { reviewsAPI } from '@/redux/services/reviews/reviews.api'
import { useDialog } from '@/utils/providers/dialog-provider'

type UserReviewsFeedItemProps = {
    id: number
}

export const UserReviewsFeedItemControls = ({ id }: UserReviewsFeedItemProps) => {
    const dialog = useDialog()

    const [deleteReview] = reviewsAPI.useDeleteReviewMutation()

    const handleEditClick = () => {
        dialog.open(<ReviewUpdate id={id} />)
    }

    const handleDeleteClick = () => {
        dialog.open(
            <Confirmation
                title="Удаление рецензии"
                message="Вы уверены, что хотите удалить эту рецензию? Это действие необратимо."
                onConfirm={async () => {
                    try {
                        await deleteReview({ id })
                        dialog.close()
                    } catch {
                        console.error(messages.COMMON_ERROR)
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

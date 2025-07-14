'use client'

import { MessageCircleCodeIcon } from 'lucide-react'

import { SignUp } from '@/components/features/auth/sign-up'
import { ReviewCreate } from '@/components/features/dialogs/reviews-form/review-create'
import { ReviewUpdate } from '@/components/features/dialogs/reviews-form/review-update'
import { Button } from '@/components/ui/forms/button'
import { useDialog } from '@/utils/providers/dialog-provider'

type ContentReviewButtonProps = {
    contentId: number
    review?: {
        id: number
        mark: number
        text?: string
    }
    isAuth: boolean
}

export const ContentReviewButton = ({ contentId, review, isAuth }: ContentReviewButtonProps) => {
    const dialog = useDialog()

    const handleCreateClick = () => {
        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }

        dialog.open(<ReviewCreate contentId={contentId} />)
    }

    const handleUpdateClick = (reviewId: number) => {
        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }

        dialog.open(<ReviewUpdate id={reviewId} />)
    }

    if (review && !review.text) {
        return (
            <Button
                size="lg"
                className="flex items-center justify-center gap-x-2"
                onClick={() => handleUpdateClick(review.id)}
            >
                <MessageCircleCodeIcon size={24} /> Оставить рецензию
            </Button>
        )
    }

    if (review && review.text) {
        return (
            <Button
                size="lg"
                className="flex items-center justify-center gap-x-2"
                onClick={() => handleUpdateClick(review.id)}
            >
                <MessageCircleCodeIcon size={24} /> Изменить рецензию
            </Button>
        )
    }

    return (
        <Button size="lg" className="flex items-center justify-center gap-x-2" onClick={handleCreateClick}>
            <MessageCircleCodeIcon size={24} /> Оставить рецензию
        </Button>
    )
}

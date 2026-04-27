'use client'

import { StarIcon } from 'lucide-react'

import { SignUp } from '@/components/features/auth/sign-up'
import { ReviewCreate } from '@/components/features/dialogs/reviews-form/review-create'
import { ReviewUpdate } from '@/components/features/dialogs/reviews-form/review-update'
import { useOverlay } from '@/components/providers/overlay-provider'
import { Button } from '@/components/ui/forms/button'

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
    const overlay = useOverlay()

    const handleCreateClick = () => {
        if (!isAuth) {
            overlay.open(<SignUp />)
            return
        }

        overlay.open(<ReviewCreate contentId={contentId} />)
    }

    const handleUpdateClick = (reviewId: number) => {
        if (!isAuth) {
            overlay.open(<SignUp />)
            return
        }

        overlay.open(<ReviewUpdate id={reviewId} />)
    }

    if (review && !review.text) {
        return (
            <Button
                size="lg"
                className="flex items-center justify-center gap-x-2"
                onClick={() => handleUpdateClick(review.id)}
            >
                <StarIcon size={24} /> Оставить рецензию
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
                <StarIcon size={24} /> Изменить рецензию
            </Button>
        )
    }

    return (
        <Button size="lg" className="flex items-center justify-center gap-x-2" onClick={handleCreateClick}>
            <StarIcon size={24} /> Оставить рецензию
        </Button>
    )
}

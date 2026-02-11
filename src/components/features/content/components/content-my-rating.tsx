'use client'

import { SignUp } from '@/components/features/auth/sign-up'
import { ReviewCreate } from '@/components/features/dialogs/reviews-form/review-create'
import { ReviewUpdate } from '@/components/features/dialogs/reviews-form/review-update'
import { useDialog } from '@/components/providers/dialog-provider'
import { RatingBar } from '@/components/ui/rating-bar/rating-bar'

type ContentMyRatingProps = {
    contentId: number
    review?: {
        id: number
        mark: number
        text?: string
    }
    isAuth: boolean
}

export const ContentMyRating = ({ contentId, review, isAuth }: ContentMyRatingProps) => {
    const dialog = useDialog()

    const handleCreateClick = (value: number) => {
        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }

        dialog.open(<ReviewCreate initialMark={value} contentId={contentId} />)
    }

    const handleUpdateClick = (reviewId: number) => {
        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }

        dialog.open(<ReviewUpdate id={reviewId} />)
    }

    if (!review) {
        return (
            <RatingBar
                value={0}
                caption="Моя оценка"
                editable
                onChange={handleCreateClick}
                onClick={() => handleCreateClick(0)}
            />
        )
    }

    return (
        <RatingBar value={review.mark} caption="Моя оценка" isHighlight onClick={() => handleUpdateClick(review.id)} />
    )
}

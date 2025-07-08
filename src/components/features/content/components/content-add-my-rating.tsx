'use client'

import { SignUp } from '@/components/features/auth/sign-up'
import { ReviewCreate } from '@/components/features/dialogs/reviews-form/review-create'
import { RatingBar } from '@/components/ui/rating-bar/rating-bar'
import { useDialog } from '@/utils/providers/dialog-provider'

type ContentAddMyRatingProps = {
    contentId: number
    value: number | null
    isAuth: boolean
}

export const ContentAddMyRating = ({ contentId, value, isAuth }: ContentAddMyRatingProps) => {
    const dialog = useDialog()

    const handleClick = (newValue: number) => {
        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }

        dialog.open(<ReviewCreate contentId={contentId} initialMark={newValue} />)
    }

    return <RatingBar value={value || 0} caption="Мой рейтинг" editable onChange={handleClick} />
}

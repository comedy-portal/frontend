'use client'

import { useRouter } from 'next/navigation'

import { SignUp } from '@/components/features/auth/sign-up'
import { RatingBar } from '@/components/ui/rating-bar/rating-bar'
import { messages } from '@/messages'
import { reviewsAPI } from '@/redux/services/reviews/reviews.api'
import { CreateReviewInputs } from '@/redux/services/reviews/reviews.types'
import { useDialog } from '@/utils/providers/dialog-provider'

type ContentMyRatingProps = {
    contentId: number
    value: number | null
    isAuth: boolean
}

export const ContentMyRating = ({ contentId, value, isAuth }: ContentMyRatingProps) => {
    const router = useRouter()
    const dialog = useDialog()
    const [createReview] = reviewsAPI.useCreateReviewMutation()

    const handleChange = async (value: number) => {
        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }

        try {
            const inputs: CreateReviewInputs = {
                contentId,
                mark: value || 0,
                text: null,
            }
            createReview(inputs)
            router.refresh()
        } catch {
            console.error(messages.COMMON_ERROR)
        }
    }

    return <RatingBar value={value || 0} caption="Моя рейтинг" editable={!value} onChange={handleChange} />
}

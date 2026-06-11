'use client'

import { useOverlay } from '@/components/providers/overlay-provider'
import { useToast } from '@/components/providers/toast-provider'
import { messages } from '@/messages'
import { ComplaintReasons } from '@/utils/enums/common'
import { reviewsAPI } from '@/utils/redux/services/reviews/reviews.api'
import { ReviewComplaintInputs } from '@/utils/redux/services/reviews/reviews.types'

import { ComplaintForm } from './complaint-form'

export const ComplainFormReview = ({ reviewId }: { reviewId: number }) => {
    const overlay = useOverlay()
    const toast = useToast()

    const [complain, { isLoading }] = reviewsAPI.useCreateReviewComplaintMutation()

    const handleSubmit = async (inputs: ReviewComplaintInputs) => {
        try {
            const trimmedInputs = {
                ...inputs,
                text: inputs.text.trim(),
            }
            await complain(trimmedInputs)
            overlay.close()
        } catch {
            toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
        }
    }

    return (
        <div className="w-full space-y-4 sm:w-104">
            <h1 className="text-lg font-bold">Пожаловаться на рецензию</h1>
            <hr className="border-gray-950" />
            <ComplaintForm
                initialValues={{
                    reviewId,
                    reason: ComplaintReasons.ABUSE,
                    text: '',
                }}
                isLoading={isLoading}
                onSubmit={inputs => handleSubmit(inputs as ReviewComplaintInputs)}
            />
        </div>
    )
}

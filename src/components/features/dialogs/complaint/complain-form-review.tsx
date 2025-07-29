'use client'

import { messages } from '@/messages'
import { reviewsAPI } from '@/redux/services/reviews/reviews.api'
import { ReviewComplaintInputs } from '@/redux/services/reviews/reviews.types'
import { ComplaintReasons } from '@/utils/enums/common'
import { useDialog } from '@/utils/providers/dialog-provider'
import { useToast } from '@/utils/providers/toast-provider'

import { ComplaintForm } from './complaint-form'

export const ComplainFormReview = ({ reviewId }: { reviewId: number }) => {
    const dialog = useDialog()
    const toast = useToast()

    const [complain, { isLoading }] = reviewsAPI.useCreateReviewComplaintMutation()

    const handleSubmit = async (inputs: ReviewComplaintInputs) => {
        try {
            const trimmedInputs = {
                ...inputs,
                text: inputs.text.trim(),
            }
            await complain(trimmedInputs)
            dialog.close()
        } catch {
            toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
        }
    }

    return (
        <div className="flex w-full flex-col gap-y-6 sm:w-104">
            <h1 className="text-2xl font-bold">Пожаловаться на рецензию</h1>
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

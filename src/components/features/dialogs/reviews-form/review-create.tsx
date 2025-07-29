'use client'

import { useRouter } from 'next/navigation'

import { messages } from '@/messages'
import { reviewsAPI } from '@/redux/services/reviews/reviews.api'
import { CreateReviewInputs } from '@/redux/services/reviews/reviews.types'
import { useDialog } from '@/utils/providers/dialog-provider'
import { useToast } from '@/utils/providers/toast-provider'

import { ReviewForm } from './review-form'

type ReviewCreateProps = {
    contentId: number
    initialMark?: number
}

export const ReviewCreate = ({ contentId, initialMark }: ReviewCreateProps) => {
    const dialog = useDialog()
    const toast = useToast()
    const router = useRouter()

    const [createReview, { isLoading }] = reviewsAPI.useCreateReviewMutation()

    const initialValues: CreateReviewInputs = {
        contentId,
        mark: initialMark ?? 0,
        text: '',
    }

    const handleSubmit = async (inputs: CreateReviewInputs) => {
        try {
            const trimmedInputs = {
                contentId: inputs.contentId,
                mark: inputs.mark,
                ...(inputs.text?.trim().length ? { text: inputs.text.trim() } : { text: null }),
            }
            createReview(trimmedInputs)
            router.refresh()
            dialog.close()
        } catch {
            toast.error(messages.COMMON_ERROR, messages.COMMON_ERROR_MESSAGE)
        }
    }

    return (
        <div className="flex w-full flex-col gap-y-6 sm:w-104">
            <h1 className="text-2xl font-bold">Моя рецензия</h1>
            <ReviewForm
                initialValues={initialValues}
                isLoading={isLoading}
                onSubmit={inputs => handleSubmit(inputs as CreateReviewInputs)}
            />
        </div>
    )
}

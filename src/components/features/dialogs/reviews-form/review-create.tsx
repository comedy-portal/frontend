'use client'

import { useRouter } from 'next/navigation'

import { useDialog } from '@/components/providers/dialog-provider'
import { useToast } from '@/components/providers/toast-provider'
import { messages } from '@/messages'
import { reviewsAPI } from '@/utils/redux/services/reviews/reviews.api'
import { CreateReviewInputs } from '@/utils/redux/services/reviews/reviews.types'

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
        <div className="w-full space-y-4 sm:w-104">
            <h1 className="text-lg font-bold">Моя рецензия</h1>
            <hr className="border-gray-950" />
            <ReviewForm
                initialValues={initialValues}
                isLoading={isLoading}
                onSubmit={inputs => handleSubmit(inputs as CreateReviewInputs)}
            />
        </div>
    )
}

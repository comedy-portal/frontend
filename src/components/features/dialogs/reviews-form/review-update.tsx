'use client'

import { messages } from '@/messages'
import { reviewsAPI } from '@/redux/services/reviews/reviews.api'
import { UpdateReviewInputs } from '@/redux/services/reviews/reviews.types'
import { useDialog } from '@/utils/providers/dialog-provider'

import { ReviewForm } from './review-form'
import { ReviewUpdateSkeleton } from './review-update-skeleton'

type ReviewUpdateProps = {
    id: number
}

export const ReviewUpdate = ({ id }: ReviewUpdateProps) => {
    const dialog = useDialog()
    const { data, isLoading: isReviewLoading, isSuccess, isError } = reviewsAPI.useGetReviewByIdQuery({ id })

    const [updateReview, { isLoading }] = reviewsAPI.useUpdateReviewMutation()

    if (isReviewLoading || !isSuccess) {
        return <ReviewUpdateSkeleton />
    }

    if (isError) {
        return <div>{messages.COMMON_ERROR}</div>
    }

    const initialValues: UpdateReviewInputs = {
        id: data.id,
        mark: data.mark,
        text: data.text || '',
    }

    const handleSubmit = async (inputs: UpdateReviewInputs) => {
        try {
            const trimmedInputs = {
                id: inputs.id,
                mark: inputs.mark,
                ...(inputs.text?.trim().length ? { text: inputs.text.trim() } : { text: null }),
            }
            updateReview(trimmedInputs)
            dialog.close()
        } catch {
            console.error(messages.COMMON_ERROR)
        }
    }

    return (
        <div className="flex w-full flex-col gap-y-6 sm:w-104">
            <h1 className="text-2xl font-bold">Моя рецензия</h1>
            <ReviewForm
                initialValues={initialValues}
                isLoading={isLoading}
                onSubmit={inputs => handleSubmit(inputs as UpdateReviewInputs)}
            />
        </div>
    )
}

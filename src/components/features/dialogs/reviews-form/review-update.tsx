'use client'

import { useRouter } from 'next/navigation'

import { useDialog } from '@/components/providers/dialog-provider'
import { useToast } from '@/components/providers/toast-provider'
import { CommonError } from '@/components/ui/common-error'
import { messages } from '@/messages'
import { reviewsAPI } from '@/utils/redux/services/reviews/reviews.api'
import { UpdateReviewInputs } from '@/utils/redux/services/reviews/reviews.types'

import { ReviewForm } from './review-form'
import { ReviewUpdateSkeleton } from './review-update-skeleton'

type ReviewUpdateProps = {
    id: number
}

export const ReviewUpdate = ({ id }: ReviewUpdateProps) => {
    const dialog = useDialog()
    const toast = useToast()
    const router = useRouter()
    const { data, isLoading: isReviewLoading, isSuccess, isError } = reviewsAPI.useGetReviewByIdQuery({ id })

    const [updateReview, { isLoading }] = reviewsAPI.useUpdateReviewMutation()

    if (isReviewLoading || !isSuccess) {
        return <ReviewUpdateSkeleton />
    }

    if (isError) {
        return <CommonError />
    }

    const initialValues: UpdateReviewInputs = {
        id: data.id,
        contentId: data.content.id,
        mark: data.mark,
        text: data.text || '',
    }

    const handleSubmit = async (inputs: UpdateReviewInputs) => {
        try {
            const trimmedInputs = {
                id: inputs.id,
                contentId: inputs.contentId,
                mark: inputs.mark,
                ...(inputs.text?.trim().length ? { text: inputs.text.trim() } : { text: null }),
            }
            updateReview(trimmedInputs)
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
                onSubmit={inputs => handleSubmit(inputs as UpdateReviewInputs)}
            />
        </div>
    )
}

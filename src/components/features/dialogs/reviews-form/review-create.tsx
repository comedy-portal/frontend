'use client'

import { useRouter } from 'next/navigation'

import { reviewsAPI } from '@/redux/services/reviews/reviews.api'
import { CreateReviewInputs } from '@/redux/services/reviews/reviews.types'
import { useDialog } from '@/utils/providers/dialog-provider'

import { ReviewForm } from './review-form'

type ReviewCreateProps = {
    contentId: number
}

export const ReviewCreate = ({ contentId }: ReviewCreateProps) => {
    const dialog = useDialog()
    const router = useRouter()

    const [createReview, { isLoading }] = reviewsAPI.useCreateReviewMutation()

    const initialValues: CreateReviewInputs = {
        contentId,
        mark: 0,
        text: '',
    }

    const handleSubmit = async (inputs: CreateReviewInputs) => {
        try {
            const trimmedInputs = {
                contentId: inputs.contentId,
                mark: inputs.mark,
                ...(inputs.text?.trim().length && { text: inputs.text.trim() }),
            }
            createReview(trimmedInputs)
            router.refresh()
            dialog.close()
        } catch {
            console.error('Ошибка при создании рецензии')
        }
    }

    return (
        <div className="flex w-full flex-col gap-y-4 sm:w-104">
            <h1 className="text-lg font-semibold">Моя рецензия</h1>
            <hr className="border-gray-400" />
            <ReviewForm
                initialValues={initialValues}
                isLoading={isLoading}
                onSubmit={inputs => handleSubmit(inputs as CreateReviewInputs)}
            />
        </div>
    )
}

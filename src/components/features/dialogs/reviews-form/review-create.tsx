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
        text: undefined,
    }

    // const handleSubmit = async (data: Omit<CreateReviewInputs, 'contentId'>) => {
    //     try {
    //         await createReview({ ...data, contentId }).unwrap()
    //         router.refresh()
    //         dialog.close()
    //     } catch (error) {
    //         console.error('Ошибка при создании рецензии:', error)
    //     }
    // }

    const handleSubmit = async (inputs: CreateReviewInputs) => {
        try {
            const trimmedInputs = {
                ...inputs,
                ...(inputs.text && { text: inputs.text.trim() }),
            }
            createReview(trimmedInputs)
            router.refresh()
            dialog.close()
        } catch {
            console.error('Ошибка при создании рецензии')
        }
    }

    return <ReviewForm initialValues={initialValues} isLoading={isLoading} onSubmit={handleSubmit} />
}

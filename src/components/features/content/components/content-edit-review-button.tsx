'use client'

import { MessageCircleCodeIcon } from 'lucide-react'

import { SignUp } from '@/components/features/auth/sign-up'
import { Button } from '@/components/ui/forms/button'
import { useDialog } from '@/utils/providers/dialog-provider'

import { ReviewUpdate } from '../../dialogs/reviews-form/review-update'

type ContentEditReviewButtonProps = {
    reviewId: number
    isAuth: boolean
}

export const ContentEditReviewButton = ({ reviewId, isAuth }: ContentEditReviewButtonProps) => {
    const dialog = useDialog()

    const handleClick = () => {
        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }

        dialog.open(<ReviewUpdate id={reviewId} />)
    }

    return (
        <Button size="lg" className="flex items-center justify-center gap-x-2" onClick={handleClick}>
            <MessageCircleCodeIcon size={24} /> Изменить рецензию
        </Button>
    )
}

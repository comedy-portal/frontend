'use client'

import { MessageCircleCodeIcon } from 'lucide-react'

import { SignUp } from '@/components/features/auth/sign-up'
import { ReviewCreate } from '@/components/features/dialogs/reviews-form/review-create'
import { Button } from '@/components/ui/forms/button'
import { useDialog } from '@/utils/providers/dialog-provider'

type ContentAddReviewButtonProps = {
    contentId: number
    isAuth: boolean
}

export const ContentAddReviewButton = ({ contentId, isAuth }: ContentAddReviewButtonProps) => {
    const dialog = useDialog()

    const handleClick = () => {
        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }

        dialog.open(<ReviewCreate contentId={contentId} />)
    }

    return (
        <Button size="lg" className="flex items-center justify-center gap-x-2" onClick={handleClick}>
            <MessageCircleCodeIcon size={24} /> Оставить рецензию
        </Button>
    )
}

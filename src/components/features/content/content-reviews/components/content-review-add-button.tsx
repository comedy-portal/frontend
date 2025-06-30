'use client'

import classNames from 'classnames'
import { MessageCircleCodeIcon } from 'lucide-react'

import { SignUp } from '@/components/features/auth/sign-up'
import { ReviewCreate } from '@/components/features/dialogs/reviews-form/review-create'
import { Button } from '@/components/ui/forms/button'
import { useDialog } from '@/utils/providers/dialog-provider'

type ContentReviewAddButtonProps = {
    contentId: number
    className?: string
    isAuth: boolean
}

export const ContentReviewAddButton = ({ contentId, className, isAuth }: ContentReviewAddButtonProps) => {
    const dialog = useDialog()

    const handleClick = () => {
        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }

        dialog.open(<ReviewCreate contentId={contentId} />)
    }

    return (
        <Button size="sm" className={classNames('flex items-center gap-x-2', className)} onClick={handleClick}>
            <MessageCircleCodeIcon size={16} /> Оставить рецензию
        </Button>
    )
}

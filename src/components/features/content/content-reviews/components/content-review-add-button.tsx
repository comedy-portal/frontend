'use client'

import { Button } from 'react-bootstrap'

import classNames from 'classnames'
import { MessageCircleCodeIcon } from 'lucide-react'

import { SignUp } from '@/components/features/auth/sign-up'
import { ReviewForm } from '@/components/features/dialogs/reviews-form/review-form'
import { useDialog } from '@/utils/providers/dialog-provider'

type ContentReviewAddButtonProps = {
    className?: string
    isAuth: boolean
}

export const ContentReviewAddButton = ({ className, isAuth }: ContentReviewAddButtonProps) => {
    const dialog = useDialog()

    const handleClick = () => {
        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }

        dialog.open(<ReviewForm />)
    }

    return (
        <Button size="sm" className={classNames('flex! items-center gap-x-2', className)} onClick={handleClick}>
            <MessageCircleCodeIcon size={16} /> Оставить рецензию
        </Button>
    )
}

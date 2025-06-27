'use client'

import { Button } from 'react-bootstrap'

import classNames from 'classnames'
import { MessageCircleCodeIcon } from 'lucide-react'

import { SignUp } from '@/components/features/auth/sign-up'
import { useDialog } from '@/utils/providers/dialog-provider'

type ContentAddReviewProps = {
    className?: string
    isAuth: boolean
}

export const ContentAddReview = ({ className, isAuth }: ContentAddReviewProps) => {
    const dialog = useDialog()

    const handleClick = () => {
        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }
    }

    return (
        <Button size="sm" className={classNames('flex! items-center gap-x-2', className)} onClick={handleClick}>
            <MessageCircleCodeIcon size={16} /> Оставить рецензию
        </Button>
    )
}

'use client'

import { Button } from 'react-bootstrap'

import { MessageCircleCodeIcon } from 'lucide-react'

import { SignUp } from '@/components/features/auth/sign-up'
import { useDialog } from '@/utils/providers/dialog-provider'

type ContentAddReviewProps = {
    isAuth: boolean
}

export const ContentAddReview = ({ isAuth }: ContentAddReviewProps) => {
    const dialog = useDialog()

    const handleClick = () => {
        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }
    }

    return (
        <Button size="sm" className="flex! items-center gap-x-2" onClick={handleClick}>
            <MessageCircleCodeIcon size={16} /> Оставить рецензию
        </Button>
    )
}

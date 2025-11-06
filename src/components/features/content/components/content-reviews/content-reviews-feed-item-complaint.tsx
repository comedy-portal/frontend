import { MessageCircleWarningIcon } from 'lucide-react'

import { SignUp } from '@/components/features/auth/sign-up'
import { ComplainFormReview } from '@/components/features/dialogs/complaint/complain-form-review'
import { useDialog } from '@/utils/providers/dialog-provider'

type ContentReviewsFeedItemComplaintProps = {
    reviewId: number
    isAuth: boolean
}

export const ContentReviewsFeedItemComplaint = ({ reviewId, isAuth }: ContentReviewsFeedItemComplaintProps) => {
    const dialog = useDialog()

    const handleClick = () => {
        if (!isAuth) {
            dialog.open(<SignUp />)
            return
        }

        dialog.open(<ComplainFormReview reviewId={reviewId} />)
    }

    return (
        <div
            onClick={handleClick}
            className="flex cursor-pointer items-center gap-x-1 text-xs text-gray-500 hover:text-red-500"
        >
            <MessageCircleWarningIcon size={16} />
            Пожаловаться
        </div>
    )
}

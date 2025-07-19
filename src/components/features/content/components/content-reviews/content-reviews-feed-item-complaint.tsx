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
        <div onClick={handleClick} className="cursor-pointer text-xs text-gray-300 hover:text-red-500">
            <MessageCircleWarningIcon />
        </div>
    )
}

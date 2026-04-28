import { MessageCircleWarningIcon } from 'lucide-react'

import { SignUp } from '@/components/features/auth/sign-up'
import { ComplainFormReview } from '@/components/features/dialogs/complaint/complain-form-review'
import { useOverlay } from '@/components/providers/overlay-provider'

type ContentReviewsFeedItemComplaintProps = {
    reviewId: number
    isAuth: boolean
}

export const ContentReviewsFeedItemComplaint = ({ reviewId, isAuth }: ContentReviewsFeedItemComplaintProps) => {
    const overlay = useOverlay()

    const handleClick = () => {
        if (!isAuth) {
            overlay.open(<SignUp />)
            return
        }

        overlay.open(<ComplainFormReview reviewId={reviewId} />)
    }

    return (
        <div
            onClick={handleClick}
            className="inline-flex cursor-pointer items-center gap-x-1 align-top text-xs text-gray-500 hover:text-red-500"
        >
            <MessageCircleWarningIcon size={16} />
            Пожаловаться
        </div>
    )
}

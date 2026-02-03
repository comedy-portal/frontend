import { UserReviewsControls } from './components/user-reviews-controls/user-reviews-controls'
import { UserReviewsFeed } from './components/user-reviews-feed'

type UserReviewsProps = {
    userId: number
    activeUserId: number | null
    isAuth: boolean
}

export const UserReviews = ({ userId, activeUserId, isAuth }: UserReviewsProps) => {
    return (
        <div className="space-y-6">
            <UserReviewsControls />
            <UserReviewsFeed userId={userId} activeUserId={activeUserId} isAuth={isAuth} />
        </div>
    )
}

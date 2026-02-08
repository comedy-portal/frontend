import { UserReviewsControls } from './components/user-reviews-controls/user-reviews-controls'
import { UserReviewsFeed } from './components/user-reviews-feed'

type UserReviewsProps = {
    userId: number
    activeUserId: number | null
    currentYear: number
    isAuth: boolean
}

export const UserReviews = ({ userId, activeUserId, currentYear, isAuth }: UserReviewsProps) => {
    return (
        <div className="space-y-6">
            <UserReviewsControls currentYear={currentYear} />
            <UserReviewsFeed userId={userId} activeUserId={activeUserId} isAuth={isAuth} />
        </div>
    )
}

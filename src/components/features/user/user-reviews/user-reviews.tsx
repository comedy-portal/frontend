import { UserReviewsFeed } from './components/user-reviews-feed'

type UserReviewsProps = {
    userId: number
    activeUserId: number | null
    isAuth: boolean
}

export const UserReviews = ({ userId, activeUserId, isAuth }: UserReviewsProps) => {
    return <UserReviewsFeed userId={userId} activeUserId={activeUserId} isAuth={isAuth} />
}

import { UserReviewsFeed } from './components/user-reviews-feed'

type UserReviewsProps = {
    userId: number
}

export const UserReviews = ({ userId }: UserReviewsProps) => {
    return <UserReviewsFeed userId={userId} />
}

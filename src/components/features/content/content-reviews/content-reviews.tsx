import { ContentReviewsFeed } from './components/content-reviews-feed'

type ContentReviewsProps = {
    contentId: number
    activeUserId: number | null
    isAuth: boolean
}

export const ContentReviews = ({ contentId, activeUserId, isAuth }: ContentReviewsProps) => {
    return <ContentReviewsFeed contentId={contentId} activeUserId={activeUserId} isAuth={isAuth} />
}

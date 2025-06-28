import { ContentReviewsFeed } from './components/content-reviews-feed'

type ContentReviewsProps = {
    contentId: number
    isAuth: boolean
}

export const ContentReviews = ({ contentId, isAuth }: ContentReviewsProps) => {
    return <ContentReviewsFeed contentId={contentId} isAuth={isAuth} />
}

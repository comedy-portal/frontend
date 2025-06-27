import { ContentAddReview } from './content-add-review'
import { ContentReviewsFeed } from './content-reviews-feed/content-reviews-feed'

type ContentReviewsProps = {
    id: number
    isAuth: boolean
}

export const ContentReviews = ({ id, isAuth }: ContentReviewsProps) => {
    return (
        <section>
            <div className="mb-4">
                <div className="mb-2 flex items-center justify-between">
                    <h4 className="mb-0!">Рецензии</h4>
                    <ContentAddReview isAuth={isAuth} />
                </div>
                <hr className="m-0 border-gray-200! opacity-100!" />
            </div>
            <ContentReviewsFeed contentId={id} />
        </section>
    )
}

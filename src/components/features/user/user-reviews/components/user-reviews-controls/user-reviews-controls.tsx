import { UserReviewsControlsFilter } from './user-reviews-controls-filter'
import { UserReviewsControlsSort } from './user-reviews-controls-sort'

export const UserReviewsControls = () => {
    return (
        <div className="flex items-center justify-between">
            <UserReviewsControlsFilter />
            <UserReviewsControlsSort />
        </div>
    )
}

import { UserReviewsControlsFilter } from './user-reviews-controls-filter'
import { UserReviewsControlsSort } from './user-reviews-controls-sort'

type UserReviewsControlsProps = {
    currentYear: number
}

export const UserReviewsControls = ({ currentYear }: UserReviewsControlsProps) => {
    return (
        <div className="flex items-center justify-between">
            <UserReviewsControlsFilter currentYear={currentYear} />
            <UserReviewsControlsSort />
        </div>
    )
}

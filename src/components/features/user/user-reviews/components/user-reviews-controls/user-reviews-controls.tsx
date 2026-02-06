import { ReviewsFilters } from '@/components/features/dialogs/filters/reviews-filter/reviews-filters'
import { FiltersButton } from '@/components/ui/filters-button'

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

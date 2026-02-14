'use client'

import { Dropdown } from '@/components/ui/dropdown'
import { ReviewsUrlSortBy } from '@/utils/filters/reviews-filters'

const SORT_OPTIONS = [
    { label: 'Сначала новые', value: ReviewsUrlSortBy.DATE_DESC },
    { label: 'Сначала старые', value: ReviewsUrlSortBy.DATE_ASC },
    { label: 'По убыванию оценки', value: ReviewsUrlSortBy.MARK_DESC },
    { label: 'По возрастанию оценки', value: ReviewsUrlSortBy.MARK_ASC },
]

type ContentReviewsFeedSortProps = {
    sort: ReviewsUrlSortBy
    setSort: (sort: ReviewsUrlSortBy) => void
}

export const ContentReviewsFeedSort = ({ sort, setSort }: ContentReviewsFeedSortProps) => {
    const activeSortOption = SORT_OPTIONS.find(option => option.value === sort) ?? SORT_OPTIONS[0]

    return (
        <div className="absolute top-1.75 right-0">
            <Dropdown
                activeOption={activeSortOption.label}
                items={SORT_OPTIONS.map(option => ({
                    label: option.label,
                    onClick: () => setSort(option.value),
                }))}
            />
        </div>
    )
}

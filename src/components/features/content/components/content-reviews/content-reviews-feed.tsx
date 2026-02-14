'use client'

import { useEffect, useMemo, useState } from 'react'

import { CommonError } from '@/components/ui/common-error'
import { EmptyMessage } from '@/components/ui/empty-message'
import { LoadMore } from '@/components/ui/load-more'
import { Order } from '@/utils/enums/common'
import { ReviewsUrlSortBy } from '@/utils/filters/reviews-filters'
import { reviewsAPI } from '@/utils/redux/services/reviews/reviews.api'
import { ReviewSortBy } from '@/utils/redux/services/reviews/reviews.types'

import { ContentReviewsFeedItem } from './content-reviews-feed-item'
import { ContentReviewsFeedSkeleton } from './content-reviews-feed-skeleton'
import { ContentReviewsFeedSort } from './content-reviews-feed-sort'

type ContentReviewsFeedProps = {
    contentId: number
    activeUserId: number | null
    isAuth: boolean
}

export const ContentReviewsFeed = ({ contentId, activeUserId, isAuth }: ContentReviewsFeedProps) => {
    const [sort, setSort] = useState<ReviewsUrlSortBy>(ReviewsUrlSortBy.DATE_DESC)
    const [cursor, setCursor] = useState<number>()

    const { sortBy, order } = useMemo(() => {
        let sortBy: ReviewSortBy = ReviewSortBy.DATE
        let order: Order = Order.DESC

        switch (sort) {
            case ReviewsUrlSortBy.DATE_DESC:
                sortBy = ReviewSortBy.DATE
                order = Order.DESC
                break
            case ReviewsUrlSortBy.DATE_ASC:
                sortBy = ReviewSortBy.DATE
                order = Order.ASC
                break
            case ReviewsUrlSortBy.MARK_DESC:
                sortBy = ReviewSortBy.MARK
                order = Order.DESC
                break
            case ReviewsUrlSortBy.MARK_ASC:
                sortBy = ReviewSortBy.MARK
                order = Order.ASC
                break
        }

        return { sortBy, order }
    }, [sort])

    const handleSetSort = (sort: ReviewsUrlSortBy) => {
        setCursor(undefined)
        setSort(sort)
    }

    const { data, isFetching, isSuccess, isError } = reviewsAPI.useGetReviewsByContentQuery({
        content_id: contentId,
        with_text: true,
        cursor,
        sort_by: sortBy,
        order,
    })

    if (isError) {
        return <CommonError />
    }

    if (isSuccess && data.items.length === 0) {
        return (
            <EmptyMessage>
                Здесь пока нет рецензий.
                <br />
                Оставьте первую — поделитесь своим мнением.
            </EmptyMessage>
        )
    }

    if (!isSuccess) {
        return <ContentReviewsFeedSkeleton />
    }

    return (
        <div className="flex flex-col gap-y-12">
            <div className="space-y-3">
                <ContentReviewsFeedSort sort={sort} setSort={handleSetSort} />
                {data.items.map(item => (
                    <ContentReviewsFeedItem
                        key={`content-reviews-feed-item-${item.id}`}
                        id={item.id}
                        contentId={contentId}
                        userId={item.user.id}
                        text={item.text}
                        rating={item.mark}
                        username={item.user.username}
                        createdAt={item.createdAt}
                        activeUserId={activeUserId}
                        isAuth={isAuth}
                    />
                ))}
            </div>

            {data.items.length < data.total && (
                <LoadMore
                    isLoading={isFetching}
                    onClick={() => {
                        setCursor(data.items[data.items.length - 1]?.id)
                    }}
                />
            )}
        </div>
    )
}

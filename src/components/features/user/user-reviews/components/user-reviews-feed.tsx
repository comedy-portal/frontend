'use client'

import { useEffect, useMemo, useState } from 'react'

import { CommonError } from '@/components/ui/common-error'
import { EmptyMessage } from '@/components/ui/empty-message'
import { LoadMore } from '@/components/ui/load-more'
import { reviewsAPI } from '@/redux/services/reviews/reviews.api'
import { ReviewSortBy } from '@/redux/services/reviews/reviews.types'
import { Order } from '@/utils/enums/common'
import {
    ReviewsUrlSortBy,
    buildReviewsFiltersQueryString,
    parseReviewsFiltersFromSearchParams,
} from '@/utils/filters/reviews-filters'
import { useQueryFilters } from '@/utils/filters/use-query-filters'

import { UserReviewsFeedItem } from './user-reviews-feed-item'
import { UserReviewsFeedSkeleton } from './user-reviews-feed-skeleton'

type UserReviewsFeedProps = {
    userId: number
    activeUserId: number | null
    isAuth: boolean
}

export const UserReviewsFeed = ({ userId, activeUserId, isAuth }: UserReviewsFeedProps) => {
    const [filters] = useQueryFilters(parseReviewsFiltersFromSearchParams, buildReviewsFiltersQueryString)
    const [cursor, setCursor] = useState<number>()

    const { sortBy, order } = useMemo(() => {
        let sortBy = ReviewSortBy.DATE
        let order = Order.DESC

        switch (filters.sort) {
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
    }, [filters.sort])

    useEffect(() => {
        setCursor(undefined)
    }, [filters.sort, filters.with_text, filters.types])

    const { data, isFetching, isSuccess, isError } = reviewsAPI.useGetReviewsQuery({
        user_id: userId,
        sort_by: sortBy,
        with_text: filters.with_text,
        order,
        cursor,
        types: filters.types,
    })

    if (isError) {
        return <CommonError />
    }

    if (isSuccess && data.items.length === 0) {
        return (
            <EmptyMessage>
                Список оценок и рецензий пуст. Попробуйте зайти позже или изменить фильтр.
                <br />
                Каждый зарегистрированный пользователь может оставить рецензию на контент или просто оценить его.
            </EmptyMessage>
        )
    }

    if (!isSuccess) {
        return <UserReviewsFeedSkeleton />
    }

    return (
        <div className="flex flex-col gap-y-12">
            <div className="space-y-3">
                {data.items.map(item => (
                    <UserReviewsFeedItem
                        key={`content-reviews-feed-item-${item.id}`}
                        review={item}
                        isMyReview={isAuth && activeUserId === userId && item.user.id === activeUserId}
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

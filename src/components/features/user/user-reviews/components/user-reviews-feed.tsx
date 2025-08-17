'use client'

import { useMemo, useState } from 'react'

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
        setCursor(undefined)
        switch (filters.sort) {
            case ReviewsUrlSortBy.DATE_DESC:
                return { sortBy: ReviewSortBy.DATE, order: Order.DESC }
            case ReviewsUrlSortBy.DATE_ASC:
                return { sortBy: ReviewSortBy.DATE, order: Order.ASC }
            case ReviewsUrlSortBy.MARK_DESC:
                return { sortBy: ReviewSortBy.MARK, order: Order.DESC }
            case ReviewsUrlSortBy.MARK_ASC:
                return { sortBy: ReviewSortBy.MARK, order: Order.ASC }
            default:
                return { sortBy: ReviewSortBy.DATE, order: Order.DESC }
        }
    }, [filters.sort])

    const { data, isFetching, isSuccess, isError } = reviewsAPI.useGetReviewsQuery({
        user_id: userId,
        sort_by: sortBy,
        with_text: filters.with_text,
        order,
        cursor,
    })

    if (isError) {
        return (
            <div className="text-center text-gray-500">
                Ошибка загрузки. Попробуйте обновить страницу или зайдите позже.
            </div>
        )
    }

    if (isSuccess && data.items.length === 0) {
        return (
            <EmptyMessage>
                Здесь пока нет рецензий.
                <br />
                Когда они появятся — Вы увидите их здесь.
            </EmptyMessage>
        )
    }

    if (!isSuccess) {
        return <UserReviewsFeedSkeleton />
    }

    return (
        <div className="flex flex-col gap-y-12">
            <div className="space-y-2">
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

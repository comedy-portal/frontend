'use client'

import { useState } from 'react'

import { EmptyMessage } from '@/components/ui/empty-message'
import { LoadMore } from '@/components/ui/load-more'
import { reviewsAPI } from '@/redux/services/reviews/reviews.api'

import { UserReviewsFeedItem } from './user-reviews-feed-item'
import { UserReviewsFeedSkeleton } from './user-reviews-feed-skeleton'

type UserReviewsFeedProps = {
    userId: number
    activeUserId: number | null
    isAuth: boolean
}

export const UserReviewsFeed = ({ userId, activeUserId, isAuth }: UserReviewsFeedProps) => {
    const [cursor, setCursor] = useState<number>()

    const { data, isFetching, isSuccess, isError } = reviewsAPI.useGetReviewsQuery({
        user_id: userId,
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
        return <EmptyMessage>Здесь пока нет оценок и рецензий.</EmptyMessage>
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

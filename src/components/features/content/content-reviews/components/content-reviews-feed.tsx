'use client'

import { useState } from 'react'

import { EmptyMessage } from '@/components/ui/empty-message'
import { LoadMore } from '@/components/ui/load-more'
import { reviewsAPI } from '@/redux/services/reviews/reviews.api'

import { ContentReviewAddButton } from './content-review-add-button'
import { ContentReviewsFeedItem } from './content-reviews-feed-item'
import { ContentReviewsFeedSkeleton } from './content-reviews-feed-skeleton'

type ContentReviewsFeedProps = {
    contentId: number
    isAuth: boolean
}

export const ContentReviewsFeed = ({ contentId, isAuth }: ContentReviewsFeedProps) => {
    const [cursor, setCursor] = useState<number>()

    const { data, isFetching, isSuccess, isError } = reviewsAPI.useGetReviewsQuery({
        content_id: contentId,
        with_text: true,
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
                Оставьте первую — поделитесь своим мнением.
                <ContentReviewAddButton contentId={contentId} className="mt-4" isAuth={isAuth} />
            </EmptyMessage>
        )
    }

    if (!isSuccess) {
        return <ContentReviewsFeedSkeleton />
    }

    return (
        <div className="relative flex flex-col gap-y-12">
            <div>
                <div className="mb-6 sm:absolute sm:-top-[73px] sm:right-0 sm:mb-0">
                    <ContentReviewAddButton
                        contentId={contentId}
                        isAuth={isAuth}
                        className="w-full justify-center sm:w-auto"
                    />
                </div>
                <div className="space-y-4">
                    {data.items.map(item => (
                        <ContentReviewsFeedItem
                            key={`content-reviews-feed-item-${item.id}`}
                            text={item.text}
                            rating={item.mark}
                            username={item.user.username}
                            createdAt={item.createdAt}
                        />
                    ))}
                </div>
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

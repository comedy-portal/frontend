'use client'

import { useState } from 'react'

import { CommonError } from '@/components/ui/common-error'
import { EmptyMessage } from '@/components/ui/empty-message'
import { LoadMore } from '@/components/ui/load-more'
import { reviewsAPI } from '@/redux/services/reviews/reviews.api'

import { ContentReviewsFeedItem } from './content-reviews-feed-item'
import { ContentReviewsFeedSkeleton } from './content-reviews-feed-skeleton'

type ContentReviewsFeedProps = {
    contentId: number
    activeUserId: number | null
    isAuth: boolean
}

export const ContentReviewsFeed = ({ contentId, activeUserId, isAuth }: ContentReviewsFeedProps) => {
    const [cursor, setCursor] = useState<number>()

    const { data, isFetching, isSuccess, isError } = reviewsAPI.useGetReviewsByContentQuery({
        content_id: contentId,
        with_text: true,
        cursor,
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
        <div className="relative flex flex-col gap-y-12">
            <div className="space-y-2">
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

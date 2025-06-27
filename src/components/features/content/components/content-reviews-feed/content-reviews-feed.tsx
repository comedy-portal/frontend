'use client'

import { useState } from 'react'

import { LoadMore } from '@/components/ui/load-more'
import { ReviewBlock } from '@/components/ui/review-block'
import { reviewsAPI } from '@/redux/services/reviews/reviews.api'

type ContentReviewsFeedProps = {
    contentId: number
}

export const ContentReviewsFeed = ({ contentId }: ContentReviewsFeedProps) => {
    const [cursor, setCursor] = useState<number>()

    const { data, isFetching, isSuccess, isError } = reviewsAPI.useGetReviewsQuery({
        content_id: contentId,
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
            <div className="text-sm text-gray-500">
                Рецензии к этому контенту пока отсутствуют.
                <br />
                Станьте первым, кто оставит рецензию!
            </div>
        )
    }

    if (!isSuccess) {
        return <div>Загрузка ...</div>
    }

    return (
        <div className="flex flex-col gap-y-12">
            <div className="space-y-4">
                {data.items.map(item => (
                    <ReviewBlock
                        key={`content-reviews-feed-item-${item.id}`}
                        text={item.text}
                        rating={item.mark}
                        username={item.user.username}
                        createdAt={item.createdAt}
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

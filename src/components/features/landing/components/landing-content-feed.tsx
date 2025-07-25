'use client'

import { ContentBlock } from '@/components/ui/content-block/content-block'
import { EmptyMessage } from '@/components/ui/empty-message'
import { contentAPI } from '@/redux/services/content/content.api'
import { ContentSortBy } from '@/redux/services/content/content.types'
import { Order } from '@/utils/enums/common'
import { getAuthorDisplayNameForContent } from '@/utils/helpers/common'

import { LandingContentFeedSkeleton } from './landing-content-feed-skeleton'

type LandingContentFeedProps = {
    sortBy: ContentSortBy
    order: Order
    take: number
}

export const LandingContentFeed = (props: LandingContentFeedProps) => {
    const { data, isFetching, isSuccess, isError } = contentAPI.useGetContentManyQuery({
        order: props.order,
        sort_by: props.sortBy,
        take: props.take,
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
                Контент в этой категории пока отсутствует.
                <br />
                Попробуйте зайти позже.
            </EmptyMessage>
        )
    }

    if (!isSuccess) {
        return <LandingContentFeedSkeleton />
    }

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {data.items.map(item => (
                <ContentBlock
                    key={`landing-content-feed-item-${item.id}`}
                    id={item.id}
                    type={item.type}
                    name={item.name}
                    imageUrl={item.contentImages[0]?.url}
                    year={item.year}
                    duration={item.duration}
                    avgRating={item.rating.avgRating}
                    myRating={item.reviews?.[0]?.mark}
                    author={getAuthorDisplayNameForContent(item)}
                />
            ))}
        </div>
    )
}

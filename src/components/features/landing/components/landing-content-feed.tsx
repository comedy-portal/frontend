'use client'

import ScrollContainer from 'react-indiana-drag-scroll'

import { ContentBlock } from '@/components/features/common/content-block/content-block'
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
    notWatched?: boolean
    isAuth: boolean
}

export const LandingContentFeed = (props: LandingContentFeedProps) => {
    const { data, isSuccess, isError } = contentAPI.useGetContentManyQuery({
        order: props.order,
        sort_by: props.sortBy,
        take: props.take,
        not_watched: props.notWatched || false,
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
        <ScrollContainer className="grid auto-cols-[278px] grid-flow-col gap-4 overflow-x-auto">
            {data.items.map(item => (
                <ContentBlock
                    key={`landing-content-feed-item-${item.id}`}
                    id={item.id}
                    name={item.name}
                    type={item.type}
                    year={item.year}
                    duration={item.duration}
                    avgRating={item.rating.avgRating}
                    myRating={item.reviews?.[0]?.mark}
                    myReviewId={item.reviews?.[0]?.id}
                    imageUrl={item.contentImages[0]?.url}
                    author={getAuthorDisplayNameForContent(item)}
                    isInWatchlist={(item.watchlists?.length ?? 0) > 0}
                    isAuth={props.isAuth}
                />
            ))}
        </ScrollContainer>
    )
}

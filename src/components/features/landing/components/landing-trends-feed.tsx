'use client'

import ScrollContainer from 'react-indiana-drag-scroll'

import { ContentBlock } from '@/components/features/common/content-block/content-block'
import { CommonError } from '@/components/ui/common-error'
import { EmptyMessage } from '@/components/ui/empty-message'
import { contentAPI } from '@/redux/services/content/content.api'
import { getAuthorDisplayNameForContent } from '@/utils/helpers/common'

import { LandingContentFeedSkeleton } from './landing-content-feed-skeleton'

type LandingContentFeedProps = {
    isAuth: boolean
}

export const LandingTrendsFeed = (props: LandingContentFeedProps) => {
    const { data, isSuccess, isError } = contentAPI.useGetTrendsQuery()

    if (isError) {
        return <CommonError />
    }

    if (isSuccess && data.length === 0) {
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
        <ScrollContainer className="grid auto-cols-[278px] grid-flow-col gap-3 overflow-x-auto">
            {data.map((item, index) => (
                <ContentBlock
                    key={`landing-content-feed-item-${item.id}`}
                    id={item.id}
                    name={`${++index}. ${item.name}`}
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
                    hasWatchlistControl
                />
            ))}
        </ScrollContainer>
    )
}

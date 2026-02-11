'use client'

import { ContentBlockRow } from '@/components/features/common/content-block/content-block-row'
import { CommonError } from '@/components/ui/common-error'
import { EmptyMessage } from '@/components/ui/empty-message'
import { ContentType } from '@/utils/enums/common'
import { getAuthorDisplayNameForContent } from '@/utils/helpers/common'
import { contentAPI } from '@/utils/redux/services/content/content.api'
import { GetTopContentTake } from '@/utils/redux/services/content/content.types'

import { TopContentFeedSkeleton } from './top-content-feed-skeleton'
import { TopContentWatchedProgress } from './top-content-watched-progress'

type TopContentFeedProps = {
    type: ContentType
    year?: number
    take: GetTopContentTake
    isAuth: boolean
}

export const TopContentFeed = ({ type, year, take, isAuth }: TopContentFeedProps) => {
    const { data, isSuccess, isError } = contentAPI.useGetTopContentQuery({
        type,
        ...(year ? { year } : {}),
        take,
    })

    if (isError) {
        return <CommonError />
    }

    if (isSuccess && data.items.length === 0) {
        return (
            <EmptyMessage>
                Контент в этом топе пока отсутствует.
                <br />
                Попробуйте зайти позже или выберите другой топ.
            </EmptyMessage>
        )
    }

    if (!isSuccess) {
        return <TopContentFeedSkeleton />
    }

    return (
        <div className="space-y-6">
            <TopContentWatchedProgress total={data.total} watchedCount={data.watchedCount} />
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:block lg:space-y-3">
                {data.items.map((item, index) => (
                    <ContentBlockRow
                        key={`top-content-feed-item-${item.id}`}
                        id={item.id}
                        name={item.name}
                        description={item.metaInfo?.description}
                        type={item.type}
                        year={item.year}
                        duration={item.duration}
                        avgRating={item.rating.avgRating}
                        myRating={item.reviews?.[0]?.mark}
                        myReviewId={item.reviews?.[0]?.id}
                        contentUrl={`/content/${item.type.toLowerCase()}/${item.id}`}
                        imageUrl={item.contentImages[0]?.url}
                        position={index + 1}
                        author={getAuthorDisplayNameForContent(item)}
                        isInWatchlist={(item.watchlists?.length ?? 0) > 0}
                        isAuth={isAuth}
                    />
                ))}
            </div>
        </div>
    )
}

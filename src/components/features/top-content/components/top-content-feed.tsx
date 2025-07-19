'use client'

import { ContentBlock } from '@/components/ui/content-block/content-block'
import { EmptyMessage } from '@/components/ui/empty-message'
import { contentAPI } from '@/redux/services/content/content.api'
import { GetTopContentTake } from '@/redux/services/content/content.types'
import { ContentType } from '@/utils/enums/common'
import { getAuthorDisplayNameForContent } from '@/utils/helpers/common'

import { TopContentFeedSkeleton } from './top-content-feed-skeleton'

type TopContentFeedProps = {
    type: ContentType
    year?: number
    take: GetTopContentTake
}

export const TopContentFeed = ({ type, year, take }: TopContentFeedProps) => {
    const { data, isSuccess, isError } = contentAPI.useGetTopContentQuery({
        type,
        ...(year ? { year } : {}),
        take,
    })

    if (isError) {
        return (
            <div className="text-center text-gray-500">
                Ошибка загрузки. Попробуйте обновить страницу или зайдите позже.
            </div>
        )
    }

    if (isSuccess && data.length === 0) {
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
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {data.map(item => (
                <ContentBlock
                    key={`content-many-feed-item-${item.id}`}
                    id={item.id}
                    type={item.type}
                    name={item.name}
                    imageUrl={item.contentImages[0]?.url}
                    year={item.year}
                    avgRating={item.rating.avgRating}
                    author={getAuthorDisplayNameForContent(item)}
                />
            ))}
        </div>
    )
}

'use client'

import { useMemo, useState } from 'react'

import { ContentBlock } from '@/components/features/common/content-block/content-block'
import { EmptyMessage } from '@/components/ui/empty-message'
import { LoadMore } from '@/components/ui/load-more'
import { contentAPI } from '@/redux/services/content/content.api'
import { ContentSortBy } from '@/redux/services/content/content.types'
import { ContentType, ContentUrlSortBy, Order } from '@/utils/enums/common'
import { getAuthorDisplayNameForContent } from '@/utils/helpers/common'
import { useSortFilters } from '@/utils/helpers/use-sort-filters'

import { ContentManyFeedSkeleton } from './content-many-feed-skeleton'

type ContentManyFeedProps = {
    type?: ContentType
    isAuth: boolean
}

export const ContentManyFeed = ({ type, isAuth }: ContentManyFeedProps) => {
    const [filters] = useSortFilters()
    const [cursor, setCursor] = useState<number>()

    const { sortBy, order } = useMemo(() => {
        setCursor(undefined)
        switch (filters.sort) {
            case ContentUrlSortBy.DATE_DESC:
                return { sortBy: ContentSortBy.DATE, order: Order.DESC }
            case ContentUrlSortBy.DATE_ASC:
                return { sortBy: ContentSortBy.DATE, order: Order.ASC }
            case ContentUrlSortBy.RATING_DESC:
                return { sortBy: ContentSortBy.RATING, order: Order.DESC }
            default:
                return { sortBy: ContentSortBy.DATE, order: Order.DESC }
        }
    }, [filters.sort, filters.min_rating, filters.max_rating])

    const { data, isFetching, isSuccess, isError } = contentAPI.useGetContentManyQuery({
        type,
        order,
        sort_by: sortBy,
        cursor,
        min_rating: filters.min_rating,
        max_rating: filters.max_rating,
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
                Попробуйте выбрать другую категорию или изменить фильтры.
            </EmptyMessage>
        )
    }

    if (!isSuccess) {
        return <ContentManyFeedSkeleton />
    }

    return (
        <div className="flex flex-col gap-y-12">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                {data.items.map(item => (
                    <ContentBlock
                        key={`content-many-feed-item-${item.id}`}
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

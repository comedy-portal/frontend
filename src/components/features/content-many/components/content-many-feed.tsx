'use client'

import { useMemo, useState } from 'react'

import { ContentBlock } from '@/components/features/common/content-block/content-block'
import { CommonError } from '@/components/ui/common-error'
import { EmptyMessage } from '@/components/ui/empty-message'
import { LoadMore } from '@/components/ui/load-more'
import { contentAPI } from '@/redux/services/content/content.api'
import { ContentSortBy } from '@/redux/services/content/content.types'
import { ContentType, Order } from '@/utils/enums/common'
import {
    ContentUrlSortBy,
    buildContentFiltersQueryString,
    parseContentFiltersFromSearchParams,
} from '@/utils/filters/content-filters'
import { useQueryFilters } from '@/utils/filters/use-query-filters'
import { getAuthorDisplayNameForContent } from '@/utils/helpers/common'

import { ContentManyFeedSkeleton } from './content-many-feed-skeleton'

type ContentManyFeedProps = {
    type?: ContentType
    isAuth: boolean
}

export const ContentManyFeed = ({ type, isAuth }: ContentManyFeedProps) => {
    const [filters] = useQueryFilters(parseContentFiltersFromSearchParams, buildContentFiltersQueryString)
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
            case ContentUrlSortBy.RATING_ASC:
                return { sortBy: ContentSortBy.RATING, order: Order.ASC }
            default:
                return { sortBy: ContentSortBy.DATE, order: Order.DESC }
        }
    }, [filters.sort, filters.min_rating, filters.max_rating, filters.not_watched])

    const { data, isFetching, isSuccess, isError } = contentAPI.useGetContentManyQuery({
        type,
        min_rating: filters.min_rating,
        max_rating: filters.max_rating,
        year: filters.year,
        sort_by: sortBy,
        not_watched: filters.not_watched,
        order,
        cursor,
    })

    if (isError) {
        return <CommonError />
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
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-3 lg:grid-cols-3 xl:grid-cols-4">
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
                        hasWatchlistControl={false}
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

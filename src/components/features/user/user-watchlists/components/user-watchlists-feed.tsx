'use client'

import { useMemo } from 'react'

import classNames from 'classnames'

import { ContentBlockRow } from '@/components/features/common/content-block/content-block-row'
import { EmptyMessage } from '@/components/ui/empty-message'
import { watchlistsAPI } from '@/redux/services/watchlists/watchlists.api'
import { WatchlistSortBy } from '@/redux/services/watchlists/watchlists.type'
import { Order } from '@/utils/enums/common'
import { useQueryFilters } from '@/utils/filters/use-query-filters'
import {
    WatchlistsUrlSortBy,
    buildWatchlistsFiltersQueryString,
    parseWatchlistsFiltersFromSearchParams,
} from '@/utils/filters/watchlists-filters'
import { getAuthorDisplayNameForContent } from '@/utils/helpers/common'

import { UserWatchlistsFeedSkeleton } from './user-watchlists-feed-skeleton'

type UserWatchlistsFeedProps = {
    username: string
    isAuth: boolean
}

export const UserWatchlistsFeed = ({ username, isAuth }: UserWatchlistsFeedProps) => {
    const [filters] = useQueryFilters(parseWatchlistsFiltersFromSearchParams, buildWatchlistsFiltersQueryString)

    const { sortBy, order } = useMemo(() => {
        switch (filters.sort) {
            case WatchlistsUrlSortBy.DATE_DESC:
                return { sortBy: WatchlistSortBy.CONTENT_DATE, order: Order.DESC }
            case WatchlistsUrlSortBy.SAVED_AT_DESC:
                return { sortBy: WatchlistSortBy.SAVED_AT, order: Order.DESC }
            case WatchlistsUrlSortBy.RATING_DESC:
                return { sortBy: WatchlistSortBy.RATING, order: Order.DESC }
            default:
                return { sortBy: WatchlistSortBy.CONTENT_DATE, order: Order.DESC }
        }
    }, [filters.sort])

    const { data, isFetching, isSuccess, isError } = watchlistsAPI.useGetWatchlistQuery({
        username,
        order,
        sort_by: sortBy,
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

    if (isSuccess && data.length === 0) {
        return (
            <EmptyMessage>
                Список избранного пуст. Попробуйте зайти позже или изменить фильтры.
                <br />
                Каждый зарегистрированный пользователь может добавить контент в&nbsp;своё избранное.
            </EmptyMessage>
        )
    }

    if (!isSuccess || isFetching) {
        return <UserWatchlistsFeedSkeleton />
    }

    return (
        <div className={classNames('lg:block lg:space-y-2', 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6')}>
            {data.map(item => (
                <ContentBlockRow
                    key={`user-watchlists-feed-item-${item.id}`}
                    id={item.content.id}
                    name={item.content.name}
                    description={item.content.metaInfo?.description}
                    type={item.content.type}
                    year={item.content.year}
                    duration={item.content.duration}
                    avgRating={item.content.rating.avgRating}
                    myRating={item.content.reviews?.[0]?.mark}
                    myReviewId={item.content.reviews?.[0]?.id}
                    contentUrl={`/content/${item.content.type.toLowerCase()}/${item.content.id}`}
                    imageUrl={item.content.contentImages[0]?.url}
                    author={getAuthorDisplayNameForContent({
                        comedians: item.content.comedians,
                        group: item.content.group,
                    })}
                    isInWatchlist={(item.content.watchlists?.length ?? 0) > 0}
                    isAuth={isAuth}
                />
            ))}
        </div>
    )
}

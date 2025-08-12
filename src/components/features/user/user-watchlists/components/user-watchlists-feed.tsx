'use client'

import classNames from 'classnames'

import { ContentBlockRow } from '@/components/features/common/content-block/content-block-row'
import { EmptyMessage } from '@/components/ui/empty-message'
import { watchlistsAPI } from '@/redux/services/watchlists/watchlists.api'
import { getAuthorDisplayNameForContent } from '@/utils/helpers/common'

import { UserWatchlistsFeedSkeleton } from './user-watchlists-feed-skeleton'

type UserWatchlistsFeedProps = {
    username: string
    isAuth: boolean
}

export const UserWatchlistsFeed = ({ username, isAuth }: UserWatchlistsFeedProps) => {
    const { data, isFetching, isSuccess, isError } = watchlistsAPI.useGetWatchlistQuery({
        username,
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
                Здесь пока нет избранного.
                <br />
                Контент, добавленный в список, появится здесь.
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

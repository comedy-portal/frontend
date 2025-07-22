'use client'

import { useState } from 'react'

import classNames from 'classnames'

import { ContentBlockRow } from '@/components/ui/content-block/content-block-row'
import { EmptyMessage } from '@/components/ui/empty-message'
import { LoadMore } from '@/components/ui/load-more'
import { watchlistsAPI } from '@/redux/services/watchlists/watchlists.api'
import { getAuthorDisplayNameForContent } from '@/utils/helpers/common'

import { UserWatchlistsFeedSkeleton } from './user-watchlists-feed-skeleton'

type UserWatchlistsFeedProps = {
    username: string
}

export const UserWatchlistsFeed = ({ username }: UserWatchlistsFeedProps) => {
    const [cursor, setCursor] = useState<number>()

    const { data, isFetching, isSuccess, isError } = watchlistsAPI.useGetWatchlistQuery({
        username,
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
        <div className="space-y-2">
            <div className={classNames('lg:block lg:space-y-2', 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6')}>
                {data.items.map(item => (
                    <ContentBlockRow
                        key={`user-watchlists-feed-item-${item.id}`}
                        id={item.content.id}
                        name={item.content.name}
                        description={item.content.metaInfo?.description}
                        type={item.content.type}
                        year={item.content.year}
                        duration={item.content.duration}
                        avgRating={item.content.rating.avgRating}
                        contentUrl={`/content/${item.content.type.toLowerCase()}/${item.id}`}
                        imageUrl={item.content.contentImages[0]?.url}
                        author={getAuthorDisplayNameForContent({
                            comedians: item.content.comedians,
                            group: item.content.group,
                        })}
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

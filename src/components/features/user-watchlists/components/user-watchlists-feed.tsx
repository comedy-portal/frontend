'use client'

import { useState } from 'react'

import { MicOffIcon } from 'lucide-react'

import { LoadMore } from '@/components/ui/load-more'
import { watchlistsAPI } from '@/redux/services/watchlists/watchlists.api'

import { UserWatchlistsFeedItem } from './user-watchlists-feed-item'
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
            <div className="flex flex-col items-center gap-y-4 py-24 text-center text-sm text-gray-500">
                <MicOffIcon strokeWidth={1} size={64} className="text-gray-400" />
                Ваше избранное пусто.
                <br />
                Добавьте контент в избранное, чтобы он появился здесь.
            </div>
        )
    }

    if (!isSuccess || isFetching) {
        return <UserWatchlistsFeedSkeleton />
    }

    return (
        <div className="space-y-2">
            <div className="space-y-2">
                {data.items.map(item => (
                    <UserWatchlistsFeedItem
                        key={`user-watchlists-feed-item-${item.id}`}
                        id={item.content.id}
                        type={item.content.type}
                        name={item.content.name}
                        year={item.content.year}
                        avgRating={item.content.rating.avgRating}
                        reviewsCount={item.content.rating.reviewsCount}
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

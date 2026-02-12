'use client'

import { useState } from 'react'

import { CommonError } from '@/components/ui/common-error'
import { EmptyMessage } from '@/components/ui/empty-message'
import { LoadMore } from '@/components/ui/load-more'
import { groupsAPI } from '@/utils/redux/services/groups/groups.api'

import { ComediansGroupsFeedItem } from './comedians-groups-feed-item'
import { ComediansGroupsFeedSkeleton } from './comedians-groups-feed-skeleton'

export const ComediansGroupsFeed = () => {
    const [cursor, setCursor] = useState<number>()

    const { data, isFetching, isSuccess, isError } = groupsAPI.useGetGroupsQuery({
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
                Попробуйте выбрать другую категорию или зайдите позже.
            </EmptyMessage>
        )
    }

    if (!isSuccess) {
        return <ComediansGroupsFeedSkeleton />
    }

    return (
        <div className="flex flex-col gap-y-12">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
                {data.items.map(item => (
                    <ComediansGroupsFeedItem
                        key={`comedians-groups-feed-item-${item.slug}`}
                        slug={item.slug}
                        name={item.name}
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

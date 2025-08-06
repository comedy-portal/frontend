'use client'

import { useState } from 'react'

import { ComedianBlock } from '@/components/features/common/comedian-block/comedian-block'
import { EmptyMessage } from '@/components/ui/empty-message'
import { LoadMore } from '@/components/ui/load-more'
import { comediansAPI } from '@/redux/services/comedians/comedians.api'

import { ComediansFeedSkeleton } from './comedians-feed-skeleton'

export const ComediansFeed = () => {
    const [cursor, setCursor] = useState<number>()

    const { data, isFetching, isSuccess, isError } = comediansAPI.useGetComediansQuery({
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
                Контент в этой категории пока отсутствует.
                <br />
                Попробуйте выбрать другую категорию или зайдите позже.
            </EmptyMessage>
        )
    }

    if (!isSuccess) {
        return <ComediansFeedSkeleton />
    }

    return (
        <div className="flex flex-col gap-y-12">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
                {data.items.map(item => (
                    <ComedianBlock
                        key={`comedians-feed-item-${item.slug}`}
                        slug={item.slug}
                        name={item.name}
                        surname={item.surname}
                        isAgent={item.isAgent}
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

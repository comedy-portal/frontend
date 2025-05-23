'use client'

import { useState } from 'react'

import { PackageOpenIcon } from 'lucide-react'

import { ComedianBlock } from '@/components/ui/comedian-block'
import { LoadMore } from '@/components/ui/load-more'
import { comediansAPI } from '@/redux/services/comedians/comedians.api'

export const ComediansFeed = () => {
    const [cursor, setCursor] = useState(0)

    const { data, isFetching, isSuccess, isError } = comediansAPI.useGetComediansQuery({
        cursor: cursor.toString(),
    })

    if (isError) {
        return (
            <div className="text-center text-gray-500">
                Ошибка загрузки контента. Попробуйте обновить страницу или зайдите позже.
            </div>
        )
    }

    if (isSuccess && data.items.length === 0) {
        return (
            <div className="flex flex-col items-center gap-y-4 py-24 text-center text-gray-500">
                <PackageOpenIcon size={64} className="text-gray-400" />
                Контент в этой категории пока отсутствует.
                <br />
                Попробуйте выбрать другую категорию или зайдите позже.
            </div>
        )
    }

    if (!isSuccess) {
        return <div>Загрузка ...</div>
    }

    return (
        <div className="flex flex-col gap-y-12">
            <div className="flex flex-col">
                {data.items.map(item => (
                    <ComedianBlock
                        key={`comedian-block-${item.id}`}
                        slug={item.slug}
                        name={item.name}
                        surname={item.surname}
                        imageUrl={item.comedianImages[0]?.url}
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

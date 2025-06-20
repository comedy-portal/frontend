'use client'

import { useState } from 'react'

import { PackageOpenIcon } from 'lucide-react'

import Link from 'next/link'

import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { LoadMore } from '@/components/ui/load-more'
import { comediansAPI } from '@/redux/services/comedians/comedians.api'

export const ComediansFeed = () => {
    const [cursor, setCursor] = useState<number>()

    const { data, isFetching, isSuccess, isError } = comediansAPI.useGetComediansQuery({
        cursor,
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
        <div className="grid grid-cols-3 gap-y-4">
            {data.items.map(item => (
                <div key={`comedians-feed-item-${item.id}`} className="flex items-center gap-x-4">
                    <Link href={`/comedians/${item.slug}`}>
                        <ImageWithFallback
                            src={item.comedianImages[0]?.url || ''}
                            width={128}
                            height={128}
                            className="size-32 rounded-full align-top"
                            alt={item.name}
                        />
                    </Link>
                    <div className="flex flex-col items-start gap-y-1">
                        <Link
                            href={`/comedians/${item.slug}`}
                            className="text-lg font-semibold text-black no-underline! hover:text-blue-500!"
                        >
                            {item.name} {item.surname}
                        </Link>
                        {item.groups.map((group, index) => (
                            <Link
                                key={`comedians-feed-item-${item.id}-group-${index}`}
                                href={`/groups/${group.slug}`}
                                className="inline-block rounded bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-700! no-underline! hover:text-blue-500!"
                            >
                                {group.name}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}

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

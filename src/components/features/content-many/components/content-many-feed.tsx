'use client'

import { useMemo, useState } from 'react'

import { MicOffIcon } from 'lucide-react'

import { useSearchParams } from 'next/navigation'

import { ContentBlock } from '@/components/ui/content-block'
import { LoadMore } from '@/components/ui/load-more'
import { contentAPI } from '@/redux/services/content/content.api'
import { ContentSortBy, ContentType, ContentUrlSortBy, Order } from '@/utils/enums/common'

type ContentManyFeedProps = {
    type: ContentType
}

export const ContentManyFeed = ({ type }: ContentManyFeedProps) => {
    const searchParams = useSearchParams()
    const [cursor, setCursor] = useState<number>()

    const { sortBy, order } = useMemo(() => {
        setCursor(undefined)
        switch (searchParams.get('sort')) {
            case ContentUrlSortBy.DATE_DESC:
                return { sortBy: ContentSortBy.DATE, order: Order.DESC }
            case ContentUrlSortBy.DATE_ASC:
                return { sortBy: ContentSortBy.DATE, order: Order.ASC }
            case ContentUrlSortBy.RATING_DESC:
                return { sortBy: ContentSortBy.RATING, order: Order.DESC }
            default:
                return { sortBy: ContentSortBy.DATE, order: Order.DESC } // fallback
        }
    }, [searchParams])

    const { data, isFetching, isSuccess, isError } = contentAPI.useGetContentManyQuery({
        type,
        order,
        sort_by: sortBy,
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
                <MicOffIcon strokeWidth={1} size={64} className="text-gray-400" />
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
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
                {data.items.map(item => (
                    <ContentBlock
                        key={`content-many-feed-item-${item.id}`}
                        id={item.id}
                        type={item.type}
                        name={item.name}
                        imageUrl={item.contentImages[0]?.url}
                        year={item.year}
                        avgRating={item.rating.avgRating}
                        reviewsCount={item.rating.reviewsCount}
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

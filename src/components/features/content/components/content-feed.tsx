'use client'

import { useMemo } from 'react'

import { ContentBlock } from '@/components/ui/content-block'
import { getContentCursor, getContentSortBy } from '@/redux/features/content-slice'
import { useAppSelector } from '@/redux/hooks'
import { contentAPI } from '@/redux/services/content.api'
import { ContentSortBy, ContentType, IContent } from '@/types/content'

import { ContentFeedLoadMore } from './content-feed-load-more'
import { ContentFeedSkeleton } from './content-feed-skeleton'

type ContentFeedProps = {
    type: ContentType
}

export const ContentFeed = ({ type }: ContentFeedProps) => {
    const contentCursor = useAppSelector(getContentCursor)
    const contentSortBy = useAppSelector(getContentSortBy)

    const { sortBy, order } = useMemo(() => {
        switch (contentSortBy) {
            case ContentSortBy.DATE_DESC:
                return { sortBy: 'date', order: 'desc' }
            case ContentSortBy.DATE_ASC:
                return { sortBy: 'date', order: 'asc' }
            case ContentSortBy.RATING_DESC:
                return { sortBy: 'rating', order: 'desc' }
            default:
                return { sortBy: 'date', order: 'desc' } // fallback
        }
    }, [contentSortBy])

    const { data, isFetching, isSuccess, isError } = contentAPI.useGetContentManyQuery({
        type: type.toUpperCase(),
        cursor: contentCursor?.toString() ?? '0',
        sort_by: sortBy,
        order,
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
            <div className="text-center text-gray-500">
                Контент в этой категории пока отсутствует.
                <br />
                Попробуйте выбрать другую категорию или зайдите позже.
            </div>
        )
    }

    if (!isSuccess) {
        return <ContentFeedSkeleton />
    }

    return (
        <div className="flex flex-col gap-y-12">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
                {data.items.map((item: IContent) => (
                    <ContentBlock key={`content-block-${item.id}`} content={item} />
                ))}
            </div>

            {data.items.length < data.total && (
                <ContentFeedLoadMore cursor={data.items[data.items.length - 1]?.id} isFetching={isFetching} />
            )}
        </div>
    )
}

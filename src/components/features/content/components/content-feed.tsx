'use client'

import { useMemo } from 'react'

import { PackageOpenIcon } from 'lucide-react'

import { LoadMore } from '@/components/ui/load-more'
import { getContentCursor, getContentSortBy, setContentCursor } from '@/redux/features/content-slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { contentAPI } from '@/redux/services/content/content.api'
import { ContentSortBy, ContentType } from '@/utils/enums/common'

import { ContentFeedItem } from './content-feed-item'
import { ContentFeedSkeleton } from './content-feed-skeleton'

type ContentFeedProps = {
    type: ContentType
}

export const ContentFeed = ({ type }: ContentFeedProps) => {
    const dispatch = useAppDispatch()
    const contentSortBy = useAppSelector(getContentSortBy)
    const contentCursor = useAppSelector(getContentCursor)

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
        cursor: contentCursor.toString(),
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
            <div className="flex flex-col items-center gap-y-4 py-24 text-center text-gray-500">
                <PackageOpenIcon size={64} className="text-gray-400" />
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
            <div className="flex flex-col">
                {data.items.map(item => (
                    <ContentFeedItem
                        key={`content-feed-item-${item.id}`}
                        id={item.id}
                        name={item.name}
                        imageUrl={item.contentImages[0]?.url}
                    />
                ))}
            </div>

            {data.items.length < data.total && (
                <LoadMore
                    isLoading={isFetching}
                    onClick={() => dispatch(setContentCursor(data.items[data.items.length - 1]?.id))}
                />
            )}
        </div>
    )
}

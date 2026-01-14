'use client'

import { useEffect } from 'react'

import { CommonError } from '@/components/ui/common-error'
import { EmptyMessage } from '@/components/ui/empty-message'
import { getLastEventId, setLastEventId } from '@/redux/features/user-slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { notificationAPI } from '@/redux/services/notification/notification.api'

import { NotificationsFeedItem } from './notifications-feed-item'
import { NotificationsFeedSkeleton } from './notifications-feed-skeleton'

export const NotificationsFeed = () => {
    const dispatch = useAppDispatch()
    const lastEventId = useAppSelector(getLastEventId)

    const { data, isSuccess, isError } = notificationAPI.useGetNotificationsQuery()

    useEffect(() => {
        if (isSuccess && data.length > 0) {
            const maxId = Math.max(...data.map(n => n.id))
            dispatch(setLastEventId(maxId))
        }
    }, [isSuccess, data, dispatch])

    if (isError) {
        return <CommonError />
    }

    if (isSuccess && data.length === 0) {
        return <EmptyMessage>У Вас пока нет уведомлений.</EmptyMessage>
    }

    if (!isSuccess) {
        return <NotificationsFeedSkeleton />
    }

    return (
        <div className="space-y-3">
            {data.map(notification => {
                const isRead = lastEventId !== null && notification.id <= lastEventId
                return (
                    <NotificationsFeedItem
                        key={`notifications-feed-item-${notification.id}`}
                        entity={notification.entity}
                        content={notification.content}
                        createdAt={new Date(notification.createdAt)}
                    />
                )
            })}
        </div>
    )
}

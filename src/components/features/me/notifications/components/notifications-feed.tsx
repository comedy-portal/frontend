'use client'

import { useEffect } from 'react'

import { CirclePlusIcon } from 'lucide-react'

import Link from 'next/link'

import { EmptyMessage } from '@/components/ui/empty-message'
import { getLastEventId, setLastEventId } from '@/redux/features/user-slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { notificationAPI } from '@/redux/services/notification/notification.api'

import { NotificationsFeedItem } from './notifications-feed-item'

export const NotificationsFeed = () => {
    const dispatch = useAppDispatch()
    const lastEventId = useAppSelector(getLastEventId)

    const { data, isFetching, isSuccess, isError } = notificationAPI.useGetNotificationsQuery()

    useEffect(() => {
        if (isSuccess && data.length > 0) {
            const maxId = Math.max(...data.map(n => n.id))
            dispatch(setLastEventId(maxId))
        }
    }, [isSuccess, data, dispatch])

    if (isError) {
        return (
            <div className="text-center text-gray-500">
                Ошибка загрузки. Попробуйте обновить страницу или зайдите позже.
            </div>
        )
    }

    if (isSuccess && data.length === 0) {
        return (
            <EmptyMessage>
                У Вас пока нет подписок.
                <br />
                Подпишитесь на&nbsp;
                <Link href="/comedians" className="text-blue-500 hover:text-blue-700">
                    комика
                </Link>{' '}
                или{' '}
                <Link href="/comedians/groups" className="text-blue-500 hover:text-blue-700">
                    группу
                </Link>{' '}
                на&nbsp;странице их&nbsp;профиля, чтобы не&nbsp;пропускать новые выступления и&nbsp;обновления.
            </EmptyMessage>
        )
    }

    if (!isSuccess || isFetching) {
        return <div>Загрузка...</div>
    }

    return (
        <div className="space-y-8">
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

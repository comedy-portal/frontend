'use client'

import { CirclePlusIcon } from 'lucide-react'

import Link from 'next/link'

import { EmptyMessage } from '@/components/ui/empty-message'
import { notificationAPI } from '@/redux/services/notification/notification.api'
import { NotificationType } from '@/utils/types/notifications'

export const NotificationsFeed = () => {
    const { data, isFetching, isSuccess, isError } = notificationAPI.useGetNotificationsQuery()

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
            {data.map(notification => (
                <div key={`notifications-feed-item-${notification.id}`} className="flex gap-x-4">
                    <CirclePlusIcon className="shrink-0" />
                    <div>
                        <div className="font-bold">Новое видео</div>
                        <div>
                            {notification.entity?.name} - {notification.content?.name}
                        </div>
                    </div>
                </div>

                // <div className="flex gap-x-4">
                //     <UserPlusIcon className="shrink-0" />
                //     <div>
                //         <div className="font-bold">Новый комик</div>
                //         <div>Юлия Ахмедова</div>
                //     </div>
                // </div>

                // <div className="flex gap-x-4">
                //     <InfoIcon className="shrink-0" />
                //     <div>
                //         <div className="font-bold">Новое обновление</div>
                //         <div>Мы улучшили личный кабинет</div>
                //     </div>
                // </div>

                // <div className="flex gap-x-4 opacity-60">
                //     <CirclePlusIcon className="shrink-0" />
                //     <div>
                //         <div className="font-bold">Новое видео</div>
                //         <div>Юлия Ахмедова - Название спешла</div>
                //     </div>
                // </div>
            ))}
        </div>
    )
}

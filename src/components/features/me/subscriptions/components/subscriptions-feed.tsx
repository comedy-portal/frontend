'use client'

import { BellOffIcon } from 'lucide-react'

import Link from 'next/link'

import { EmptyMessage } from '@/components/ui/empty-message'
import { Button } from '@/components/ui/forms/button'
import { ImageWithFallback } from '@/components/ui/image-with-fallback'
import { subscriptionsAPI } from '@/redux/services/subscriptions/subscriptions.api'

export const SubscriptionsFeed = () => {
    const { data, isFetching, isSuccess, isError } = subscriptionsAPI.useGetSubscriptionsQuery()

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
                Список избранного пуст. Попробуйте зайти позже или изменить фильтры.
                <br />
                Каждый зарегистрированный пользователь может добавить контент в&nbsp;своё избранное.
            </EmptyMessage>
        )
    }

    if (!isSuccess || isFetching) {
        return <div>Загрузка...</div>
    }

    return (
        <ul>
            {data.map(subscription => (
                <li
                    key={`subscription-feed-item-${subscription.entity.id}`}
                    className="flex items-center justify-between px-4"
                >
                    <div className="mb-4 flex items-center gap-x-4">
                        <ImageWithFallback
                            src={`/images/comedians/${subscription.entity.slug}.jpg`}
                            alt={`${subscription.entity.name}`}
                            width={80}
                            height={80}
                            className="rounded-lg"
                        />
                        <div className="text-lg font-semibold">{subscription.entity.name}</div>
                    </div>

                    <Button variant="outline" size="sm" className="flex items-center justify-center gap-x-2">
                        <BellOffIcon size={16} /> Отписаться
                    </Button>
                </li>
            ))}
        </ul>
    )
}

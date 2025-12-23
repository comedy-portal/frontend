'use client'

import Link from 'next/link'

import { EmptyMessage } from '@/components/ui/empty-message'
import { subscriptionsAPI } from '@/redux/services/subscriptions/subscriptions.api'

import { SubscriptionsFeedItem } from './subscriptions-feed-item'

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
        <div className="space-y-3">
            {data.map(subscription => (
                <SubscriptionsFeedItem
                    key={`subscription-feed-item-${subscription.type}-${subscription.entity.id}`}
                    id={subscription.entity.id}
                    slug={subscription.entity.slug}
                    name={subscription.entity.name}
                    type={subscription.type}
                />
            ))}
        </div>
    )
}

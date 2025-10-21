'use client'

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
        <div className="space-y-4">
            {data.map(subscription => (
                <SubscriptionsFeedItem
                    key={`subscription-feed-item-${subscription.entity.id}`}
                    id={subscription.entity.id}
                    slug={subscription.entity.slug}
                    name={subscription.entity.name}
                    type={subscription.type}
                />
            ))}
        </div>
    )
}

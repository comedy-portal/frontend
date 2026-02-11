'use client'

import { VenuesBlock } from '@/components/features/common/venues-block/venues-block'
import { CommonError } from '@/components/ui/common-error'
import { EmptyMessage } from '@/components/ui/empty-message'
import { venuesAPI } from '@/redux/services/venues/venues.api'

import { VenuesFeedSkeleton } from './venues-feed-skeleton'

export const VenuesFeed = () => {
    const { data, isSuccess, isError } = venuesAPI.useGetVenuesQuery({})

    if (isError) {
        return <CommonError />
    }

    if (isSuccess && data.length === 0) {
        return (
            <EmptyMessage>
                Контент в этой категории пока отсутствует.
                <br />
                Попробуйте выбрать другую категорию или зайдите позже.
            </EmptyMessage>
        )
    }

    if (!isSuccess) {
        return <VenuesFeedSkeleton />
    }

    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
            {data.map(item => (
                <VenuesBlock key={`venues-feed-item-${item.slug}`} slug={item.slug} name={item.name} city={item.city} />
            ))}
        </div>
    )
}

'use client'

import ScrollContainer from 'react-indiana-drag-scroll'

import { ComedianBlock } from '@/components/features/common/comedian-block/comedian-block'
import { comediansAPI } from '@/redux/services/comedians/comedians.api'
import { ComedianSortBy } from '@/redux/services/comedians/comedians.types'
import { Order } from '@/utils/enums/common'

import { LandingComediansFeedSkeleton } from './landing-comedians-feed-skeleton'

export const LandingComediansFeed = () => {
    const { data, isSuccess, isError } = comediansAPI.useGetComediansQuery({
        sort_by: ComedianSortBy.CREATED_AT,
        order: Order.DESC,
        take: 10,
    })

    if (isError) {
        return (
            <div className="text-center text-gray-500">
                Ошибка загрузки. Попробуйте обновить страницу или зайдите позже.
            </div>
        )
    }

    if (isSuccess && data.items.length === 0) {
        return null
    }

    if (!isSuccess) {
        return <LandingComediansFeedSkeleton />
    }

    return (
        // <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <ScrollContainer className="grid auto-cols-[minmax(200px,1fr)] grid-flow-col gap-4">
            {data.items.map(item => (
                <div key={item.slug}>
                    <ComedianBlock slug={item.slug} name={item.name} surname={item.surname} isAgent={item.isAgent} />
                </div>
            ))}
        </ScrollContainer>
    )
}

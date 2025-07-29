'use client'

import { ComedianBlock } from '@/components/ui/comedian-block/comedian-block'
import { comediansAPI } from '@/redux/services/comedians/comedians.api'
import { ComedianSortBy } from '@/redux/services/comedians/comedians.types'
import { Order } from '@/utils/enums/common'

import { LandingComediansFeedSkeleton } from './landing-comedians-feed-skeleton'

const getVisibilityClass = (index: number) => {
    switch (index) {
        case 0:
        case 1:
            return 'block'
        case 2:
            return 'hidden sm:block'
        case 3:
            return 'hidden md:block'
        case 4:
            return 'hidden lg:block'
        default:
            return 'hidden'
    }
}

export const LandingComediansFeed = () => {
    const { data, isSuccess, isError } = comediansAPI.useGetComediansQuery({
        sort_by: ComedianSortBy.CREATED_AT,
        order: Order.DESC,
        take: 6,
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
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {data.items.map((item, index) => (
                <div key={item.slug} className={getVisibilityClass(index)}>
                    <ComedianBlock slug={item.slug} name={item.name} surname={item.surname} isAgent={item.isAgent} />
                </div>
            ))}
        </div>
    )
}

'use client'

import ScrollContainer from 'react-indiana-drag-scroll'

import { ComedianBlock } from '@/components/features/common/comedian-block/comedian-block'
import { CommonError } from '@/components/ui/common-error'
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
        return <CommonError />
    }

    if (isSuccess && data.items.length === 0) {
        return null
    }

    if (!isSuccess) {
        return <LandingComediansFeedSkeleton />
    }

    return (
        <ScrollContainer className="grid auto-cols-[minmax(200px,1fr)] grid-flow-col gap-4">
            {data.items.map(item => (
                <ComedianBlock
                    key={item.slug}
                    slug={item.slug}
                    name={item.name}
                    surname={item.surname}
                    isAgent={item.isAgent}
                />
            ))}
        </ScrollContainer>
    )
}

'use client'

import { useMemo } from 'react'

import { VenuesBlock } from '@/components/features/common/venues-block/venues-block'
import { CommonError } from '@/components/ui/common-error'
import { EmptyMessage } from '@/components/ui/empty-message'
import { Order } from '@/utils/enums/common'
import { useQueryFilters } from '@/utils/filters/use-query-filters'
import {
    VenuesUrlSortBy,
    buildVenuesFiltersQueryString,
    parseVenuesFiltersFromSearchParams,
} from '@/utils/filters/venues-filters'
import { venuesAPI } from '@/utils/redux/services/venues/venues.api'
import { VenueSortBy } from '@/utils/redux/services/venues/venues.types'

import { VenuesFeedSkeleton } from './venues-feed-skeleton'

export const VenuesFeed = () => {
    const [filters] = useQueryFilters(parseVenuesFiltersFromSearchParams, buildVenuesFiltersQueryString)

    const { sortBy, order } = useMemo(() => {
        let sortBy = VenueSortBy.NAME
        let order = Order.DESC

        switch (filters.sort) {
            case VenuesUrlSortBy.NAME_DESC:
                sortBy = VenueSortBy.NAME
                order = Order.DESC
                break

            case VenuesUrlSortBy.CITY_DESC:
                sortBy = VenueSortBy.CITY
                order = Order.ASC
                break
        }

        return { sortBy, order }
    }, [filters.sort])

    const { data, isSuccess, isError } = venuesAPI.useGetVenuesQuery({
        order,
        sort_by: sortBy,
        city: filters.city,
    })

    if (isError) {
        return <CommonError />
    }

    if (isSuccess && data.length === 0) {
        return (
            <EmptyMessage>
                В этой категории пока пусто.
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

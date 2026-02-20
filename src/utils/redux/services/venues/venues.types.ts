import { Order } from '@/utils/enums/common'
import { IVenue } from '@/utils/types/venues'

export enum VenueSortBy {
    CITY = 'city',
    NAME = 'name',
}

export type GetVenuesParams = {
    sort_by?: VenueSortBy
    order?: Order
    city?: string
}

export type GetVenuesResponse = IVenue[]
export type GetVenueBySlugResponse = IVenue

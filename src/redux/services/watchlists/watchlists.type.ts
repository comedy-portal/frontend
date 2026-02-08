import { ContentType, Order } from '@/utils/enums/common'
import { IWatchlist } from '@/utils/types/watchlist'

export enum WatchlistSortBy {
    CONTENT_DATE = 'content_date',
    RATING = 'rating',
    SAVED_AT = 'saved_at',
}

export type GetWatchlistParams = {
    username: string
    sort_by?: WatchlistSortBy
    order?: Order
    types?: ContentType[]
    min_rating?: number
    max_rating?: number
    min_year?: number
    max_year?: number
    cursor?: number
}

export type GetWatchlistResponse = IWatchlist[]

import { ContentType, Order, WatchlistSortBy } from '@/utils/enums/common'
import { PaginatedResponse } from '@/utils/types/common'
import { IWatchlist } from '@/utils/types/watchlist'

export type GetWatchlistParams = {
    username: string
    sort_by?: WatchlistSortBy
    order?: Order
    year?: number
    type?: ContentType
    min_rating?: number
    max_rating?: number
    cursor?: number
}

export type GetWatchlistResponse = PaginatedResponse<IWatchlist>

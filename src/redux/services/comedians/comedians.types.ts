import { ComedianSortBy, Order } from '@/utils/enums/common'
import { IComedian } from '@/utils/types/comedians'
import { PaginatedResponse } from '@/utils/types/common'

export type GetComediansParams = {
    sort_by?: ComedianSortBy
    order?: Order
    letter?: string
    born_today?: boolean
    cursor?: number
}

export type GetComediansResponse = PaginatedResponse<IComedian>

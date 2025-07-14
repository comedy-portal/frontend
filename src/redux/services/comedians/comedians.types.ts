import { Order } from '@/utils/enums/common'
import { IComedian } from '@/utils/types/comedian'
import { PaginatedResponse } from '@/utils/types/common'

export enum ComedianSortBy {
    NAME = 'name',
    SURNAME = 'surname',
}

export type GetComediansParams = {
    sort_by?: ComedianSortBy
    order?: Order
    letter?: string
    born_today?: boolean
    cursor?: number
}

export type GetComediansResponse = PaginatedResponse<IComedian>

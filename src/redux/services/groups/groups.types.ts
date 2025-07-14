import { Order } from '@/utils/enums/common'
import { PaginatedResponse } from '@/utils/types/common'
import { IGroup } from '@/utils/types/group'

export enum GroupSortBy {
    NAME = 'name',
}

export type GetGroupsParams = {
    sort_by?: GroupSortBy
    order?: Order
    letter?: string
    cursor?: number
}

export type GetGroupsResponse = PaginatedResponse<IGroup>

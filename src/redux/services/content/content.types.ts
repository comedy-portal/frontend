import { PaginatedResponse } from '@/utils/types/common'
import { IContent } from '@/utils/types/content'

export type GetContentManyParams = {
    type: string
    order: string
    sort_by: string
    cursor: string
}

export type GetContentManyResponse = PaginatedResponse<IContent>

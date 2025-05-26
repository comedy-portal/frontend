import { ContentSortBy, ContentType, Order } from '@/utils/enums/common'
import { PaginatedResponse } from '@/utils/types/common'
import { IContent } from '@/utils/types/content'

export type GetContentManyParams = {
    sort_by?: ContentSortBy
    order?: Order
    year?: number
    type?: ContentType
    min_rating?: number
    max_rating?: number
    cursor?: number
    take?: number
}

export type GetContentManyResponse = PaginatedResponse<IContent>
export type GetContentResponse = IContent

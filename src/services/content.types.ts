import { ContentSortBy, ContentType, Order } from '@/utils/enums/common'
import { PaginatedResponse } from '@/utils/types/common'
import { IContent } from '@/utils/types/content'

export type GetContentManyParams = {
    type?: ContentType
    order?: Order
    sort_by?: ContentSortBy
    cursor?: number
}
export type GetContentManyResponse = PaginatedResponse<IContent>

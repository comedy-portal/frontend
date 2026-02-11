import { ContentType, Order } from '@/utils/enums/common'
import { ContentSortBy } from '@/utils/redux/services/content/content.types'
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

export type GetContentManyResponse = Promise<PaginatedResponse<IContent>>
export type GetContentByIdResponse = Promise<IContent>

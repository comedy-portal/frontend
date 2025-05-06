import { Order } from '@/types/common'
import { ContentSortBy, ContentType, IContent } from '@/types/content'

export type GetContentManyRequest = {
    cursor?: string

    sort_by?: ContentSortBy
    order?: Order
    type?: ContentType
}

export type GetContentManyResponse = {
    total: number
    items: IContent[]
}

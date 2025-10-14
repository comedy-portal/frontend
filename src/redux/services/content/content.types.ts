import { ContentType, Order } from '@/utils/enums/common'
import { PaginatedResponse } from '@/utils/types/common'
import { IContent } from '@/utils/types/content'

export enum ContentSortBy {
    CREATED_AT = 'created_at',
    DATE = 'date',
    NAME = 'name',
    RATING = 'rating',
}

export enum GetTopContentTake {
    FIFTY = 50,
    ONE_HUNDRED = 100,
    TWO_HUNDRED_FIFTY = 250,
}

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

export type GetTopContentParams = {
    type: ContentType
    year?: number
    take: GetTopContentTake
}

export type GetContentManyResponse = PaginatedResponse<IContent>
export type GetTopContentResponse = IContent[]
export type GetContentByIdResponse = IContent

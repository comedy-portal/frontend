import { Order } from '@/utils/enums/common'
import { PaginatedResponse } from '@/utils/types/common'
import { IReview } from '@/utils/types/review'

export enum ReviewSortBy {
    DATE = 'date',
    MARK = 'mark',
}

export type GetReviewsParams = {
    content_id?: number
    user_id?: number
    sort_by?: ReviewSortBy
    order?: Order
    cursor?: number
    mark?: number
    with_text?: boolean
}

export type GetReviewsResponse = PaginatedResponse<IReview>

export type CreateReviewInputs = {
    contentId: number
    mark: number
    text?: string
}

export type UpdateReviewInputs = {
    id: number
    mark: number
    text?: string
}

export type CreateReviewResponse = {
    id: number
}

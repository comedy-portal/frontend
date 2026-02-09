import { ComplaintReasons, ContentType, Order } from '@/utils/enums/common'
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
    types?: ContentType[]
    content_min_year?: number
    content_max_year?: number
}

export type GetReviewsResponse = PaginatedResponse<IReview>
export type GetReviewByIdResponse = IReview

export type CreateReviewInputs = {
    contentId: number
    mark: number
    text: string | null
}

export type UpdateReviewInputs = {
    id: number
    contentId: number
    mark: number
    text: string | null
}

export type ReviewComplaintInputs = {
    reviewId: number
    reason: ComplaintReasons
    text: string
}

export type DeleteReviewParams = {
    id: number
    contentId: number
}

export type CreateReviewResponse = {
    id: number
}

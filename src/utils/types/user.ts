import { ContentType } from '@/utils/enums/common'

export type IUser = {
    id: number
    username: string
    metaInfo: any
    createdAt: Date
    daysSinceRegistration: number
    _count: {
        reviews: number
        watchlists: number
        textReviewsCount: number
        reviewsByType: Partial<Record<ContentType, number>>
        reviewsByMark: Record<number, number>
    }
}

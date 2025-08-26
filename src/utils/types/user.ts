export type IUser = {
    id: number
    username: string
    createdAt: Date
    daysSinceRegistration: number
    _count: {
        reviews: number
        watchlists: number
        textReviewsCount: number
    }
}

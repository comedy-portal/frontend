import { Image } from './common'

export type IReview = {
    id: number
    mark: number
    text: string
    content: ReviewContentType
    user: {
        id: number
        username: string
    }
    createdAt: string
    updatedAt: string
}

type ReviewContentType = {
    id: number
    name: string
    year: number
    comedians: {
        name: string
        surname: string
        slug: string
    }[]
    group: { name: string; slug: string }
    contentImages: Image[]
}

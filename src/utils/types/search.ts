import { ContentType } from '@/utils/enums/common'

export type ISearch = {
    comedians: { name: string; surname: string; slug: string; isAgent: boolean }[]
    content: {
        id: number
        name: string
        type: ContentType
        year: number
        rating: { avgRating: number; reviewsCount: number }
        contentImages: { id: number; url: string }[]
    }[]
    groups: { name: string; slug: string }[]
    venues: { name: string; slug: string; city: string; address: string }[]
}

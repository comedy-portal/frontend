import { ContentType } from '@/utils/enums/common'
import { IComedianBaseData, IGroupBaseData, IImage, ILink, IRating } from '@/utils/types/common'

export type IContentEntity = {
    id: number
    name: string
    type: ContentType
    year: number
    month: number | null
    metaInfo: {
        description: string | null
        facts: string[]
        links: ILink[]
    } | null
    duration: number | null
    awards: { name: string }[]
    createdAt: string
    updatedAt: string
}

export type IContent = IContentEntity & {
    group: IGroupBaseData | null
    comedians: IComedianBaseData[]
    rating: IRating
    // own review for logged-in user only, 1 object in the array
    reviews?: {
        id: number
        mark: number
        text?: string // not needed for "get content many"
        createdAt: Date
    }[]
    // own added to watchlist date for logged-in user only, 1 object in the array
    watchlists?: {
        createdAt: Date
    }[]
    // reviews with text count (for /content/{id})
    _count?: { reviews: number }
    contentImages: IImage[]
}

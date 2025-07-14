import { ContentType } from '@/utils/enums/common'
import { IComedianPreview, IGroupPreview, IImage, ILink, IRating } from '@/utils/types/common'

export type IContent = {
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
    group: IGroupPreview | null
    comedians: IComedianPreview[]
    rating: IRating
    reviews?: {
        id: number
        mark: number
        text?: string // not needed for "get content many"
        createdAt: Date
    }[]
    watchlists?: {
        createdAt: Date
    }[]
    _count?: { reviews: number }
    contentImages: IImage[]
    createdAt: string
    updatedAt: string
}

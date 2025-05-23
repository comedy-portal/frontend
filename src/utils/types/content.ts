import { ContentType } from '@/utils/enums/common'
import { IComedian } from '@/utils/types/comedians'

export type IContent = {
    id: number
    name: string
    type: ContentType
    year: number
    month: number | null
    duration: number | null
    metaInfo: object
    createdAt: string
    updatedAt: string
    comedians: IComedian[]
    group: null
    rating: IRating
    contentImages: IContentImage[]
}

export type IRating = {
    avgRating: number
    reviewsCount: number
}

export type IContentImage = {
    id: number
    url: string
    copyright: string
    isCover: boolean
}

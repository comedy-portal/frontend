import { IComedian } from './comedian'
import { IMetaInfo } from './meta-info'

export enum ContentSortBy {
    DATE = 'date',
    NAME = 'name',
    RATING = 'rating',
}

export enum ContentType {
    DISCUSSION = 'DISCUSSION',
    IMPROV_SHOW = 'IMPROV_SHOW',
    PODCAST = 'PODCAST',
    ROAST_BATTLE = 'ROAST_BATTLE',
    SERIES = 'SERIES',
    SHORT_SPECIAL = 'SHORT_SPECIAL',
    SKETCH = 'SKETCH',
    SPECIAL = 'SPECIAL',
    TALK_SHOW = 'TALK_SHOW',
}

export type IContent = {
    id: number
    name: string
    type: ContentType
    year: number
    month: number | null
    metaInfo: IMetaInfo[]
    createdAt: string
    updatedAt: string
    comedians: IComedian[]
    group: IGroup | null
    rating: IRating
    contentImages: IContentImage[]
}

export type IGroup = any

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

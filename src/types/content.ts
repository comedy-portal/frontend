import { IComedian } from './comedian'
import { IMetaInfo } from './meta-info'

export enum ContentSortBy {
    DATE_DESC = 'date_desc',
    DATE_ASC = 'date_asc',
    RATING_DESC = 'rating_desc',
}

export enum ContentType {
    DISCUSSION = 'discussion',
    IMPROV_SHOW = 'improv_show',
    PODCAST = 'podcast',
    ROAST_BATTLE = 'roast_battle',
    SERIES = 'series',
    SKETCH = 'sketch',
    SPECIAL = 'special',
    STANDUP = 'standup',
    TALK_SHOW = 'talk_show',
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

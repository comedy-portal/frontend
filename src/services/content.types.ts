export enum ContentType {
    DISCUSSION = 'DISCUSSION',
    IMPROV_SHOW = 'IMPROV_SHOW',
    PODCAST = 'PODCAST',
    SERIES = 'SERIES',
    SHORT_SPECIAL = 'SHORT_SPECIAL',
    SKETCH = 'SKETCH',
    SPECIAL = 'SPECIAL',
    TALK_SHOW = 'TALK_SHOW',
}

export enum VisibilityStatus {
    HIDDEN = 'HIDDEN',
    VISIBLE = 'VISIBLE',
}

export enum ContentSortBy {
    DATE = 'date',
    NAME = 'name',
    RATING = 'rating',
}

export enum Order {
    ASC = 'asc',
    DESC = 'desc',
}

export type Content = {
    id: number
    name: string
    type: ContentType
    year: number
    month: number | null
    metaInfo: MetaInfo[]
    createdAt: string
    updatedAt: string
    comedians: Comedian[]
    group: Group | null
    rating: Rating
    contentImages: ContentImage[]
}

export type MetaInfo = {
    description: string
    facts: string[]
    links: string[]
}

export type Comedian = {
    id: number
    name: string
    metaInfo: MetaInfo | null
    status: VisibilityStatus
    createdAt: string
    updatedAt: string
    surname: string
    slug: string
    birthDay: string
    contentOwnerId: number | null
}

export type Group = any

export type Rating = {
    avgRating: number
    reviewsCount: number
}

export type GetContentManyRequest = {
    sort_by?: ContentSortBy
    order?: Order
}

export type ContentImage = {
    id: number
    url: string
    copyright: string
    isCover: boolean
}

export type GetContentManyResponse = {
    total: number
    items: Content[]
}

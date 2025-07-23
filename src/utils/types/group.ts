import { ContentType } from '@/utils/enums/common'

import { IComedianPreview, IImage, ILink, IRating } from './common'

export type IGroup = {
    id: number
    name: string
    slug: string
    metaInfo: {
        description: string | null
        facts: string[]
        links: ILink[]
    }
    content: {
        id: number
        name: string
        type: ContentType
        year: number
        month: number
        duration?: number
        rating: IRating
        contentImages: IImage[]
        metaInfo: {
            description: string | null
            facts: string[]
            links: ILink[]
        } | null
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
    }[]
    comedians: IComedianPreview[]
    groupImages: IImage[]
    createdAt: Date
    updatedAt: Date
}

import { ContentType } from '@/utils/enums/common'

import { IComedianBaseData, IGroupBaseData, ILink } from './common'

export type IWatchlist = {
    id: number
    createdAt: Date
    content: {
        id: number
        name: string
        year: number
        month: number | null
        type: ContentType
        duration: number | null
        rating: {
            avgRating: number
            reviewsCount: number
        }
        metaInfo?: any // ContentMetaInfo
        contentImages: {
            id: number
            url: string
            copyright: string
            isCover: boolean
        }[]
        comedians: IComedianBaseData[]
        group: IGroupBaseData | null
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
    }
}

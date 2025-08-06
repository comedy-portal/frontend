import { ContentType } from '@/utils/enums/common'

import { IComedianBaseData, IGroupBaseData, ILink } from './common'

export type IWatchlist = {
    id: number
    createdAt: Date
    content: {
        id: number
        name: string
        year: number
        month: number
        type: ContentType
        duration: number | null
        rating: {
            avgRating: number
            reviewsCount: number
        }
        metaInfo: {
            description: string | null
            facts: string[]
            links: ILink[]
        } | null
        contentImages: {
            id: number
            url: string
            copyright: string
            isCover: boolean
        }[]
        comedians: IComedianBaseData[]
        group: IGroupBaseData | null
        watchlists?: {
            createdAt: Date
        }[]
    }
}

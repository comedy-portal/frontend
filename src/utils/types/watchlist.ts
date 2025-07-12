import { ContentType } from '@/utils/enums/common'

import { IComedianPreview, IGroupPreview } from './common'

export type IWatchlist = {
    id: number
    createdAt: Date
    content: {
        id: number
        name: string
        year: number
        month: number
        type: ContentType
        rating: {
            avgRating: number
            reviewsCount: number
        }
        contentImages: {
            id: number
            url: string
            copyright: string
            isCover: boolean
        }[]
        comedians: IComedianPreview[]
        group: IGroupPreview | null
    }
}

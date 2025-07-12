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
    }[]
    comedians: IComedianPreview[]
    groupImages: IImage[]
    createdAt: Date
    updatedAt: Date
}

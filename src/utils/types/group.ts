import { ContentType } from '@/utils/enums/common'

import { Image, Link, Rating } from './common'

export type IGroup = {
    id: number
    name: string
    slug: string
    metaInfo: {
        description: string | null
        facts: string[]
        links: Link[]
    }
    content: {
        id: number
        name: string
        type: ContentType
        year: number
        month: number
        duration?: number
        rating: Rating
        contentImages: Image[]
    }[]
    comedians: {
        id: number
        name: string
        surname: string
        slug: string
        isAgent: boolean
    }[]
    groupImages: Image[]
    createdAt: Date
    updatedAt: Date
}

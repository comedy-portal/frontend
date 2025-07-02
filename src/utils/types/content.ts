import { ContentType } from '@/utils/enums/common'
import { Group, Image, Link, Rating } from '@/utils/types/common'

export type IContent = {
    id: number
    name: string
    type: ContentType
    year: number
    month: number | null
    metaInfo: {
        description: string | null
        facts: string[]
        links: Link[]
    } | null
    duration: number | null
    group: Group | null
    comedians: {
        id: number
        name: string
        surname: string
        slug: string
        isAgent: boolean
    }[]
    rating: Rating
    reviews?: {
        id: number
        mark: number
        text?: string // not needed for "get content many"
        createdAt: Date
    }[]
    watchlists?: {
        createdAt: Date
    }[]
    _count?: { reviews: number }
    contentImages: Image[]
    createdAt: string
    updatedAt: string
}

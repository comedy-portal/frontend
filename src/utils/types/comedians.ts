import { ContentType } from '@/utils/enums/common'
import { Image, Link, Rating } from '@/utils/types/common'

export type IComedian = {
    id: number
    name: string
    surname: string
    slug: string
    birthDay: string
    metaInfo: {
        bio: string | null
        description: string | null
        facts: string[]
        links: Link[]
    }[]
    content: {
        id: number
        name: string
        type: ContentType
        year: number
        month: number | null
        duration: number | null
        rating: Rating
        contentImages: Image[]
    }[]
    groups: {
        name: string
        slug: string
        groupImages: Image[]
    }[]
    comedianImages: Image[]
    isAgent: boolean
    createdAt: string
    updatedAt: string
}

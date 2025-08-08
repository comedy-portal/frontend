import { Platform } from '@/utils/enums/common'

export type PaginatedResponse<T> = {
    total: number
    items: T[]
}

export type IImage = {
    id: number
    url: string
    copyright: string
    isCover: boolean
}

export type ILink = {
    platform: Platform
    identifier: string
}

export type IRating = {
    avgRating: number
    reviewsCount: number
}

export type IComedianBaseData = {
    id: number
    name: string
    surname: string
    slug: string
    isAgent: boolean
}

export type IGroupBaseData = {
    id: number
    name: string
    slug: string
}

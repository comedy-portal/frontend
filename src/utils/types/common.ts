import { Platform } from '@/utils/enums/common'

export type PaginatedResponse<T> = {
    total: number
    items: T[]
}

export type Image = {
    id: number
    url: string
    copyright: string
    isCover: boolean
}

export type Link = {
    platform: Platform
    identifier: string
}

export type Rating = {
    avgRating: number
    reviewsCount: number
}

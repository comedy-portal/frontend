import { ContentType } from '@/utils/enums/common'
import { Group, Image, Link, Rating } from '@/utils/types/common'

export type IComedian = {
    id: number
    name: string
    surname: string
    slug: string
    birthDay: string | null
    metaInfo:
        | {
              bio: string | null
              description: string | null
              facts: string[]
              links: Link[]
          }[]
        | null
    content:
        | {
              id: number
              name: string
              type: ContentType
              year: number
              month: number | null
              duration: number | null
              rating: Rating
              contentImages: Image[]
          }[]
        | null
    groups: Group[]
    comedianImages: Image[]
    isAgent: boolean
    createdAt: string
    updatedAt: string
}

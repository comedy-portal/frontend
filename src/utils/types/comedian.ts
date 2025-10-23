import { ContentType } from '@/utils/enums/common'
import { IGroupBaseData, IImage, ILink, IRating } from '@/utils/types/common'

export type IComedian = {
    id: number
    name: string
    surname: string
    slug: string
    birthDay: string | null
    metaInfo: {
        bio: string | null
        description: string | null
        facts: string[]
        links: ILink[]
    } | null
    content:
        | {
              id: number
              name: string
              type: ContentType
              year: number
              month: number | null
              duration: number | null
              rating: IRating
              contentImages: IImage[]
              metaInfo: {
                  description: string | null
                  facts: string[]
                  links: ILink[]
              } | null
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
          }[]
        | null
    groups: IGroupBaseData[]
    comedianImages: IImage[]
    comedianSubscriptions?: { createdAt: Date }[]
    isAgent: boolean
    createdAt: string
    updatedAt: string
}

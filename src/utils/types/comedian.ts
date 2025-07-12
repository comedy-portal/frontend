import { ContentType } from '@/utils/enums/common'
import { IGroupPreview, IImage, ILink, IRating } from '@/utils/types/common'

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
          }[]
        | null
    groups: IGroupPreview[]
    comedianImages: IImage[]
    isAgent: boolean
    createdAt: string
    updatedAt: string
}

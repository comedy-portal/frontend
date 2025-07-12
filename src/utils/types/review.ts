import { ContentType } from '@/utils/enums/common'
import { IComedianPreview, IGroupPreview, IImage } from '@/utils/types/common'

export type IReview = {
    id: number
    mark: number
    text: string
    content: {
        id: number
        name: string
        year: number
        type: ContentType
        comedians: IComedianPreview[]
        group: IGroupPreview | null
        contentImages: IImage[]
    }
    user: {
        id: number
        username: string
    }
    createdAt: string
    updatedAt: string
}

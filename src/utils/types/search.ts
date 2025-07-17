import { ContentType } from '@/utils/enums/common'

export type ISearch = {
    comedians: {
        name: string
        surname: string
        slug: string
    }[]
    content: {
        id: number
        name: string
        type: ContentType
        year: number
    }[]
    groups: {
        name: string
        slug: string
    }[]
}

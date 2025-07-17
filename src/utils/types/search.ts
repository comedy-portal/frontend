import { ContentType } from '@/utils/enums/common'

export type ISearch = {
    content: {
        id: number
        name: string
        type: ContentType
        year: number
    }[]
    comedians: {
        name: string
        surname: string
        slug: string
        isAgent: boolean
    }[]
    groups: {
        name: string
        slug: string
    }[]
}

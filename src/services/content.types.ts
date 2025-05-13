import { IContent } from '@/types/content'

export type GetContentManyRequest = {
    cursor?: string
    sort_by?: string
    order?: string
    type?: string
}

export type GetContentManyResponse = {
    total: number
    items: IContent[]
}

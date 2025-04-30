import { IMetaInfo } from './meta-info'

export enum VisibilityStatus {
    HIDDEN = 'HIDDEN',
    VISIBLE = 'VISIBLE',
}

export type IComedian = {
    id: number
    name: string
    metaInfo: IMetaInfo | null
    status: VisibilityStatus
    createdAt: string
    updatedAt: string
    surname: string
    slug: string
    birthDay: string
    contentOwnerId: number | null
}

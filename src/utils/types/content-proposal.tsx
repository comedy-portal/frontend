import { ItemToProcessStatus } from '@/utils/enums/common'

export type IContentProposal = {
    id: number
    userId: number
    url: string
    text: string | null
    status: ItemToProcessStatus
    createdAt: Date
    updatedAt: Date
}

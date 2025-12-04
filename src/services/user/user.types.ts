export type GetUserDataResponse = Promise<{
    id: number
    username: string
    metaInfo: {}
    createdAt: Date
    lastEventId: number | null
}>

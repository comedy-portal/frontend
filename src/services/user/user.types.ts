export type GetUserDataResponse = Promise<{
    id: number
    username: string
    metaInfo: {}
    settings?: {
        newsletterConsent?: boolean
    } | null
    createdAt: Date
    lastEventId: number | null
}>

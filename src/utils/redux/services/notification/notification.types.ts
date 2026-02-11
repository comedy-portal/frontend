import { WatchEventType } from 'fs'

import { INotification, INotificationContent } from '@/utils/types/notifications'

export type GetNotificationsResponse = {
    id: number
    type: WatchEventType
    entity: INotification | null
    content: INotificationContent | null
    createdAt: Date
}[]
